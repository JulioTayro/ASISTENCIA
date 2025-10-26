
CREATE DATABASE IF NOT EXISTS bd_registro_empleados;
USE bd_registro_empleados;


CREATE TABLE IF NOT EXISTS departamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS empleado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    dni VARCHAR(8) NOT NULL UNIQUE,
    correo VARCHAR(100),
    telefono VARCHAR(20),
    fecha_ingreso DATE,
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamento(id)
);


CREATE TABLE IF NOT EXISTS asistencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empleado_id INT NOT NULL,
    fecha DATE NOT NULL,
    hora_entrada TIME,
    hora_salida TIME,
    FOREIGN KEY (empleado_id) REFERENCES empleado(id)
);


CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    empleado_id INT NOT NULL,
    FOREIGN KEY (empleado_id) REFERENCES empleado(id)
);


INSERT INTO departamento (nombre) VALUES 
('Recursos Humanos'),
('Tecnología'),
('Finanzas'),
('Marketing'),
('Ventas');


INSERT INTO empleado (nombre, apellido, dni, correo, telefono, fecha_ingreso, departamento_id) VALUES
('Juan', 'Pérez', '12345678', 'juan.perez@correo.com', '999111222', '2024-01-15', 1),
('Ana', 'Gómez', '87654321', 'ana.gomez@correo.com', '988222333', '2024-02-20', 2),
('Luis', 'Ramírez', '22334455', 'luis.ramirez@correo.com', '911223344', '2023-11-10', 3);


INSERT INTO asistencia (empleado_id, fecha, hora_entrada, hora_salida) VALUES
(1, '2024-04-15', '08:00:00', '17:00:00'),
(2, '2024-04-15', '09:00:00', '18:00:00');

INSERT INTO usuario (nombre_usuario, clave, empleado_id)
VALUES ('admin', '123', 1);

