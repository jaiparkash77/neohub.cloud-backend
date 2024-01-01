const { z } = require("zod");

// Creating an object schema -
const loginSchema = z.object({
    email: z.string({required_error:"Email is required"})
    .trim()
    .email({ message : 'Please enter a valid Email'})
    .min(3,{message: "Email must be at least 3 charactors"})
    .max(255, {message: "Email must not be more than 255 charactors"}),
    password: z.string({required_error:"Password is required"})
    .min(7,{message: "Password must be at least 6 charactors"})
    .max(1024, {message: "Password must not be more than 1024 charactors"}),
});

//loginSchema.extend is extending email and password from login schema
const signupSchema = loginSchema.extend({
    username: z.string({required_error: "Username is required"})
    .trim()
    .min(3,{message: "Username must be at least 3 charactors"})
    .max(255, {message: "Username must not be more than 255 charactors"}),   
    phone: z.string({ message : 'Phone is required'})
    .trim()
    .min(10,{message: "Phone must be at least 10 charactors"})
    .max(20, {message: "Phone must not be more than 20 charactors"}),
});


module.exports = {signupSchema, loginSchema};