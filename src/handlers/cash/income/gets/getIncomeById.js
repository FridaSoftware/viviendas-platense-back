const getController = require('../../../../controllers/cash/income/gets/getIncomeById.js');

const getIncomeByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const incomeById = await getController(id);

        if(!incomeById){
            return res.status(404).send(`No income found with ID: "${id}"`);
        };

        res.status(200).send(incomeById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    };

};

module.exports = getIncomeByIdHandler;