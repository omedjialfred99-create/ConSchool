const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".nav-items"); // ton menu existant
console.log("click");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});