const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect("mongodb+srv://socialmedia:socialmedia@cluster0.jq6fm.mongodb.net/apartmentManager?retryWrites=true&w=majority");
}