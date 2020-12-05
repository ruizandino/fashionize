module.exports = (sequelize, dataTypes) =>{
    let alias = 'ImagenesProducto';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        ruta  : dataTypes.STRING,
        producto_id : dataTypes.INTEGER
        
    }
    let config = {
        tableName : 'imagen_producto',
        timestamps : false
    }

    const ImagenesProducto = sequelize.define(alias,cols,config);
    ImagenesProducto.associate = function(models){
        ImagenesProducto.belongsTo( //una imagen pertenece a un producto
            models.Producto,
            {
                as : 'productos',
                foreignKey: 'producto_id'
            }
        )
        
    }
    return ImagenesProducto;
}