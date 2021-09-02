"use strict";
var config = require("../config");
var sendgrid = require("sendgrid")(config.sendGridKey);

exports.enviar = async (to, subject, body) => {
  sendgrid.send({
    to: to,
    from: "magno.ufvjm@gmail.com",
    subjet: subject,
    html: body,
  });
};
