const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //this field can added data when input a form
    name:{
        type:String,//datatype
        required:true,//validate
    },
    gmail:{
        type:String,//datatype
        required:true,//validate
    },
    age:{
        type:Number,//datatype
        required:true,//validate
    },
    address:{
        type:String,//datatype
        required:true,//validate
    }
    
});

module.exports = mongoose.model(
    "UserModel",//file name
    userSchema //function name
    )
