var express = require('express');
const productController = require('../controllers/productsController');
var router = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/', productController.listadb); // muestra la lista de productos desde la base de datos.

//router.get('/', productController.listProducts); // listaba los productos desde json

router.get('/detail', productController.productDetail); //queda como ejemplo por el momento

router.get('/productDetail/:id', productController.prodDetail);

router.get('/add', productController.productAdd);
router.post('/add', upload.any(), productController.processAdd);

router.get('/productEdit/:ID', productController.editarProducto);
router.post('/productEdit/:ID', productController.actualizarProducto);//procesa y actualiza la informacion sobre el producto

router.get('/cart', productController.cart);


module.exports= router;