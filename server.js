require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors =require('cors');

const app = express();
var restaurants = require('./routes/restaurants');
//Middleware
app.use(morgan("tiny"));
// app.use(cors);
app.use(express.json());
//Route
app.use('/restaurants',restaurants);

//Port
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Landing API");
})
app.listen(port, () => {
    console.log(`Welcome ${port}`);

});