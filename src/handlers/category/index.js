//--- INCOME
const getIncomeCategories = require('./income/gets/getIncomeCategories.js');
const postIncomeCategory = require('./income/posts/postIncomeCategory.js');
const putIncomeCategory = require('./income/puts/putIncomeCategory.js');
const putIncomeCategoryStatus = require('./income/puts/putIncomeCategoryStatus.js');

//--- EXPENSE
const getExpenseCategories = require('./expense/gets/getExpenseCategories.js');
const postExpenseCategory = require('./expense/posts/postExpenseCategory.js');
const putExpenseCategory = require('./expense/puts/putExpenseCategory.js');
const putExpenseCategoryStatus = require('./expense/puts/putExpenseCategoryStatus.js');

module.exports = {
    getIncomeCategories,
    getExpenseCategories,
    postIncomeCategory,
    postExpenseCategory,
    putIncomeCategory,
    putExpenseCategory,
    putIncomeCategoryStatus,
    putExpenseCategoryStatus
}