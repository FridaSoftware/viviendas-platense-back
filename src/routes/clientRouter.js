const clientRouter = require('express').Router();
const { postClient } = require('../handlers/client/index.js');

clientRouter.post('/', postClient);

module.exports = clientRouter;