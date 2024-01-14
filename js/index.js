/* FUNTION LOADED NAV IN THE INDEX */

window.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('nav-container').innerHTML = data;
      });
  });
  