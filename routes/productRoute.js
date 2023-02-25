const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);

module.exports = router;
