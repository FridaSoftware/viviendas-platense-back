const Client = require('../../../models/Client.js');

const putPersonalDataCtrl = async (_id, dni, name, address, city, phone) => {

    const normalizedName = name.normalize('NFD').replace(/[̀-ͯ]/g, '');

    const update = {
        personalData: {
            dni,
            name,
            normalizedName,
            address,
            city,
            phone
        }
    };

    const updatedClient = await Client.findOneAndUpdate(
        { _id },
        update,
        { new: true }
    );

    return updatedClient;
};

module.exports = putPersonalDataCtrl;