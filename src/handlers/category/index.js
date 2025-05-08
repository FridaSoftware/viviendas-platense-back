//--- INCOME
const getIncomeCategories = require('./income/gets/getIncomeCategories.js');
const getActiveIncomeCategories = require('./income/gets/getActiveCategories.js');
const postIncomeCategory = require('./income/posts/postIncomeCategory.js');
const putIncomeCategory = require('./income/puts/putIncomeCategory.js');
const putIncomeCategoryStatus = require('./income/puts/putIncomeCategoryStatus.js');

//--- EXPENSE
const getExpenseCategories = require('./expense/gets/getExpenseCategories.js');
const getActiveExpenseCategories = require('./expense/gets/getActiveCategories.js');
const postExpenseCategory = require('./expense/posts/postExpenseCategory.js');
const putExpenseCategory = require('./expense/puts/putExpenseCategory.js');
const putExpenseCategoryStatus = require('./expense/puts/putExpenseCategoryStatus.js');

//--- ALL
const getAllCategories = require('./getAllCategories.js');

module.exports = {
    getIncomeCategories,
    getExpenseCategories,
    getActiveIncomeCategories,
    getActiveExpenseCategories,
    getAllCategories,
    postIncomeCategory,
    postExpenseCategory,
    putIncomeCategory,
    putExpenseCategory,
    putIncomeCategoryStatus,
    putExpenseCategoryStatus
}