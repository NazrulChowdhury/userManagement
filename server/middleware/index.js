const express = require('express')
const router = express.Router()
const helmet = require('helmet')
const morgan = require('morgan')
const session = require('./session')
const passport = require('./passport')


router.use(express.json())
router.use(helmet())
router.use(morgan('common'))
router.use(express.urlencoded({extended:false}))
//session and cookie
router.use(session)
router.use(passport)

module.exports = router