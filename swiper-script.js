const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 60,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //For responsivity
  breakpoints: {
    0: {
        slidesPerView: 1
    },

    780: {
        slidesPerView: 2
    },

    1240: {
        slidesPerView: 3
    },

  }
});