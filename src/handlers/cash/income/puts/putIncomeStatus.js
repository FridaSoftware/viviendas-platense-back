const getController = require('../../../../controllers/cash/income/puts/putExpenseStatus.js');

const putIncomeStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const incomeUpdate = await getController(id)
    
      return res.status(200).send(`The income changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putIncomeStatusHandler;