const { Router } = require('express');
const router = Router();

const clientRouter = require('./clientRouter.js');
const incomeRouter = require('./incomeRouter.js');
const expenseRouter = require('./expenseRouter.js');


router.use('/client', clientRouter);
router.use('/income', incomeRouter);
router.use('/expense', expenseRouter);
router.use('/', async(req, res) => {
    res.send('Server working')
});

module.exports = router;