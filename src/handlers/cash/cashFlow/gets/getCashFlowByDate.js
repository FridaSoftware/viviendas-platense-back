const getController = require('../../../../controllers/cash/cashFlow/gets/getCashFlowByDate.js');

const getCashFlowByDateHandler = async (req, res) => {
    const { start, end } = req.query;  

    try {
        const cashFlowByDate = await getController(start, end);

        if (!cashFlowByDate) {
            return res.status(404).send(`No service cash flow found between dates: ${start} - ${end}`);
        }

        res.status(200).send(cashFlowByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCashFlowByDateHandler;