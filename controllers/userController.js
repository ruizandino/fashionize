
const userController={
    register: function(req, res) {
        res.render('register');
    },
    create: function(req, res){ // procesa la info del formulario de registro

    },
    login: function(req, res) {
        res.render('login');
    },
    processLogin: function(req, res) {

    }

}
module.exports= userController;