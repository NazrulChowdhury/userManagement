const mongoose = require('mongoose') 
const {Schema} = mongoose
const userSchema = new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String 
    },
    email:{
        type:String
    },
    social:{
        googleID: String,
        facebookID: String
    },
    locale: {
        type: String
    }
})

module.exports = mongoose.model('User',userSchema)