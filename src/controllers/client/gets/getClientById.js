require('../../../db.js');
const Client = require('../../../models/Client.js');

const getClientByIdCtrl = async (_id) => {
    if (_id) {
        const clientById = await Client.findOne({ _id });
    
        return clientById;
    };
};

module.exports = getClientByIdCtrl;