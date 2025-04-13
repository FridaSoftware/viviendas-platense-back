const Client = require('../../../models/Client.js');

const postClientCtrl = async (dni, name, address, city, phone, projectAddress, projectCity, model, downPayment, image) => {

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
        },

        imageData: {
            image
        }
    };

    const createdClient = await Client.create(newClient);

    return createdClient;
};

module.exports = postClientCtrl;