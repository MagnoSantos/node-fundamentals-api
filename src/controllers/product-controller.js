"use strict";
const repository = require("../repositories/products-repository");
const handler = require("../shared/exception-handler-shared");

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.getBySlug = async (req, res, next) => {
  try {
    const data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.getByTag = async (req, res, next) => {
  try {
    const data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: "Produto cadastrado com sucesso!" });
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({ message: "Produto atualizado com sucesso!" });
  } catch (ex) {
    handler.onError(ex, res);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(204).send({ message: "Produto removido com sucesso!" });
  } catch (ex) {
    handler.onError(ex, res);
  }
};
