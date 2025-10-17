const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logoutUser } = require('../controller/authController')

router.get('/', (req, res) => {
    res.send('hey')
})

router.post('/user/register', registerUser)
router.post('/user/login', loginUser)
router.post('/user/logout', logoutUser)

module.exports = router