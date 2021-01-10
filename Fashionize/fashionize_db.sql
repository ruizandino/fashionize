-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-12-2020 a las 21:16:55
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fashionize_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `total` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaCompra` datetime NOT NULL,
  `estado` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_producto`
--

CREATE TABLE `carrito_producto` (
  `id` int(11) NOT NULL,
  `carrito_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precioCongelado` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Pantalones'),
(2, 'Remeras'),
(3, 'Camisas'),
(4, 'Vestidos'),
(5, 'Jeans');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `colores`
--

INSERT INTO `colores` (`id`, `nombre`) VALUES
(1, 'Blanco'),
(2, 'Rojo'),
(3, 'Naranja'),
(4, 'Amarillo'),
(5, 'Verde'),
(6, 'Azul'),
(7, 'Violeta'),
(8, 'Negro'),
(9, 'Rosa'),
(10, 'Fucsia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores_productos`
--

CREATE TABLE `colores_productos` (
  `id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_producto`
--

CREATE TABLE `imagen_producto` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `ruta` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagen_producto`
--

INSERT INTO `imagen_producto` (`id`, `producto_id`, `ruta`) VALUES
(6, 10, '/img-product-1607645731526.webp'),
(7, 11, '/img-product-1607646030839.webp'),
(8, 12, '/img-product-1607647602748.webp'),
(9, 13, '/img-product-1607647784375.webp'),
(10, 14, '/img-product-1607647944329.webp'),
(11, 15, '/img-product-1607648115381.webp'),
(12, 16, '/img-product-1607648306411.webp'),
(13, 17, '/img-product-1607648503027.webp'),
(14, 18, '/img-product-1607648840785.webp'),
(15, 19, '/img-product-1607648989444.webp'),
(16, 20, '/img-product-1607649188229.webp'),
(17, 21, '/img-product-1607649321447.webp'),
(18, 22, '/img-product-1607649466949.webp'),
(19, 23, '/img-product-1608275995139.jpg'),
(20, 24, '/img-product-1608276169774.jpg'),
(21, 25, '/img-product-1608276288227.jpg'),
(22, 26, '/img-product-1608276434627.jpg'),
(23, 27, '/img-product-1608276608849.jpg'),
(24, 28, '/img-product-1608276822007.jpg'),
(25, 29, '/img-product-1608277069457.jpg'),
(26, 31, '/img-product-1608277477413.jpg'),
(27, 32, '/img-product-1608277638345.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `marca` varchar(70) DEFAULT NULL,
  `precio` float(8,2) NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `subcategoria_id` int(11) DEFAULT NULL,
  `descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `categoria_id`, `marca`, `precio`, `descuento`, `subcategoria_id`, `descripcion`) VALUES
(10, 'Camisa Lino', 3, 'bahiana', 2000.00, 0, 1, 'Camisa de lino con cuello redondo, escote pico y manga larga con traba para roll-up. Bolsillos en delantero y cierre frontal con botones.'),
(11, 'Camisa Stripes', 3, 'Salamanca', 3500.00, 0, 1, 'Camisa oversize de voile de rayón rayada.'),
(12, 'Blusa Knot', 2, 'bahiana', 1500.00, 0, 1, 'Blusa manga larga larga de crepe con escote calado en delantero y recurso tipo nudo en delantero.'),
(13, 'CAMISA JACQUARD', 3, 'KNOT', 2000.00, 15, 1, 'Camisa manga larga con lazo en cuello para nudar tipo corbatin en tela jacquard.'),
(14, 'BLUSA FLOREADA', 2, 'PATROL', 3000.00, 0, 1, 'Blusa de manga corta con estampa floral de la coleccion'),
(15, 'CAMISA KENYA', 3, 'KENYA', 4000.00, 20, 1, 'Blusa de voile algodón fantasia con lazo en espalda.'),
(16, 'VESTIDO KNOT FLOREADO', 4, 'KNOT', 3700.00, 30, 1, 'Vestido tipo camisero con nudo en cintura y pinzas en la espalda que entallan la silueta . Estampa exclusiva de la colección.'),
(17, 'JEANS BLUE', 5, 'FALABELLA', 3000.00, 10, 1, 'Jean legging, con tela de poliester reciclado. Parte de la linea des c. Tiro alto. Super strech.'),
(18, 'JEANS NEGRO', 5, 'PATROL ', 3000.00, 10, 1, 'Jean slim fit, con una tela con un preoceso de engomado. Es una tela italiana premium. Tiro alto.'),
(19, 'JEANS GABARDINA', 5, 'PATROL', 2500.00, 10, 1, 'Jean de gabardina, basico, slim fit, de tiro alto.'),
(20, 'REMERA MC RESPIRAR', 2, 'BAHIANA', 1000.00, 0, 2, 'Remera manga corta en tela base de flame devoree con arte central en técnica flock (mano aterciopelada) arte respirar.\r\n'),
(21, 'REMERA COMB. LINO LACE', 2, 'BAHIANA', 1200.00, 10, 1, 'Remera de jersey con lino, de hombros caidos y silueta levemente relax, combinada en dos tonos con puntilla en laterales.\r\n'),
(22, 'REMERA PRINT PATTY', 2, 'PRINT', 1500.00, 10, 1, 'Remera manga corta escote redondo con arte central fotografico patty.'),
(23, 'VESTIDO MAXI FLOWERS', 4, 'Bahiana', 4760.00, 0, 1, 'Vestido largo, full print, 100% viscosa.'),
(24, 'VESTIDO CUPRO ARUBA', 1, 'Bahiana', 6000.00, 0, 1, 'Vestido fluido de cupro combinado con gasa creppe en espalda. Escote tipo halter con volados, tajos en laterales y abertura en espalda.'),
(25, 'VESTIDO CUPRO ORUBA', 4, 'Bahiana', 6000.00, 0, 1, 'Vestido fluido de cupro combinado con gasa creppe en espalda. Escote tipo halter con volados, tajos en laterales y abertura en espalda.'),
(26, 'VESTIDO STONE CAROL', 4, 'PATROL', 5000.00, 0, 1, ''),
(27, 'VESTIDO LONG NET PEACH', 4, 'PATROL', 6179.00, 0, 1, 'Vestido largo de textura peach con escote redondo y bolsillos laterales. Largo modular midi, debajo de rodilla.'),
(28, 'VESTIDO LONG ', 4, 'Bahiana', 6777.00, 50, 1, 'Vestido largo de raron con recorte diagonal en combinacion, tajos en frente y bretel de tiritas con reguladores.'),
(29, 'CAMISA RELAX CUBA', 3, 'Bahiana', 4779.00, 40, 1, 'Camisa oversize relax de rayón viscosa manga corta.'),
(31, 'PANTALON JOGGER ', 1, 'PATROL', 2999.00, 0, 1, 'Pantalón jogger con elástico en cintura , boton soft touch y bolsillos en lateral.'),
(32, 'PANTALON CROP FLOR ', 1, 'PATROL', 2999.00, 10, 1, '\r\nPantalón crop con estampa exclusiva de la colección. Acceso mediante cierre lateral y lazo en cintura.\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'usuario'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategorias`
--

CREATE TABLE `subcategorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `subcategorias`
--

INSERT INTO `subcategorias` (`id`, `nombre`) VALUES
(1, 'Oferta'),
(2, 'Destacado'),
(3, 'New arrivals');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talles`
--

CREATE TABLE `talles` (
  `id` int(11) NOT NULL,
  `numero` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `talles`
--

INSERT INTO `talles` (`id`, `numero`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, 'XXL'),
(6, '36'),
(7, '38'),
(8, '40'),
(9, '42'),
(10, '44'),
(11, '46'),
(12, '48'),
(13, '50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talles_productos`
--

CREATE TABLE `talles_productos` (
  `id` int(11) NOT NULL,
  `talle_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  `apellido` varchar(40) CHARACTER SET utf8 NOT NULL,
  `email` varchar(70) CHARACTER SET utf8 NOT NULL,
  `password` text CHARACTER SET utf8 NOT NULL,
  `rol_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `rol_id`) VALUES
(1, 'Vaneza', 'Ruiz', 'ruizandino.95@gmail.com', 'admin123', 2),
(2, 'cosme', 'fulanito', 'usuario@gmail.com', 'prueba123', 1),
(3, 'vaneza', 'fuerte', 'vany183@gmail.com', '$2a$10$5qWY9Uu1ITRbkcU.CJ1SSOZbFtdQL7.S/cSLjtr4eosZzErw4xsfO', 1),
(4, 'mili', 'delcampo', 'mili@gmail.com', '$2a$10$vrSxqFM6CRCLLm00yi0e6.RO1A0FNYNwKWiFlGJ8/NjyvBXVJLoF.', 1),
(5, 'ayumi', 'gonzalez', 'ayumi@gmail.com', '$2a$10$h5zxr/wM2gubp6HCs6IT2OMxujmvlaaKvXkXFzEKMUeVjT4GDE2/S', 1),
(6, 'facundo', 'gonzalez', 'facu@gmail.com', '$2a$10$fYy3czV6sqevJYfB8ajRweuWdiYmsFY6cuKSLiOfQjuGEla.AQYw6', 1),
(7, 'fashionize', 'ninguno', 'fashionize@gmail.com', '$2a$10$Lgtf/DlICGTFIdnSmGFq3uJRQysQvucCPWYkFao5Q6gKxCWvNMGdq', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `carrito_producto`
--
ALTER TABLE `carrito_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `carrito_id` (`carrito_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colores_productos`
--
ALTER TABLE `colores_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `imagen_producto`
--
ALTER TABLE `imagen_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`,`subcategoria_id`),
  ADD KEY `productos_ibfk_4` (`subcategoria_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `talles`
--
ALTER TABLE `talles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `talles_productos`
--
ALTER TABLE `talles_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `talles_id` (`talle_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carrito_producto`
--
ALTER TABLE `carrito_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `colores_productos`
--
ALTER TABLE `colores_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagen_producto`
--
ALTER TABLE `imagen_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `talles`
--
ALTER TABLE `talles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `talles_productos`
--
ALTER TABLE `talles_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `carrito_producto`
--
ALTER TABLE `carrito_producto`
  ADD CONSTRAINT `carrito_producto_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `carrito_producto_ibfk_2` FOREIGN KEY (`carrito_id`) REFERENCES `carrito` (`id`);

--
-- Filtros para la tabla `colores_productos`
--
ALTER TABLE `colores_productos`
  ADD CONSTRAINT `colores_productos_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `colores_productos_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `colores` (`id`);

--
-- Filtros para la tabla `imagen_producto`
--
ALTER TABLE `imagen_producto`
  ADD CONSTRAINT `imagen_producto_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`subcategoria_id`) REFERENCES `subcategorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `talles_productos`
--
ALTER TABLE `talles_productos`
  ADD CONSTRAINT `talles_productos_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `talles_productos_ibfk_2` FOREIGN KEY (`talle_id`) REFERENCES `talles` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
