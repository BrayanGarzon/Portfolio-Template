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



document.addEventListener('DOMContentLoaded', function() {
  var scrollContainer = document.getElementById('scroll-container');
  
  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;

      // Ajusta este valor según sea necesario para determinar cuándo quieres que el div se oculte
      var scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
          scrollContainer.classList.add('scroll-hidden');
      } else {
          scrollContainer.classList.remove('scroll-hidden');
      }
  });
});
