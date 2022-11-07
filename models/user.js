const { Schema, model } = require("mongoose")
const Joi = require("joi")
const {handleShemaValidationErrors} = require("../helpers")

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },  
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },

  
}, {versionKey: false, timestamps: true})


const joiRegisterSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string,
});

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const verifyEmailSchema = Joi.object({ 
  email: Joi.string().required(),
});


const User = model('user', userSchema)
userSchema.post("save", handleShemaValidationErrors)


const schemas = {
   userSchema,
  joiRegisterSchema,
  joiLoginSchema,
   verifyEmailSchema
}


module.exports = {
    User,
   schemas
}