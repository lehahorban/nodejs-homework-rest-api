const { User } = require("../models/user")
const { RequestError } = require("../helpers")
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = process.env


const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers
    const [bearer, token] = authorization.split(" ")

    try {

          if (bearer !== "Bearer") {
       throw RequestError(401, "Not Authorized")
        }

        const { id } = jwt.verify(token, SECRET_KEY)
        const user = await User.findById(id)

        if (!user || !user.token) {
             throw RequestError(401, "Not Authorized")
        }
        req.user = user;
        next()

    } catch (error) {
        if (error.message === "invalid signature") {
            error.status = 401
        }
        next(error)
    }
  
}

module.exports = auth