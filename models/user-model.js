const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

// Secure the password with bcrypt
userSchema.pre("save", async function(next){
    // console.log("Pre method", this)
    const user = this;

    if(!user.isModified("password")){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})

// Define the model or the collection name (model name should start with Capital letter which will saved automatically in lowercase with plural form "users")
const User = new mongoose.model("User", userSchema);

module.exports = User;