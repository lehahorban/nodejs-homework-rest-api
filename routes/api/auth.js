const express = require('express')
const { ctrlWrapper } = require("../../helpers")
const { validateBody, auth, upload } = require("../../middlewares")
const {schemas} = require('../../models/user')

const ctrl = require("../../controllers/auth")
const router = express.Router()

router.post("/signup", validateBody(schemas.joiRegisterSchema), ctrlWrapper(ctrl.register));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify))

router.post("/login", validateBody(schemas.joiLoginSchema), ctrlWrapper(ctrl.login))

router.get("/logout", auth, ctrlWrapper(ctrl.logout))

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;