const Client = require('../../../models/Client.js');
const getIncomeCategories = require('../../category/income/gets/getCategories.js');
const postIncomeCategory = require('../../category/income/posts/postIncomeCategory.js');
const postIncome = require('../../cash/income/posts/postIncome.js');
const getExpenseCategories = require('../../category/expense/gets/getCategories.js');
const postExpenseCategory = require('../../category/expense/posts/postExpenseCategory.js');
const postExpense = require('../../cash/expense/posts/postExpense.js');

const putFinancialDataCtrl = async (client, vendor, totalCost, downPayment) => {
    
    const update = Object.fromEntries(
        Object.entries({ vendor, totalCost, downPayment })
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [`financialData.${key}`, value])
    );

    const updatedClient = await Client.findOneAndUpdate({ _id: client._id }, { $set: update }, { new: true });

    if(updatedClient && client.financialData.downPayment && downPayment ){
        const categories = await getExpenseCategories();

        let cancelationCategory = categories.find((category) => category.name === "Cancelación");

        if(!cancelationCategory){
            cancelationCategory = await postExpenseCategory("Cancelación");
        }

        const newExpense = await postExpense(downPayment.paidDate, client.financialData.downPayment.finalAmount, client.financialData.downPayment.currency, client.financialData.downPayment.paymentMethod, cancelationCategory._id, `Cambio en la seña - ${updatedClient.personalData.name}`);
    }
    
    if(updatedClient && downPayment){
        const categories = await getIncomeCategories();

        let downPaymentCategory = categories.find((category) => category.name === "Seña");

        if(!downPaymentCategory){
            downPaymentCategory = await postIncomeCategory("Seña");
        }

        const newIncome = await postIncome(downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, downPaymentCategory._id, `Seña - ${updatedClient.personalData.name}`);
    };

    return updatedClient;
};

module.exports = putFinancialDataCtrl;