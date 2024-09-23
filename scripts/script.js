let currentSlide = 0;
const slidesToShow = 3; // Cantidad de logos visibles a la vez
const slidesToMove = 3; // Cantidad de logos que se desplazarán por vez

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const maxSlideIndex = Math.ceil(totalSlides / slidesToMove) - 1; // Índice máximo alcanzable
    
    // Calculamos la posición actual del slide, evitando que supere los límites
    currentSlide += direction;

    // Limita el desplazamiento para evitar que se mueva más allá del último set de imágenes
    if (currentSlide < 0) {
        currentSlide = maxSlideIndex;
    } else if (currentSlide > maxSlideIndex) {
        currentSlide = 0;
    }

    // Mueve el slider según la cantidad de slides a mostrar
    const movePercentage = (100 / slidesToShow) * slidesToMove;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * movePercentage}%)`;
}

// Auto-slide cada 3 segundos
setInterval(() => moveSlide(1), 3000);
