const getController = require('../../../../controllers/cash/expense/gets/getExpensesByMonthAndYear.js');

const getExpensesByMonthAndYearHandler = async (req, res) => {

    const { month, year, categoryId } = req.query;

    try {
        const expensesByMonthAndYear = await getController(month, year, categoryId);

        if (!expensesByMonthAndYear) {
            return res.status(404).send(`No expenses found for month ${month} and year ${year}, or for category ${categoryId}`);
        }

        res.status(200).send(expensesByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getExpensesByMonthAndYearHandler;