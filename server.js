require('dotenv').config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDB = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();

// Handling cors policy issue
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOptions));

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix  
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})

// To start server - npm run start
// Add nodmeon and script ("start": "nodemon server.js") - npm start 