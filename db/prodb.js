//DATABASE CONNECTION
require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.db_url, {
    useNewUrlParser: true //FALTU KI WARNING
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})