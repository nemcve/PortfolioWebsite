

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
}))

var swiper = new Swiper(".projects-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});