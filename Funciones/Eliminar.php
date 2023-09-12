<?php
require_once "database.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener el ID del proyecto a eliminar
    $projectId = $_POST["project_id"];

    // Eliminar el proyecto de la base de datos
    $sql = "DELETE FROM proyectos WHERE id = '$projectId'";
    
    if ($conn->query($sql) === TRUE) {
        echo "eliminado correctamente";
    } else {
        echo "Error al eliminar: " . $conn->error;
    }
}

$conn->close();
?>
