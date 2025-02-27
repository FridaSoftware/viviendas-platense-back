const getClients = require('./gets/getClients.js');
const getClientById = require('./gets/getClientById.js');
const postClient = require('./posts/postClient.js');
const putCreateContract = require('./puts/putCreateContract.js');

module.exports = {
    getClients,
    getClientById,
    postClient,
    putCreateContract
}