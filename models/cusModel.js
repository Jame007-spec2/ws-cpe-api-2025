const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    cus_name: { type: String,require:true },
    cus_tel: { type: String,require:true },
    cus_planet: { type: String,require:true }
},{timestamps:true, versionKey: false})

module.exports = mongoose.model('customers',ProductSchema)
