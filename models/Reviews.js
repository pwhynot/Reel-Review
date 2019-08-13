const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);