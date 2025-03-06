//--- INCOME
const getIncomes = require('./income/gets/getIncomes.js');
const postIncome = require('./income/posts/postIncome.js');

//--- EXPENSE
const getExpenses = require('./expense/gets/getExpense.js');
const postExpense = require('./expense/posts/postExpense.js');



module.exports = {
    getIncomes,
    postIncome,
    getExpenses,
    postExpense,
}