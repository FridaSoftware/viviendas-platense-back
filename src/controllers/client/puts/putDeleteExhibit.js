const Client = require('../../../models/Client.js');

const putDeleteExhibitCtrl = async (client, exhibitId) => {

    const exhibitExists = client.exhibits.some(exhibit => exhibit._id.equals(exhibitId));
    if (!exhibitExists) {
        throw new Error('Exhibit not found');
    };

    const updatedClient = await Client.findOneAndUpdate(
        { 
            _id: client._id
        },
        { 
            $pull: { 
                exhibits: { _id: exhibitId } 
            } 
        },
        { new: true }
    );

    return updatedClient;
};

module.exports = putDeleteExhibitCtrl;