const cashFlowRouter = require('express').Router();
const { getCashFlow } = require('../handlers/cash/index.js');

cashFlowRouter.get('/', getCashFlow);

module.exports = cashFlowRouter;