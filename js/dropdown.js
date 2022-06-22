window.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelectorAll('.menu-bottom__btn');
  const drop = document.querySelectorAll('.drop-list')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    button.forEach(el => {el.classList.remove(('menu-bottom__btn--active'))});
    e.currentTarget.classList.add('menu-bottom__btn--active');
    drop.forEach(el => {el.classList.remove(('drop-list--active'))})
    e.currentTarget.closest('li').querySelector('.drop-list').classList.toggle('drop-list--active');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('drop-list') && !e.target.classList.contains('menu-bottom__btn')) {
    button.forEach(el => {el.classList.remove(('menu-bottom__btn--active'))});
    drop.forEach(el => {el.classList.remove(('drop-list--active'))})
  }
});
});
