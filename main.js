window.addEventListener("DOMContentLoaded", main)

function main() {
  addEventListeners();
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







