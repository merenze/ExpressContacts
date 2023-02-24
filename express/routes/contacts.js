var express = require('express');
var router = express.Router();
var controller = require('../controllers/ContactController');

router
  .get('/', function (req, res, next) {
    // res.render('contacts/index', { Contacts: controller.index() })
      res.json(controller.index(req, res));
  });

module.exports = router;