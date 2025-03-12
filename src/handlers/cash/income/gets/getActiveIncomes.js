const getController = require('../../../../controllers/cash/income/gets/getActiveIncomes.js');

const getActiveIncomesHandler = async (req, res) => {

    try {
        const activeIncomes = await getController();

        res.status(200).send(activeIncomes);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getActiveIncomesHandler;