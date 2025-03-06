require('../../../../db.js');
const IncomeCategory = require('../../../../models/IncomeCategory.js');

const putIncomeCategoryStatusCtrl = async (_id) => {

    const category = await IncomeCategory.findById(_id);
    const newStatus = !category.active;

    const updatedStatus = await IncomeCategory.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putIncomeCategoryStatusCtrl;