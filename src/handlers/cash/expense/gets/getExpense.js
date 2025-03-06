const getController = require('../../../../controllers/cash/expense/gets/getExpenses.js');

const getExpensesHandler = async (req, res) => {

    try {
        const expenses = await getController();
        res.status(200).send(expenses);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getExpensesHandler;