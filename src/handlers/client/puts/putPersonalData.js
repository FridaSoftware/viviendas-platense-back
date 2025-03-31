const putController = require('../../../controllers/client/puts/putPersonalData.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');

const putPersonalDataHandler = async (req, res) => {

    const { _id, dni, name, address, city, phone } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(typeof dni !== 'string') return res.status(400).send({ error: 'Incorrect DataType - dni must be string' });
        if(typeof name !== 'string') return res.status(400).send({ error: 'Incorrect DataType - name must be string' });
        if(typeof address !== 'string') return res.status(400).send({ error: 'Incorrect DataType - address must be string' });
        if(typeof city !== 'string') return res.status(400).send({ error: 'Incorrect DataType - city must be string' });
        if(phone && typeof phone !== 'string') return res.status(400).send({ error: 'Incorrect DataType - phone must be string' });        

        const updatedClient = await putController(_id, dni, name, address, city, phone);
        
        res.status(200).send(updatedClient);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = putPersonalDataHandler;