const Client = require('../../../models/Client.js');
const getIncomeCategories = require('../../category/income/gets/getCategories.js');
const postIncomeCategory = require('../../category/income/posts/postIncomeCategory.js');
const getIncomeByDescription = require('../../cash/income/gets/getIncomeByDescription.js');
const postIncome = require('../../cash/income/posts/postIncome.js');
const putIncome = require('../../cash/income/puts/putIncome.js');
const putIncomeStatus = require('../../cash/income/puts/putIncomeStatus.js');

const putPaymentCtrl = async (client, paymentPath, payment) => {
    // Convertir el path en un array para navegar el objeto (ej: 'financialData.lumpSum.payments' -> ['financialData', 'lumpSum', 'payments'])
    const pathParts = paymentPath.split('.');
    
    // Acceder al array de pagos dinámicamente usando reduce
    let paymentsArray = pathParts.reduce((obj, key) => obj[key], client);

    // Verificar si el array existe
    if (!Array.isArray(paymentsArray)) {
        throw new Error(`Payment path ${paymentPath} does not lead to a valid array`);
    }

    // Buscar el índice del pago a actualizar
    const paymentIndex = paymentsArray.findIndex(p => p._id.toString() === payment._id.toString());
    if (paymentIndex === -1) {
        throw new Error('Payment not found in the specified path');
    }

    // Guardar el estado original del pago antes de actualizarlo
    const originalPayment = paymentsArray[paymentIndex];
    const wasPaid = originalPayment.isPaid === true;

    // Actualizar el pago en el array
    paymentsArray[paymentIndex] = payment;

    // Crear el objeto de actualización dinámico
    const update = { $set: { [paymentPath]: paymentsArray } };

    // Guardar en la base de datos
    const updatedClient = await Client.findByIdAndUpdate(
        client._id,
        update,
        { new: true }
    );

    // Obtener el pago actualizado usando el mismo path
    const updatedPayment = pathParts.reduce((obj, key) => obj[key], updatedClient)
        .find(p => p._id.toString() === payment._id.toString());

    // Manejo de ingresos (income)
    if (updatedClient && payment.isPaid) {

        let description;

        paymentPath.includes("installments") ?
        description = `${originalPayment.description} - ${updatedClient.personalData.name}` :
        description = `Pago ${paymentIndex + 1} - ${updatedClient.personalData.name}`;
        
        
        if (wasPaid) {
            // Si ya estaba pagado, actualizamos el ingreso existente
            const income = await getIncomeByDescription(description);
            if (income) {
                await putIncome(
                    income._id, 
                    payment.paidDate, 
                    payment.finalAmount, 
                    payment.currency, 
                    payment.paymentMethod, 
                    income.category, 
                    description,
                    true
                );
            }
        } else {
            // Si no estaba pagado, creamos un nuevo ingreso
            const categories = await getIncomeCategories();

            const paymentCategoryName = paymentPath.includes("installments") ? "Cuotas" : "Pagos";

            let paymentCategory = categories.find(c => c.name === paymentCategoryName);
            
            if (!paymentCategory) {
                paymentCategory = await postIncomeCategory(paymentCategoryName);
            }
            
            await postIncome(
                payment.paidDate, 
                payment.finalAmount, 
                payment.currency, 
                payment.paymentMethod, 
                paymentCategory._id, 
                description,
                true
            );
        }
    } else if(updatedClient && wasPaid && !payment.isPaid){

        let description;

        paymentPath.includes("installments") ?
        description = `${originalPayment.description} - ${updatedClient.personalData.name}` :
        description = `Pago ${paymentIndex + 1} - ${updatedClient.personalData.name}`;

        const income = await getIncomeByDescription(description);
        if (income) {
            await putIncomeStatus(income._id);
        }
    }


    return updatedPayment;
};

module.exports = putPaymentCtrl;