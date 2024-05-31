import transporterMail from "./sendMail.js";

export default async function sendTours(data, turname) {
  // Gerekli alanların dolu olup olmadığını kontrol edin
  const requiredFields = [
    "firstname",
    "lastname",
    "numberofadults",
    "numberofinfant",
    "numberofkids",
    "full_phone",
    "numberofrooms",
    "email",
    "date",
  ];

  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === "") {
      throw new Error(`Eksik veya boş gerekli alan: ${field}`);
    }
  }

  // Eğer tüm gerekli alanlar doluysa, mail seçeneklerini oluşturun
  const mailOptions = {
    from: "fadastourism@gmail.com",
    to: "info@fadastravel.com",
    subject: turname || "Tur Bilgisi",
    html: `
      <p>Tur Name: ${turname}</p>
      <p>First Name: ${data.firstname}</p>
      <p>Last Name: ${data.lastname}</p>
      <p>Number Of Adults: ${data.numberofadults}</p>
      <p>Number Of Infant: ${data.numberofinfant}</p>
      <p>Number Of Kids: ${data.numberofkids}</p>
      <p>Phone Number: ${data.full_phone}</p>
      <p>Number Of Rooms: ${data.numberofrooms}</p>
      <p>Email: ${data.email}</p>
      <p>Data: ${data.date}</p>
    `,
  };

  // Mail gönderme işlemini gerçekleştirin
  await transporterMail.sendMail(mailOptions);
}
