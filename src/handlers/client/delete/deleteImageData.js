const putController = require('../../../controllers/client/delete/deleteImageData.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');

const deleteImageDataHandler = async (req, res) => {

    const { clientId, imageId } = req.body;

    const client = await getByIdController(clientId);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${clientId}` });

    try {

        if(typeof imageId !== 'string') return res.status(400).send({ error: 'Incorrect DataType - imageId must be string' });

        const updatedClient = await putController(clientId, imageId);
        
        res.status(200).send(updatedClient);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = deleteImageDataHandler;