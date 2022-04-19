const mongoose = require("mongoose"); // mongooose help us to create the

const ObjectId = mongoose.Schema.Types.ObjectId;

const developerModelSchema = new mongoose.Schema(
  {
   
    name:String,
    gender:{
    type: String,
    enum :[ "male","female","other"]
    },
    percentage:Number,
batch:{
    type: ObjectId,
    ref:" batchdetail"
} 
  },  
{ timestamps: true }

);
module.exports = mongoose.model("developer", developerModelSchema);

