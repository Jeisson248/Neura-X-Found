document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon");
    const chatContainer = document.getElementById("chatContainer");
    const menu = document.getElementById("menu");

    chatIcon.addEventListener("click", function () {
        if (chatContainer.style.width === "300px") {
            chatContainer.style.width = "0";
            menu.style.display = "none"; // Oculta el menú al cerrar el chat
        } else {
            chatContainer.style.width = "300px";
            menu.style.display = "block"; // Muestra el menú al abrir el chat
        }
    });

    // Función para ocultar el menú cuando se hace clic en un mensaje
    chatContainer.addEventListener("click", function () {
        menu.style.display = "none";
    });

    // Función para mostrar el menú cuando se hace clic en el icono de menú
    menu.addEventListener("click", function (e) {
        e.stopPropagation(); // Evita que el clic llegue al contenedor del chat
        menu.style.display = "block";
    });
});
