const express = require('express')
const router = express.Router()
const authFoodPartnerMiddleware = require('../middleware/authMiddleware').authFoodPartnerMiddleware
const { createFood } = require('../controller/foodController')

router.get('/', authFoodPartnerMiddleware, (req, res) => {
    res.send('hey')
})

router.post('/', createFood)

module.exports = router