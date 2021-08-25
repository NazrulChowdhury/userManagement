 const router = require('express').Router()
// const authRoute = require('./auth.route')
// const userRoute = require('./user.route')
const authenticate = require('../middleware/auth.middleware')

router.get('',(req,res)=>{
    res.send('working')
})

//router.use('/auth',authRoute)
router.use('/auth',require('./auth.route'))

// protected routes..
//router.use(authenticate)
router.use('/user',require('./user.route'))

module.exports = router 

