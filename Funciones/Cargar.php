<?php
require_once "database.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener el archivo subido
    $file = $_FILES["file"];

    // Obtener los datos adicionales del formulario, si los hay

    // Procesar el archivo y guardar la información en la base de datos
    // Código para procesar el archivo y guardar la información en la base de datos
}

$conn->close();
?>
