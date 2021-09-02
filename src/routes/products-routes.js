"use strict";
const router = require("express").Router();
const controller = require("../controllers/product-controller");
const authService = require("../services/auth-service");

router.get("/", controller.get);
router.get("/:slug", controller.getBySlug);
router.get("/admin/:id", controller.getById);
router.get("/tags/:tag", controller.getByTag);
router.post("/", authService.authorize, controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.deleteById);

module.exports = router;