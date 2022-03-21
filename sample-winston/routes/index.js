var express = require('express');
var router = express.Router();
var logger = require('../config/winston');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info("Some debug messages");
  logger.error("Some error messages");
  res.render('index', { title: 'Express' });
});

module.exports = router;
