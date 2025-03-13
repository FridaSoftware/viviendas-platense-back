const clientRouter = require('express').Router();
const { getClients, getClientById, postClient, putCreateContract, putClientStatus } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', postClient);
clientRouter.put('/contract', putCreateContract);
clientRouter.put('/:id', putClientStatus);

module.exports = clientRouter;