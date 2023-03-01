const Coupon = require("../models/couponModel");
const aysncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createCoupon = aysncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

const getAllCoupon = aysncHandler(async (req, res) => {
  try {
    const allCoupon = await Coupon.find();
    res.json(allCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

const getaCoupon = aysncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const coupon = await Coupon.findById(id);
    res.json(coupon);
  } catch (err) {
    throw new Error(err);
  }
});

const updateCoupon = aysncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

const deleteCoupon = aysncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deletedCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createCoupon,
  getAllCoupon,
  getaCoupon,
  updateCoupon,
  deleteCoupon,
};
