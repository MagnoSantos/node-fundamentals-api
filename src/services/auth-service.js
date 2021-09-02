"use strict";
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
var salt = crypto.randomBytes(128).toString("base64");

exports.generateToken = async (data) => {
  return jwt.sign(data, salt, { expiresIn: "1d" });
};

exports.decodeToken = async (token) => {
  return jwt.verify(token, salt);
};

exports.authorize = (req, rest, next) => {
  var token = req.body.token || req.query.token || req.headers["x-acess-token"];

  if (!token) {
    rest.status(401).json({
      message: "Acesso negado!",
    });
  } else {
    console.log(salt);
    jwt.verify(token, salt, (err, decoded) => {
      if (err) {
        rest.status(401).json({
          message: "Token inválido",
        });
      } else {
        next();
      }
    });
  }
};
