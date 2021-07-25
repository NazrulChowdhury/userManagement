const router = require('express').Router()

router.get('/api',(req,res)=>{
    res.send('from api route')
})
module.exports = router