import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "ah5219562@gmail.com",
    pass: "cexu ebuv ddyn ovle",
  },
  tls: { rejectUnauthorized: false },
});

const sendEmail = async (EmailTo, EmailSubject, EmailText) => {
  const mailOption = {
    from: `Task Management website <ah5219562@gmail.com>`,
    to: EmailTo,
    subject: EmailSubject,
    html: `<p>Your OTP code is : <strong>${EmailText}</strong></p>`,
  };

  try {
    await transporter.sendMail(mailOption);
    return true;
  } catch (error) {
    console.error("Email send failed:", error);
    return false;
  }
};

export default sendEmail;
