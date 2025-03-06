const incomeRouter = require('express').Router();
const { getIncomes, postIncome } = require('../handlers/cash/index.js');
const { getIncomeCategoriesHandler, postIncomeCategoryHandler } = require('../handlers/category/index.js');


incomeRouter.get('/', getIncomes);
incomeRouter.post('/', postIncome);


//---CATEGORY
incomeRouter.get('/category', getIncomeCategoriesHandler);
incomeRouter.post('/category', postIncomeCategoryHandler);


module.exports = incomeRouter;