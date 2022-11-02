const fs = require("fs/promises")
const path = require("path")
const { User } = require("../../models/user")
const {RequestError} = require("../../helpers")

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")


const updateAvatar = async (req, res) => {
    const { _id } = req.user;    
    const { path: tempUpload, originalname } = req.file
    const resultUpload = path.join(avatarsDir, originalname)   
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join("avatars", originalname)
    const result = await User.findByIdAndUpdate(_id, { avatarURL })
     if (!result) {
        throw RequestError(401, "Not authorized")
    }

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar