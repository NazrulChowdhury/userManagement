const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../model/user')
require('dotenv').config()

passport.serializeUser((user, done)=> done(null, user.id))

passport.deserializeUser((id, done)=> done(null, id))

passport.use(new GoogleStrategy({
    // options for google strategy
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  }, 
  (request, accessToken, refreshToken, profile, done)=>{
    // check if the user already exists
     User.findOne({'social.googleID':profile._json.sub})
     .then(existingUser =>{
       if(existingUser){ 
         done(null,existingUser)     

       } else{
              // create a new user
              new User({
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                email: profile._json.email,
                social:{
                  googleID: profile._json.sub
                },
                locale : profile._json.locale
            })
            .save()
            .then(newUser => done(null,newUser))
            .catch(error =>  console.log(error))
        }
     })
     .catch(error =>  console.log(error))

  })
)