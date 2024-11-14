document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    const slideContainer = document.querySelector('.slides');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // Função para atualizar o slide visível
    function updateSlidePosition() {
        const offset = -currentSlide * 100; // Move os slides para a esquerda
        slideContainer.style.transform = `translateX(${offset}%)`;
    }

    // Função para ir para o próximo slide
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide (volta ao primeiro)
        updateSlidePosition();
    });

    // Função para ir para o slide anterior
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Volta para o slide anterior (volta ao último)
        updateSlidePosition();
    });

    // Inicia o carrossel com o primeiro slide
    updateSlidePosition();
});
