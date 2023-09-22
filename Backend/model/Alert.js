const mongoose = require('mongoose');
const { Schema } = mongoose;

const alertSchema = new Schema({
  
    Address:{type:String},
    status:{type:String}

    
    
});


exports.Alert = mongoose.model('Alert', alertSchema);
