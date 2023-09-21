const mongoose = require('mongoose');
const { Schema } = mongoose;

const alertSchema = new Schema({
  
    address:{type:String, required:true},

    
    
});


exports.Agency = mongoose.model('Alert', alertSchema);
