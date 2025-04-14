const Client = require('../../../models/Client.js');

const deleteImageDataCtrl = async (clientId, imageId) => {
    
    const updatedClient = await Client.findOneAndUpdate(
        { _id: clientId },
        {
            $pull: {
                imageData: { _id: imageId }
            }
        },
        { new: true }
    );

    return updatedClient;
};

module.exports = deleteImageDataCtrl;