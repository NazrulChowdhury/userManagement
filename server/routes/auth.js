const router = require('express').Router()
const passport = require('passport')
const authController = require('../controllers/auth.js')


 router.get('/login',(req,res)=>{
    res.send('hello from the login controller')
 })


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