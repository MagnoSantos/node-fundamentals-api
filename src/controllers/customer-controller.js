"use strict";
const repository = require("../repositories/customer-repository");
const handler = require("../shared/exception-handler");

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: "Customer cadastrado com sucesso" });
  } catch (ex) {
    handler.onError(ex, res);
  }
};
