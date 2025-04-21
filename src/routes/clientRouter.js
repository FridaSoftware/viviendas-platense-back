const clientRouter = require('express').Router();
const { getClients, getClientById, postClient, putCreateContract, putGeneralData, putPersonalData, putProjectData, putFinancialData, putImageData, putCreateExhibit, putPayment, putClientStatus, deleteImageData } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', postClient);
clientRouter.put('/contract', putCreateContract);
clientRouter.put('/generalData', putGeneralData);
clientRouter.put('/personalData', putPersonalData);
clientRouter.put('/projectData', putProjectData);
clientRouter.put('/financialData', putFinancialData);
clientRouter.put('/imageData', putImageData);
clientRouter.put('/imageData/delete', deleteImageData);
clientRouter.put('/exhibit/create', putCreateExhibit);
clientRouter.put('/payment', putPayment);
clientRouter.put('/:id', putClientStatus);

module.exports = clientRouter;