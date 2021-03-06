"use strict";
const Schema = require("mongoose").Schema;
const schema = new Schema({
  customer: {
    type: require("mongoose").Schema.Types.ObjectId,
    ref: "Customer",
  },
  number: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.Now,
  },
  status: {
    type: String,
    required: true,
    enum: ["created", "done"],
    default: "created",
  },
  items: [
    {
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

module.exports = require("mongoose").model("Order", schema);
