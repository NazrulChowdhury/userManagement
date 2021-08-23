const router = require('express').Router()
const authRoute = require('./auth')
const userRoute = require('./userRoute')
const authenticate = require('../middleware/auth')

router.use('/auth',authRoute)

// protected routes..
router.use(authenticate)
router.use('/api',userRoute)

module.exports = router 
