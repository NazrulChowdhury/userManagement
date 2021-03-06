const mongoose = require('mongoose')    
const {Schema} = mongoose
require('mongoose-type-email');

const inviteEmailSchema = new Schema({
    email : {
        type: mongoose.SchemaTypes.Email,
        required : [true, 'Must enter a valid Email']
    }
})

module.exports = mongoose.model('inviteEmail', inviteEmailSchema)