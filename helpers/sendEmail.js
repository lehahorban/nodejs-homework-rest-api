const sgMail = require("@sendgrid/mail")
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (data) => {
    const mail = { ...data, from: "lehagorban93@gmail.com", }
    await sgMail.send(mail)
    return true
}

module.exports = sendEmail;

// const mail = {
//   to: "arestovich@gmail.com",
//   from: "lehagorban93@gmail.com",
//   subject: "Hello",
//   html: "<p>2-3 weeks</p>"
// }

// sgMail.send(mail)
//   .then(() => console.log("Email success")
//   )
//   .catch(error => console.log(error.message))