const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not precessed",
      enum: [
        "Not processed",
        "Cash on Delivery",
        "Processing",
        "Dispatched ",
        "Cancelled",
        "Delivered",
      ],
    },
    orderBy: {
      type: mongoose.Schema.type.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
