window.addEventListener("DOMContentLoaded", main)


/**
 * Starting point for this program
 */
function main() {
  addEventListeners();
  addInstersectionObserver();
}

function addEventListeners() {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener('click', toggleMenu);
}


function toggleMenu () {
  // Visa/dölj navbaren
  const navbar = document.getElementById("navbar")
  navbar.classList.toggle("open")

  // Byt menyknappen till ett kryss
  const menuIcon = document.querySelector("#menu-button i");
  menuIcon.classList.toggle("fa-xmark");
  menuIcon.classList.toggle("fa-bars");
}

// Possible to get the icon fa-brands bars to change color to black when scrolling down?

function addInstersectionObserver() {
  const menuIcon = document.querySelector("#menu-button i");
  
  // Options (rootMargin/threashold)

  const toggleMenuColorObserver = new IntersectionObserver((entries) => {
    
    const header = entries[0];
    menuIcon.classList.toggle('black', !header.isIntersecting);
    
  
  } , {threshold: 0.05});
 
  
  

  // Välj vilka element du vill observera när dom visas eller inte visas på skärmen
  const header = document.querySelector('header');
  toggleMenuColorObserver.observe(header);
  
}



