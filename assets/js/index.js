var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  initialSlide: 2,
  breakpoints: {
    767: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 1,
    stretch: 25,
    depth: 20,
    modifier: 5,
    initialSlide: 3,
  },
});