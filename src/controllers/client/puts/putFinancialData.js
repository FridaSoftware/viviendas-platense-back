const Client = require('../../../models/Client.js');

const putFinancialDataCtrl = async (_id, vendor, totalCost, downPayment) => {
    
    const update = Object.fromEntries(
        Object.entries({ vendor, totalCost, downPayment })
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [`financialData.${key}`, value])
    );

    const updatedClient = await Client.findOneAndUpdate({ _id }, { $set: update }, { new: true });;

    return updatedClient;
};

module.exports = putFinancialDataCtrl;