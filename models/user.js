const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        require : true
    },
    password : String
});

const userModel = mongoose.model('User', userSchema);

module.exports = {userModel};