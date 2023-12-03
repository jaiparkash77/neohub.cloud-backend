require('dotenv').config();
const express = require("express");
const router = require("./router/auth-router");
const connectDB = require("./utils/db");

const app = express();

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix  
app.use("/api/auth", router);


const PORT = 5000;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})

// To start server - npm run start
// Add nodmeon and script ("start": "nodemon server.js") - npm start 