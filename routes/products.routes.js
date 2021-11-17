const express = require('express')
const router = express.Router()
const productsController = require('../controller/products.controller')

// get requests
router.get('/',productsController.showProducts)

//post requests
router.post('/',productsController.createProducts)
module.exports = router