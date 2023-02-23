const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
module.exports = router;
