const incomeRouter = require('express').Router();
const { getIncomes, getActiveIncomes, getIncomeById, postIncome, putIncome, putIncomeStatus } = require('../handlers/cash/index.js');
const { getIncomeCategories, getActiveIncomeCategories, postIncomeCategory, putIncomeCategory, putIncomeCategoryStatus } = require('../handlers/category/index.js');

//---CATEGORY
incomeRouter.get('/category', getActiveIncomeCategories);
incomeRouter.get('/category/all', getIncomeCategories);
incomeRouter.post('/category', postIncomeCategory);
incomeRouter.put('/category', putIncomeCategory);
incomeRouter.put('/category/:id', putIncomeCategoryStatus);

//---INCOME
incomeRouter.get('/all', getIncomes);
incomeRouter.get('/', getActiveIncomes);
incomeRouter.get('/:id', getIncomeById);
incomeRouter.post('/', postIncome);
incomeRouter.put('/', putIncome);
incomeRouter.put('/:id', putIncomeStatus);


module.exports = incomeRouter;