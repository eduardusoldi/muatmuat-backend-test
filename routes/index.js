const merekRoute = require('./merekRoute')
const productRoute = require('./productRoute')
const express = require('express')
const router = express.Router()

router.use('/api', merekRoute) // /mereks
router.use('/api', productRoute) // /products

module.exports = router