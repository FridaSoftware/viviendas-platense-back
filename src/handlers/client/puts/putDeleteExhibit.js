const putController = require('../../../controllers/client/puts/putDeleteExhibit.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');

const putDeleteExhibitHandler = async (req, res) => {

    const { _id, exhibitId } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(!exhibitId) return res.status(400).send({ error: 'Missing data' });
        
        const deletedExhibit = await putController(client, exhibitId);
                
        res.status(200).send(deletedExhibit);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putDeleteExhibitHandler;
