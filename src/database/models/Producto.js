module.exports = (sequelize, dataTypes) => {

    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: dataTypes.STRING,
        categoria_id: dataTypes.INTEGER,
        marca: dataTypes.TEXT,
        imagen_id: dataTypes.INTEGER,        
        precio: dataTypes.FLOAT,
        descuento: dataTypes.INTEGER,
        subCategoria_id: dataTypes.INTEGER,
        descripcion: dataTypes.TEXT,    
        stock:dataTypes.INTEGER,   
        color_id: dataTypes.INTEGER,
        talle_id: dataTypes.INTEGER, 
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {    
        Producto.belongsTo(
            models.Categoria,
            {
                as: 'categorias',
                foreignKey: 'categoria_id' 
            }
        ),
            Producto.belongsToMany(
                models.Subcategoria,
                {
                    as: 'subcategorias',
                    foreignKey: 'subcategoria_id' 
                }
            ),
            Producto.hasMany(
                models.ImagenesProducto,
                {
                    as: 'imagenesProducto',
                    through: 'imagen_producto',
                    foreignKey: 'producto_id', 
                    otherKey: 'id', 
                    timestamps: false
                });  
    }
    return Producto;
}