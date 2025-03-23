const expenseRouter = require('express').Router();
const { getExpenses, getActiveExpenses, getExpenseById, getExpensesByMonthAndYear, postExpense, putExpense, putExpenseStatus } = require('../handlers/cash/index.js');
const { getExpenseCategories, getActiveExpenseCategories, postExpenseCategory, putExpenseCategory, putExpenseCategoryStatus } = require('../handlers/category/index.js')

//--- CATEGORY
expenseRouter.get('/category', getActiveExpenseCategories);
expenseRouter.get('/category/all', getExpenseCategories);
expenseRouter.post('/category', postExpenseCategory);
expenseRouter.put('/category', putExpenseCategory);
expenseRouter.put('/category/:id', putExpenseCategoryStatus);

//--- EXPENSE
expenseRouter.get('/all', getExpenses);
expenseRouter.get('/', getActiveExpenses);
expenseRouter.get('/filtered', getExpensesByMonthAndYear);
expenseRouter.get('/:id', getExpenseById);
expenseRouter.post('/', postExpense);
expenseRouter.put('/', putExpense);
expenseRouter.put('/:id', putExpenseStatus);


module.exports = expenseRouter;