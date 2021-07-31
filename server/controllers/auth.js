const userSchema = require('../model/user')

const login = (req,res)=>{
    const TestSchema = new userSchema({
        name: "abc",
        location : "something"
    })
    TestSchema.save()
    res.send('hello from the login controller')
}
const register = (req,res)=>{
    res.send('hellow from the register controller')
}
const google = (req,res)=>{
    res.send('google callback fired')
}

module.exports = {login,register,google}