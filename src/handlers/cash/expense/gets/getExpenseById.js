const getController = require('../../../../controllers/cash/expense/gets/getExpenseById.js');

const getExpenseByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const expenseById = await getController(id);

        if(!expenseById){
            return res.status(404).send(`No expense found with ID: "${id}"`);
        };

        res.status(200).send(expenseById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    };

};

module.exports = getExpenseByIdHandler;