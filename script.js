let currentSlide = 1;
showSlide(currentSlide);

function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    if (n > slides.length) currentSlide = 1;
    if (n < 1) currentSlide = slides.length;
    slides.forEach(slide => slide.classList.remove("show"));
    slides[currentSlide - 1].classList.add("show");
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}
