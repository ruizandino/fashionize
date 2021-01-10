const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cartsController');
const multer = require('multer');
const path = require('path');
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { cart } = require('../controllers/cartsController');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

//Para ver los productos que tenemos en el carrito
router.get('/', authMiddleware, cartsController.carrito);


//Agregar productos al carrito
router.post('/agregar/:producto_id', authMiddleware, cartsController.añadirProducto)
//eliminar producto
router.get('/eliminar/:carrito_id/:producto_id', cartsController.eliminarProducto)


router.post('/guardar/:carrito_id', cartsController.actualizarCarrito)

router.post('/comprar/:carrito_id', cartsController.finalizarCompra)


module.exports = router;