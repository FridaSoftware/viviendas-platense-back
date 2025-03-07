const incomeRouter = require('express').Router();
const { getIncomes, postIncome, putIncome, putIncomeStatus } = require('../handlers/cash/index.js');
const { getIncomeCategories, postIncomeCategory, putIncomeCategory, putIncomeCategoryStatus } = require('../handlers/category/index.js');


incomeRouter.get('/', getIncomes);
incomeRouter.post('/', postIncome);
incomeRouter.put('/', putIncome);
incomeRouter.put('/:id', putIncomeStatus);



//---CATEGORY
incomeRouter.get('/category', getIncomeCategories);
incomeRouter.post('/category', postIncomeCategory);
incomeRouter.put('/category', putIncomeCategory);
incomeRouter.put('/category/:id', putIncomeCategoryStatus);


module.exports = incomeRouter;