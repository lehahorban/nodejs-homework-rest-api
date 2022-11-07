const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const updateAvatar = require("./updateAvatar")
const verify = require("./verify")
const resendEmail = require("./resendEmail")


module.exports = {
    register,
    login,
    logout, 
    updateAvatar,
    verify,
    resendEmail
}