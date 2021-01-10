
const db = require('../../src/database/models');

const apiController = {

    // cantidad total de usuarios registrados
    cantidadUsuarios: function (req, res, next) {
        db.Usuario.count()
            .then(
                function (cantidad) {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: "/api/usuarios/cantidadTotal"
                        },
                        data: { cantidadUsuarios: cantidad }
                    }
                    res.json(respuesta)
                }
            )
    },

    // listado de usuarios, imprime todos los datos de los usuarios registrados
    listaUsuarios: function(req,res,next){
        db.Usuario.findAll()
        .then(function(usuarios){
            
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/usuarios/lista"
                },               
                    
               
                data:  usuarios 
            }
            res.json(respuesta)
        })
    },

    // cantidad total de productos agregados 
    cantidadProductos: function (req, res, next) {
        db.Producto.count()
            .then(
                function (cantidad) {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: "/api/productos/cantidadTotal"
                        },
                        data: { cantidadProductos: cantidad }
                    }
                    res.json(respuesta)
                }
            )
    },

    // cantidad total de categorias de productos
    cantidadCategorias: function (req, res, next) {
        db.Categoria.count()
            .then(
                function (cantidad) {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: "/api/productos/categorias/cantidadTotal"
                        },
                        data: { cantidadCategorias: cantidad }
                    }
                    res.json(respuesta)
                }
            )
    },

    // listado de categorias de productos
    listaCategorias: function(req,res,next){
        db.Categoria.findAll()
        .then(function(categorias){
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/productos/categorias/listado"
                },
                data: categorias
            }
            res.json(respuesta)
        })
    },

    // cantidad total de carritos finalizados
    TotalCarritosFinalizados: function (req, res, next) {
        db.Carrito.count({
            where: {estado: 0}
        })
            .then(
                function (cantidad) {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: "/api/carritos/cantidadTotal"
                        },
                        data: { cantidadCarritos: cantidad }
                    }
                    res.json(respuesta)
                }
            )
    },
  
    // listado de compras de usuarios
    listacompras: function (req, res, next) { 
        db.Carrito.findAll({
            where: {
                estado: 0
              },
              include: [{association: "producto_carrito"}]
            }) 
            .then(
                function (compras) {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: "/api/carritos/compras"
                        },
                        data: compras
                    }
                    res.json(respuesta)
                }
            )
    },

    //ultimo producto agregado
    ultimoProducto: function(req,res,next){ 
        db.Producto.findOne({
            order: [
                ["id", "DESC"]
            ],
            include: [{association: "imagenes"}]
        })
        .then(function(producto){
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/productos/ultimoProducto"
                },
                data: producto
            }
            res.json(respuesta)
        })
    }


}
module.exports = apiController