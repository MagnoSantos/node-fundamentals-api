const router = require("express").Router();
const controller = require("../controllers/customer-controller");

router.post("/", controller.post);
router.post("/authenticate", controller.authenticate);

module.exports = router;
