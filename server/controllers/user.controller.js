const userServices = require('../services/user.service')
const errorProcessor = require('../helper/errorProcessor')

const createInviteEmail = async(req,res,next)=>{
    res.send('it is working')
    // try { 
    //     const email = req.body.email
    //     const invite = await userServices.createInviteEmail(email)
    //     res.send('created')
    //     next()
    // } catch (error) {
    //    next(errorProcessor(error))
    // }
}
module.exports = {createInviteEmail}
