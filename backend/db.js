const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/test";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connection Successful");
    } catch (err) {
        console.error("Connection failed:", err);
    }
}

module.exports = connectToMongo; 