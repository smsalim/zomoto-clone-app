const expres = require('express')
const app = expres()
const cookieParser = require('cookie-parser')
// require('dotenv').config({ path : 'backend/.env' })
const authRouter = require('./routes/authRouter')

app.use(cookieParser())
app.use(expres.json())
app.use(expres.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running"
    })
})

module.exports = app