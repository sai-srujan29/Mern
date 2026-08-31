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

const getAllProducts = async(req, res) => {
    const products = await ProductModel.find({})
    res.send(products)
}

const updateProduct = async(req, res) => {
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    res.send(updatedProduct)
}

const deleteProduct = async(req, res) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
}
module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}