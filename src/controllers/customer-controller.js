"use strict";
const repository = require("../repositories/customer-repository");
const handler = require("../shared/exception-handler");
const hash = require("../shared/key-management");

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: await hash.encryptPassword(req.body.password),
    });
    res.status(201).send({ message: "Customer cadastrado com sucesso" });
  } catch (ex) {
    handler.onError(ex, res);
  }
};
