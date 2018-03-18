var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/add', function(req, res, next) {
    res.render('addreg', { title: 'add' });
});
/* GET home page. */
router.get('/map', function(req, res, next) {
    res.render('map', { title: 'map' });
});
module.exports = router;
