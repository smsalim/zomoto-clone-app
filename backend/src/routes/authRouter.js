const express = require('express')
const router = express.Router()
const { authController } = require('../controller/authController')

router.get('/', (req, res) => {
    res.send('hey')
})

router.post('/user/register', authController)

module.exports = router