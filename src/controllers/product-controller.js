"use strict";
const mongoose = require("mongoose");
const Product = mongoose.model("Products");

exports.get = (req, res, next) => {
  Product.find({ active: true }, "title price slug")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.getBySlug = (req, res, next) => {
  Product.findOne(
    { active: true, slug: req.params.slug },
    "title description price slug tags"
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.getById = (req, res, next) => {
  Product.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.getByTag = (req, res, next) => {
  Product.find(
    {
      tags: req.params.tag,
      active: true,
    },
    "title description price slug tags"
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((ex) => {
      res.status(400).send(ex);
    });
};

exports.post = (req, res, next) => {
  var product = new Product(req.body);
  product
    .save()
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
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      slug: req.body.slug,
    },
  })
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
  Product.findOneAndRemove(req.params.id)
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
