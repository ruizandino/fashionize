window.addEventListener("load", function(){
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(function(response){return response.json()})
    .then(function(data){
        console.log(data.provincias)

        let select = document.querySelector("select.selectProvincias")
        select.innerHTML += "<option value='<%=usuario.provincia%>' class='input1' selected><%=usuario.provincia%></option>"
        for(let i=0 ; i < data.provincias.length ; i++){
            select.innerHTML += "<option class='input1' value='"+data.provincias[i].nombre+"'>"+data.provincias[i].nombre+"</option>"
        }
    })
})