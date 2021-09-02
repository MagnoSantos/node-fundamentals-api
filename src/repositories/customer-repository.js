"use strict";
const Customer = require("mongoose").model("Customer");

exports.get = async () => {
  return await Customer.find(
    {
      active: true,
    },
    "title price slug"
  );
};

exports.create = async (data) => {
  const customer = new Customer(data);
  await customer.save();
};

exports.authenticate = async (data) => {
  return await Customer.find({
    email: data.email,
    password: data.password,
  });
};
