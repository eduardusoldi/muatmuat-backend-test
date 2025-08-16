const express = require('express')
const ControllerProduct = require('../controllers/controllerProduct')
const productRoute = express.Router()

productRoute.post('/createPostProducts', ControllerProduct.createProduct)
productRoute.get('/products', ControllerProduct.getProduct)
productRoute.get('/products/:id', ControllerProduct.getProductById)
productRoute.put('/products/:id', ControllerProduct.editProduct)
productRoute.patch('/products/:id', ControllerProduct.deleteProduct)

productRoute.get('/summaryProducts', ControllerProduct.summaryProductAndMerek)

module.exports = productRoute