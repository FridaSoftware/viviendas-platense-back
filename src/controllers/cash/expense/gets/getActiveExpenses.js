require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getActiveExpensesCtrl = async () => {
    const activeExpenses = await Expense.find({active: true});

    return activeExpenses;
};

module.exports = getActiveExpensesCtrl;