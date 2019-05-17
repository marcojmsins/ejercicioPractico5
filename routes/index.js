var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;
var cors = require('cors');


/* GET home page. */

router.get('/index', cors() ,function(req, res, next) {

  res.sendFile(resolve('views/index.html'));
});

router.get('/', cors() ,function(req, res, next) {
  res.sendFile(resolve('views/trend.html'));
});

module.exports = router;