/*Hamburger Menu*/
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

/*Reveal Animation*/
function show() {
  var reveal = document.querySelectorAll(".reveal");

  for (var i = 1; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;
    var e = 160;

    if (elementTop < windowHeight - e) {
      reveal[i].classList.add("active");
    }
    else {
      ;
    }
  }
}

window.addEventListener("scroll", show);



document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-carousel', {
    type: 'loop',
    rewind: true
  });


  main.mount();
});



