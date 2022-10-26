const express = require('express')
const ctrl = require("../../controllers/contacts")
const router = express.Router()
const { ctrlWrapper } = require("../../helpers")
const {validateBody, auth}  = require("../../middlewares")
const {schemas} = require("../../models/contact")


router.get('/', auth, ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', auth, validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact))

router.put('/:contactId', validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact))

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))





module.exports = router
