const router = require("express").Router();
const controller = require("../controllers/customer-controller");

router.post("/", controller.post);

module.exports = router;
