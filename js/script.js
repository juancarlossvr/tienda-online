function agregarAlCarrito() {
  alert("Producto agregado al carrito 🛒");
}

// Función para manejar el envío del formulario
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const curso = document.getElementById('curso').value;
      const comentario = document.getElementById('comentario').value;
      
      if (nombre && curso && comentario) {
        alert(`¡Gracias ${nombre}! Tu comentario ha sido enviado correctamente. 📧`);
        
        // Limpiar el formulario
        form.reset();
      } else {
        alert('Por favor, completa todos los campos del formulario.');
      }
    });
  }
});

// Función para mostrar mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
  console.log('¡Bienvenido a nuestra tienda de zapatos! 👟');
});