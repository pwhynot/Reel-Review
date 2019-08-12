const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  description: String,
  published_year: Number,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);