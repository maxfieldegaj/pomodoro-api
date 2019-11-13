var express = require('express');
var router = express.Router();
const Test = require('../lib/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: Test.first(true) });
});

module.exports = router;
