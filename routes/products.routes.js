const express = require('express')
const router = express.Router()
const productsValidation = require('../middleware/validation/product.validation')
const productsController = require('../controller/products.controller')

// get requests
router.get('/',productsController.showProducts)
router.get('/:id',productsController.filterProductsById)

//post requests
router.post('/',productsValidation.validateProduct,productsController.createProducts)
router.post('/:id',productsValidation.validateProduct,productsController.updateProducts)
module.exports = router