<?php
require_once "database.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener los datos del formulario
    $projectName = $_POST["project_name"];

    // Insertar el proyecto en la base de datos
    $sql = "INSERT INTO proyectos (nombre) VALUES ('$projectName')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Proyecto agregado correctamente";
    } else {
        echo "Error al agregar el proyecto: " . $conn->error;
    }
}

$conn->close();
?>











