const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

// JSON web token
// Token, such as JWTs (Json Web Tokens), are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication proccess and then stored on the client-side (e.g. in cookies or local storage) for later use.
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, 
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d"
        })
    } catch (error) {
        console.error(error);
    }
}

// Define the model or the collection name (model name should start with Capital letter which will saved automatically in lowercase with plural form "users")
const User = new mongoose.model("User", userSchema);

module.exports = User;