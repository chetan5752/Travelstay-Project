const { required } = require("joi");
const mongoose=require("mongoose");
const schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

//passport local mongoose automatically add username and password

const userSchema=new schema({
    email:{
        type: String,
        required : true,
    }
})

//we plugin bcz automatically add username, password, hashing, salting

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);