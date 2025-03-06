//--- INCOME
const getIncomeCategories = require('./income/gets/getIncomeCategories.js');
const postIncomeCategory = require('./income/posts/postIncomeCategory.js');
const putIncomeCategory = require('./income/puts/putIncomeCategory.js')
//--- EXPENSE
const getExpenseCategories = require('./expense/gets/getExpenseCategories.js');
const postExpenseCategory = require('./expense/posts/postExpenseCategory.js');
const putExpenseCategory = require('./expense/puts/putExpenseCategory.js');


module.exports = {
    getIncomeCategories,
    getExpenseCategories,
    postIncomeCategory,
    postExpenseCategory,
    putIncomeCategory,
    putExpenseCategory,
}