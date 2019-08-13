const express = require("express");
const router = express.Router();
const Review = require("../../models/Reviews");

router.get("/", function(req, res, next) {
  Review.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get("/:id", function(req, res, next) {
  Review.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post("/", function(req, res, next) {
  Review.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put("/:id", function(req, res, next) {
  Review.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete("/:id", function(req, res, next) {
  Review.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
