const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const {authMiddlerware,isAdmin} = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/:id", authMiddlerware,isAdmin,getaUser);
router.put("/edit-user", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
