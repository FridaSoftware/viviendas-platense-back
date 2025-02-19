const { Router } = require('express');
const router = Router();

const clientRouter = require('./clientRouter.js');

router.use('/client', clientRouter);
router.use('/', async(req, res) => {
    res.send('Server working')
});

module.exports = router;