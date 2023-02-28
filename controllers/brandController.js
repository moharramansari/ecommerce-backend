const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const brandCreate = asyncHandler(async (req, res) => {
  try {
    const brandCreate = await Brand.create(req.body);
    res.json(brandCreate);
  } catch (err) {
    throw new Error(err);
  }
});

const getabrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBrand = await Brand.findById(id);
    res.json(getBrand);
  } catch (err) {
    throw new Error(err);
  }
});

const brandUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (err) {
    throw new Error(err);
  }
});

const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const getAllBrand = await Brand.find();
    res.json(getAllBrand);
  } catch (err) {
    throw new Error(err);
  }
});

const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.json(deleteBrand);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  brandCreate,
  getabrand,
  brandUpdate,
  getAllBrand,
  deleteBrand,
};
