import transporterMail from "./sendMail.js";

export default async function sendTours(data, turname) {
  const mailOptions = {
    from: "fadastourism@gmail.com",
    to: "info@fadastravel.com",
    subject: turname,
    html: `
          <p>Tur Name: ${data.turname}</p>
          <p>First Name: ${data.firstname}</p>
          <p>Last Name ${data.lastname}</p>
          <p>Number Of Adults: ${data.numberofadults}</p>
          <p>Number Of Infant: ${data.numberofinfant}</p>
          <p>Number Of Kids: ${data.numberofkids}</p>
          <p>Phone Number:${data.full_phone}</p>
          <p>Number Of Rooms: ${data.numberofrooms}</p>
          <p>Email: ${data.email}</p>
          <p>Data: ${data.date}</p>
         
        `,
  };
  await transporterMail.sendMail(mailOptions);
}
// to: "info@fadastravel.com",
