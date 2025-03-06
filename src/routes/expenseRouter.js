const expenseRouter = require('express').Router();
const { getExpenses } = require('../handlers/cash/index.js');
const { getExpenseCategoriesHandler, postExpenseCategoryHandler } = require('../handlers/category/index.js')

expenseRouter.get('/', getExpenses);

//---CATEGORY
expenseRouter.get('/category', getExpenseCategoriesHandler);
expenseRouter.post('/category', postExpenseCategoryHandler);



module.exports = expenseRouter;