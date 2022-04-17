const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true},
    id : {type : Number , required : true,  unique : true},
    resident_type : {type : String, enum : ['owner', 'tenant'], required : true},
    flat_block : {type : String, enum : ["A", "B", "C", "D", "E"], required : true},
    flat_floor : {type : Number, min : 1, max : 10, required : true},
    flat_no : {type : Number, min : 1, max : 100, unique : true, required : true},
    residents : [{type : mongoose.Schema.Types.ObjectId, ref : "resident"}]
},{
    versionKey : false
})



module.exports = mongoose.model("flat", flatSchema);
