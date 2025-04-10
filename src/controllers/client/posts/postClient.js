const Client = require('../../../models/Client.js');
const getCategories = require('../../category/income/gets/getCategories.js');
const postCategory = require('../../category/income/posts/postIncomeCategory.js');
const postIncome = require('../../cash/income/posts/postIncome.js');

const postClientCtrl = async (dni, name, address, city, phone, projectAddress, projectCity, model, downPayment) => {

    if(downPayment){
        const categories = await getCategories();

        let downPaymentCategory = categories.find((category) => category.name === "Seña");

        if(!downPaymentCategory){
            downPaymentCategory = await postCategory("Seña");
        }

        const newIncome = await postIncome(downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, downPaymentCategory._id, `Seña - ${name}`);
    };

    const newClient = {
        personalData: {
            dni,
            name,
            address,
            city,
            phone
        },

        projectData: {
            address: projectAddress,
            city: projectCity,
            model
        },
        
        financialData: {
            downPayment
        }
    };

    const createdClient = await Client.create(newClient);

    return createdClient;
};

module.exports = postClientCtrl;