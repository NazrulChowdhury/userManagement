const router = require('express').Router()
const {createInviteEmail} = require('../controllers/user.controller')
const authenticate = require('../middleware/authenticate.middleware')

router.get('/inviteUser',createInviteEmail)
module.exports = router

