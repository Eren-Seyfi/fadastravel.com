import express from "express";
import sendSubscribeToOurNewsletter from "../script/mail/sendSubscribeToOurNewsletter.js";
import sendPartnershipForm from "../script/mail/sendPartnershipForm.js";
import sendContact from "../script/mail/sendContact.js";
import sendMinikAyaklar from "../script/mail/sendMinikAyaklar.js";
import sendTours from "../script/mail/sendTours.js";
import fetch from "node-fetch";
const postRoutes = express.Router();

postRoutes.post(
  "/Subscribe-To-Our-Newsletter/:form/:recaptchaResponse",
  (req, res) => {
    sendSubscribeToOurNewsletter(req.body);
    res.redirect(req.get("referer"));
  }
);

postRoutes.post("/Partner-With-Us", (req, res) => {
  sendPartnershipForm(req.body);
  res.redirect(req.get("referer"));
});

// postRoutes.post("/Contact", (req, res) => {
//   sendContact(req.body);
//   res.redirect(req.get("referer"));
// });

postRoutes.post("/Contact/:recaptchaResponse", async (req, res) => {
  const recaptchaVerification = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LdmsbEpAAAAAJbffMyfNROoQLhq5sAdNRFCbxj9&response=${req.params.recaptchaResponse}`,
    {
      method: "POST",
    }
  ).then((_res) => _res.json());

  if (recaptchaVerification.success == true) {
    sendContact(req.body);
  }
});

postRoutes.post("/Minik-Ayaklar", (req, res) => {
  sendMinikAyaklar(req.body);

  res.redirect(req.get("referer"));
});

postRoutes.post("/:turname", (req, res) => {
  sendTours(req.body, req.params.turname);

  res.redirect(req.get("referer"));
});

export default postRoutes;
