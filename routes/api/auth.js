const express = require('express')
const { ctrlWrapper } = require("../../helpers")
const { validateBody } = require("../../middlewares")
const {schemas} = require('../../models/user')

const ctrl = require("../../controllers/auth")
const router = express.Router()

router.post("/register", validateBody(schemas.joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validateBody(schemas.joiLoginSchema), ctrlWrapper(ctrl.login))

module.exports = router;