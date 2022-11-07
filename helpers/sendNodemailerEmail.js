const nodemailer = require("nodemailer")
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "lehagorban@meta.ua",
    pass: META_PASSWORD
  }

}

const transport = nodemailer.createTransport(nodemailerConfig)

  
const sendNodemailerEmail = async (data) => {
    const mail = { ...data, from: "lehagorban@meta.ua", }
    await transport.sendMail(mail)
    return true
}
    
module.exports = sendNodemailerEmail;