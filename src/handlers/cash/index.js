//--- INCOME
const getIncomes = require('./income/gets/getIncomes.js');
const getActiveIncomes = require('./income/gets/getActiveIncomes.js');
const getIncomeById = require('./income/gets/getIncomeById.js');
const getIncomesByMonthAndYear = require('./income/gets/getIncomesByMonthAndYear.js');
const postIncome = require('./income/posts/postIncome.js');
const putIncome = require('./income/puts/putIncome.js');
const putIncomeStatus = require('./income/puts/putIncomeStatus.js');

//--- EXPENSE
const getExpenses = require('./expense/gets/getExpenses.js');
const getActiveExpenses = require('./expense/gets/getActiveExpenses.js');
const getExpenseById = require('./expense/gets/getExpenseById.js');
const getExpensesByMonthAndYear = require('./expense/gets/getExpensesByMonthAndYear.js');
const postExpense = require('./expense/posts/postExpense.js');
const putExpense = require('./expense/puts/putExpense.js');
const putExpenseStatus = require('./expense/puts/putExpenseStatus.js');



module.exports = {
    getIncomes,
    getActiveIncomes,
    getActiveExpenses,
    getIncomeById,
    getExpenseById,
    getIncomesByMonthAndYear,
    getExpensesByMonthAndYear,
    postIncome,
    getExpenses,
    postExpense,
    putIncome,
    putExpense,
    putIncomeStatus,
    putExpenseStatus
}