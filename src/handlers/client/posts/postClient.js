const postController = require('../../../controllers/client/posts/postClient.js');
const { validateDateFormat } = require('../../../utils/validateUtils.js');

const postClientHandler = async (req, res) => {
    const { dni, name, address, city, phone, projectAddress, projectCity, model, downPayment } = req.body;

    try {
        
        if(!dni || !name || !address || !city || !projectAddress || !projectCity) return res.status(400).send({ error: 'Missing data' });

        if(typeof dni !== 'string') return res.status(400).send({ error: 'Incorrect DataType - dni must be string' });
        if(typeof name !== 'string') return res.status(400).send({ error: 'Incorrect DataType - name must be string' });
        if(typeof address !== 'string') return res.status(400).send({ error: 'Incorrect DataType - address must be string' });
        if(typeof city !== 'string') return res.status(400).send({ error: 'Incorrect DataType - city must be string' });
        if(phone && typeof phone !== 'string') return res.status(400).send({ error: 'Incorrect DataType - phone must be string' });
        if(typeof projectAddress !== 'string') return res.status(400).send({ error: 'Incorrect DataType - projectAddress must be string' });
        if(typeof projectCity !== 'string') return res.status(400).send({ error: 'Incorrect DataType - projectCity must be string' });
        if(model && typeof model !== 'string') return res.status(400).send({ error: 'Incorrect DataType - model must be string' });

        if(downPayment){
            if(!downPayment.paidDate || !downPayment.finalAmount || !downPayment.paymentMethod || !downPayment.isPaid) return res.status(400).send({ error: 'Missing downPayment data' });
            if(!validateDateFormat(downPayment.paidDate)) return res.status(400).send({ error: 'Invalid paidDate format. Expected format: DD/MM/YYYY' });
            if(typeof downPayment.paidDate !== 'string') return res.status(400).send({ error: 'Incorrect DataType - downPayment.paidDate must be string' });
            if(typeof downPayment.finalAmount !== 'number') return res.status(400).send({ error: 'Incorrect DataType - downPayment.finalAmount must be number' });
            if(typeof downPayment.paymentMethod !== 'string') return res.status(400).send({ error: 'Incorrect DataType - downPayment.paymentMethod must be string' });
        }

        const newClient = await postController(dni, name, address, city, phone, projectAddress, projectCity, model, downPayment);
        res.status(200).send(newClient);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postClientHandler;