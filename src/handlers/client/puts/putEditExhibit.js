const putController = require('../../../controllers/client/puts/putEditExhibit.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putEditExhibitHandler = async (req, res) => {

    const { _id, exhibitData } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(!exhibitData._id || !exhibitData.date || !exhibitData.title || !exhibitData.body ) return res.status(400).send({ error: 'Missing data' });

        if(!validateDateFormat(exhibitData.date) || typeof exhibitData.date !== 'string') return res.status(400).send({ error: 'Invalid exhibitData.date format, must be a string with this format: DD/MM/YYYY' });
        if(typeof exhibitData.title !== 'string') return res.status(400).send({ error: 'Incorrect DataType - exhibitData.title must be string' });
        if(typeof exhibitData.body !== 'string') return res.status(400).send({ error: 'Incorrect DataType - exhibitData.body must be string' });
        
        const editedExhibit = await putController(client, exhibitData);
                
        res.status(200).send(editedExhibit);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putEditExhibitHandler;
