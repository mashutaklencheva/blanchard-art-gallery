window.addEventListener('DOMContentLoaded', function() {

  const element = document.querySelector('.section-gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom'
  });

});
