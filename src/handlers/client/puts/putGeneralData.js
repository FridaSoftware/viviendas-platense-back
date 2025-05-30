const putController = require('../../../controllers/client/puts/putGeneralData.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putGeneralDataHandler = async (req, res) => {

    const { _id, state, saleDate, handoverDate, branch, other, contractSigned } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(state && (typeof state !== 'string')) return res.status(400).send({ error: 'Incorrect DataType - state must be string' });
        if(saleDate && (typeof saleDate !== 'string' || !validateDateFormat(saleDate))) return res.status(400).send({ error: 'Invalid saleDate format. Expected string format: DD/MM/YYYY' });
        if(handoverDate && (typeof handoverDate !== 'string' || !validateDateFormat(handoverDate))) return res.status(400).send({ error: 'Invalid handoverDate format. Expected string format: DD/MM/YYYY' });
        if(branch && !["La Plata", "Tandil"].includes(branch)) return res.status(400).send({ error: 'Incorrect data - branch must be "La Plata" or "Tandil"' });
        if(other && (typeof other !== 'string')) return res.status(400).send({ error: 'Incorrect DataType - other must be string' });
        if(contractSigned !== undefined && typeof contractSigned !== 'boolean') return res.status(400).send({ error: 'Incorrect DataType - contractSigned must be boolean' });

        const updatedClient = await putController(_id, state, saleDate, handoverDate, branch, other, contractSigned);
        
        res.status(200).send(updatedClient);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = putGeneralDataHandler;