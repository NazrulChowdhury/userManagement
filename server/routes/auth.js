const router = require('express').Router()
const passport = require('passport')
const {login,register,googleCallback} = require('../controllers/auth.js')


router.get('/login',login)
router.get('/register',register)
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))
router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
    res.send('response from redirect')
  
})

module.exports = router