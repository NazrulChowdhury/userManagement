const userDAO= require('../DataAccessLayer/user.DAO')

const getSocialUser = async(social,id)=>{ 
    return await userDAO.getSocialUserById(social,id)
}
const createSocialUser = async(user) => {
    return await userDAO.createSocialUser(user)
}
module.exports = {getSocialUser,createSocialUser}
