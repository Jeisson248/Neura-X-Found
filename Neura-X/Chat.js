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
            chatbotResponse = "Claro que si, ve a la opcion de dirigete a la barra de navegacion que se encuentra en la parte superior de la pagina, encontraras 7 opciones dale click a la 5 opcion que se llama transparencia ahi podras encontrar la seccion de cursos podras escojer los cursos gratuitos "; ";
        } else if (userMessage.includes('cómo puedo hablar con EPSA')) {
            chatbotResponse = "Claro que si, ve a la opcion de ayuda, resolucion de problemas alli encontraras un item que se llama innovacion y se te abrira automaticamente nuestro ChatBot EPSA";
        } else if (userMessage.includes('cómo puedo mandar una queja')) {
            chatbotResponse = "Claro que si, ve a la parte final de la pagina en la que estes, da click en centro de seguridad y se te abrira automaticamente un formulario para para que nos cuentes mas sobre tu falla";
        } else if (userMessage.includes('tienen redes sociales')) {
            chatbotResponse = "Claro que si, desde la pagina principal podras observar los iconos de nuestras redes sociales, una vez te loguues tambien los encontraras en la parte inferior de la pagina ";
        } else if (userMessage.includes('cómo puedo moverme por la página')) {
            chatbotResponse = "Claro que si, es muy sencillo solo tienes que registarte para entrar y validar cada espacio que hemos adecuado para ti ";
        } else if (userMessage.includes('cómo va el trading')) {
            chatbotResponse = "Claro que si, tenemos una opcion que te podra dejar ver las  estadisticas del trading en tiempo real";
        } else if (userMessage.includes('no encuentro las convocatorias')) {
            chatbotResponse = "Claro que si, es muy facil esta a la parte superior de nuestra pagina encontraras un apaartado directamnete que te muestra las convocatorias";
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
