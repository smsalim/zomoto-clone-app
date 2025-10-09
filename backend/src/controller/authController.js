const exprees = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

async (req, res) => {
    const { fullname, email, password } = req.body
    let checkUser = await userModel.findOne({ email })
    if (checkUser) {
        return res.status(400).json({
            "message": "User already exists"
        })
    }
    let user = userModel.create({
        fullname,
        email,
        password
    })
}