window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.collapse-list__link').forEach(function(personLink) {
   personLink.addEventListener('click', function(event) {
     const path = event.currentTarget.dataset.path
     document.querySelectorAll('.section-catalog__content').forEach(function(personContent) {
       personContent.classList.remove('section-catalog__content-active')
     })
     document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__content-active')
   })
  })

  // смена цвета шрифта активного таба

  document.querySelectorAll('.collapse-list__link').forEach(function(colorLink) {
    colorLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
  
      document.querySelectorAll('.collapse-list__link').forEach(function(activeRemove) {
        activeRemove.classList.remove('collapse-list__link--active')
      })
      event.currentTarget.classList.add('collapse-list__link--active')
    })
  })
 })

 
 