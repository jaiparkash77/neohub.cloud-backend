const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to neohub");
});

app.get("/register", (req, res)=>{
    res.status(200).send("Register to neohub");
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// To start server - npm run start
// Add nodmeon and script ("start": "nodemon server.js") - npm start 