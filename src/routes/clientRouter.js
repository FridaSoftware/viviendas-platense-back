const clientRouter = require('express').Router();
const { getClients, getClientById, postClient, putCreateContract, putGeneralData, putPersonalData, putProjectData, putClientStatus } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', postClient);
clientRouter.put('/contract', putCreateContract);
clientRouter.put('/generalData', putGeneralData);
clientRouter.put('/personalData', putPersonalData);
clientRouter.put('/projectData', putProjectData);
clientRouter.put('/:id', putClientStatus);

module.exports = clientRouter;