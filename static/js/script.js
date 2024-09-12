const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function updateCarousel() {
  const translateX = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${translateX}%)`;
}

function showNextImage() {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', showNextImage);

// Auto-slide every 3 seconds
setInterval(showNextImage, 3000);




//Tarjetas cambiantes
function updateClass() {
  const dynamicSections = document.querySelectorAll('.dynamic-section'); 

  dynamicSections.forEach(section => {
    // Solo modifica elementos que tienen la clase 'small'
    if (section.classList.contains('small')) {
      if (window.innerWidth <= 600) {
        // Pantallas pequeñas (600px o menos)
        section.classList.remove('small');
        section.classList.add('medium');
      } else {
        // Pantallas grandes (más de 600px)
        section.classList.remove('medium');
        section.classList.add('small');
      }
    }
  });
}

// Llama a la función al cargar la página
window.addEventListener('load', updateClass);

// Llama a la función cada vez que la ventana cambia de tamaño
window.addEventListener('resize', updateClass);


// Seleccionar el ícono de la hamburguesa y el menú de enlaces
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
