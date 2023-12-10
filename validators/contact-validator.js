const { z } = require("zod");

// Creating an object schema
const contactSchema = z.object({
    username: z.string({required_error: "Username is required"})
    .trim()
    .min(3,{message: "Username must be at least must be 3 charactors"})
    .max(255, {message: "Username must not be more than 255 charactors"}),
    email: z.string({required_error:"Email is required"})
    .trim()
    .email({ message : 'Please enter a valid Email'})
    .min(3,{message: "Email must be at least must be 3 charactors"})
    .max(255, {message: "Email must not be more than 255 charactors"}),
    message: z.string({required_error: "Message is required"})
    .min(3,{message: "Message must be at least must be 3 charactors"})
    .max(1024, {message: "Message must not be more than 1024 charactors"}),
});

module.exports = {contactSchema};