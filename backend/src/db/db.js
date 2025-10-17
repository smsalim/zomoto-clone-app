const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONDODB_URL)
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err)
    })
}

module.exports = connectDB