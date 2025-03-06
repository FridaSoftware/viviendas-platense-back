require('../../../../db.js');
const ExpenseCategory = require('../../../../models/ExpenseCategory.js');

const putExpenseCategoryCtrl = async (_id, name) => {

    const updated = await ExpenseCategory.updateOne({_id}, {$set: {name}});

    return updated;
};

module.exports = putExpenseCategoryCtrl;