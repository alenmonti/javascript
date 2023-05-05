// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links");
const nav_toggle = document.querySelector(".nav-toggle");

nav_toggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
})