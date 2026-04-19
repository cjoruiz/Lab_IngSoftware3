CREATE TABLE categorias (
    id INT PRIMARY KEY,
    nombreCategoria VARCHAR(255)
);

CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    email VARCHAR(255),
    createAt DATE,
    idCategoria INT,
    FOREIGN KEY (idCategoria) REFERENCES categorias(id)
);

CREATE TABLE facturas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha_generacion DATE NOT NULL,
    total FLOAT NOT NULL,
    id_producto INT NOT NULL,
    cantidad_productos INT NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id)
);







