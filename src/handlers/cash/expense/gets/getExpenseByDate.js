const getController = require('../../../../controllers/cash/expense/gets/getExpensesByDate.js');

const getExpensesByDateHandler = async (req, res) => {
    const { start, end } = req.query;  

    try {
        const expensesByDate = await getController(start, end);

        if (!expensesByDate) {
            return res.status(404).send(`No service expenses found between dates: ${start} - ${end}`);
        }

        res.status(200).send(expensesByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getExpensesByDateHandler;