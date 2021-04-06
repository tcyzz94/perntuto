const express = require('express');
const router = express.Router();

router.get('/getAllRestaurants', (req, res) => {
    res.json({
        status: "200",
        message: "GET ALL Success"
    });
})

router.get('/getOneRestaurant/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: "ressssss"
    });
})

router.post('/createRestaurant', (req, res) => {
    res.json({
        status: "200",
        message: "Create Success"
    });
})
module.exports = router;