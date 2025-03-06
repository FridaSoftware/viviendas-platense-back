require('../../../../db.js');
const IncomeCategory = require('../../../../models/IncomeCategory.js');

const putIncomeCategoryCtrl = async (_id, name) => {

    const updated = await IncomeCategory.updateOne({_id}, {$set: {name}});

    return updated;
};

module.exports = putIncomeCategoryCtrl;