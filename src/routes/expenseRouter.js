const expenseRouter = require('express').Router();
const { getExpenses, postExpense } = require('../handlers/cash/index.js');
const { getExpenseCategories, postExpenseCategory, putExpenseCategory, putExpenseCategoryStatus } = require('../handlers/category/index.js')

expenseRouter.get('/', getExpenses);
expenseRouter.post('/', postExpense);

//--- CATEGORY
expenseRouter.get('/category', getExpenseCategories);
expenseRouter.post('/category', postExpenseCategory);
expenseRouter.put('/category', putExpenseCategory);
expenseRouter.put('/category/:id', putExpenseCategoryStatus);


module.exports = expenseRouter;