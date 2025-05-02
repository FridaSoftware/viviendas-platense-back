const getController = require('../../../../controllers/cash/cashFlow/gets/getCashFlow.js');

const getCashFlowHandler = async (req, res) => {

    try {
        const cashFlow = await getController();
        res.status(200).send(cashFlow);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getCashFlowHandler;