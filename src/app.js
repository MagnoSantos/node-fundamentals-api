"use strict";
const express = require("express");

//Conecta banco de dados
const mongoose = require("mongoose");
mongoose.connect("mongodb://magno:e296cd9f@localhost:27017/admin");
require("./models/products");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Carrega rotas
const index = require("./routes/index");
const product = require("./routes/product");
app.use("/", index);
app.use("/products", product);

module.exports = app;
