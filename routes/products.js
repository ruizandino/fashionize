var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('products');
  });

  router.get('/detail', function(req, res) {
    res.render('productDetail');
  });
  
router.get('/add', function(req, res) {
    res.render('productAdd');
  });  

router.get('/cart', function(req, res) {
    res.render('productCart');
  });
  


module.exports= router;