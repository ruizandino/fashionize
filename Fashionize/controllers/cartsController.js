const fs = require('fs');
const path = require('path');
const multer = require('multer');
const db = require('../src/database/models');
const { isArray } = require('util');

const cartsController = {
    


    carrito: function(req,res,next){
        //Busca si el usuario tiene un carrito abierto
        db.Carrito.findOne({
            where: {
                usuario_id: req.cookies.usuarioID,
                estado: 1
            }
        })
        .then(function(carrito){
            //Si no lo tiene se crea un carrito vacio
            if(!carrito){
                db.Carrito.create({
                    usuario_id: req.cookies.usuarioID,
                    fechaCreacion: new Date(),
                    estado: 1
                })
                .then(function(){
                    let carrito_producto = [] 
                    res.render('productCart', {carrito_producto})
                })
            } else {
                //Si ya tenia un carrito abierto, busco los productos que tiene para mostrarlos
                db.Carrito_Producto.findAll({
                    where: {
                        carrito_id: carrito.id
                    },
                    include: [{association: 'productos'}, {association: 'imagenes'}]
                })
                .then(function(carrito_producto){
                    res.render("productCart", {carrito_producto})
                })
            }
        })
    },

    añadirProducto: function(req,res,next){
        let usuarioID = req.cookies.usuarioID        
        db.Producto.findByPk(req.params.producto_id) //busco el producto que capturamos de la url
        .then(function(producto){
           // al encontrar el producto busco si el usuario logueado tiene un carrito asignado
                db.Carrito.findOne({
                    where: {
                        usuario_id: usuarioID,
                        estado: 1
                    }
                })
                .then(function(carrito){
                    //Si no tiene carrito, le asignamos uno
                    if(!carrito){
                        db.Carrito.create({
                            usuario_id: usuarioID,
                            fecha_creacion: new Date(),
                            estado: 1
                        })
                        .then(function(carrito){
                            //Agrega el producto al carrito que estaba vacio
                            db.Carrito_Producto.create({
                                carrito_id: carrito.null,
                                producto_id: req.params.producto_id,
                                cantidad: req.body.cantidad
                            })
                            .then(function(){ 
                                res.redirect("/carts/")
                            })
                        })
                    } else {
                        //Si ya existe un carrito abierto, busco si tiene el producto a agregar
                        db.Carrito_Producto.findOne({
                            where: {
                                carrito_id: carrito.id,
                                producto_id: req.params.producto_id
                            }
                        })
                        .then(function(carrito_producto){                          
                            if(!carrito_producto){   //Si no tiene el producto lo crea y agrega la cantidad
                                db.Carrito_Producto.create({
                                    carrito_id: carrito.id,
                                    producto_id: req.params.producto_id,
                                    cantidad: req.body.cantidad
                                })
                                .then(function(){
                                    res.redirect("/carts/")
                                })
                            } else {
                                //Si ya existia el producto en el carrito solo actualizamos la cantidad
                                let cantidadActual = Number(carrito_producto.cantidad) + Number(req.body.cantidad)
                                if(cantidadActual <= 10){ //10 es el "stock"
                                    db.Carrito_Producto.update({
                                        cantidad: cantidadActual
                                    }, {
                                        where: {
                                            id: carrito_producto.id
                                        }
                                    })
                                    .then(function(){
                                       
                                        res.redirect("/carts/")
                                    
                                    })  
                                } else { //si supera el supuesto stock (10 unidades): agrega solo 10 unidades
                                    db.Carrito_Producto.update({
                                        cantidad: 10
                                    }, {
                                        where: {
                                            id: carrito_producto.id
                                        }
                                    })
                                    .then(function(){
                                       
                                        res.redirect("/carts/")
                                    
                                    }) 
                                }
                            }
                        })
                    }
                })
           
        })

    },

    eliminarProducto: function(req,res,next){
        let usuarioID = req.cookies.usuarioID
        //busca el producto y lo borra
        db.Carrito_Producto.destroy({
            where: {
                id: req.params.producto_id
            }
        })
            .then(function(){
                res.redirect("/carts/")
            })
    },

    actualizarCarrito: function(req,res,next){        
        //si hay varios productos en el carrito:
        if(typeof req.body.id == "object"){ 
            for(let i=0 ; i < req.body.id.length; i++){
                db.Carrito_Producto.update({
                    cantidad: req.body.cantidad[i]
                },{
                    where: {
                        id: req.body.id[i]
                    }
                })
                .then(function(){})
            }       
        res.redirect("/carts/")

        } else { //si hay un solo producto por actualizar 
            db.Carrito_Producto.update({
                cantidad: req.body.cantidad
            },{
                where: {
                    id: req.body.id
                }
            })
            .then(function(){})
            res.redirect("/carts/")
        }
    },

    finalizarCompra: function(req,res,next){
        let usuarioRol= req.cookies.usuarioRol

        if(usuarioRol == 2){ //si es administrador no puede finalizar la compra
            res.send("ERROR, no puedes comprar tus propios productos")
        
        }else{
        
        db.Carrito.update({
            estado: 0,
            fechaCompra: new Date()
        }, {
            where: {
                id: req.params.carrito_id 
            }
        })
        .then(function(){
            // si esta comprando varios productos:
            if(typeof req.body.id == "object"){

                for(let i=0 ; i < req.body.id.length ; i++){
                    db.Carrito_Producto.update({
                        precioCongelado: req.body.precio[i]
                    }, {
                        where: {
                            id: req.body.id[i]
                        }
                    })
                    .then(function(){
                        res.redirect('/') 
                    })
                }
                
            } else {
                db.Carrito_Producto.update({
                    precioCongelado: req.body.precio
                }, {
                    where: {
                        id: req.body.id
                    }
                })
                .then(function(){})
                res.redirect('/')
            }
        })
    }
}
    

}

module.exports = cartsController;