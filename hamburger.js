document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger-menu');
    var navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });