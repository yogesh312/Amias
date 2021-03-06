const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required!",
    },
    email: {
      type: String,
      required: "Email is required!",
    },
    password: {
      type: String,
      required: "Password is required!",
    },
    survey:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
