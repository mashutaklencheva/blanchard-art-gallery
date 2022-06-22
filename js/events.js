window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper--events', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    breakpoints: {

      1560: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },

      710: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination--events',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section-events__button-next',
      // prevEl: '.swiper-navigation-prev',
      prevEl: '.section-events__button-prev'
    },
  
  });
});