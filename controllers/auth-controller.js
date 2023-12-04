const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home Logic
const home = async (req, res) =>{
    try {
        res.status(200).send("Welcome to neohub using router");
    } catch (error) {
        console.log(error)
    }
}

// Register Logic
// 1. Get Registration Data: Retreive user data (username, email, password)
// 2. Check Email Existance: Check if email is already registered.
// 3. Hash Password: Securely hashed the password.
// 4. Create User: Create a new user with hashed password.
// 5. Save to DB: Save user data to database.
// 6. Respond: Respond with "Registration Successful" or handle errors.

const register = async (req, res) =>{
    try {
        const { username, email, password, phone} = req.body;
        let existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message:"Email Already in use."})
        }
        // Hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);
        const user = await User.create({username, email, password, phone});
        res.status(201).json({message:'Registration successful', token: await user.generateToken(), userId: user._id.toString() });
    } catch (error) {
        res.status(400).send({msg: "Registration failed"});
    }
}
module.exports = {home, register}