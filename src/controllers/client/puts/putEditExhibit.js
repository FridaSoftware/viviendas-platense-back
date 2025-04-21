const Client = require('../../../models/Client.js');

const putEditExhibitCtrl = async (client, exhibitData) => {

    const exhibitExists = client.exhibits.some(exhibit => exhibit._id.equals(exhibitData._id));
    if (!exhibitExists) {
        throw new Error('Exhibit not found');
    };

    const updatedClient = await Client.findOneAndUpdate(
        { 
            _id: client._id,
            'exhibits._id': exhibitData._id 
        },
        { 
            $set: {
                'exhibits.$.date': exhibitData.date,
                'exhibits.$.title': exhibitData.title,
                'exhibits.$.body': exhibitData.body,
                'exhibits.$.isSigned': exhibitData.isSigned || false
            }
        },
        { new: true }
    );

    return updatedClient;
};

module.exports = putEditExhibitCtrl;