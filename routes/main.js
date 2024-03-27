import express from "express";
import ToursCard from "../db/ToursCard.js";
import GlobalReviews from "../db/GlobalReviews.js";
import TeamCard from "../db/Team.js";
import MinikAyaklar from "../db/MinikAyaklar.js";

import _4DaysCappadocia from "../db/Tours/4-days-cappadocia.js";
import _4DaysIstanbul from "../db/Tours/4-days-istanbul.js";
import _7DaysCappadociaIstanbul from "../db/Tours/7-days-cappadocia-istanbul.js";
import _11DaysTurkey from "../db/Tours/11-days-turkey.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home", { ToursCard, GlobalReviews });
});

router.get("/Who-We-Are", (req, res) => {
  res.render("WhoWeAre", { TeamCard, GlobalReviews });
});

// /Private-Tours rotası
router.get("/Private-Tours", (req, res) => {
  res.render("PrivateTours", { ToursCard, GlobalReviews });
});

router.get("/Custom-Tours", (req, res) => {
  res.render("activity_guide_form/CustomItinerary");
});

router.get("/Minik-Ayaklar", (req, res) => {
  res.render("MinikAyaklar", { MinikAyaklar });
});
router.get("/Partner-With-Us", (req, res) => {
  res.render("PartnerWithUs");
});
router.get("/Contact", (req, res) => {
  res.render("Contact");
});

router.post("/Subscribe-To-Our-Newsletter", (req, res, next) => {
  console.log(req.body);
  res.redirect(req.get("referer"));
});

router.post("/Minik-Ayaklar", (req, res, next) => {
  console.log(req.body);

  res.redirect(req.get("referer"));
});

router.post("/:turname", (req, res) => {
  console.log(req.body);
  console.log(req.params.turname);

  res.redirect(req.get("referer"));
});

router.get("/:turname", async (req, res) => {
  const turname = req.params.turname;
  let data;

  if (turname == "4-days-cappadocia") {
    data = await _4DaysCappadocia;
  } else if (turname == "4-days-istanbul") {
    data = _4DaysIstanbul;
  } else if (turname == "7-days-cappadocia-istanbul") {
    data = _7DaysCappadociaIstanbul;
  } else if (turname == "11-days-turkey") {
    data = _11DaysTurkey;
  } else {
    // Eğer geçerli bir turname yoksa ana sayfaya yönlendir
    return res.redirect("/Private-Tours");
  }
  console.log("==================================================");

  const carousel = data[0][3];
  const content = data[0][0][0];
  const accordion = data[0][1];
  const form = data[1][0];
  const LuxuryAccomodations = data[0][2][0];
  const Transportation = data[0][2][1];
  const Activities = data[0][2][2];
  const Meals = data[0][2][3];
  const AddOnActivities = data[0][2][4];
  const Reviews = data[2];

  // Veri varsa, Tours sayfasına yönlendir ve veriyi gönder
  res.render("private_tours/Tours", {
    ToursCard,
    carousel,
    content,
    accordion,
    form,
    LuxuryAccomodations,
    Transportation,
    Activities,
    Meals,
    AddOnActivities,
    Reviews,
  });
});

export default router;
