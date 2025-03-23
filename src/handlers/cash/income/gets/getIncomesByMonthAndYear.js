const getController = require('../../../../controllers/cash/income/gets/getIncomesByMonthAndYear.js');

const getIncomesByMonthAndYearHandler = async (req, res) => {

    const { month, year } = req.query;

    try {
        const incomesByMonthAndYear = await getController(month, year);

        if (!incomesByMonthAndYear) {
            return res.status(404).send(`No incomes found for month ${month} and year ${year}`);
        }

        res.status(200).send(incomesByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getIncomesByMonthAndYearHandler;