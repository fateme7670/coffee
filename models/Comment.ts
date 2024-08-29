const mongoose = require("mongoose");
require("./Product");
require("./User");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 5,
    },
    isAcsept: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: () => Date.now(),
      immutable: false,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    mainComment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
    hasAnswer: {
      type: Boolean,
      default:false
    },
    isAnswer:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;
