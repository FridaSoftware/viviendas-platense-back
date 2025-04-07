const Client = require('../../../models/Client.js');

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

    return updatedPayment;
};

module.exports = putPaymentCtrl;