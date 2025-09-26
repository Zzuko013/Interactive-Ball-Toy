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
}); // Fim do addEventListener
