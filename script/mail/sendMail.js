import nodemailer from "nodemailer";
const transporterMail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "fadastourism@gmail.com",
    pass: "lqec lnss qctk tqza",
  },
});

export default transporterMail;
