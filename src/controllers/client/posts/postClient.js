const Client = require('../../../models/Client.js');
const getCategories = require('../../category/income/gets/getCategories.js');
const postCategory = require('../../category/income/posts/postIncomeCategory.js');
const postIncome = require('../../cash/income/posts/postIncome.js');

const postClientCtrl = async (dni, name, address, city, phone, projectAddress, projectCity, model, downPayment) => {

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

    if(createdClient && downPayment){
        const categories = await getCategories();

        let downPaymentCategory = categories.find((category) => category.name === "Señas");

        if(!downPaymentCategory){
            downPaymentCategory = await postCategory("Señas");
        }

        const newIncome = await postIncome(downPayment.paidDate, downPayment.finalAmount, downPayment.currency, downPayment.paymentMethod, downPaymentCategory._id, `Seña - Cliente N°${createdClient.number}`, downPayment.fromClient);
    };

    return createdClient;
};

module.exports = postClientCtrl;