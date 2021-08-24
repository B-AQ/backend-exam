const mongoose = require("mongoose");


const flowerSchema = new mongoose.Schema({
    name: {type:String},
    photo: {type:String},
    instructions:{type:String},
    userEmail:{type:String},
});


const flowerModel = mongoose.model('flowers',flowerSchema);
module.exports = {flowerModel}