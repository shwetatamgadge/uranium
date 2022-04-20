const mongoose = require("mongoose"); // mongooose help us to create the


const batchModelSchema = new mongoose.Schema(
    {
        name: String,
size: Number,
program: {
    type: String,
    enum : [ "Backend", "Frontend" ]
}

},
{ timestamps: true }
);
module.exports = mongoose.model("batch", batchModelSchema);