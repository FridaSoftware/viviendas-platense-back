const getController = require('../../../../controllers/cash/income/gets/getIncomesByDate.js');

const getIncomesByDateHandler = async (req, res) => {
    const { start, end } = req.query;  

    try {
        const incomesByDate = await getController(start, end);

        if (!incomesByDate) {
            return res.status(404).send(`No service incomes found between dates: ${start} - ${end}`);
        }

        res.status(200).send(incomesByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getIncomesByDateHandler;