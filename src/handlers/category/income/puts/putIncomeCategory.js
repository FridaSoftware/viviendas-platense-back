const putController = require('../../../../controllers/category/income/puts/putIncomeCategory.js');

const putIncomeCategoryHandler = async (req, res) => {
    const { _id, name } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if ((name && typeof name !== 'string')){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const categoryUpdate = await putController(_id, name);
    
      return res.status(200).send(`Income category had been updated`);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = putIncomeCategoryHandler;