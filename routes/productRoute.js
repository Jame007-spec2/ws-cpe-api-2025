const express = require('express');
const router = express.Router();

const { getAllProducts, addProduct,getProductsById,updateProductsById,deleteProductsById } = require('../controllers/productController');

router.get('/getAllProducts', getAllProducts);
router.get('/getProductsById/:id', getProductsById)

router.post('/addProduct', addProduct)
router.put('/updateProductsById/:id', updateProductsById)

router.delete('/deleteProductsById/:id', deleteProductsById)

module.exports = router