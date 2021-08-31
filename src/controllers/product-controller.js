"use strict";
const repository = require("../repositories/products-repository");

exports.get = (req, res, next) => {
  repository
    .get()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.getBySlug = (req, res, next) => {
  repository
    .getBySlug(req.params.slug)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.getById = (req, res, next) => {
  repository
    .getById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.getByTag = (req, res, next) => {
  repository
    .getByTag(req.params.tag)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.post = (req, res, next) => {
  repository
    .create(req.body)
    .then(() => {
      res.status(201).send({ message: "Produto cadastrado com sucesso" });
    })
    .catch((ex) => {
      res
        .status(400)
        .send({ message: "Falha ao cadastrar o produto", data: ex });
    });
};

exports.put = (req, res, next) => {
  repository
    .update(req.params.id, req.body)
    .then(() => {
      res.status(200).send({
        message: "Produto atualizado com sucesso",
      });
    })
    .catch((ex) => {
      res.status(400).send({
        message: "Falha ao atualizar produto",
        data: ex,
      });
    });
};

exports.deleteById = (req, res, next) => {
  repository
    .delete(req.params.id)
    .then(() => {
      res.status(204).send({
        message: "Produto removido com sucesso",
      });
    })
    .catch((ex) => {
      res.status(400).send({
        message: "Falha ao remover o produto",
        data: ex,
      });
    });
};
