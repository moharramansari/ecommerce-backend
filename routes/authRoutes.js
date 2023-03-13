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
  handleRefreshToken,
  logout,
  updatePassword,
  forgetPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
} = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/register", createUser);
router.post("/forget-password-token", forgetPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, isAdmin, updatePassword);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applyCoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);

router.get("/all-users", getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/cart", authMiddleware, getUserCart);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.delete("/:id", deleteUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", unBlockUser);

module.exports = router;
