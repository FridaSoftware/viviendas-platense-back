const incomeRouter = require('express').Router();
const { getIncomes, getActiveIncomes, getActiveIncomesByDate, getIncomeById, getIncomesByMonthAndYear, getBalanceIncomesByMonthAndYear, getIncomesByDate, postIncome, putIncome, putIncomeStatus } = require('../handlers/cash/index.js');
const { getIncomeCategories, getActiveIncomeCategories, postIncomeCategory, putIncomeCategory, putIncomeCategoryStatus } = require('../handlers/category/index.js');

//---CATEGORY
incomeRouter.get('/category', getActiveIncomeCategories);
incomeRouter.get('/category/all', getIncomeCategories);
incomeRouter.post('/category', postIncomeCategory);
incomeRouter.put('/category', putIncomeCategory);
incomeRouter.put('/category/:id', putIncomeCategoryStatus);

//---INCOME
// incomeRouter.get('/all', getIncomes);
// incomeRouter.get('/', getActiveIncomes);
incomeRouter.get('/all', (req, res, next) => {
    const { start, end } = req.query;

    if(start && end){
        return getIncomesByDate(req, res, next);
    };

    return getIncomes(req, res, next);

});
incomeRouter.get('/', (req, res, next) => {
    const { start, end } = req.query;

    if(start && end){
        return getActiveIncomesByDate(req, res, next);
    };

    return getActiveIncomes(req, res, next);

});
incomeRouter.get('/filtered', getIncomesByMonthAndYear);
incomeRouter.get('/balance', getBalanceIncomesByMonthAndYear);
incomeRouter.get('/:id', getIncomeById);
incomeRouter.post('/', postIncome);
incomeRouter.put('/', putIncome);
incomeRouter.put('/:id', putIncomeStatus);


module.exports = incomeRouter;