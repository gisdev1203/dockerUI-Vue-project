const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const users = require("./routes/api/users.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(fileUpload());
// app.use(express.static(path.join(__dirname, '/frontend')));
app.use(express.static(__dirname + "/public"));
app.use("/api/users", users);
const HTTP_PORT = 5000;

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port http://localhost:${HTTP_PORT}`);
});
// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});
