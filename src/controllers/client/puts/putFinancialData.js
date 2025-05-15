const Client = require('../../../models/Client.js');
const getIncomeCategories = require('../../category/income/gets/getCategories.js');
const postIncomeCategory = require('../../category/income/posts/postIncomeCategory.js');
const getIncomeByDescription = require('../../cash/income/gets/getIncomeByDescription.js');
const postIncome = require('../../cash/income/posts/postIncome.js');
const putIncome = require('../../cash/income/puts/putIncome.js');
const putIncomeStatus = require('../../cash/income/puts/putIncomeStatus.js');

const putFinancialDataCtrl = async (client, vendor, totalCost, downPayment) => {
    
    const update = Object.fromEntries(
        Object.entries({ vendor, totalCost, downPayment })
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [`financialData.${key}`, value])
    );

    const updatedClient = await Client.findOneAndUpdate({ _id: client._id }, { $set: update }, { new: true });

    if(updatedClient && client.financialData.downPayment && downPayment ){

        const income = await getIncomeByDescription(`Seña - ${updatedClient.personalData.name}`);

        if(downPayment.finalAmount === 0){
            const deletedIncome = await putIncomeStatus(income._id);
        } else {
            const updatedIncome = await putIncome(income._id, downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, income.category, `Seña - ${updatedClient.personalData.name}`, true);
            
            if(income.active === false){
                const activatedIncome = await putIncomeStatus(income._id);
            }
        }

    } else if(updatedClient && downPayment){
        const categories = await getIncomeCategories();

        let downPaymentCategory = categories.find((category) => category.name === "Señas");

        if(!downPaymentCategory){
            downPaymentCategory = await postIncomeCategory("Señas");
        }

        const newIncome = await postIncome(downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, downPaymentCategory._id, `Seña - ${updatedClient.personalData.name}`, true);
    };

    return updatedClient;
};

module.exports = putFinancialDataCtrl;