const putController = require('../../../../controllers/category/expense/puts/putExpenseCategory.js');

const putExpenseCategoryHandler = async (req, res) => {
    const { _id, name } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if ((name && typeof name !== 'string')){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const categoryUpdate = await putController(_id, name);
    
      return res.status(200).send(`Expense category had been updated`);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = putExpenseCategoryHandler;