var express = require('express');
var router = express.Router();

const apiController = require('../../controllers/api/apiController');

// cantidad total de usuarios
router.get('/usuarios/cantidadTotal', apiController.cantidadUsuarios);

// listado de usuarios, imprime todos los datos de los usuarios registrados
router.get('/usuarios/lista', apiController.listaUsuarios);

// cantidad total de productos agregados
router.get('/productos/cantidadTotal', apiController.cantidadProductos);

// cantidad total de categorias de productos
router.get('/productos/categorias/cantidadTotal', apiController.cantidadCategorias);

// listado de categorias de productos
router.get('/productos/categorias/listado', apiController.listaCategorias);

// cantidad total de carritos finalizados
router.get('/carritos/cantidadTotal', apiController.TotalCarritosFinalizados);

// listado de compras de los usuarios
router.get('/carritos/compras', apiController.listacompras);

//ultimo producto agregado
router.get('/productos/ultimoProducto', apiController.ultimoProducto)



module.exports = router;
