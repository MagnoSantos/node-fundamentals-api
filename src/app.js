"use strict";
const express = require("express");

//Conecta banco de dados
require("mongoose").connect("mongodb://magno:e296cd9f@localhost:27017/admin");
require("./models/products-model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Carrega rotas
app.use("/", require("./routes/index-routes"));
app.use("/products", require("./routes/products-routes"));

module.exports = app;
