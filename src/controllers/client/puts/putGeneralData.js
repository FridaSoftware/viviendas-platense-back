const Client = require('../../../models/Client.js');

const putGeneralDataCtrl = async (_id, state, saleDate, handhoverDate, other, contractSigned) => {

    const update = {
        ...(state !== undefined && { state }),
        ...(saleDate !== undefined && { saleDate }),
        ...(handhoverDate !== undefined && { handhoverDate }),
        ...(other !== undefined && { other }),
        ...(contractSigned !== undefined && { contractSigned })
    };

    const updatedClient = await Client.findOneAndUpdate({_id}, update, {new: true});

    return updatedClient;
};

module.exports = putGeneralDataCtrl;