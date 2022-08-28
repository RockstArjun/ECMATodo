const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ECMATodoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
});

const ECMATodo = mongoose.model("ECMATodo",ECMATodoSchema);
module.exports = ECMATodo;