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
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.cookie('token', token)
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            fullname: user.fullname,
            email: user.email
        }
    })
}