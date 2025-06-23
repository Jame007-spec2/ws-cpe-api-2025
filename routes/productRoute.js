const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    addProduct,
    getProductsById,
    updateProductsById,
    deleteProductsById }
    = require('../controllers/productController');

const {
    getAllCus,
    addCus,
    getCusById,
    updateCusById,
    deleteCusById }
    = require('../controllers/cusController');

router.get('/getAllProducts', getAllProducts);
router.get('/getProductsById/:id', getProductsById)
router.post('/addProduct', addProduct)
router.put('/updateProductsById/:id', updateProductsById)
router.delete('/deleteProductsById/:id', deleteProductsById)

router.get('/getAllCus', getAllCus);
router.get('/getCusById/:id', getCusById)
router.post('/addCus', addCus)
router.put('/updateCusById/:id', updateCusById)
router.delete('/deleteCusById/:id', deleteCusById)

module.exports = router
