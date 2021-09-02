"use strict";
const crypto = require("crypto");

exports.encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(128, (err, buf) => {
      const salt = buf.toString("base64");

      crypto.pbkdf2(password, salt, 1000, 64, "sha512", (err, key) => {
        resolve(key.toString("base64"));
      });
    });
  });
};
