const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = 'Categoria'; //Este alias es el que se utiliza para las asociaciones

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },

        nombre: dataTypes.STRING,
    }

    let config = {        
        tableName: 'categorias',
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto, {// de uno a muchos // una categoria tiene muchos productos asociados
            as: "productos", // nombre de la relacion, 
            foreignKey: "categoria_id" //clave foranea
        });    
    }
    return Categoria;
}

