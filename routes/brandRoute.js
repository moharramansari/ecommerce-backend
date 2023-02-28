const express = require("express");
const {
  brandCreate,
  getabrand,
  brandUpdate,
  getAllBrand,
  deleteBrand,
} = require("../controllers/brandController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, brandCreate);
router.put("/:id", authMiddleware, isAdmin, brandUpdate);
router.get("/:id", authMiddleware, isAdmin, getabrand);
router.get("/", authMiddleware, isAdmin, getAllBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;
