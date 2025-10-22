const foodPartnerModel = require('../models/foodPartnerModel')
const jwt = require('jsonwebtoken')

module.exports.authFoodPartnerMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: 'Authorization token missing' })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const foodPartner = await foodPartnerModel.findById(decoded.id)
        if (!foodPartner) {
            return res.status(401).json({ message: 'Unauthorized access' })
        }
        req.foodPartner = foodPartner
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}
