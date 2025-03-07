const getController = require('../../../../controllers/cash/expense/puts/putExpenseStatus.js');

const putExpenseStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const expenseUpdate = await getController(id)
    
      return res.status(200).send(`The expense changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putExpenseStatusHandler;