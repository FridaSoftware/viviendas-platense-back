const getController = require('../../../../controllers/cash/cashFlow/gets/getTotalCash.js');

const getTotalCashHandler = async (req, res) => {

    try {
        const totalCash = await getController();
        res.status(200).send(totalCash);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getTotalCashHandler;