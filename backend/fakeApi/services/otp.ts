const otpGenerator = require("otp-generator");

const generateOTP = () =>
  otpGenerator.generate(10, {
    upperCaseAlphabets: true,
    specialChars: false,
  });

export default generateOTP;
