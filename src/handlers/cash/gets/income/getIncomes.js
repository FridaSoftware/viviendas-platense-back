const getController = require('../../../../controllers/cash/gets/income/getIncomes.js');

const getIncomesHandler = async (req, res) => {

    try {
        const incomes = await getController();
        res.status(200).send(incomes);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getIncomesHandler;