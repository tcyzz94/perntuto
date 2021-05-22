const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllRestaurants', async (req, res) => {
    const result = await db.query('SELECT * FROM restaurants');
    res.json({
        status: "200",
        results: result.rows.length,
        data: result.rows,
        message: "GET ALL Success"
    });
})

router.get('/getOneRestaurant/:id', async (req, res) => {
    console.log(req.params.id);
    const result = await db.query('SELECT * FROM restaurants WHERE id =$1 LIMIT 1', [req.params.id]);
    if(result.rows.length>0){
        res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: result.rows,
        });
    }else{
        res.status(200).json({
            status: "error",
            results: result.rows.length,
            data: "NO DATA",
        });
    }
    
})

router.post('/createRestaurant', async (req, res) => {
    console.log(req.body);
    const result = await db.query("INSERT INTO  restaurants (name,location,price_range) VALUES ($1,$2,$3) returning *", [req.body.name, req.body.location, req.body.price_range])
    res.json({
        status: "200",
        message: "Create Success",
        results: result.rows.length,
        data: result.rows,
    });
})

router.post('/updateRestaurant/:id', async (req, res) => {
    const result = await db.query("UPDATE restaurants SET name = $1, location = $2,price_range =$3 WHERE id =$4 returning *",[req.body.name,req.body.location,req.body.price_range,req.params.id])
    res.json({
        status: "200",
        message: "UpDate Success",
        results: result.rows.length,
        data: result.rows,
    })
})

router.post('/deleteRestaurant/:id', async (req, res) => {
    const result = await db.query("DELETE from restaurants WHERE id = $1;",[req.params.id])
    res.json({
        status: "200",
        message: "Delete Success",
        results: result.rows.length,
        data: result.rows,
    })
})
module.exports = router;