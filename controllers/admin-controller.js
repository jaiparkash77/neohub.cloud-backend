const Users = require("../models/user-model");

const getAllUsers = async (req, res, next)=>{
    try {
        // const users = await Users.find().select({password: 0});
        const users = await Users.find({}, {password: 0});
        console.log(users);

        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found!"});
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

module.exports = getAllUsers;