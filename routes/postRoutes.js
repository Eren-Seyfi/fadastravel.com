import express from "express";
import sendSubscribeToOurNewsletter from "../script/mail/sendSubscribeToOurNewsletter.js";
import sendPartnershipForm from "../script/mail/sendPartnershipForm.js";
import sendContact from "../script/mail/sendContact.js";
import sendMinikAyaklar from "../script/mail/sendMinikAyaklar.js";
import sendTours from "../script/mail/sendTours.js";
import fetch from "node-fetch";
const postRoutes = express.Router();

postRoutes.post("/Subscribe-To-Our-Newsletter", (req, res) => {
  sendSubscribeToOurNewsletter(req.body);
  res.redirect(req.get("referer"));
});

postRoutes.post("/Partner-With-Us", (req, res) => {
  sendPartnershipForm(req.body);
  res.redirect(req.get("referer"));
});

postRoutes.post("/Contact", async (req, res) => {
  const recaptchaResponse = req.body["g-recaptcha-response"];

  const recaptchaVerification = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LdmsbEpAAAAAJbffMyfNROoQLhq5sAdNRFCbxj9&response=${recaptchaResponse}`,
    {
      method: "POST",
    }
  ).then((_res) => _res.json());

  if (recaptchaVerification.success == true) {
    sendContact(req.body);
  } else {
    res.redirect(req.get("referer"));
  }
});

postRoutes.post("/Minik-Ayaklar", (req, res) => {
  sendMinikAyaklar(req.body);

  res.redirect(req.get("referer"));
});

postRoutes.post("/:turname", async (req, res) => {
  const data = req.body;
  const turname = req.params.turname;

  // Gerekli alanların varlığını kontrol et
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
      return res.status(400).send(`Eksik veya boş gerekli alan: ${field}`);
    }
  }

  try {
    await sendTours(data, turname);
    res.redirect(req.get("referer"));
  } catch (error) {
    console.error("Email gönderim hatası:", error);
    res
      .status(500)
      .send("Email gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
  }
});

export default postRoutes;
