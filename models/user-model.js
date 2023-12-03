const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Define the model or the collection name (model name should start with Capital letter which will saved automatically in lowercase with plural form "users")
const User = new mongoose.model("User", userSchema);

module.exports = User;