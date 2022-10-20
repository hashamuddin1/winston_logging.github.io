const mongoose = require('mongoose');

//creating schema of ads detail
const citizen_schema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
    }
})

//creating collection
const citizen_detail = new mongoose.model('citizen', citizen_schema)

//export collection
module.exports = { citizen_detail };