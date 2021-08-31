"use strict";
const Product = require("mongoose").model("Products");

exports.get = async () => {
  return await Product.find(
    {
      active: true,
    },
    "title price slug"
  );
};

exports.getBySlug = async (slug) => {
  return await Product.findOne(
    { active: true, slug: slug },
    "title description price slug tags"
  );
};

exports.getById = async (id) => {
  return await Product.findById(id);
};

exports.getByTag = async (tag) => {
  return await Product.find(
    {
      tags: tag,
      active: true,
    },
    "title description price slug tags"
  );
};

exports.create = async (data) => {
  var product = new Product(data);
  await product.save();
};

exports.update = async (id, data) => {
  await Product.findByIdAndUpdate(id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
      slug: data.slug,
    },
  });
};

exports.delete = async (id) => {
  await Product.findOneAndRemove(id);
};
