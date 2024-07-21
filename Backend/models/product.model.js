const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    title:{type:String,require:true},
    price:{type:Number,require:true},
    description:{type:String,require:true},
    thumbnail:{type:String,require:true},
    category:{type:String,require:true},
    stock:{type:Number,require:true},
    model:{type:String,require:true},
})

module.exports = mongoose.model('Product',productSchema)