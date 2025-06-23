const ProductModel = require('../models/productModel')

exports.addProduct = async (req, res) => {
    try {
        const { product_name, product_price } = req.body
        if (!product_name || !product_price) {
            return res.status(400).json({ message: 'Please provide all required fields [product_name, product_price]' })
        }
        const newProduct = new ProductModel({ product_name, product_price })
        await newProduct.save()
        res.status(201).json({ message: 'Product added successfully', product: newProduct })
    } catch (error) {
        console.error('Error adding product:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
exports.getProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const products = await ProductModel.findById(id)
        res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.updateProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const { product_name, product_price } = req.body

        if (!product_name || !product_price) {
            return res.status(400).json({ message: 'Please provide all required fields [product_name, product_price]' })
        }

        const products = await ProductModel.findByIdAndUpdate(id, { product_name, product_price }, { new: true })
        res.status(200).json({ message: 'Product updated successfully', product: products })
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.deleteProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const products = await ProductModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'Product delete successfully' })
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
