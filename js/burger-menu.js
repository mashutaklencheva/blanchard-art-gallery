!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

window.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.menu-button');
  const burgerEl = document.querySelectorAll('.nav__item');
  burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('menu-button-active');
    document.querySelector('.nav').classList.toggle('nav-opened');

    burgerEl.forEach(function(item){
      item.addEventListener('click', function(e) {
        let parentLink = this.closest('.nav');
        parentLink.classList.remove('nav-opened');
        burger.classList.remove('menu-button-active');
        scrollLock.enablePageScroll()
      });
    });

    document.querySelector('.nav').classList.contains('nav-opened')
        ? scrollLock.disablePageScroll()
        : scrollLock.enablePageScroll()
  });
});

