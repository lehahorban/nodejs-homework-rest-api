const { Schema, model } = require("mongoose")
const Joi = require("joi")
const {handleShemaValidationErrors} = require("../helpers")

const contactSchema = new Schema( {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
}, {versionKey: false, timestamps: true})
  

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
})

const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool().required(),
})

const schemas = {
    addSchema,
    updateFavoriteSchema
}


contactSchema.post("save", handleShemaValidationErrors)
  const Contact = model("contact", contactSchema)



module.exports = {
    Contact,
    schemas,
};