import express from "express";
import sendSubscribeToOurNewsletter from "../script/mail/sendSubscribeToOurNewsletter.js";
import sendPartnershipForm from "../script/mail/sendPartnershipForm.js";
import sendContact from "../script/mail/sendContact.js";
import sendMinikAyaklar from "../script/mail/sendMinikAyaklar.js";
import sendTours from "../script/mail/sendTours.js";

const postRoutes = express.Router();

postRoutes.post("/Subscribe-To-Our-Newsletter", (req, res) => {
  sendSubscribeToOurNewsletter(req.body);
  res.redirect(req.get("referer"));
});

postRoutes.post("/Partner-With-Us", (req, res) => {
  sendPartnershipForm(req.body);
  res.redirect(req.get("referer"));
});

postRoutes.post("/Contact", (req, res) => {
  sendContact(req.body);
  res.redirect(req.get("referer"));
});

postRoutes.post("/Minik-Ayaklar", (req, res) => {
  sendMinikAyaklar(req.body);

  res.redirect(req.get("referer"));
});

postRoutes.post("/:turname", (req, res) => {
  sendTours(req.body,req.params.turname)


  res.redirect(req.get("referer"));
});

export default postRoutes;
