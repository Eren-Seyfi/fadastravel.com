import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const getPdfRoutes = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

getPdfRoutes.get("/istanbulguide", (req, res) => {
  const pdfPath = join(
    __dirname,
    "../public/pdf/Leads - Full Istanbul Guide.pdf"
  );
  res.sendFile(pdfPath);
});

getPdfRoutes.get("/cappadociaguide", (req, res) => {
  const pdfPath = join(
    __dirname,
    "../public/pdf/Leads - Full Cappadocia Guide.pdf"
  );
  res.sendFile(pdfPath);
});

getPdfRoutes.get("/istanbultips", (req, res) => {
  const pdfPath = join(__dirname, "../public/pdf/Full Istanbul Guide.pdf");
  res.sendFile(pdfPath);
});

getPdfRoutes.get("/cappadociatips", (req, res) => {
  const pdfPath = join(__dirname, "../public/pdf/Full Cappadocia Guide.pdf");
  res.sendFile(pdfPath);
});

getPdfRoutes.get("/activityguide/Istanbul_Activity", (req, res) => {
  const pdfPath = join(__dirname, "../public/pdf/Istanbul_Activity.pdf");
  res.sendFile(pdfPath);
});

getPdfRoutes.get("/activityguide/Cappadocia_Activities", (req, res) => {
  const pdfPath = join(__dirname, "../public/pdf/Cappadocia_Activities.pdf");
  res.sendFile(pdfPath);
});
// Full Istanbul Guide 2.pdf
getPdfRoutes.get("/istanbulguide2", (req, res) => {
  const pdfPath = join(__dirname, "../public/pdf/Full Istanbul Guide 2.pdf");
  res.sendFile(pdfPath);
});
export default getPdfRoutes;
