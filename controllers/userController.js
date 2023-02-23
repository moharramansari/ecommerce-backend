const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler(async (req, res) => {
  const email = req.body;
  const findUser = await User.findOne(email);
  if (!findUser) {
    //create an new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    res.json({
      msg: "User already exist",
      success: false,
    });
  }
});

module.exports = createUser;