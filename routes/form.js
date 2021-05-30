var express = require('express');
var router = express.Router();
var connection = require('./mysql/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
});

module.exports = router;