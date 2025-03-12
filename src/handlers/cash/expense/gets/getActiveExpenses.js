const getController = require('../../../../controllers/cash/expense/gets/getActiveExpenses.js');

const getActiveExpensesHandler = async (req, res) => {

    try {
        const activeExpenses = await getController();

        res.status(200).send(activeExpenses);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getActiveExpensesHandler;