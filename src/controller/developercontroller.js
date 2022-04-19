const scholarship_developers = require("..models/scholarship_developers.js");
const scholarship_developers = async function (req, res) {
    let scholarship_data = await developer_controller.find({
      $and: [{ gender: "Female" }, { percentage: { $gt: 70, $gte: 70 } }],
    });
    res.send({ data: scholarship_data });
  };
  module.exports.scholarship_developers = scholarship_developers;



