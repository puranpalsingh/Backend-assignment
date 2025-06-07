const mongoose = require('mongoose');

const PreferncesSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    theme : String,
    dashboardLayout : String
})

const PreferenceModel = mongoose.model('Preference',PreferncesSchema);

module.exports = {PreferenceModel};