module.exports = (sequelize, dataTypes) =>{
    let alias = 'Carrito';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },       
        usuario_id : dataTypes.INTEGER,
        total  : dataTypes.FLOAT,
        cantidad: dataTypes.INTEGER,
        fechaCompra : dataTypes.DATE,
        fechaCreacion : dataTypes.DATE,
        estado : dataTypes.BOOLEAN // VER SI ESTA CORRECTO ESTE DATO
    }
    let config = {
        tableName : 'carrito',
        timestamps : false
    }

    const Carrito = sequelize.define(alias,cols,config);
    Carrito.associate = function(models){
       /* Carrito.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "usuario_id"
        });*/
        
        Carrito.belongsToMany(models.Producto, {
            as: "productos",
            through: "carrito_producto",
            foreignKey: "carrito_id",
            otherKey: "producto_id",
            timestamps: false
        })
    }
    return Carrito;
}