function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuLinks = document.querySelector('.menu-links');
    var timesBar = document.querySelector('.times-bar');
    
    menuToggle.classList.toggle('active');
    menuLinks.classList.toggle('active');
    timesBar.classList.toggle('active');
  }