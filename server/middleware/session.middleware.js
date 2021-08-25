require('dotenv').config()
const session = require('express-session')


module.exports = session({
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized : false,
    cookie :{
        httpOnly: true, // prevents client side js from reading the cookie
        secure: false, // need to be true in production to accept req from https only
        maxAge: 60*60*24
    }
})
