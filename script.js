// Función para juegos
function jugar(tipo) {
    let retro = '';
    if (tipo === 'autoconocimiento') retro = '¡Excelente reflexión sobre ti mismo!';
    else if (tipo === 'decisiones') retro = 'Tu decisión refleja buena gestión emocional.';
    else if (tipo === 'gestion-emocional') retro = '¡Bien manejado el estrés!';
    else if (tipo === 'habitos-saludables') retro = '¡Sigue así con tus hábitos!';
    document.getElementById('retroalimentacion').innerHTML = `<p style="color: #00ff00;">Retroalimentación IA: ${retro}</p>`;
}

// Gráfico de hábitos (usando Chart.js)
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('grafico-habitos').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
            datasets: [{
                label: 'Progreso Hábitos',
                data: [20, 40, 60, 80, 100],
                borderColor: '#00ff00',
                backgroundColor: 'rgba(0, 255, 0, 0.2)'
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });
});

// Chat IA simulado
function enviarMensaje() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const userMsg = input.value;
    messages.innerHTML += `<p><strong>Tú:</strong> ${userMsg}</p>`;
    
    // Respuesta simulada (puedes expandir con más lógica)
    let respuesta = '¡Hola! Soy tu asistente IA. ¿Cómo te sientes hoy?';
    if (userMsg.includes('emocional')) respuesta = 'Para gestionar emociones, prueba respirar profundo. ¡Tú puedes!';
    else if (userMsg.includes('hábitos')) respuesta = '¡Genial! Recomiendo empezar con 5 min de ejercicio diario.';
    
    setTimeout(() => {
        messages.innerHTML += `<p><strong>IA:</strong> ${respuesta}</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);
    
    input.value = '';
}

// Navegación simple
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
