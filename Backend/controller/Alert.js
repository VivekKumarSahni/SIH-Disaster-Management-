const { Alert } = require("../model/Alert")


exports.fetchAllAlerts = async (req,res)=>{

    try{
        const alerts = await Alert.find({}).exec();
        res.status(200).json(alerts);
    }
    catch(err){
        res.status(400).json(err);

    }
}