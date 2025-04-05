const getController = require('../../../../controllers/cash/expense/gets/getBalanceExpensesByMonthAndYear.js');

const getBalanceExpensesByMonthAndYearHandler = async (req, res) => {

    const { month, year, categoryId } = req.query;

    try {
        const balanceExpensesByMonthAndYear = await getController(month, year, categoryId);

        if (!balanceExpensesByMonthAndYear) {
            return res.status(404).send(`No balance expenses found for month ${month} and year ${year}, or for category ${categoryId}`);
        }

        res.status(200).send(balanceExpensesByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getBalanceExpensesByMonthAndYearHandler;