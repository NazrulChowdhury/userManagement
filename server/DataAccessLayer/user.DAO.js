const User = require('../model/user')

const getSocialUserById = async(platformName,id)=>{
    const query = {}
    query[`social.${platformName}ID`] = id
    return await User.findOne(query)
}

const createSocialUser = async(user)=>{
    const { sub, given_name, family_name, email, locale} = user
    const newUser = await new User({
        firstName:given_name,     
        lastName: family_name,
        email:email,
        social:{
          googleID:sub
        },
        locale :locale
    })
    .save()
    return newUser ? newUser : Promise.reject(new Error('something went wrong!'))

}
module.exports = {getSocialUserById,createSocialUser}


