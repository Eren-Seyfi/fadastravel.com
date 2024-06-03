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

export default getPdfRoutes;
