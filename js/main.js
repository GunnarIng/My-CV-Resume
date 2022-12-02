window.addEventListener("DOMContentLoaded", main)


/**
 * Starting point for this program after the DOM has loaded 
 */
function main() {
  addEventListeners();
  addInstersectionObserver();
}

/**
 * Addeventlisteners to element
 */
function addEventListeners() {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener('click', toggleMenu);
}

/**
 * This toggles the navbar menu and change the menu icon to a "close icon"
 */
function toggleMenu () {
  // Visa/dölj navbaren
  const navbar = document.getElementById("navbar")
  navbar.classList.toggle("open")

  // Byt menyknappen till ett kryss
  const menuIcon = document.querySelector("#menu-button i");
  menuIcon.classList.toggle("fa-xmark");
  menuIcon.classList.toggle("fa-bars");
}



/**
 * Add intersection observer to navbar to change the color of the menu icon when scrolling past the header section. 
 * treshold is set to 0.05, meaning that the observer will trigger when the element is 5% visible in the viewport.
 */
function addInstersectionObserver() {
  const menuIcon = document.querySelector("#menu-button i");
  
  // Options (rootMargin/threashold)

  const toggleMenuColorObserver = new IntersectionObserver((entries) => {
    
    const header = entries[0];
    menuIcon.classList.toggle('black', !header.isIntersecting);
    
    
  }, {threshold: 0.05} );
 
  // Välj vilka element du vill observera när dom visas eller inte visas på skärmen
  const header = document.querySelector('header');
  toggleMenuColorObserver.observe(header);
}

  
  
  

