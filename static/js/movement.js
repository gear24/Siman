const cardList = document.querySelector('.card-list');
const cards = document.querySelectorAll('.cardL');

let scrollPosition = 0;
let scrollSpeed = 1; // Velocidad del desplazamiento
let resetAnimationDuration = 500; // Duración del fade en milisegundos

function startScrolling() {
  scrollPosition += scrollSpeed;
  cardList.scrollLeft = scrollPosition;

  // Verificar si llegamos al final de la lista
  if (scrollPosition >= cardList.scrollWidth - cardList.clientWidth) {
    // Aplicar la animación de fade out
    cardList.style.opacity = '0';

    // Esperar hasta que termine el fade out, luego resetear el scroll
    setTimeout(() => {
      scrollPosition = 0; // Reiniciar la posición del scroll
      cardList.scrollLeft = scrollPosition;
      cardList.style.opacity = '1'; // Aplicar fade in
    }, resetAnimationDuration); // Espera la duración de la animación antes de reiniciar
  }

  // Continuar la animación usando requestAnimationFrame
  requestAnimationFrame(startScrolling);
}

// Iniciar la animación
startScrolling();

// Pausar el scroll al hacer hover
cardList.addEventListener('mouseover', () => scrollSpeed = 0);
cardList.addEventListener('mouseout', () => scrollSpeed = 1);
