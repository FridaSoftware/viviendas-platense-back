const getIncomeCategoriesHandler = require('./income/gets/getIncomeCategories.js');
const getExpenseCategoriesHandler = require('./expense/gets/getExpenseCategories.js');
const postIncomeCategoryHandler = require('./income/posts/postIncomeCategory.js');
const postExpenseCategoryHandler = require('./expense/posts/postExpenseCategory.js');


module.exports = {
    getIncomeCategoriesHandler,
    getExpenseCategoriesHandler,
    postIncomeCategoryHandler,
    postExpenseCategoryHandler,
}