const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "name is required",
    },
    type: {
      type: String, // if it is face type or body type
      
    },
    ingredient: [String], // what is product consist of

    category: {
        type: String, //which type of product like facewash, sunscreen etc
    },
    price: {
        type: String, // giving price of the product
    },
    
    score:{
      type: Number, // this score determine if the product is for oily skin or for dry

    },
    image:{
      type: String, // image stored via link in db
    },
    description: {
      type: String, //  external  detailed description of the products
    },
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
