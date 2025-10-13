// Espera pelo evento 'DOMContentLoaded', que dispara quando todo o HTML
// da página foi completamente carregado e analisado pelo navegador.
document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DO MENU MOBILE ---
    // (Este código também está seguro aqui dentro)
    const navToggle = document.querySelector('.nav-toggle');
    const mainHeader = document.querySelector('.main-header');

    // Verifica se os elementos do menu existem antes de adicionar o evento
    if (navToggle && mainHeader) {
        navToggle.addEventListener('click', () => {
            mainHeader.classList.toggle('nav-open');
        });
    }

     // --- INÍCIO DO SCRIPT DO CRONÔMETRO ---

        // 1. Define a duração da contagem regressiva (8 horas a partir de agora)
        const duracaoEmHoras = 8;
        const agora = new Date().getTime();
        const dataFinal = agora + (duracaoEmHoras * 60 * 60 * 1000);

        // 2. Atualiza o cronômetro a cada segundo
        const intervalo = setInterval(function() {

            // Pega a data e hora de agora
            const hoje = new Date().getTime();
            
            // Calcula a distância entre a data final e agora
            const distancia = dataFinal - hoje;
            
            // 3. Calcula horas, minutos e segundos
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
            
            // Formata os números para sempre terem dois dígitos (ex: 09, 08, 07)
            const horasFormatado = String(horas).padStart(2, '0');
            const minutosFormatado = String(minutos).padStart(2, '0');
            const segundosFormatado = String(segundos).padStart(2, '0');

            // 4. Mostra o resultado no elemento com id="cronometro"
            document.getElementById("cronometro").innerHTML = horasFormatado + ":" + minutosFormatado + ":" + segundosFormatado;
            
            // 5. Se a contagem terminar, mostra uma mensagem e para o cronômetro
            if (distancia < 0) {
                clearInterval(intervalo);
                document.getElementById("anuncio-banner").innerHTML = "Offer ends!";
            }
        }, 1000); // 1000 milissegundos = 1 segundo

        // --- FIM DO SCRIPT DO CRONÔMETRO ---
// --- CÓDIGO DO CRONÔMETRO DE ESCASSEZ (VERSÃO APELATIVA) ---
function startCountdown() {
    const countdownElement = document.getElementById('timer');
    if (!countdownElement) return;

    // =================================================================
    // ||           É AQUI QUE VOCÊ MUDA O TEMPO!                     ||
    // =================================================================
    // Sintaxe: (HORAS * 60 * 60 * 1000)
    const hoursToAdd = 8; // <<<<<<<<<<< MUDE O NÚMERO DE HORAS AQUI
    let endTime = new Date().getTime() + (hoursToAdd * 60 * 60 * 1000); 
    // =================================================================

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "<div class='timer-expired'>Offer expired!</div>";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o HTML para criar as caixas
        countdownElement.innerHTML = `
            <div class="timer-box">
                <span class="time-value">${String(hours).padStart(2, '0')}</span>
                <span class="time-label">Hours</span>
            </div>
            <div class="timer-box">
                <span class="time-value">${String(minutes).padStart(2, '0')}</span>
                <span class="time-label">Minutes</span>
            </div>
            <div class="timer-box">
                <span class="time-value">${String(seconds).padStart(2, '0')}</span>
                <span class="time-label">Seconds</span>
            </div>
        `;

    }, 1000);
}

// Não se esqueça de chamar a função dentro do 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {
    // ... seu código do menu mobile aqui ...
    
    startCountdown(); // Chama a função do cronômetro
});
startCountdown();

// Coloque este código dentro do seu "document.addEventListener('DOMContentLoaded', () => { ... });"

// --- CÓDIGO DO SLIDER DE DEPOIMENTOS ---
const testimonialsSlider = new Swiper('.testimonials-slider', {
    // Quantos slides mostrar por vez
    slidesPerView: 1,
    // Espaço entre os slides
    spaceBetween: 30,
    // Ativa o loop
    loop: true,

    // Configurações da paginação (as bolinhas)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Configurações responsivas
    breakpoints: {
        // Quando a largura da tela for >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // Quando a largura da tela for >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Coloque este código dentro do seu "document.addEventListener('DOMContentLoaded', () => { ... });"

// --- CÓDIGO DE NOTIFICAÇÃO DE VENDAS (VERSÃO EUA) ---
function showSalesNotification() {
    const notification = document.getElementById('sales-notification');
    const notificationText = document.getElementById('notification-text');
    if (!notification || !notificationText) return; // Garante que os elementos existem

    // Arrays com nomes e cidades comuns nos EUA
    const names = ["Jessica P.", "Michael B.", "Emily R.", "Chris L.", "Sarah K.", "David M.", "Ashley T.", "James W."];
    const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Miami, FL", "Dallas, TX", "Seattle, WA"];

    // Escolhe um nome e uma cidade aleatoriamente
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    // Atualiza o texto da notificação
    notificationText.innerHTML = `<strong>${randomName}</strong> from ${randomLocation}`;

    // Mostra a notificação
    notification.style.display = 'flex';
    setTimeout(() => {
        notification.classList.add('show');
    }, 100); // Pequeno delay para a transição funcionar

    // Esconde a notificação depois de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        // Espera a transição de fade-out terminar antes de esconder o elemento
        setTimeout(() => {
             notification.style.display = 'none';
        }, 500);
    }, 5000);
}

// Inicia o ciclo de notificações de forma aleatória para parecer mais real
// A primeira notificação aparecerá depois de ~7 segundos
setTimeout(() => {
    showSalesNotification(); // Mostra a primeira
    // As próximas aparecerão em intervalos aleatórios entre 8 e 20 segundos
    setInterval(showSalesNotification, Math.random() * (20000 - 8000) + 8000);
}, 7000);
}); // Fim do addEventListener
