const express = require("express");
const {
  createCoupon,
  getAllCoupon,
  getaCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/couponController");
const { authMiddleware } = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/", authMiddleware, createCoupon);
router.get("/:id", authMiddleware, getaCoupon);
router.put("/:id", authMiddleware, updateCoupon);
router.delete("/:id", authMiddleware, deleteCoupon);
router.get("/", authMiddleware, getAllCoupon);

module.exports = router;
