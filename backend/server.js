require('dotenv').config({ path : 'backend/.env' })
const app = require('./src/app')
const connectDB = require('./src/db/db')


// database connection
connectDB()

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})

