let authMiddleware = function (req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
        res.locals.usuarioID= req.cookies.usuarioID;
        res.locals.usuarioRol= req.cookies.usuarioRol;
        res.locals.isAuthenticated = true
        next();
        
    }else{
        res.locals.isAuthenticated = false
        res.redirect("/users/login")
    }
}

module.exports = authMiddleware