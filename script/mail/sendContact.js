import transporterMail from "./sendMail.js";

export default async function sendContact(data) {
  const mailOptions = {
    from: "fadastourism@gmail.com",
    to: "info@fadastravel.com",
    subject: "CONTACT",
    html: `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>
    `,
  };
  await transporterMail.sendMail(mailOptions);
}
