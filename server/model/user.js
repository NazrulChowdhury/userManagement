const mongoose = require('mongoose') 
const {Schema} = mongoose
const userSchema = new Schema({
    name:{
        type:String
    },
    location:{
        type:String 
    }
})

module.exports = mongoose.model('TestSchema',userSchema)