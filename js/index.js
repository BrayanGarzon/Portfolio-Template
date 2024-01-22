/* FUNTION LOADED NAV IN THE INDEX */

window.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('nav-container').innerHTML = data;
      });
  });
  


  /* FUNTION ICON SCROLL IN THE INDEX */

window.addEventListener('DOMContentLoaded', function(){
  fetch('iconScroll.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('scroll-container').
    innerHTML = data;
  });
});


  /* FUNTION ICON SCROLL CHANGE DISPLAY NONE */
document.addEventListener('DOMContentLoaded', function() {
  var scrollContainer = document.getElementById('scroll-container');
  
  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;

      
      var scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
          scrollContainer.classList.add('scroll-hidden');
      } else {
          scrollContainer.classList.remove('scroll-hidden');
      }
  });
});





/* FOOTER IMPORT */
window.addEventListener('DOMContentLoaded', function() {
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('sectionFooter').innerHTML = data;

      // Luego de cargar el HTML del pie de página, actualiza el año
      updateYear();
    })
    .catch(error => {
      console.error('Error fetching footer.html:', error);
    });
});


/* FUNTION YEAR OF THE FOOTER */
function updateYear() {
  // Obtén el elemento del año actual
  var currentYearElement = document.getElementById("currentYear");

  if (currentYearElement) {
    // Obtén el año actual
    var currentYear = new Date().getFullYear();

    // Actualiza el contenido del elemento con el año actual
    currentYearElement.textContent = currentYear.toString();
  } else {
    console.error("El elemento con ID 'currentYear' no fue encontrado en el pie de página.");
  }
}

// Llama a la función de actualización del año cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", updateYear);





