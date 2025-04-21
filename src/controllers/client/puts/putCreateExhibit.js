const Client = require('../../../models/Client.js');

const putCreateExhibitCtrl = async (_id, date, title, body) => {

    const newExhibit = {
        date,
        title,
        body
    };

    const updatedClient = await Client.findOneAndUpdate(
            { _id },
            {
                $push: { exhibits: newExhibit }
            },
            { new: true }
    );

    return updatedClient;
};

module.exports = putCreateExhibitCtrl;