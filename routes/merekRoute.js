const express = require('express')
const ControllerMerek = require('../controllers/controllerMerek')
const merkRoute = express.Router()

merkRoute.post('/createPostMerk', ControllerMerek.createMerek)
// merkRoute.get('/merek', ControllerProduct.getProduct)
// merkRoute.get('/merek/:id', ControllerProduct.getProductById)
// merkRoute.put('/merek/:id', ControllerProduct.editProduct)
// merkRoute.delete('/merek/:id', ControllerProduct.deleteProduct)

module.exports = merkRoute