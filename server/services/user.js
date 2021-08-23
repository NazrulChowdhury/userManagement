const {getSocialUser} = require('../DataAccessLayer/user')
const getUserBySocialId = async(social,id)=>{ 
    return await getSocialUser(social,id)
}
module.exports = getUserBySocialId