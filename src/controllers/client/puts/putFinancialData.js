const Client = require('../../../models/Client.js');
const getIncomeCategories = require('../../category/income/gets/getCategories.js');
const postIncomeCategory = require('../../category/income/posts/postIncomeCategory.js');
const getIncomeByDescription = require('../../cash/income/gets/getIncomeByDescription.js');
const postIncome = require('../../cash/income/posts/postIncome.js');
const putIncome = require('../../cash/income/puts/putIncome.js');

const putFinancialDataCtrl = async (client, vendor, totalCost, downPayment) => {
    
    const update = Object.fromEntries(
        Object.entries({ vendor, totalCost, downPayment })
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [`financialData.${key}`, value])
    );

    const updatedClient = await Client.findOneAndUpdate({ _id: client._id }, { $set: update }, { new: true });

    if(updatedClient && client.financialData.downPayment && downPayment ){

        const income = await getIncomeByDescription(`Seña - Cliente N°${updatedClient.number}`);

        const updatedIncome = await putIncome(income._id, downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, income.category, `Seña - Cliente N°${updatedClient.number}`, downPayment.fromClient);

    } else if(updatedClient && downPayment){
        const categories = await getIncomeCategories();

        let downPaymentCategory = categories.find((category) => category.name === "Señas");

        if(!downPaymentCategory){
            downPaymentCategory = await postIncomeCategory("Señas");
        }

        const newIncome = await postIncome(downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, downPaymentCategory._id, `Seña - Cliente N°${updatedClient.number}`, downPayment.fromClient);
    };

    return updatedClient;
};

module.exports = putFinancialDataCtrl;