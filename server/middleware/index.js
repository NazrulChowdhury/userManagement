const express = require('express')
const router = express.Router()
const helmet = require('helmet')
const morgan = require('morgan')
const session = require('../db/redis.session')
const passport = require('./passport.middleware')
const cors = require('cors')

router.use(cors())
router.use(express.json())
router.use(helmet())
router.use(morgan('common'))
router.use(express.urlencoded({extended:false}))
//session and cookie
router.use(session)
router.use(passport)

module.exports = router