

// 1) file 1

// NOTE: Here assigning Schema DataTypes for properties 



const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
 // name, email, phone, city

 name:{
    type:String,    // data type
    required: true, // boolean values
 },
 email:{
    type:String,
    required:true,
 },
 password:{
   type:String,
   required:true,
},

})
module.exports = mongoose.model('Employee',employeeSchema)