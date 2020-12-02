const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = 'Color'; //Este alias es el que se utiliza para las asociaciones

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        rgb: dataTypes.STRING,
        nombre: dataTypes.STRING,
    }

    let config = {        
        tableName: 'colores',
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config);
    Color.associate = function(models){
        Color.belongsToMany(models.Producto, { //de muchos a muchos // la idea es que varios colores esten asociados a varios productos
            as: "productos",
            foreignKey: "color_id"
        });    
    }
    return Color;
}
