
// Home Logic
const home = async (req, res) =>{
    try {
        res.status(200).send("Welcome to neohub using router");
    } catch (error) {
        console.log(error)
    }
}

// Register Logic
const register = async (req, res) =>{
    try {
        console.log(req.body)
        res.status(200).send({message: req.body})
    } catch (error) {
        res.status(400).send({msg: "Registration failed"});
    }
}
module.exports = {home, register}