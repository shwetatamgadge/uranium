const express = require('express');
const router = express.Router();

const devlopersController= require("../controllers/developersController")
const batchescontroller= require("../controllers/batchesController");


  //createdevlopers= async function (req, res) {
 //constconst createbatch= async function (req, res) {
    router.post("/createdevlopers", devlopersController.createdevlopers );
    
     router.post("/createbatch", batchescontroller.createbatch );

     router.get("/scholarship_developers" , devlopersController.scholarship_developers)

     router.get("/developersers" , devlopersController.developers)
 

module.exports = router;