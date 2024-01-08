const User = require("../models/user-model");
const Contact = require("../models/contact-model");

//  *-----------------------------------
// Get All Users Logic
//  *-----------------------------------

const getAllUsers = async (req, res, next)=>{
    try {
        // const users = await Users.find().select({password: 0});
        const users = await User.find({}, {password: 0});
        console.log(users);

        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found!"});
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

//  *-----------------------------------
// Get User by ID Logic
//  *-----------------------------------

const getUserById = async(req, res, next) =>{
    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id},{password: 0});
        if(!user){
            return res.status(404).json({message: "User not found!"})
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}


//  *-----------------------------------
// Update Single user by ID Logic
//  *-----------------------------------

const updateUserById = async(req, res, next) =>{
    try {
        const id = req.params.id;
        const updates = req.body;
        let user = await User.updateOne({_id: id}, { $set: updates });
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

//  *-----------------------------------
// Delete user by ID Logic
//  *-----------------------------------

const deleteUserById = async(req, res, next) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        res.status(200).json({message: "User Deleted Succssfully"});
    } catch (error) {
        next(error);
    }
}

//  *-----------------------------------
// Get All Contacts Logic
//  *-----------------------------------

const getAllContacts = async(req, res, next) =>{
    try {
        const contacts = await Contact.find();
        console.log(contacts);

        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: "No Contact found!"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

//  *-----------------------------------
// Delete contact by ID Logic
//  *-----------------------------------

const deleteContactById = async(req, res, next) =>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        res.status(200).json({message: "Contact Deleted Succssfully"});
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers, getAllContacts, getUserById, deleteUserById, updateUserById, deleteContactById};