const User = require('../model/user')
const getSocialUser = async(social,id)=>{
    const queryParam = 'social.'+socialName+'ID'
    User.findOne({queryParam : id})
}
module.export = {getSocialUser}