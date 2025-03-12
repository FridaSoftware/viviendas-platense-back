//--- INCOME
const getIncomes = require('./income/gets/getIncomes.js');
const getActiveIncomes = require('./income/gets/getActiveIncomes.js');
const getIncomeById = require('./income/gets/getIncomeById.js');
const postIncome = require('./income/posts/postIncome.js');
const putIncome = require('./income/puts/putIncome.js');
const putIncomeStatus = require('./income/puts/putIncomeStatus.js');

//--- EXPENSE
const getExpenses = require('./expense/gets/getExpenses.js');
const getActiveExpenses = require('./expense/gets/getActiveExpenses.js');
const getExpenseById = require('./expense/gets/getExpenseById.js');
const postExpense = require('./expense/posts/postExpense.js');
const putExpense = require('./expense/puts/putExpense.js');
const putExpenseStatus = require('./expense/puts/putExpenseStatus.js');



module.exports = {
    getIncomes,
    getActiveIncomes,
    getActiveExpenses,
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