const getController = require('../../../../controllers/cash/expense/gets/getActiveExpensesByDate.js');


const getActiveExpensesByDateHandler = async (req, res) => {
    const { start, end } = req.query;  

    try {
        const activeExpensesByDate = await getController(start, end);

        if (!activeExpensesByDate) {
            return res.status(404).send(`No service expenses found between dates: ${start} - ${end}`);
        }

        res.status(200).send(activeExpensesByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveExpensesByDateHandler;