const incomeRouter = require('express').Router();
const { getIncomes } = require('../handlers/cash/index.js');

incomeRouter.get('/', getIncomes);
// incomeRouter.get('/:id', getClientById);
// incomeRouter.post('/', postClient);
// incomeRouter.put('/contract', putCreateContract);

module.exports = incomeRouter;