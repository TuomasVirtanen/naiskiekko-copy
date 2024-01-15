var dotenv = require("dotenv");
dotenv.config();

const MAIL_SETTINGS = {
  service: "hotmail",

  auth: {
    user: process.env.mailAddress,
    pass: process.env.mailPassword,
  },
};
export interface mailtype {
  to: string;
}
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

const sendMail = async (params: mailtype) => {
  try {
    let info = await transporter.sendMail({
      from: MAIL_SETTINGS.auth.user,
      to: params.to,
      subject: "Test mail",
      html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>OTP SEND TEST.</h2>
        <h4>You are officially In ✔</h4>
        <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${process.env.otp}</h1>
   </div>
    `,
    });
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default sendMail;
