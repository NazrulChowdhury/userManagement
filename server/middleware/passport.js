const passport = require('passport')
const router = require('express').Router()
require('../auth/passport-setup')


router.use(passport.initialize())
router.use(passport.session())

module.exports = router
