var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});

router.get('/Home', function(req,res){
  res.render('Home');
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/productDetail', function(req, res) {
  res.render('productDetail');
});
router.get('/products', function(req, res) {
  res.render('products');
});


router.get('/productCart', function(req, res) {
  res.render('productCart');
});

router.get('/productAdd', function(req, res) {
  res.render('productAdd');
});

module.exports = router;