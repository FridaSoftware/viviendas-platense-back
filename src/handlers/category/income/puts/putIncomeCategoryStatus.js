const getController = require('../../../../controllers/category/income/puts/putIncomeCategoryStatus.js');

const putIncomeCategoryStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const categoryUpdate = await getController(id)
    
      return res.status(200).send(`The category income changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putIncomeCategoryStatusHandler;