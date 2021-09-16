const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    
    userScore: {
      type: Number ,
      range: {
          min: { type: Number, min: 0 },
          max: { type: Number, min: 36 }
      }
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Survey", surveySchema);
