const router = require('express').Router()
const getUser = require('../controllers/user')

router.get('/',getUser)
module.exports = router

