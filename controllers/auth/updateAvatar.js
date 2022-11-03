const fs = require("fs/promises")
const path = require("path")
const { User } = require("../../models/user")
const { RequestError } = require("../../helpers")
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")


const updateAvatar = async (req, res) => {
    const { _id } = req.user;    
    const { path: tempUpload, originalname } = req.file
    const extension = originalname.split(".").pop()
    const filename = `${_id}.${extension}`  
    const resultUpload = path.join(avatarsDir, filename)    
      Jimp.read(tempUpload, (err, image) => {
    if (err) throw err;
    image.resize(250, 250).quality(60).write(resultUpload);
  });   
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join("avatars", filename)
   
    const result = await User.findByIdAndUpdate(_id, { avatarURL })
     if (!result) {
        throw RequestError(401, "Not authorized")
    }

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar