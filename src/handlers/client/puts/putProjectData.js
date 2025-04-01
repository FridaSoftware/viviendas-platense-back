const putController = require('../../../controllers/client/puts/putProjectData.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putProjectDataHandler = async (req, res) => {

    const { _id, address, city, model, turnKey, roof, sqm, base, leveling, areas, items, additionals } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(address && (typeof address !== 'string')) return res.status(400).send({ error: 'Incorrect DataType - address must be string' });
        if(city && (typeof city !== 'string')) return res.status(400).send({ error: 'Incorrect DataType - city must be string' });
        if(model && (typeof model !== 'string')) return res.status(400).send({ error: 'Incorrect DataType - model must be string' });
        if(turnKey !== undefined && typeof turnKey !== 'boolean') return res.status(400).send({ error: 'Incorrect DataType - turnKey must be boolean' });
        if(roof && typeof roof.type !== 'string') return res.status(400).send({ error: 'Incorrect DataType - roof.type must be string' });
        if(roof && typeof roof.slope !== 'string') return res.status(400).send({ error: 'Incorrect DataType - roof.slope must be string' });
        if(sqm && typeof sqm.covered !== 'number') return res.status(400).send({ error: 'Incorrect DataType - sqm.covered must be number' });
        if(sqm && sqm.gallery && typeof sqm.gallery !== 'number') return res.status(400).send({ error: 'Incorrect DataType - sqm.gallery must be number' });
        if(sqm && sqm.pergola && typeof sqm.pergola !== 'number') return res.status(400).send({ error: 'Incorrect DataType - sqm.pergola must be number' });
        if(base && typeof base.type !== 'string') return res.status(400).send({ error: 'Incorrect DataType - base.type must be string' });
        if(base && typeof base.state !== 'string') return res.status(400).send({ error: 'Incorrect DataType - base.state must be string' });
        if(base && base.date && (typeof base.date !== 'string' || !validateDateFormat(base.date))) return res.status(400).send({ error: 'Invalid base.date format. Expected string format: DD/MM/YYYY' });
        if(leveling && leveling.date && (typeof leveling.date !== 'string' || !validateDateFormat(leveling.date))) return res.status(400).send({ error: 'Invalid leveling.date format. Expected string format: DD/MM/YYYY' });
        if(leveling && leveling.state && typeof leveling.state !== 'string') return res.status(400).send({ error: 'Incorrect DataType - leveling.state must be string' });
        if(areas && (!Array.isArray(areas) || areas.length === 0)) return res.status(400).send({ error: 'Incorrect DataType - areas must be a non-empty array' });
        if(items && (!Array.isArray(items) || items.length === 0)) return res.status(400).send({ error: 'Incorrect DataType - items must be a non-empty array' });
        if(additionals && (!Array.isArray(additionals) || additionals.length === 0)) return res.status(400).send({ error: 'Incorrect DataType - additionals must be a non-empty array' });

        const updatedClient = await putController(_id, address, city, model, turnKey, roof, sqm, base, leveling, areas, items, additionals);

        res.status(200).send(updatedClient);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = putProjectDataHandler;