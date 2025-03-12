const putController = require('../../../controllers/client/puts/putCreateContract.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putCreateContractHandler = async (req, res) => {

    const { _id, contractDate, model, roofType, roofSlope, baseType, items, areas, sqm, additionals, paymentPlan, totalCost, payments, installmentsDate, installmentsQuantity, installmentsPrice } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {
        
        if(!_id || !contractDate || !roofType || !roofSlope || !baseType || !items || !areas || !sqm || !paymentPlan || !totalCost || !payments) return res.status(400).send({ error: 'Missing data' });
        if(paymentPlan === 'Financiado' && (!installmentsDate || !installmentsQuantity || !installmentsPrice)) return res.status(400).send({ error: 'Missing total cost' });
        if(!client.projectData.model && !model) return res.status(400).send({ error: 'Missing model' });

        if(!validateDateFormat(contractDate)) return res.status(400).send({ error: 'Invalid contractDate format. Expected format: DD/MM/YYYY' });
        if(typeof contractDate !== 'string') return res.status(400).send({ error: 'Incorrect DataType - contractDate must be string' });
        if(model && typeof model !== 'string') return res.status(400).send({ error: 'Incorrect DataType - model must be string' });
        if(typeof roofType !== 'string') return res.status(400).send({ error: 'Incorrect DataType - roofType must be string' });
        if(typeof roofSlope !== 'string') return res.status(400).send({ error: 'Incorrect DataType - roofSlope must be string' });
        if(typeof baseType !== 'string') return res.status(400).send({ error: 'Incorrect DataType - baseType must be string' });
        if (!Array.isArray(items) || items.length === 0) return res.status(400).send({ error: 'Incorrect DataType - items must be a non-empty array' });
        if (!Array.isArray(areas) || areas.length === 0) return res.status(400).send({ error: 'Incorrect DataType - areas must be a non-empty array' });
        if(typeof sqm !== 'object') return res.status(400).send({ error: 'Incorrect DataType - sqm must be object' });
        if(typeof sqm.covered !== 'number') return res.status(400).send({ error: 'Incorrect DataType - sqm.covered must be number' });
        if(sqm.gallery && typeof sqm.gallery !== 'number') return res.status(400).send({ error: 'Incorrect DataType - sqm.gallery must be number' });
        if(sqm.pergola && typeof sqm.pergola !== 'number') return res.status(400).send({ error: 'Incorrect DataType - sqm.pergola must be number' });
        if (additionals && !Array.isArray(additionals)) return res.status(400).send({ error: 'Incorrect DataType - additionals must be an array' });
        if(typeof paymentPlan !== 'string') return res.status(400).send({ error: 'Incorrect DataType - paymentPlan must be string' });
        if(typeof totalCost !== 'number') return res.status(400).send({ error: 'Incorrect DataType - totalCost must be number' });
        if (!Array.isArray(payments) || payments.length === 0) return res.status(400).send({ error: 'Incorrect DataType - payments must be a non-empty array' });
        if(installmentsDate && !validateDateFormat(installmentsDate)) return res.status(400).send({ error: 'Invalid installmentsDate format. Expected format: DD/MM/YYYY' });
        if(installmentsDate && typeof installmentsDate !== 'string') return res.status(400).send({ error: 'Incorrect DataType - installmentsDate must be string' });
        if(installmentsQuantity && typeof installmentsQuantity !== 'number') return res.status(400).send({ error: 'Incorrect DataType - installmentsQuantity must be number' });
        if(installmentsPrice && typeof installmentsPrice !== 'number') return res.status(400).send({ error: 'Incorrect DataType - installmentsPrice must be number' });

        const newContract = await putController(_id, client, contractDate, model, roofType, roofSlope, baseType, items, areas, sqm, additionals, paymentPlan, totalCost, payments, installmentsDate, installmentsQuantity, installmentsPrice);
        
        res.status(200).send(newContract);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = putCreateContractHandler;