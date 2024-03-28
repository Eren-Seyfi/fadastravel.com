import transporterMail from "./sendMail.js";

export default async function sendPartnershipForm(data) {

  const mailOptions = {
    from: "fadastourism@gmail.com",
    to: "info@fadastravel.com",
    subject: "Partner With Us",
    html: `
      <p>Name: ${data.fullname}</p>
      <p>Name Of Company:  ${data.nameofcompany}</p>
      <p>Position In Company:  ${data.positionincompany}</p>
      <p>Email:  ${data.email}</p>
      <p>Phone Number: ${data.full_phone}</p>
      <p>Message:  ${data.message}</p>
    `,
  };
  await transporterMail.sendMail(mailOptions);
}

