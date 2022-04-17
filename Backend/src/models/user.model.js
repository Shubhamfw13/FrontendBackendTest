const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")
const userSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String, required : true},
    password : {type : String, required : true},
    role : {type : String, enum : ["manager"], required : true}
},{
    versionKey : false,
    timestamps : true
})

userSchema.pre("save", function (next){
    if(!this.isModified("password")) return next();
    var hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword=function(password){
    return bcryptjs.compareSync(password, this.password);
}



const User = mongoose.model("user", userSchema);
module.exports = User;