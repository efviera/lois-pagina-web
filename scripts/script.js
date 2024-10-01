const containers = document.querySelectorAll('.contenedorFotos'); // Selecciona todos los contenedores

containers.forEach(container => {
    const images = container.querySelectorAll('.foto');
    
    if (images.length > 1) {
        let currentIndex = 0;
        const totalImages = images.length;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        // Muestra la primera imagen al cargar
        showImage(currentIndex);

        // Cambia la imagen cada 3 segundos solo si hay más de una imagen
        setInterval(nextImage, 2000);
    } else {
        // Si hay una sola imagen, la hacemos visible sin transición
        images[0].classList.add('active');
    }
});
