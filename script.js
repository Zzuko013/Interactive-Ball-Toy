// Espera pelo evento 'DOMContentLoaded', que dispara quando todo o HTML
// da página foi completamente carregado e analisado pelo navegador.
document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DO MENU MOBILE ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainHeader = document.querySelector('.main-header');

    if (navToggle && mainHeader) {
        navToggle.addEventListener('click', () => {
            mainHeader.classList.toggle('nav-open');
        });
    }

    // --- CRONÔMETRO DO BANNER DO TOPO ---
    function startTopBannerCountdown() {
        const cronometroElement = document.getElementById("cronometro");
        const anuncioBannerElement = document.getElementById("anuncio-banner");
        if (!cronometroElement || !anuncioBannerElement) return;

        const duracaoEmHoras = 8;
        const dataFinal = new Date().getTime() + (duracaoEmHoras * 60 * 60 * 1000);

        const intervalo = setInterval(function() {
            const hoje = new Date().getTime();
            const distancia = dataFinal - hoje;

            if (distancia < 0) {
                clearInterval(intervalo);
                anuncioBannerElement.innerHTML = "Offer ends!";
                return;
            }

            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            cronometroElement.innerHTML = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        }, 1000);
    }
    
    // --- CRONÔMETRO DA SEÇÃO DE OFERTA ---
    function startOfferCountdown() {
        const countdownElement = document.getElementById('timer');
        if (!countdownElement) return;

        const hoursToAdd = 8; // Mude o número de horas aqui
        const endTime = new Date().getTime() + (hoursToAdd * 60 * 60 * 1000);

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
                </div>`;
        }, 1000);
    }

    // --- CÓDIGO DO SLIDER DE DEPOIMENTOS (SWIPER) ---
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 30 }
        }
    });

    // --- CÓDIGO DE NOTIFICAÇÃO DE VENDAS ---
    function showSalesNotification() {
        const notification = document.getElementById('sales-notification');
        const notificationText = document.getElementById('notification-text');
        if (!notification || !notificationText) return;

        const names = ["Jessica P.", "Michael B.", "Emily R.", "Chris L.", "Sarah K.", "David M.", "Ashley T.", "James W."];
        const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Miami, FL", "Dallas, TX", "Seattle, WA"];

        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];

        notificationText.innerHTML = `<strong>${randomName}</strong> from ${randomLocation}`;
        notification.style.display = 'flex';
        setTimeout(() => notification.classList.add('show'), 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.style.display = 'none', 500);
        }, 5000);
    }

    // Inicia o ciclo de notificações
    setTimeout(() => {
        showSalesNotification();
        setInterval(showSalesNotification, Math.random() * (20000 - 8000) + 8000);
    }, 7000);

    // --- INICIALIZA AS FUNÇÕES ---
    startTopBannerCountdown();
    startOfferCountdown();

}); // Fim do addEventListener 'DOMContentLoaded'
