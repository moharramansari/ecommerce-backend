const mongoose = require("mongoose");

//Declare the schema for the mongo model

let blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    numViews: {
      type: Number,
      default: false,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    images: [],
    author: {
      type: String,
      default: "Admin",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//export the model
module.exports = mongoose.model("Blog", blogSchema);
