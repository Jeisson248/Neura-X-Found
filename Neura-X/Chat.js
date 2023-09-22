document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    const chatlog = document.getElementById('chatlog');

    sendButton.addEventListener('click', function () {
        sendMessage();
    });

    document.getElementById('userInput').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userInput = document.getElementById('userInput').value;
        const userMessage = userInput.toLowerCase();

        // Agregar mensaje del usuario al chatlog
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerText = userInput;
        chatlog.appendChild(userMessageDiv);

        // Definir respuestas a preguntas específicas
        let chatbotResponse;

        if (userMessage.includes('dónde puedo encontrar los cursos')) {
            chatbotResponse = "Vaya, qué interés por aprender. Dirígete a la barra de navegación que se encuentra en la parte superior de la página. Encontrarás 7 opciones; haz clic en la quinta opción que se llama 'Transparencia', ahí podrás encontrar la sección de cursos y puedes escoger todo lo que te interese.";
        } else if (userMessage.includes('quiero un curso gratuito')) {
            chatbotResponse = "Claro que sí. Ve a la opción de 'Transparencia' en la barra de navegación que se encuentra en la parte superior de la página. Ahí podrás encontrar la sección de cursos y podrás escoger los cursos gratuitos.";
        } else if (userMessage.includes('cómo puedo hablar con epsa')) {
            chatbotResponse = "Claro que sí, puedes hablar con EPSA. Ve a la opción de 'Ayuda' y luego a 'Resolución de problemas'. Allí encontrarás un ítem que se llama 'Innovación', y se abrirá automáticamente nuestro ChatBot EPSA.";
        } else if (userMessage.includes('cómo puedo mandar una queja')) {
            chatbotResponse = "Claro que sí, puedes enviar una queja. Ve a la parte final de la página en la que estés y haz clic en 'Centro de Seguridad'. Se abrirá automáticamente un formulario para que nos cuentes más sobre tu falla.";
        } else if (userMessage.includes('tienen redes sociales')) {
            chatbotResponse = "Claro que sí. Desde la página principal podrás observar los iconos de nuestras redes sociales. Una vez que inicies sesión, también los encontrarás en la parte inferior de la página.";
        } else if (userMessage.includes('cómo puedo moverme por la página')) {
            chatbotResponse = "Claro que sí, es muy sencillo. Solo tienes que explorar el navvar revisar lo que necesites la interfaz es muy simple para manipular, si te pierdes puedes ver las opciones del footer para que tengas mas claridad,si presentas problemas ve a la seccion N°6 de la navvar y mandanos tus dudas inquietudes o reclamos.";
        } else if (userMessage.includes('cómo va el trading')) {
            chatbotResponse = "Claro que sí, tenemos una opción que te permitirá ver las estadísticas del trading en tiempo real.";
        } else if (userMessage.includes('no encuentro las convocatorias')) {
            chatbotResponse = "Claro que sí, es muy fácil. Está en la parte superior de nuestra página; encontrarás un apartado que te muestra las convocatorias.";
        } else {
            chatbotResponse = "Lo siento, no entiendo tu pregunta. ¿En qué más puedo ayudarte?";
        }

        // Agregar respuesta del chatbot al chatlog después de un breve retraso para simular la respuesta
        setTimeout(() => {
            const chatbotMessageDiv = document.createElement('div');
            chatbotMessageDiv.classList.add('chatbot-message');
            chatbotMessageDiv.innerText = chatbotResponse;
            chatlog.appendChild(chatbotMessageDiv);
            chatlog.scrollTop = chatlog.scrollHeight;
        }, 500);

        // Limpiar el campo de entrada de texto
        document.getElementById('userInput').value = '';
    }
});
