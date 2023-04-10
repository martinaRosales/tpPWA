// Obtener todas las imágenes del carrusel
const carrusel = document.querySelectorAll('#recipeCarousel .carousel-item .img-fluid');

// Agregar un evento "click" a cada imagen del carrusel
carrusel.forEach(function(imagen) {
  imagen.addEventListener('click', function() {
    // Obtener el índice de la imagen haciendo referencia al atributo de "data-index"
    const index = this.getAttribute('data-index');
    
    // Obtener la información relacionada del objeto "infoImagenesElite" usando el índice
    const info = infoImagenes[index];
    
    // Mostrar la información en el otro div
    const otroDiv = document.querySelector('#otroDiv');
    otroDiv.innerHTML = `
      <h3>${info.titulo}</h3>
      <p class="text">${info.descripcion}</p>
    `;
    const imagenDiv = document.querySelector('#imagenDiv');
    imagenDiv.innerHTML = `
      <img src="${info.imagen}" class="imagen img-fluid">
    `;
  });
});