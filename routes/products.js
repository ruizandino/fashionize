var express = require('express');
const productController = require('../controllers/productsController');
var router = express.Router();

router.get('/', productController.listProducts);

router.get('/detail', productController.productDetail);

router.get('/productDetail/:id', productController.prodDetail);

router.get('/add', productController.productAdd);

router.post('/add', productController.processAdd);

router.get('/cart', productController.cart);


module.exports= router;