"use strict";
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).send({ title: "Node Fundamentals", version: "0.0.1" });
});

module.exports = router;
