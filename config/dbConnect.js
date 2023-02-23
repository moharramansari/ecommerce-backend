const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
