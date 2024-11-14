document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');  // Seleciona todos os slides
    const totalSlides = slides.length;  // Total de slides
    let currentSlide = 0;  // Índice do slide atual

    const slideContainer = document.querySelector('.slides');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // Função para atualizar a posição do slide
    function updateSlidePosition() {
        const offset = -currentSlide * 100;  // Calcula a posição do slide a ser mostrado
        slideContainer.style.transform = `translateX(${offset}%)`;  // Move os slides
    }

    // Função para passar para o próximo slide
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;  // Avança para o próximo slide
        updateSlidePosition();
    });

    // Função para voltar para o slide anterior
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Volta para o slide anterior
        updateSlidePosition();
    });

    // Inicia o carrossel com o primeiro slide
    updateSlidePosition();
});
