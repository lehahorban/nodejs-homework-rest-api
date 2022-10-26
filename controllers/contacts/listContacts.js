const { Contact } = require("../../models/contact")


const listContacts = async (req, res, next) => {
  const { page = 1, limit = 20 } = req.query
  const skip = (page - 1) * limit
  const {_id} = req.user
   const result = await Contact.find({owner: _id}, "", {skip, limit: Number(limit)}).populate("owner", "_id email")
  res.json(result)
}




module.exports = listContacts;