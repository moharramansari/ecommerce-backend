const express = require("express");
const {
  createBlog,
  updateBlog,
  getaBlog,
  getAllBlogs,
  deleteBlog,
  likeTheBlog,
  disLikeTheBlog,
} = require("../controllers/blogController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);

router.put("/likes", authMiddleware, likeTheBlog);
router.put("/dislikes", authMiddleware, disLikeTheBlog);

router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", authMiddleware, isAdmin, getaBlog);
router.get("/", authMiddleware, isAdmin, getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.get("/", authMiddleware, isAdmin, getAllBlogs);

module.exports = router;
