const express = require('express')
const router = express.Router()
const authFoodPartnerMiddleware = require('../middleware/authMiddleware').authFoodPartnerMiddleware
const { createFood } = require('../controller/foodController')
const multer  = require('multer')
const upload = multer({
    storage: multer.memoryStorage()
})


router.post('/', authFoodPartnerMiddleware, upload.single('video'), createFood)

module.exports = router