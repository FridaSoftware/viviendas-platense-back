const expenseRouter = require('express').Router();
const { getExpenses, getExpenseById, postExpense, putExpense, putExpenseStatus } = require('../handlers/cash/index.js');
const { getExpenseCategories, postExpenseCategory, putExpenseCategory, putExpenseCategoryStatus } = require('../handlers/category/index.js')

expenseRouter.get('/', getExpenses);
expenseRouter.get('/:id', getExpenseById);
expenseRouter.post('/', postExpense);
expenseRouter.put('/', putExpense);
expenseRouter.put('/:id', putExpenseStatus);


//--- CATEGORY
expenseRouter.get('/category', getExpenseCategories);
expenseRouter.post('/category', postExpenseCategory);
expenseRouter.put('/category', putExpenseCategory);
expenseRouter.put('/category/:id', putExpenseCategoryStatus);


module.exports = expenseRouter;