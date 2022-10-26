const express = require('express')
const { ctrlWrapper } = require("../../helpers")
const { validateBody, auth } = require("../../middlewares")
const {schemas} = require('../../models/user')

const ctrl = require("../../controllers/auth")
const router = express.Router()

router.post("/signup", validateBody(schemas.joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validateBody(schemas.joiLoginSchema), ctrlWrapper(ctrl.login))

router.get("/logout", auth, ctrlWrapper(ctrl.logout))

module.exports = router;