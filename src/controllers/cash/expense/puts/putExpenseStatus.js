require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const putExpenseStatusCtrl = async (_id) => {

    const expense = await Expense.findById(_id);
    const newStatus = !expense.active;

    const updatedStatus = await Expense.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putExpenseStatusCtrl;