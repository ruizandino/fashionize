

let guestMiddleware = function (req, res, next) {
    if (req.cookies.remember != undefined || req.session.usuarioLogueado != undefined) {  
        req.session.usuarioLogueado= req.cookies.remember
        res.locals.isAuthenticated = true
        
        res.send("ya estas logueado con el email:"+req.session.usuarioLogueado);
    } else {
        res.locals.isAuthenticated = false
       next();
    }

}

module.exports = guestMiddleware