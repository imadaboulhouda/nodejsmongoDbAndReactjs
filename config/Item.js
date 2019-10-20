const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaItem = new Schema({
    name:{required:true, type:String},
    date:{type:Date,default:Date.now}
});
module.exports = Item = mongoose.model('item',schemaItem);