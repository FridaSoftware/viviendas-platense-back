const putController = require('../../../controllers/client/puts/putClientStatus.js');

const putClientStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const clientUpdate = await putController(id)
    
      return res.status(200).send(`The client changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putClientStatusHandler;