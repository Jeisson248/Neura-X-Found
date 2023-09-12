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

        // Agregar mensaje del usuario al chatlog
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerText = userInput;
        chatlog.appendChild(userMessageDiv);

        // Obtener la respuesta del chatbot en función del mensaje del usuario
        let chatbotResponse;

        if (userInput.toLowerCase() === 'hola') {
            chatbotResponse = "Hola soy Epsa ¿en qué puedo ayudarte?";
        } else if (userInput.toLowerCase() === 'dame un consejo de emprendimiento') {
            chatbotResponse = "Elige un proyecto que te apasione y creas firmemente. ¡El camino del emprendimiento puede ser emocionante!";
        } else if (userInput.toLowerCase() === 'gracias') {
            chatbotResponse = "Es un placer ayudarte , recuerda me llamo Epsa y sere tu acompañante en este camino para ver tu proyecto crecer,Adios amigo emprendedor!";
        } else if (userInput.toLowerCase() === 'cuál es la clave del éxito empresarial') {
            chatbotResponse = "La clave del éxito empresarial varía, pero la innovación, la perseverancia y el enfoque en el cliente suelen ser fundamentales.";
        } else if (userInput.toLowerCase() === 'cómo puedo financiar mi negocio') {
            chatbotResponse = "Existen diversas opciones, como préstamos bancarios, inversores, crowdfunding o fondos propios. La elección depende de tu situación.";
        } else if (userInput.toLowerCase() === 'cómo puedo proteger mi idea de negocio') {
            chatbotResponse = "Considera registrar patentes o marcas registradas según corresponda. También puedes usar acuerdos de confidencialidad al compartir tu idea.";
        } else if (userInput.toLowerCase() === 'cómo puedo mejorar mis habilidades como emprendedor') {
            chatbotResponse = "Lee libros sobre emprendimiento, asiste a seminarios y talleres, busca mentores y no temas aprender de tus errores.";
        } else if (userInput.toLowerCase() === 'qué estrategias de marketing son efectivas para startups') {
            chatbotResponse = "El marketing digital, las redes sociales y el marketing de contenidos suelen ser eficaces y asequibles para las startups.";
        } else if (userInput.toLowerCase() === 'cómo puedo asegurarme de que mi producto o servicio resuelva una necesidad real en el mercado') {
            chatbotResponse = "Para asegurarte de que tu producto o servicio resuelva una necesidad real, investiga a fondo el mercado, identifica problemas insatisfechos y busca soluciones innovadoras.";
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
