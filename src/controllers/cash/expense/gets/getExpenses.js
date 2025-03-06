require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getExpensesCtrl = async () => {
        const expenses = await Expense.find()
        .populate('category');
    
        return expenses;
};

module.exports = getExpensesCtrl;