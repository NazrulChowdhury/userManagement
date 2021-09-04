require('dotenv').config()
const session = require('express-session')
const redis = require('redis')

const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379, 
})
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
})
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
})

module.exports = session({
    store: new RedisStore({ client: redisClient }),
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized : false,
    cookie :{
        httpOnly: true, // prevents client side js from reading the cookie
        secure: false, // need to be true in production to accept req from https only
        maxAge: 60*1000*60
    }
})
