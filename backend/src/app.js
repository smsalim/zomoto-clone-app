const expres = require('express')
const app = expres()
const cookieParser = require('cookie-parser')
// require('dotenv').config({ path : 'backend/.env' })
const authRouter = require('./routes/authRouter')
const foodRouter = require('./routes/foodRouter')

app.use(cookieParser())
app.use(expres.json())
app.use(expres.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
app.use('/api/food', foodRouter)

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running"
    })
})

module.exports = app