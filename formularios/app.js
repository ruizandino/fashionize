const http = require("http")

http.createServer(function(req, res)
    {
        res.writeHead(200, {"Content-Type" : "text/plain"});
        if (req.url == "/") {
            res.end("Bienvenidos al Home");
        }
        if (req.url == "/registro"){
            res.end("Formulario de Resgistro");
        }
        else {
            res.end("Error viejo")
        }
        
    }).listen(3030, "localhost")

    const express = require("express");
    const app = express();
    app.listen(3000, function(){
        console.log("servidor corriendo")
    })
    app.get("/", function(req, res){
        res.send(/register.html)
    })


