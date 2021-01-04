

let adminMiddleware = function (req,res,next){
      if(req.session.usuarioLogueado.rol_id == 2){
          next();
      } else {
          if (req.session.usuarioLogueado.rol_id != 2){
                res.send('Error, No sos administrador!');
          }         
      }
        
}

module.exports = adminMiddleware;
