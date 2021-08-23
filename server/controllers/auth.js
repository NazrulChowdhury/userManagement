const userSchema = require('../model/user')

const login = (req,res)=>{
 console.log(req.session)
    res.send('hello from the login controller')
}
const register = (req,res)=>{
    res.send('hellow from the register controller')
}
const google = (req,res)=>{
    res.send(req.user)
}

module.exports = {login,register,google}