const getController = require('../../../../controllers/cash/income/gets/getBalanceIncomesByMonthAndYear.js');

const getBalanceIncomesByMonthAndYearHandler = async (req, res) => {

    const { month, year, categoryId } = req.query;

    try {
        const balanceIncomesByMonthAndYear = await getController(month, year, categoryId);

        if (!balanceIncomesByMonthAndYear) {
            return res.status(404).send(`No balance incomes found for month ${month} and year ${year}, or for category ${categoryId}`);
        }

        res.status(200).send(balanceIncomesByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getBalanceIncomesByMonthAndYearHandler;