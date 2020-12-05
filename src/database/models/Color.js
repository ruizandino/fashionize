
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
    let Color = sequelize.define(alias, cols, config);

    Color.associate = (models) => {
        Color.belongsTo( //un color pertenece a un producto
            models.Producto, 
            { 
            as: "productos",
            foreignKey: "color_id" // este fk se encuentra en productos
            }
        );
    };
    return Color;
}