const foodModel = require('../models/foodModel')
const { uploadFile } = require('../services/storageService')

module.exports.createFood = async (req, res) => {
    try {
        
        res.status(200).json({ message: 'Food created successfully' })        
    } catch (error) {
        
    }
}
