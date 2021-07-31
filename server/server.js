const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const helmet = require('helmet')
const dotenv = require('dotenv')
const morgan = require('morgan')
const userRoute = require('./routes/userRoute.js')
const authRoute = require('./routes/auth')
const passportSetup = require('./auth/passport-setup')
const port = process.env.PORT || 3000

dotenv.config()

//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(express.urlencoded({extended:false}))

// routes
app.use('/api',userRoute)
app.use('/auth',authRoute)

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true, useUnifiedTopology:true}
)
.then(result =>{
    console.log('db is connected')
    app.listen(port,()=>{
        console.log(`server is listening on port ${port}`)
    })
})
.catch(err =>{
    console.log(err)
})
