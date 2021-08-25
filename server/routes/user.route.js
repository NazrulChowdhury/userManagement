const router = require('express').Router()
const getUser = require('../controllers/user')

router.get('/test',(req,res)=>{

    res.send('you are now logged in')
})
module.exports = router

