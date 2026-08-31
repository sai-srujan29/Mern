const ProductModel = require('../models/products.model.js')

const createProduct = async (req, res) => {
    const product = await ProductModel.create({
        product_name : req.body.product_name,
        price : req.body.price,
        ratings : req.body.ratings,
        isInStock : req.body.isInStock
    })
    res.send(product)
}

module.exports = {
    createProduct
}