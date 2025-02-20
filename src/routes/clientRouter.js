const clientRouter = require('express').Router();
const { getClients, getClientById, postClient } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', postClient);

module.exports = clientRouter;