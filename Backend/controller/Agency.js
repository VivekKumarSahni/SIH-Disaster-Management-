const { Agency } = require("../model/Agency")


exports.fetchAllAgencies = async (req,res)=>{

    try{
        const agencies = await Agency.find({}).exec();
        res.status(200).json(agencies);
    }
    catch(err){
        res.status(400).json(err);

    }
}