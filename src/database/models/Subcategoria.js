const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = 'Subcategoria'; //Este alias es el que se utiliza para las asociaciones

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },

        nombre: dataTypes.STRING,
    }

    let config = {        
        tableName: 'subcategorias',
        timestamps: false
    }

    const Subcategoria = sequelize.define(alias, cols, config);

    Subcategoria.associate = function(models){
        Subcategoria.belongsToMany(models.Producto, {// de muchos a muchos 
            as: "productos", // nombre de la relacion, 
            foreignKey: "subcategoria_id" //se relaciona con productos a traves de esta clave foranea
        });
   
    }
    return Subcategoria;
}
