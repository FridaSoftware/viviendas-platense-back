const Client = require('../../../models/Client.js');

const putProjectDataCtrl = async (_id, address, city, model, turnKey, roof, sqm, base, leveling, areas, items, additionals) => {
    
    const update = Object.fromEntries(
        Object.entries({ address, city, model, turnKey, roof, sqm, base, leveling, areas, items, additionals })
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [`projectData.${key}`, value])
    );

    const updatedClient = await Client.findOneAndUpdate({ _id }, { $set: update }, { new: true });;

    return updatedClient;
};

module.exports = putProjectDataCtrl;
