"use strict";
const express = require("express");
const config = require("./config");

//Conecta banco de dados
require("mongoose").connect(config.connectionString);
require("./models/products-model");
require("./models/customer-model");
require("./models/order-model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Carrega rotas
app.use("/", require("./routes/index-routes"));
app.use("/products", require("./routes/products-routes"));
app.use("/customer", require("./routes/customer-routes"));

module.exports = app;
