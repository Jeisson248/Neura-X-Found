-- Creación de la base de datos ProyectosDB
CREATE DATABASE ProyectosDB;

-- Usa la base de datos ProyectosDB
USE ProyectosDB;

ALTER TABLE `usuarios` CHANGE `CorreoElectronico` `Correo` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(100) UNIQUE NOT NULL,
    Contrasena VARCHAR(100) NOT NULL
);

-- Tabla de Datos de Pago
CREATE TABLE DatosDePago (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDUsuario INT,
    NumeroDeTarjeta VARCHAR(16) NOT NULL,
    NombreDeTarjeta VARCHAR(100) NOT NULL,
    FechaDeVencimiento DATE NOT NULL,
    CodigoDeSeguridad VARCHAR(4) NOT NULL,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
);

-- Tabla de Solicitudes de Restablecimiento de Contraseña
CREATE TABLE SolicitudesRestablecimiento (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDUsuario INT,
    CodigoDeRestablecimiento VARCHAR(50) NOT NULL,
    FechaDeSolicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
);

