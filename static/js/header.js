window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const heroBrandName = document.getElementById('hero-brand-name');
    const brandName = document.getElementById('brand-name');
    const scrollY = window.scrollY;

    // Fading effect for navbar and heroBrandName
    if (scrollY > 100) {
        navbar.style.opacity = '1';
    } else {
        navbar.style.opacity = '0';
    }

    // Adjust the opacity of the heroBrandName as the user scrolls down
    heroBrandName.style.opacity = Math.max(1 - scrollY / 200, 0);
});




let isAnimating = false; // Bandera para evitar múltiples clics rápidos

// Función para manejar el clic en el botón del menú
document.getElementById("toggleMenu").addEventListener("click", function(event) {
  if (isAnimating) return; // Si la animación está en curso, no permitimos otro clic

  isAnimating = true; // Comenzamos la animación
  const originalIcons = document.querySelector(".original-icons");
  const newIcons = document.querySelector(".new-icons");

  if (newIcons.style.display === "none" || newIcons.style.display === "") {
    // Mostrar nuevas opciones y ocultar las originales
    originalIcons.classList.add("slide-in");
    setTimeout(() => {
      originalIcons.style.display = "none";
      newIcons.style.display = "flex";
      newIcons.classList.remove("slide-in");
      newIcons.classList.add("slide-out");
      isAnimating = false; // Terminamos la animación

      if (document.documentElement.clientWidth >= 1024){
      document.getElementById("toggleMenu").style.marginLeft = "30%"
      }else{
        document.getElementById("toggleMenu").style.marginLeft = "0%"
      }
      
    }, 500); // Tiempo de la animación
  } else {
    // Volver a mostrar las opciones originales y ocultar las nuevas
    newIcons.classList.remove("slide-out");
    newIcons.classList.add("slide-in");
    document.querySelector("#toggleMenu").classList.add("slide-in");
    setTimeout(() => {
      newIcons.style.display = "none";
      originalIcons.style.display = "flex";
      originalIcons.classList.remove("slide-in");
      isAnimating = false; // Terminamos la animación

      document.getElementById("toggleMenu").style.marginLeft = "0%"

    }, 500); // Tiempo de la animación
  }
});

// Función para manejar clics fuera del menú
document.addEventListener("click", function(event) {
  const menu = document.querySelector("#navbar");
  const toggleMenu = document.getElementById("toggleMenu");
  const originalIcons = document.querySelector(".original-icons");
  const newIcons = document.querySelector(".new-icons");

  if (newIcons.style.display === "flex" && !menu.contains(event.target) && !toggleMenu.contains(event.target)) {
    // Si el menú está visible y el clic no está dentro del menú ni en el toggle, cerrar el menú
    if (isAnimating) return; // Si la animación está en curso, no permitimos otro clic
    isAnimating = true; // Comenzamos la animación
    newIcons.classList.remove("slide-out");
    newIcons.classList.add("slide-in");
    setTimeout(() => {
      newIcons.style.display = "none";
      originalIcons.style.display = "flex";
      originalIcons.classList.remove("slide-in");
      isAnimating = false; // Terminamos la animación
    }, 500); // Tiempo de la animación
  }
});
