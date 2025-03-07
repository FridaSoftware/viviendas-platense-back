//--- INCOME
const getIncomes = require('./income/gets/getIncomes.js');
const postIncome = require('./income/posts/postIncome.js');
const putIncome = require('./income/puts/putIncome.js');

//--- EXPENSE
const getExpenses = require('./expense/gets/getExpense.js');
const postExpense = require('./expense/posts/postExpense.js');
const putExpense = require('./expense/puts/putExpense.js');



module.exports = {
    getIncomes,
    postIncome,
    getExpenses,
    postExpense,
    putIncome,
    putExpense
}