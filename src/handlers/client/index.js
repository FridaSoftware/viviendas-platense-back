const getClients = require('./gets/getClients.js');
const getClientById = require('./gets/getClientById.js');
const postClient = require('./posts/postClient.js');
const putCreateContract = require('./puts/putCreateContract.js');
const putGeneralData = require('./puts/putGeneralData.js');
const putPersonalData = require('./puts/putPersonalData.js');
const putProjectData = require('./puts/putProjectData.js');
const putFinancialData = require('./puts/putFinancialData.js');
const putImageData = require('./puts/putImageData.js');
const putCreateExhibit = require('./puts/putCreateExhibit.js');
const putEditExhibit = require('./puts/putEditExhibit.js');
const putDeleteExhibit = require('./puts/putDeleteExhibit.js');
const putPayment = require('./puts/putPayment.js');
const putClientStatus = require('./puts/putClientStatus.js');
const deleteImageData = require('./delete/deleteImageData.js');

module.exports = {
    getClients,
    getClientById,
    postClient,
    putCreateContract,
    putGeneralData,
    putPersonalData,
    putProjectData,
    putFinancialData,
    putImageData,
    putCreateExhibit,
    putEditExhibit,
    putDeleteExhibit,
    putPayment,
    putClientStatus,
    deleteImageData
}