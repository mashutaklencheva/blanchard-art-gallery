window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper--partners', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    breakpoints: {

      1450: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },

      705: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      }
    },


    // Navigation arrows
    navigation: {
      nextEl: '.section-projects__button-next',
      prevEl: '.section-projects__button-prev',
    },
  });
});