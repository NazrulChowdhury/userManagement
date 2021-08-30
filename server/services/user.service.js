const userDAO= require('../DataAccessLayer/user.DAO')

const getSocialUserById = async(social,id)=>{ 
    return await userDAO.getSocialUserById(social,id)
}
const createSocialUser = async(user) => {
    return await userDAO.createSocialUser(user)
}
const userEmailExist = async(userEmail)=>{
    return await userDAO.userEmailExist(userEmail)
}
const createInviteEmail = async(email)=>{
    return await userDAO.createInviteEmail(email)
}
module.exports = {
    getSocialUserById,
    createSocialUser,
    userEmailExist,
    createInviteEmail
}
