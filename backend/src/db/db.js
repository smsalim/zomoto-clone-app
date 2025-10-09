const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/zomato')
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err)
    })
}

module.exports = connectDB