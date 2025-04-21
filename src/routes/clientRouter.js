const clientRouter = require('express').Router();
const { getClients, getClientById, postClient, putCreateContract, putGeneralData, putPersonalData, putProjectData, putFinancialData, putImageData, putCreateExhibit, putEditExhibit, putPayment, putClientStatus, deleteImageData } = require('../handlers/client/index.js');

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', postClient);
clientRouter.put('/contract', putCreateContract);
clientRouter.put('/generalData', putGeneralData);
clientRouter.put('/personalData', putPersonalData);
clientRouter.put('/projectData', putProjectData);
clientRouter.put('/financialData', putFinancialData);
clientRouter.put('/imageData', putImageData);
clientRouter.put('/exhibit/create', putCreateExhibit);
clientRouter.put('/exhibit/edit', putEditExhibit);
clientRouter.put('/payment', putPayment);
clientRouter.put('/:id', putClientStatus);
clientRouter.delete('/imageData', deleteImageData);

module.exports = clientRouter;