const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port;
const router = require('./router/route')
const bodyParser = require("body-parser")
require('./db/prodb');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use([router])



app.listen(port, () => {
    console.log(`Our Server is running at port ${port}`)
})