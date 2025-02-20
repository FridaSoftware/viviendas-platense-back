const clientRouter = require('express').Router();
const { getClients, postClient } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.post('/', postClient);

module.exports = clientRouter;