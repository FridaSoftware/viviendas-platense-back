//--- INCOME
const getIncomes = require('./income/gets/getIncomes.js');
const getIncomeById = require('./income/gets/getIncomeById.js');
const postIncome = require('./income/posts/postIncome.js');
const putIncome = require('./income/puts/putIncome.js');
const putIncomeStatus = require('./income/puts/putIncomeStatus.js');

//--- EXPENSE
const getExpenses = require('./expense/gets/getExpense.js');
const getExpenseById = require('./expense/gets/getExpenseById.js');
const postExpense = require('./expense/posts/postExpense.js');
const putExpense = require('./expense/puts/putExpense.js');
const putExpenseStatus = require('./expense/puts/putExpenseStatus.js');



module.exports = {
    getIncomes,
    getIncomeById,
    getExpenseById,
    postIncome,
    getExpenses,
    postExpense,
    putIncome,
    putExpense,
    putIncomeStatus,
    putExpenseStatus
}