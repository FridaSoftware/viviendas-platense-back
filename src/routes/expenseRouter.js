const expenseRouter = require('express').Router();
const { getExpenses } = require('../handlers/cash/index.js');

expenseRouter.get('/', getExpenses);

module.exports = expenseRouter;