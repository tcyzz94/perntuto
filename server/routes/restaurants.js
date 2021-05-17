const express = require('express');
const router = express.Router();
// const db = require('./db');

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

router.post('/updateRestaurant/:id',(req,res)=>{
    res.json({
        status:"200",
        message:"UpDate Success"
    })
})

router.post('/deleteRestaurant/:id',(req,res)=>{
    res.json({
        status:"200",
        message:"Delete Success"
    })
})
module.exports = router;