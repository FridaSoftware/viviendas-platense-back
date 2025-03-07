require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getExpenseByIdCtrl = async (_id) => {

    if(_id) {
        const expenseById = await Expense.findOne({ _id })
        .populate('category', 'name');

        return expenseById;
    };

};

module.exports = getExpenseByIdCtrl;