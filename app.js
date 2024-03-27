import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import multer from "multer";
import router from "./routes/main.js";

import Navbar from "./db/Navbar.js";

const app = express();
var upload = multer();

app.use(express.static("public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

const menuItems = Navbar;

app.use((req, res, next) => {
  const currentPage = req.path;
  menuItems.forEach((item) => {
    if (item.link === currentPage) {
      item.isActive = true;
    } else {
      item.isActive = false;
    }
  });
  res.locals.menuItems = menuItems;
  next();
});

app.use("/", router);

app.listen(3000);
