require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getActiveExpensesCtrl = async () => {
    const activeExpenses = await Expense.find({active: true})
    .populate('category', 'name')
    .sort({ createdAt: -1 });

    return activeExpenses;
};

module.exports = getActiveExpensesCtrl;