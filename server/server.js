const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const middlewares = require('./middleware')
const router = require('./routes/index')
const port = process.env.PORT || 3000
// middlewares
app.use(middlewares)
// routes
app.use(router)
// db connection
require('./db/mongoConnection')()
// mongoose.connect(
//     process.env.MONGO_URL,
//     {useNewUrlParser:true, useUnifiedTopology:true}
// )

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
