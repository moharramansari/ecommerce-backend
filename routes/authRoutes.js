const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
  updateUser,
  deleteUser,
  blockUser,
  unBlockUser,
} = require("../controllers/userController");
const { authMiddlerware, isAdmin } = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/:id", authMiddlerware, isAdmin, getaUser);
router.put("/edit-user", authMiddlerware, updateUser);
router.delete("/:id", deleteUser);
router.put("/block-user/:id", authMiddlerware, isAdmin, blockUser);
router.put("/unblock-user/:id", unBlockUser);

module.exports = router;
