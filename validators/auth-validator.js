const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
    username: z.string({required_error: "Username is required"})
    .trim()
    .min(3,{message: "Username must be at least must be 3 charactors"})
    .max(255, {message: "Username must not be more than 255 charactors"}),
    email: z.string({required_error:"Email is required"})
    .trim()
    .email({ message : 'Please enter a valid Email'})
    .min(3,{message: "Email must be at least must be 3 charactors"})
    .max(255, {message: "Email must not be more than 255 charactors"}),
    password: z.string({required_error:"Password is required"})
    .min(7,{message: "Password must be at least must be 6 charactors"})
    .max(1024, {message: "Email must not be more than 1024 charactors"}),
    phone: z.string({ message : 'Phone is required'})
    .trim()
    .min(10,{message: "Email must be at least must be 10 charactors"})
    .max(20, {message: "Email must not be more than 20 charactors"}),
});

module.exports = signupSchema;