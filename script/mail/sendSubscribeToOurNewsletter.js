import transporterMail from "./sendMail.js";

export default async function sendSubscribeToOurNewsletter(data) {
  const mailOptions = {
    from: "fadastourism@gmail.com",
    to: "info@fadastravel.com",
    subject: "Subscribe To Our Newsletter",
    html: `
      <p>First Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
    `,
  };
  await transporterMail.sendMail(mailOptions);
}
