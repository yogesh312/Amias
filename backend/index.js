require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

//Bring in the models
require("./models/User");
require("./models/Product");
require("./models/Survey");

const app = require("./app");

const server = app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

//const io = require("socket.io")(server);
const jwt = require("jwt-then");

//const Message = mongoose.model("Message");
const User = mongoose.model("User");
const Product = mongoose.model("Product");
const Survey = mongoose.model("Survey");
