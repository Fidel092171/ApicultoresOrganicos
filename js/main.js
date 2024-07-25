

// Función para mostrar u ocultar el menú de navegación en dispositivos móviles
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show-nav');
});

