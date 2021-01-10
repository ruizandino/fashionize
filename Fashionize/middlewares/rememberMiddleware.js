

function rememberMiddleware (req,res,next){
    if(req.cookies.remember != undefined && req.session.usuarioLogueado == undefined){       
            req.session.usuarioLogueado = req.cookies.remember;    
            res.locals.isAuthenticated = true            
    }
    next()
   
}
module.exports= rememberMiddleware;
