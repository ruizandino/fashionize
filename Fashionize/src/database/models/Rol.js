const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = 'Rol'; //Este alias es el que se utiliza para las asociaciones

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },

        nombre: dataTypes.STRING,
    }

    let config = {        
        tableName: 'roles',
        timestamps: false
    }

    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = function(models){
       Rol.hasMany( 
            models.Usuario, 
            {
            as: "usuarios", // nombre de la relacion
            foreignKey: "rol_id" 
            }
        );    
    }
    return Rol;
}

