const mongoose = require("mongoose");

require("./Product");
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    family: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      default: "company",
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    numberOfBill: {
      type: Number,
      required: true,
    },
    proId: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Product",

      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Bill || mongoose.model("Bill", schema);

export default model;
