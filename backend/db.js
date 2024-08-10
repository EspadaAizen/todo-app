
const mongoose = require('mongoose');
require('dotenv').config();  // Ensure this is at the top

const mongoURI = process.env.MONGO_URI;    


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connection Successful");
    } catch (err) {
        console.error("Connection failed:", err);
    }
}

module.exports = connectToMongo; 
