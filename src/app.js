"use strict";
const express = require("express");
const index = require("./routes/index");
const product = require("./routes/product");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", index);
app.use("/products", product);

module.exports = app;
