module.exports = (sequelize, dataTypes) =>{
    let alias = 'Carrito_Producto';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        carrito_id  : dataTypes.INTEGER,
        producto_id : dataTypes.INTEGER,
        cantidad: dataTypes.INTEGER,
        precioCongelado : dataTypes.FLOAT

    }
    let config = {
        tableName : 'carrito_producto',
        timestamps : false
    }

    const Carrito_Producto = sequelize.define(alias,cols,config);
    Carrito_Producto.associate = function(models){
        Carrito_Producto.belongsTo(
            models.Carrito,
            {
                as : 'carrito',
                foreignKey: 'carrito_id'
            }
        )
        Carrito_Producto.belongsTo(
            models.Producto,
            {
                as : 'productos',
                foreignKey: 'producto_id'
            }
        )
        Carrito_Producto.hasMany(models.Imagenes, {
            as: "imagenes",
            foreignKey: "producto_id",
            sourceKey: "producto_id"
        })       
        
    }
    return Carrito_Producto;
}