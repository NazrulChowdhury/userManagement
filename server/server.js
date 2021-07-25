const express = require('express')
const app = express()

const apiRoute = require('./routes/api.js')
const port = 3000
app.use(apiRoute)
// app.get('/',(req,res)=>{
//     res.send('here here')
// })
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})