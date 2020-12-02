
const userController={
    register: function(req, res) {
        res.render('register');
    },
    create: function(req, res){ // procesa la info del formulario de registro
        
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

    login: function(req, res) {
        res.render('login');
    },
    processLogin: function(req, res) {

    }

}
module.exports= userController;