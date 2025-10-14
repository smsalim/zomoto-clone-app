const expres = require('express')
const app = expres()
const cookieParser = require('cookie-parser')
const registerUser = require('./routes/authRouter')
require('dotenv').config({ path : 'backend/.env' })

app.use(cookieParser())
app.use(expres.json())
app.use(expres.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running"
    })
})

app.use('/register', registerUser)

module.exports = app