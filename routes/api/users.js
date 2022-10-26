const express = require('express')
const ctrl = require("../../controllers/users")
const router = express.Router()
const { ctrlWrapper } = require("../../helpers")
const {auth} = require("../../middlewares")
// const {validateBody}  = require("../../middlewares")
// const {schemas} = require("../../models/contact")


router.get("/current", auth, ctrlWrapper(ctrl.getCurrent))


module.exports = router;