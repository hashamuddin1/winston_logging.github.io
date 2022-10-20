const express = require('express');
const router = express.Router();
const { fullname, specific_field, lodash_function, updcit, matchname, sort_age, deletecitizen, allcitizen, addcitizen } = require('../controller/demo')

//CRUD APIs
//C CREATE
//R READ
//U UPDATE
//D DELETE
router.get("/api/specific_field", specific_field)
    //fullname
router.get("/api/fullname", fullname)
    //get all citizen
router.get("/api/allcitizen", allcitizen)
    //insert a citizen
router.post("/api/insertcitizen", addcitizen)
    //delete a citizen
router.delete("/api/delcit/:id", deletecitizen)
    //update a citizen
router.put("/api/updcit", updcit)
    //sort acc to age
router.get("/api/sortage", sort_age)
    //matchname
router.get("/api/matchname", matchname)
    //lodash function
router.get("/api/lodash_function", lodash_function)

module.exports = router