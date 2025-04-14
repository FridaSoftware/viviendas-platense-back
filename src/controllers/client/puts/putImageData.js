const Client = require('../../../models/Client.js');

const putImageDataCtrl = async (_id, image, name, description) => {

    const update = {
        $push: {
            imageData: {
                image,
                name,
                description
            }
        }
    };

    const updatedClient = await Client.findOneAndUpdate(
        { _id },
        update,
        { new: true }
    );

    return updatedClient;
};

module.exports = putImageDataCtrl;