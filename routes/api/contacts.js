const express = require('express')
const ctrl = require("../../controllers/contacts")
const router = express.Router()
const { ctrlWrapper } = require("../../helpers")
const {validateBody, isValidId}  = require("../../middlewares")
const {schemas} = require("../../models/contact")


router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getContactById))

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact))

router.put('/:contactId', validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))





module.exports = router
