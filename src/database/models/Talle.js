const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = 'Talle'; //Este alias es el que se utiliza para las asociaciones

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },

        nombre: dataTypes.STRING,
    }

    let config = {        
        tableName: 'talles',
        timestamps: false
    }
    const Talle = sequelize.define(alias, cols, config);

    Talle.associate = function(models){
        Talle.belongsTo(  
            models.Producto,
             { 
            as: "productos",
            foreignKey: "talle_id"
            }
        );         
    }
    return Talle;
}
