require('../../../../db.js');
const ExpenseCategory = require('../../../../models/ExpenseCategory.js');

const putExpenseCategoryStatusCtrl = async (_id) => {

    const category = await ExpenseCategory.findById(_id);
    const newStatus = !category.active;

    const updatedStatus = await ExpenseCategory.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putExpenseCategoryStatusCtrl;