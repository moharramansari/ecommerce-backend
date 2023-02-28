const express = require("express");
const router = express.Router();
const {
  blogCatCreate,
  blogCatUpdate,
  blogCatAll,
  deleteblogCat,
  getablogCat,
} = require("../controllers/blogCatController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddlewares");

router.post("/", authMiddleware, isAdmin, blogCatCreate);
router.put("/:id", authMiddleware, isAdmin, blogCatUpdate);
router.get("/:id", authMiddleware, isAdmin, getablogCat);
router.get("/", authMiddleware, isAdmin, blogCatAll);
router.delete("/:id", authMiddleware, isAdmin, deleteblogCat);

module.exports = router;
