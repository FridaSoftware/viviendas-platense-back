//--- INCOME
const getIncomes = require('./income/gets/getIncomes.js');
const getActiveIncomes = require('./income/gets/getActiveIncomes.js');
const getIncomeById = require('./income/gets/getIncomeById.js');
const getIncomesByMonthAndYear = require('./income/gets/getIncomesByMonthAndYear.js');
const getBalanceIncomesByMonthAndYear = require('./income/gets/getBalanceIncomesByMonthAndYear.js');
const getIncomesByDate = require('./income/gets/getIncomesByDate.js');
const getActiveIncomesByDate = require('./income/gets/getActiveIncomesByDate.js');
const postIncome = require('./income/posts/postIncome.js');
const putIncome = require('./income/puts/putIncome.js');
const putIncomeStatus = require('./income/puts/putIncomeStatus.js');

//--- EXPENSE
const getExpenses = require('./expense/gets/getExpenses.js');
const getActiveExpenses = require('./expense/gets/getActiveExpenses.js');
const getExpenseById = require('./expense/gets/getExpenseById.js');
const getExpensesByMonthAndYear = require('./expense/gets/getExpensesByMonthAndYear.js');
const getExpensesByDate = require('./expense/gets/getExpenseByDate.js');
const getActiveExpensesByDate = require('./expense/gets/getActiveExpensesByDate.js');
const getBalanceExpensesByMonthAndYear = require('./expense/gets/getBalanceExpensesByMonthAndYear.js');
const postExpense = require('./expense/posts/postExpense.js');
const putExpense = require('./expense/puts/putExpense.js');
const putExpenseStatus = require('./expense/puts/putExpenseStatus.js');

//--- CASH FLOW
const getCashFlow = require('./cashFlow/gets/getCashFlow.js');
const getCashFlowByDate = require('./cashFlow/gets/getCashFlowByDate.js');
const getTotalCash = require('./cashFlow/gets/getTotalCash.js');


module.exports = {
    getIncomes,
    getExpenses,
    getCashFlow,
    getActiveIncomes,
    getActiveExpenses,
    getIncomeById,
    getExpenseById,
    getIncomesByMonthAndYear,
    getExpensesByMonthAndYear,
    getBalanceIncomesByMonthAndYear,
    getBalanceExpensesByMonthAndYear,
    getIncomesByDate,
    getExpensesByDate,
    getCashFlowByDate,
    getTotalCash,
    getActiveIncomesByDate,
    getActiveExpensesByDate,
    postIncome,
    postExpense,
    putIncome,
    putExpense,
    putIncomeStatus,
    putExpenseStatus
}