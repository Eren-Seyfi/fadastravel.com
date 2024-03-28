import transporterMail from "./sendMail.js";

export default async function sendMinikAyaklar(data) {
  const mailOptions = {
    from: "fadastourism@gmail.com",
    to: "info@fadastravel.com",
    subject: "Minik Ayaklar",
    html: `
      <p>Tur Name: Minik Ayaklar</p>
      <p>First Name: ${data.isim}</p>
      <p>Last Name ${data.soyisim}</p>
      <p>Çocuk sayısı: ${data.cocuksayisi}</p>
      <p>Yetişkin sayısı: ${data.yetiskinsayisi}</p>
      <p>Odasayısı: ${data.odasayisi}</p>
      <p>Phone Number:${data.full_phone}</p>
      <p>Email: ${data.email}</p>
    `,
  };
  await transporterMail.sendMail(mailOptions);
}
// to: "info@fadastravel.com",
