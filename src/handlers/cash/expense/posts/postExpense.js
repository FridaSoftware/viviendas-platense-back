const postController = require('../../../../controllers/cash/expense/posts/postExpense.js');
const { validateDateFormat } = require('../../../../utils/validateUtils.js');

const postExpenseHandler = async (req, res) => {
    const { date, amount, currency, paymentMethod, category, description } = req.body;

    try {
        
        if(!date || !amount || !paymentMethod) return res.status(400).send({ error: 'Missing data' });

        if(typeof date !== 'string') return res.status(400).send({ error: 'Incorrect DataType - date must be string' });
        if(!validateDateFormat(date)) return res.status(400).send({ error: 'Invalid date format. Expected format: DD/MM/YYYY' });
        if (typeof amount !== 'number' || isNaN(amount)) {
            return res.status(400).send({ error: 'Incorrect DataType - amount must be a valid number' });
        };
        if(typeof currency !== 'string') return res.status(400).send({ error: 'Incorrect DataType - currency must be string' });
        if(typeof paymentMethod !== 'string') return res.status(400).send({ error: 'Incorrect DataType - paymentMethod must be string' });
        if(typeof category !== 'string') return res.status(400).send({ error: 'Incorrect DataType - category must be string' });
        if(typeof description !== 'string') return res.status(400).send({ error: 'Incorrect DataType - description must be string' });

        const newExpense = await postController(date, amount, currency, paymentMethod, category, description);
        res.status(200).send('Expense created');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postExpenseHandler;