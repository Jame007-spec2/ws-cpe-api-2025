const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name: { type: String,require:true },
    product_price: { type: Number,require:true }
},{timestamps:true, versionKey: false})

module.exports = mongoose.model('products',ProductSchema)