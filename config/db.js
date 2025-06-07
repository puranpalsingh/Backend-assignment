const mongoose = require('mongoose');

const connectDb = async() => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    });
};

module.exports = connectDb;