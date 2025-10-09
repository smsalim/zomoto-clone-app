const expres = require('express')
const app = expres()

app.use(expres.json())
app.use(expres.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running"
    })
})

module.exports = app