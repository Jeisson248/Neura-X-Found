// Obtener el contexto del gráfico
var ctx = document.getElementById('miGrafico').getContext('2d');

// Crear un gráfico de línea en tiempo real
var miGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Valor Actual',
            data: [],
            borderColor: 'green',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

// Simular cambios en los valores en euros
function simularCambio() {
    const valorActualElement = document.getElementById('valorActual');
    const cambioPorcentajeElement = document.getElementById('cambioPorcentaje');
    
    // Genera un valor aleatorio entre -5% y 5%
    const cambioPorcentaje = (Math.random() * 10 - 5).toFixed(2);
    const valorActual = parseFloat(valorActualElement.textContent.slice(1)); // Elimina el símbolo "€"

    // Actualiza el valor actual y el cambio porcentaje
    const nuevoValor = (valorActual + valorActual * (cambioPorcentaje / 100)).toFixed(2);
    valorActualElement.textContent = `€${nuevoValor}`;
    cambioPorcentajeElement.textContent = `${cambioPorcentaje}%`;

    // Cambia el color del texto y la flecha según si es positivo o negativo
    if (cambioPorcentaje > 0) {
        cambioPorcentajeElement.style.color = 'green';
        document.querySelector('.flecha').classList.add('subida');
    } else {
        cambioPorcentajeElement.style.color = 'red';
        document.querySelector('.flecha').classList.remove('subida');
    }

    // Agrega el nuevo valor al gráfico
    const horaActual = new Date().toLocaleTimeString();
    miGrafico.data.labels.push(horaActual);
    miGrafico.data.datasets[0].data.push(nuevoValor);

    // Limita el gráfico a mostrar solo las últimas 10 entradas
    if (miGrafico.data.labels.length > 10) {
        miGrafico.data.labels.shift();
        miGrafico.data.datasets[0].data.shift();
    }

    // Actualiza el gráfico
    miGrafico.update();
}

// Actualiza los valores cada 5 segundos (simulando cambios)
setInterval(simularCambio, 5000);

// Ejecuta la función de simulación al cargar la página
simularCambio();
