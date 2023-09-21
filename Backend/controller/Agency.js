const { Agency } = require("../model/Agency")


exports.fetchAllAgencies = async (req,res)=>{

    try{
        const agencies = await Agency.find({}).exec();

        const responseData = agencies.map((agency) => ({
            
            deptName: agency.deptName,
            address: agency.address,
            city: agency.city,
            coordinates: agency.coordinates,
            pinCode: agency.pinCode,
            state: agency.state,

          }));
        res.status(200).json(responseData);
    }
    catch(err){
        res.status(400).json(err);

    }
}