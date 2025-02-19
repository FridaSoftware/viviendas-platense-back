const Client = require('../../models/Client.js');

const postClientCtrl = async (dni, name, address, city, phone, projectAddress, projectCity, downPayment) => {

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
            city: projectCity
        },
        
        financialData: {
            downPayment
        }
    };

    const createdClient = await Client.create(newClient);

    return createdClient;
};

module.exports = postClientCtrl;