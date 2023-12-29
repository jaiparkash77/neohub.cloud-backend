const Service = require("../models/service-model");

const services = async( req, res )=>{
    try {
        const response = await Service.find();
        if(!response){
            //Handle the case where no document was found
            res.status(404).json({message: "No service found"});
            return;
        }

        res.status(200).json({message: response});
    } catch (error) {
        console.log(`Services: ${error}`);
    }
}

module.exports = services