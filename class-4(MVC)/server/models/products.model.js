const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    ratings: {
        type: Number
    },

    isInStock: {
        type: Boolean,
        required: true
    }
}, {timestamps : true})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
    
