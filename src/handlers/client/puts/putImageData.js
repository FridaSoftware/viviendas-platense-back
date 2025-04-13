const putController = require('../../../controllers/client/puts/putImageData.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');

const putImageDataHandler = async (req, res) => {

    const { _id, image, name, description } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(typeof image !== 'string') return res.status(400).send({ error: 'Incorrect DataType - image must be string' });
        if(typeof name !== 'string') return res.status(400).send({ error: 'Incorrect DataType - name must be string' });
        if(typeof description !== 'string') return res.status(400).send({ error: 'Incorrect DataType - description must be string' });

        const updatedClient = await putController(_id, image, name, description);
        
        res.status(200).send(updatedClient);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = putImageDataHandler;