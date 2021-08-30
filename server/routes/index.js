 const router = require('express').Router()
 const errorHandler = require('../middleware/errorHandler.middleware')

const authenticate = require('../middleware/authenticate.middleware')

router.get('', require('../controllers/user.controller').createInviteEmail)

//router.use('/auth',authRoute)
router.use('/auth',require('./auth.route'))

// protected routes..
router.use(authenticate)
router.use('/user',require('./user.route'))
router.use(errorHandler)

module.exports = router 

