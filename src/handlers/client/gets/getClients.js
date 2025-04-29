const getController = require('../../../controllers/client/gets/getClients.js');

const getClientsHandler = async (req, res) => {
    const { active, number, name, state } = req.query;

    const projection = {
        "number": 1,
        "state": 1,
        "personalData.name": 1,
        "projectData.address": 1,
        "projectData.city": 1,
        "projectData.model": 1,
        "projectData.roof.type": 1,
        "projectData.base.type": 1,
        "financialData.paymentPlan": 1,
        "active": 1
    };

    try {
        const clients = await getController({ active, number, name, state }, projection);
        res.status(200).send(clients);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getClientsHandler;