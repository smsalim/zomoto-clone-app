const foodModel = require('../models/foodModel')

module.exports.createFood = async (req, res) => {
    try {
        console.log(req.foodPartner)
        res.status(200).json({ message: 'Food created successfully' })        
    } catch (error) {
        
    }
}
