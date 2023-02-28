const blogCategory = require("../models/blogCatModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const blogCatCreate = asyncHandler(async (req, res) => {
  try {
    const blogCatCreate = await blogCategory.create(req.body);
    res.json(blogCatCreate);
  } catch (err) {
    throw new Error(err);
  }
});

const getablogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getablogCat = await blogCategory.findById(id);
    res.json(getablogCat);
  } catch (err) {
    throw new Error(err);
  }
});

const blogCatUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlogCat = await blogCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlogCat);
  } catch (err) {
    throw new Error(err);
  }
});

const blogCatAll = asyncHandler(async (req, res) => {
  try {
    const blogCatAll = await blogCategory.find();
    res.json(blogCatAll);
  } catch (err) {
    throw new Error(err);
  }
});

const deleteblogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlogCat = await blogCategory.findByIdAndDelete(id);
    res.json(deletedBlogCat);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  blogCatCreate,
  blogCatUpdate,
  blogCatAll,
  deleteblogCat,
  getablogCat,
};
