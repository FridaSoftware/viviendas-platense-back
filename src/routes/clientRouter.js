const clientRouter = require('express').Router();
const { getClients, getClientById, postClient, putCreateContract } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', postClient);
clientRouter.put('/contract', putCreateContract);

module.exports = clientRouter;