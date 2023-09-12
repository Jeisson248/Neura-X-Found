<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ProyectosDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Prevenir inyección de SQL utilizando sentencias preparadas
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["register"])) {
        $nombre = $_POST["nombre"];
        $correo = $_POST["correo"];
        $contrasena = $_POST["contrasena"];

        // Verificar que los campos no estén vacíos antes de insertar
        if (!empty($nombre) && !empty($correo) && !empty($contrasena)) {
            $stmt = $conn->prepare("INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $nombre, $correo, $contrasena);

            if ($stmt->execute()) {
                echo "Registro exitoso";
            } else {
                echo "Error: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Por favor, complete todos los campos";
        }
    }

    if (isset($_POST["login"])) {
        $correo = $_POST["correo"];
        $contrasena = $_POST["contrasena"];

        // Verificar que los campos no estén vacíos antes de realizar la consulta
        if (!empty($correo) && !empty($contrasena)) {
            $stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?");
            $stmt->bind_param("ss", $correo, $contrasena);

            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows == 1) {
                echo "Inicio de sesión exitoso";
            } else {
                echo "Correo o contraseña incorrectos";
            }

            $stmt->close();
        } else {
            echo "Por favor, complete todos los campos";
        }
    }
}

$conn->close();
?>
