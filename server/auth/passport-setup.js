const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
require('dotenv').config()
passport.use(new GoogleStrategy({
    // options for google strategy
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  }, (request, accessToken, refreshToken, profile, done)=>{ 
       // passport callback funcion
       console.log(profile)
    })
)