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
            chatbotResponse = "Vaya que interes por aprender, dirigete a la barra de navegacion que se encuentra en la parte superior de la pagina, encontraras 7 opciones dale click a la 5 opcion que se llama transparencia ahi podras encontrar la seccion de cursos y puedes escojer todo lo que te interese";
        } else if (userMessage.includes('quiero un curso gratuito')) {
            chatbotResponse = "Reespuesta 2";
        } else if (userMessage.includes('cómo puedo hablar con EPSA')) {
            chatbotResponse = "Reespuesta 3";
        } else if (userMessage.includes('cómo puedo mandar una queja')) {
            chatbotResponse = "Reespuesta 4";
        } else if (userMessage.includes('tienen redes sociales')) {
            chatbotResponse = "Reespuesta 5";
        } else if (userMessage.includes('cómo puedo moverme por la página')) {
            chatbotResponse = "Reespuesta 6";
        } else if (userMessage.includes('cómo va el trading')) {
            chatbotResponse = "Reespuesta 7";
        } else if (userMessage.includes('no encuentro las convocatorias')) {
            chatbotResponse = "Reespuesta 8";
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
