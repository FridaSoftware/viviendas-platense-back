const getClients = require('./gets/getClients.js');
const getClientById = require('./gets/getClientById.js');
const postClient = require('./posts/postClient.js');
const putCreateContract = require('./puts/putCreateContract.js');
const putGeneralData = require('./puts/putGeneralData.js');
const putPersonalData = require('./puts/putPersonalData.js');
const putProjectData = require('./puts/putProjectData.js');
const putFinancialData = require('./puts/putFinancialData.js');
const putPayment = require('./puts/putPayment.js');
const putClientStatus = require('./puts/putClientStatus.js');

module.exports = {
    getClients,
    getClientById,
    postClient,
    putCreateContract,
    putGeneralData,
    putPersonalData,
    putProjectData,
    putFinancialData,
    putPayment,
    putClientStatus
}