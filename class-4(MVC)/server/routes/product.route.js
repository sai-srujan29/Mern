const express = require('express')
const ProductModel = require('../models/products.model.js')
const {createProduct} = require('../controllers/product.controller.js')

const productRoutes = express.Router() // This helps u intialize routing

productRoutes.post('/create', createProduct)

module.exports = productRoutes