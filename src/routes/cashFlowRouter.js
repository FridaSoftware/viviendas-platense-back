const cashFlowRouter = require('express').Router();
const { getCashFlow, getCashFlowByDate, getTotalCash } = require('../handlers/cash/index.js');

cashFlowRouter.get('/', (req, res, next) => {
    const { start, end } = req.query;

    if(start && end){
        return getCashFlowByDate(req, res, next);
    };

    return getCashFlow(req, res, next);

});

cashFlowRouter.get('/total', getTotalCash);

module.exports = cashFlowRouter;