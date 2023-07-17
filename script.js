const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  headerLinks.classList.remove("active");
}))