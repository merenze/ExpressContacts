var express = require("express");
var router = express.Router();
var contactController = require("../controllers/api/ContactController");

router.get("/contacts", contactController.index);

module.exports = router;
