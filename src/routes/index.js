const { Router } = require('express');


const router = Router();

router.use('/', async(req, res) => {
    res.send('hola sofi')
});

module.exports = router;