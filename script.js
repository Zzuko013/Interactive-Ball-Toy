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

}); // Fim do addEventListener