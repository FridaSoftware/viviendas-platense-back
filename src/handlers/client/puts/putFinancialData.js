const putController = require('../../../controllers/client/puts/putFinancialData.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putFinancialDataHandler = async (req, res) => {

    const { _id, vendor, totalCost, downPayment } = req.body;

    const client = await getByIdController(_id);

    if(!client) return res.status(400).send({ error: `No client was found with id: ${_id}` });

    try {

        if(vendor && typeof vendor.cost !== 'number') return res.status(400).send({ error: 'Incorrect DataType - vendor.cost must be number' });
        if(vendor && typeof vendor.amountPaid !== 'number') return res.status(400).send({ error: 'Incorrect DataType - vendor.amountPaid must be number' });
        if(vendor && typeof vendor.remaining !== 'number') return res.status(400).send({ error: 'Incorrect DataType - vendor.remaining must be number' });

        if(totalCost && typeof totalCost !== 'number') return res.status(400).send({ error: 'Incorrect DataType - totalCost must be number' });

        if(downPayment && (typeof downPayment.paidDate !== 'string' || !validateDateFormat(downPayment.paidDate))) return res.status(400).send({ error: 'Invalid downPayment.date format. Expected string format: DD/MM/YYYY' });
        if(downPayment && typeof downPayment.finalAmount !== 'number') return res.status(400).send({ error: 'Incorrect DataType - downPayment.finalAmount must be number' });
        if(downPayment && !["USD", "ARS"].includes(downPayment.currency)) return res.status(400).send({ error: 'Incorrect data - downpayment.currency must be "USD" or "ARS"' });
        if(downPayment && typeof downPayment.paymentMethod !== 'string') return res.status(400).send({ error: 'Incorrect DataType - downPayment.paymentMethod must be string' });

        const updatedClient = await putController( client, vendor, totalCost, downPayment);

        res.status(200).send(updatedClient);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = putFinancialDataHandler;