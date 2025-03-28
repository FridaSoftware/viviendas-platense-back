require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getActiveExpensesByDateCtrl = async (start, end) => {
    
    const startDate = new Date(`${start}T00:00:00.000Z`);
    const endDate = new Date(`${end}T23:59:59.999Z`);

    const expenses = await Expense.find({
        active: true,
        date: { $gte: startDate, $lte: endDate },
    })
    .populate('category', 'name');

    return expenses;
};

module.exports = getActiveExpensesByDateCtrl;