const express = require("express");
const router = express.Router();

// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to neohub using router");
// });

router.route("/").get((req, res)=>{
    res.status(200).send("Welcome to neohub using router");
});

router.route("/register").get((req, res)=>{
    res.status(200).send("Register by router")
})

module.exports = router;