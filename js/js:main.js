// Pone el año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simula el envío del formulario (cambia la acción para usar Formspree/Netlify)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Gracias, tu mensaje ha sido recibido. (Simulación)'); // reemplazar si conectas un backend
  form.reset();
});
