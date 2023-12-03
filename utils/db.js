const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/neohub"
const URI = process.env.MONGODBURI;

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successfully to DB");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0)
    }
}

module.exports = connectDB;