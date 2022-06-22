window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper--gallery', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    },

    breakpoints: {

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2
      },

      550: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
    },

    pagination: {
      el: '.swiper-pagination--gallery',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-navigation-next',
      prevEl: '.swiper-navigation-prev',
    },
  
  });
});

