const Client = require('../../../models/Client.js');

const putGeneralDataCtrl = async (_id, state, saleDate, handoverDate, other, contractSigned) => {

    const update = {
        ...(state !== undefined && { state }),
        ...(saleDate !== undefined && { saleDate }),
        ...(handoverDate !== undefined && { handoverDate }),
        ...(other !== undefined && { other }),
        ...(contractSigned !== undefined && { contractSigned })
    };

    const updatedClient = await Client.findOneAndUpdate({_id}, update, {new: true});

    return updatedClient;
};

module.exports = putGeneralDataCtrl;