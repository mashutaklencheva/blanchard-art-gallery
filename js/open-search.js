window.addEventListener('DOMContentLoaded', function() {
  const openSearch = document.querySelector('#open-search');
  const exitSearch = document.querySelector('#exit-search');
  const mobileSearch = document.querySelector('#mobile-search');
  const headerLogo = document.querySelector('.header__logo');

  openSearch.addEventListener('click', function() {
    mobileSearch.classList.add('mobile-search__form-active');
    headerLogo.classList.add('header__logo_hidden');
    openSearch.classList.add('open-search_hidden');
  })

  exitSearch.addEventListener('click', function() {
    mobileSearch.classList.remove('mobile-search__form-active');
    headerLogo.classList.remove('header__logo_hidden');
    openSearch.classList.remove('open-search_hidden');
  })
});