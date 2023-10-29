const { mongoose } = require("../db");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model("userList",userSchema);

module.exports={userModel}