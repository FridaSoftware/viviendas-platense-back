const expenseRouter = require('express').Router();
const { getExpenseCategory } = require('../handlers/category/gets/expense/getExpenseCategory.js');

expenseRouter.get('/', getExpenseCategory);

module.exports = expenseRouter;