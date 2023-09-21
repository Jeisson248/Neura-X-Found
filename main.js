document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const profileIcon = document.getElementById('profileIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const profileImage = document.getElementById('profileImage');

    // Mostrar/ocultar el menú desplegable al hacer clic en el icono de perfil
    profileIcon.addEventListener('click', () => {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Verificar si hay una imagen de perfil almacenada en el LocalStorage
    const savedProfileImage = localStorage.getItem('profileImage');
    if (savedProfileImage) {
        profileImage.src = savedProfileImage;
    }

    // Resto del código para cambiar la foto de perfil
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
});
