const getController = require('../../../../controllers/cash/income/gets/getActiveIncomesByDate.js');

const getActiveIncomesByDateHandler = async (req, res) => {
    const { start, end } = req.query;  

    try {
        const activeIncomesByDate = await getController(start, end);

        if (!activeIncomesByDate) {
            return res.status(404).send(`No service incomes found between dates: ${start} - ${end}`);
        }

        res.status(200).send(activeIncomesByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveIncomesByDateHandler;