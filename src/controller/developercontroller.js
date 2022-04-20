const scholarship_developers= require("../models/scholarship_developers.js");
const scholarship_developers=async function(req,res){
    let sholarship_data=await developer_controller.find({
        $and:[{gender: "female"}, {percentage: { $gt:70 , $gte :70} }],

    });
    res.send({data: scholarship_data});

};
module.exports.scholarship_developers= scholarship_developers;