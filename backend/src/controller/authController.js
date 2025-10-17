const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.registerUser = async (req, res) => {
    const { fullname, email, password } = req.body
    let checkUser = await userModel.findOne({ email })
    if (checkUser) {
        return res.status(400).json({
            "message": "User already exists"
        })
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    let user = userModel.create({
        fullname,
        email,
        password: hashedPassword
    })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie('token', token)
    res.status(201).json({
        message: "User register successfully",
        user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }
    })
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    let checkUser = await userModel.findOne({ email })
    if (!checkUser) {
        return res.status(400).json({
            "message": "User does't exists"
        })
    }
    const isMatch = await bcrypt.compare(password, checkUser.password)
    if (!isMatch) {
        return res.status(400).json({
            "message": "Invalid credentials"
        })
    }
    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET)
    res.cookie('token', token)
    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: checkUser._id,
            fullname: checkUser.fullname,
            email: checkUser.email
        }
    })
}

module.exports.logoutUser = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
        message: "User logged out successfully"
    })
}