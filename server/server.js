require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const mountRoutes = require('./routes')
//Middleware
app.use(morgan(':date[web] | :url'));
app.use(express.json());
//Route
mountRoutes(app);

//Port
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Landing API");
})
app.listen(port, () => {
    console.log(`Welcome ${port}`);

});