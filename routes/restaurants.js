const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('restaurant index');
})

router.get('/reviews', (req, res) => {
    res.status(200).json({
        status:"success",
        data:"ressssss"
    });
})

module.exports = router;