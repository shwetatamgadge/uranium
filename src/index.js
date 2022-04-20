const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();



mongoose.connect("mondb+srv://Shweta:@cluster0.0icw1.mongodb.net/test"), {

    useNewUrlParser: true

}
     .then(() => console.log("MongoDb is connected"))
     .catch (err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});






