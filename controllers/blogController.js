const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (err) {
    throw new Error(err);
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoDbId(id)
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (err) {
    throw new Error(err);
  }
});

const getaBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
   validateMongoDbId(id);
  try {
    const getaBlog = await Blog.findById(id);
    const updatedViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(updatedViews);
  } catch (err) {
    throw new Error(err);
  }
});

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getallBlogs = await Blog.find();
    res.json(getallBlogs);
  } catch (err) {
    throw new Error(err);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
     validateMongoDbId(id);
    const deltedBlog = await Blog.findOneAndDelete(id);
    res.json(deltedBlog);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = { createBlog, updateBlog, getaBlog, getAllBlogs, deleteBlog };
