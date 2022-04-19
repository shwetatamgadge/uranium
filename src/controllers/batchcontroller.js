const batchmodel= require("../models/batchmodel.js");



const createbatch =async function (req,res){
    const batch =req.body;
    let batchcreate =await batchmodel. create(batch);
    res.send({data:batchcreate});

};
module.exports.createbatch=createbatch;