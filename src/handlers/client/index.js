const getClients = require('./gets/getClients.js');
const getClientById = require('./gets/getClientById.js');
const postClient = require('./posts/postClient.js');

module.exports = {
    getClients,
    getClientById,
    postClient
}