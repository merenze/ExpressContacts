var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('contacts/index'));
router.get('/create', (req, res) => res.render('contacts/create'));

module.exports = router;