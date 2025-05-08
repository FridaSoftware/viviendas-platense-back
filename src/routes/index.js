const { Router } = require('express');
const router = Router();

const clientRouter = require('./clientRouter.js');
const incomeRouter = require('./incomeRouter.js');
const expenseRouter = require('./expenseRouter.js');
const cashFlowRouter = require('./cashFlowRouter.js');
const categoryRouter = require('./categoryRouter.js');
// const expenseCategoryRouter = require('./expenseCategoryRouter.js');


router.use('/client', clientRouter);
router.use('/income', incomeRouter);
router.use('/expense', expenseRouter);
router.use('/cashFlow', cashFlowRouter);
router.use('/category', categoryRouter);
// router.use('/expense/category', expenseCategoryRouter);

router.use('/', async(req, res) => {
    res.send('Server working')
});

module.exports = router;