const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {
    type: String,
    maxlength: 9
},  
 cost: {
    type: Number,
    min: 80,
   max: 1500
} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 