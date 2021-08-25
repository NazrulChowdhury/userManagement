const router = require('express').Router()
const passport = require('passport')
const authController = require('../controllers/auth.controller')

//google auth routes
router.get(
    '/google', 
    passport.authenticate('google',{scope:['profile','email']})
)
router.get(
    '/google/redirect', 
    passport.authenticate('google'),
    authController.google
)


module.exports = router