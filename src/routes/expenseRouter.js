const expenseRouter = require('express').Router();
const { getExpenses, postExpense } = require('../handlers/cash/index.js');
const { getExpenseCategoriesHandler, postExpenseCategoryHandler } = require('../handlers/category/index.js')

expenseRouter.get('/', getExpenses);
expenseRouter.post('/', postExpense);

//--- CATEGORY
expenseRouter.get('/category', getExpenseCategoriesHandler);
expenseRouter.post('/category', postExpenseCategoryHandler);



module.exports = expenseRouter;