const mongoose = require('mongoose');
const { Schema } = mongoose;

const agencySchema = new Schema({
    govtId:{type:Number, required:true, unique:true},
    password:{type:String, required:true},
    deptName:{type:String, required:true},
    address:{type:String},
    city:{type:String, required:true},
    coordinates:[],
    pinCode:{type:Number, required:true},
    state:{type:String, required:true},
    token:{type:String},
    
});


exports.Agency = mongoose.model('Agency', agencySchema);
