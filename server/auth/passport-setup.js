const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../model/user')
const userService = require('../services/user.service')
require('dotenv').config()

passport.serializeUser((user, done)=> done(null, user.id))

passport.deserializeUser((id, done)=> done(null, id))

passport.use(new GoogleStrategy({
    // options for google strategy
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  }, 
  async(request, accessToken, refreshToken, profile, done)=>{
    // check if the user already exists
    try{
      const existingUser = await userService.getSocialUser('google',profile._json.sub)
      if(existingUser){ 
        done(null,existingUser)
        return
      } 
      const newUser = await userService.createSocialUser(profile._json)
      done(null,newUser)
    } catch(err){
      console.log(err)
    }
  }
))