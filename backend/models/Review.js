const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  text: String,
  rating: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  }
});

module.exports = mongoose.model("Review", reviewSchema);