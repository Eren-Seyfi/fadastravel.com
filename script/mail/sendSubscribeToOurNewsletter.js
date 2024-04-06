import transporterMail from "./sendMail.js";

export default async function sendSubscribeToOurNewsletter(data) {
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "Subscribe To Our Newsletter",
    html: `
      <p>First Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
    `,
  };
  await transporterMail.sendMail(mailOptions);
}
