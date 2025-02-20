require('../../../db.js');
const Client = require('../../../models/Client.js');

const getClientsCtrl = async (filters, projection) => {
    const { active, number, name } = filters;

    const filter = {};

    if (active !== undefined) {
        filter.active = active === 'true';
    }

    if (number !== undefined) {
        filter.number = { $regex: number, $options: 'i' };
    }

    if (name !== undefined) {
        filter['personalData.normalizedName'] = { $regex: name, $options: 'i' };
    }

    const clients = await Client.find(filter, projection);
    return clients.reverse();
};

module.exports = getClientsCtrl;