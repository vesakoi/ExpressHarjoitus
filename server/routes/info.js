var express = require('express');
var router = express.Router();

/* GET Info page. */
router.get('/', function(req, res, next) {
  res.render('info'/*, {title: 'Info' }*/);
});

module.exports = router;
