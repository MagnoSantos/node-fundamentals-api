"use strict";
const repository = require("../repositories/customer-repository");
const handler = require("../shared/exception-handler-shared");
const hash = require("../shared/hash-shared");
const emailServices = require("../services/email-service");
const authService = require("../services/auth-service");

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: await hash.encryptPassword(req.body.password),
    });

    emailServices.enviar(
      req.body.email,
      "Bem vindo ao Node Fundamentals",
      global.EMAIL_TMPL.replace("{0}", req.body.name)
    );

    res.status(201).send({ message: "Customer cadastrado com sucesso" });
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    var customer = await repository.authenticate({
      email: req.body.email,
      password: await hash.encryptPassword(req.body.password),
    });

    var token = await authService.generateToken({
      id: customer._id,
      email: customer.email,
      name: customer.name,
    });

    res.status(201).send({
      token: token,
      data: { email: customer.email, name: customer.name },
    });
  } catch (ex) {
    handler.onError(ex, res);
  }
};
