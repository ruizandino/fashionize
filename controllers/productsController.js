let fs= require('fs');
const file = fs.readFileSync('./data/productos.json', 'utf-8');
const products = JSON.parse(file);
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const slice = desc => desc.slice(0, 90) + '...';
let bcrypt= require('bcrypt');
let {check, validationResult, body} =require('express-validator');

const productController={

    listProducts: function(req, res) {
        res.render('products');
    },
    productDetail: function(req, res) { //sirve de ejemplo
        res.render('productDetail');
    },

    prodDetail: function (req, res, next) {
        let productFind;
        products.forEach(function (product) {
            if (product.id == req.params.id) {
                productFind = product
            }
        });
        if (productFind) {
            res.render('productDetail', { product: productFind })
        } else {
            res.send("Producto inexistente")
        }
    },

    productAdd: function(req, res) { 
        res.render('productAdd');

    },
    processAdd: function(req,res){  
        let errors= validationResult(req); //nos devuelve un array de errores

        if (errors.isEmpty()){ //si da true, no hay errores:

            let prododuct = { //como usamos post no vamos a usar query sino body
                nombre: req.body.nombre, 
                edad: req.body.edad,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10), //encriptamos el pass
                avatar: req.files[0].filename,
            };

            //primero leer que cosas habia
            let archivoUsuario= fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
            
            let usuarios;      
            if(archivoUsuario==""){
                usuarios=[];
            } else{
                usuarios= JSON.parse(archivoUsuario); // descomprimo la lista
            }

            usuarios.push(usuario);
            //lo volvemos a convertir a formato string para guardarlo al archivo
            usuariosJSON= JSON.stringify(usuarios);//lo convierto en string de nuevo para guardarlo

            fs.writeFileSync('usuarios.json', usuariosJSON); // guardo la info  

            return res.render('succes');
           //return res.redirect("/users/list"); //lo redirecciona a la lista de todos los usuarios
           
        } else{
            return res.render('register', {errors: errors.errors});           

        };   

    },
    cart:  function(req, res) {
        res.render('productCart');
    },
}
module.exports= productController