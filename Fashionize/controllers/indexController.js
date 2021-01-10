
const indexController={
    home: function(req, res) {
        res.render('Home');
    },
    contact: function(req, res) {
        res.render('contacto');
    }

}

module.exports= indexController;