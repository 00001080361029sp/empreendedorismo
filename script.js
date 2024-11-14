let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Remover a classe "active" de todos os slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Adicionar a classe "active" no slide atual
  slides[index].classList.add('active');
}

// Função para alternar os slides automaticamente
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Exibir o primeiro slide inicialmente
showSlide(currentSlide);

// Alterar os slides automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);
