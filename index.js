const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is listening at the PORT ${PORT}`);
});
