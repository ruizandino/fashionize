

let adminMiddleware = function (req,res,next){
      if(req.cookies.usuarioRol == 2){
          next();
      } else {          
             // res.send('Error, No sos administrador!');
             res.render("not-found")
               
      }
        
}

module.exports = adminMiddleware;
