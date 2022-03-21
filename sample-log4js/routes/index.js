var express = require('express');
var router = express.Router();
var logger = require('../config/log4js');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.level = "debug";
  logger.debug("Some debug messages");
  res.render('index', { title: 'Express' });
  
});

module.exports = router;
