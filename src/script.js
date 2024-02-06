// Obtén todos los elementos con la clase "article__title"
const accordionTitles = document.querySelectorAll('.article__title');

// Agrega un evento de clic a cada elemento
accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Toggle la clase 'active' para expandir o contraer el contenido
    title.classList.toggle('active');

    // Obtén el elemento hermano que contiene el párrafo
    const content = title.nextElementSibling;

    // Toggle la clase 'show' para mostrar u ocultar el párrafo
    if (title.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});
