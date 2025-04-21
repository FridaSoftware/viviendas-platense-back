const putController = require('../../../controllers/client/puts/putCreateExhibit.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putCreateExhibitHandler = async (req, res) => {

    const { _id, date, title, body } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(!_id || !date || !title || !body ) return res.status(400).send({ error: 'Missing data' });

        if(!validateDateFormat(date) || typeof date !== 'string') return res.status(400).send({ error: 'Invalid date format, must be a string with this format: DD/MM/YYYY' });
        if(typeof title !== 'string') return res.status(400).send({ error: 'Incorrect DataType - title must be string' });
        if(typeof body !== 'string') return res.status(400).send({ error: 'Incorrect DataType - body must be string' });
        
        const newExhibit = await putController(_id, date, title, body);
                
        res.status(200).send(newExhibit);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putCreateExhibitHandler;
