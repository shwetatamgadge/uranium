// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;
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