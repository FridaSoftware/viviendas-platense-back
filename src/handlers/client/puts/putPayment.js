const putController = require('../../../controllers/client/puts/putPayment.js');
const getByIdController = require('../../../controllers/client/gets/getClientById.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const putPaymentHandler = async (req, res) => {
    const { _id, paymentPlan, payment } = req.body;

    if (!_id || !payment || !payment._id) {
        return res.status(400).send({ error: 'Missing required fields: _id, payment, or payment._id' });
    }

    try {
        const client = await getByIdController(_id);
        if (!client) {
            return res.status(404).send({ error: `No client found with id: ${_id}` });
        }

        // Determinar el paymentPath
        let paymentPath;
        switch (paymentPlan) {
            case 'Contado':
                paymentPath = 'financialData.lumpSum.payments';
                break;
            case 'Financiado':
                paymentPath = 'financialData.financed.firstPayments';
                break;
            case null:
            case undefined:
                paymentPath = 'financialData.financed.installments.payments';
                break;
            default:
                return res.status(400).send({ error: 'Invalid paymentPlan' });
        }

        // Validaciones
        if (payment.paidDate && !validateDateFormat(payment.paidDate)) {
            return res.status(400).send({ error: 'paidDate must be in DD/MM/YYYY format' });
        }
        if (payment.dueDate && !validateDateFormat(payment.dueDate)) {
            return res.status(400).send({ error: 'dueDate must be in DD/MM/YYYY format' });
        }
        if (payment.finalAmount && typeof payment.finalAmount !== 'number') {
            return res.status(400).send({ error: 'finalAmount must be number' });
        }
        if (typeof payment.amountWithoutLateFee !== 'number') {
            return res.status(400).send({ error: 'amountWithoutLateFee must be number' });
        }
        if (payment.lateFee && typeof payment.lateFee !== 'number') {
            return res.status(400).send({ error: 'lateFee must be a number' });
        }
        if (!['USD', 'ARS'].includes(payment.currency)) {
            return res.status(400).send({ error: 'currency must be USD or ARS' });
        }
        if (typeof payment.isPaid !== 'boolean') {
            return res.status(400).send({ error: 'isPaid must be a boolean' });
        }

        const updatedClient = await putController(client, paymentPath, payment);
        return res.status(200).send(updatedClient);

    } catch (error) {
        console.error('Error in putPaymentsHandler:', error);
        return res.status(500).send({ error: error.message || 'Internal server error' });
    }
};

module.exports = putPaymentHandler;