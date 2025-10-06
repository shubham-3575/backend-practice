const mongoose = require('mongoose'); //gettig the mongoose

mongoose.connect("mongodb://127.0.0.1:27017/testapp1"); //making the database

const userSchema = mongoose.Schema({ //making the schema
    image : String,
    email:String,
    name:String
})

module.exports = mongoose.model('user',userSchema);
