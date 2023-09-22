document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const profileIcon = document.getElementById('profileIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const profileImage = document.getElementById('profileImage');

    // Variable para rastrear el estado del menú
    let menuOpen = false;

    // Función para abrir y cerrar el menú desplegable
    const toggleMenu = () => {
        if (menuOpen) {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
        menuOpen = !menuOpen;
    };

    // Función para recargar la página actual
    const reloadPage = () => {
        // Eliminar la entrada actual en el historial de navegación
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
        location.reload();
    };

    // Función para redirigir al formulario de cierre de sesión
    const redirectToLogoutForm = () => {
        // Redirige a la página del formulario de cierre de sesión
        window.location.href = '../Iniciosesion.html';
    };

    // Evento para redirigir al hacer clic en "Cerrar sesión"
    document.getElementById('logout').addEventListener('click', (event) => {
        // Evita que el menú se cierre inmediatamente al hacer clic en "Cerrar sesión"
        event.stopPropagation();
        redirectToLogoutForm();
    });

    // Evento para abrir y cerrar el menú al hacer clic en el icono de perfil
    profileIcon.addEventListener('click', (event) => {
        // Evitar que el clic se propague y cierre el menú de inmediato
        event.stopPropagation();
        toggleMenu();
        console.log('Toggle menu clicked');
    });

    // Evento para cerrar el menú si se hace clic en cualquier parte fuera del menú
    document.addEventListener('click', () => {
        if (menuOpen) {
            dropdownMenu.style.display = 'none';
            menuOpen = false;
        }
    });

    // Verificar si hay una imagen de perfil almacenada en el LocalStorage
    const savedProfileImage = localStorage.getItem('profileImage');
    if (savedProfileImage) {
        profileImage.src = savedProfileImage;
    }

    // Evento para cambiar la foto de perfil
    const changeProfile = document.getElementById('changeProfile');

    changeProfile.addEventListener('click', () => {
        // Abrir un cuadro de diálogo para seleccionar una imagen
        const fileInput = document.createElement('input');
        fileInput.type = 'file';

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    // Actualizar la imagen del perfil con la imagen seleccionada
                    profileImage.src = event.target.result;

                    // Almacena la nueva imagen en el LocalStorage
                    localStorage.setItem('profileImage', event.target.result);

                    // Aquí puedes agregar la lógica para guardar la nueva foto de perfil en tu servidor si es necesario
                    alert(`Nueva foto de perfil seleccionada: ${file.name}`);
                };

                // Leer la imagen seleccionada como una URL de datos
                reader.readAsDataURL(file);
            }
        });

        fileInput.click();
    });

    // Evitar que el usuario vuelva atrás en la página de inicio de sesión
    window.addEventListener('load', function () {
        // Usar la API del historial para reemplazar la entrada actual en el historial
        // Esto evita que el usuario vuelva atrás a esta página después de cerrar sesión
        window.history.replaceState(null, null, window.location.href);
    });
});