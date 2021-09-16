const mongoose = require("mongoose");
const Survey = mongoose.model("Survey");

exports.createSurvey = async (req, res) => {
  const { user_id, userScore } = req.body;


  const survey = new Survey({
    user_id,
    userScore,
  });

  await survey.save();

  res.json({
    message: "survey stored!",
  });
};

