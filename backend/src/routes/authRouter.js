const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logoutUser, foodpartnerRegister, foodpartnerLogin, foodpartnerLogout } = require('../controller/authController')

router.get('/', (req, res) => {
    res.send('hey')
})

router.post('/user/register', registerUser)
router.post('/user/login', loginUser)
router.post('/user/logout', logoutUser)

router.post('/foodpartner/register', foodpartnerRegister)
router.post('/foodpartner/login', foodpartnerLogin)
router.post('/foodpartner/logout', foodpartnerLogout)

module.exports = router