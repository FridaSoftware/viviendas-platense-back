const expenseRouter = require('express').Router();
const { getExpenses } = require('../handlers/cash/index.js');
const { getExpenseCategoriesHandler } = require('../handlers/category/index.js')

expenseRouter.get('/', getExpenses);
expenseRouter.get('/category', getExpenseCategoriesHandler);


module.exports = expenseRouter;