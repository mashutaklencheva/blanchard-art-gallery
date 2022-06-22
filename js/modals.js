

window.addEventListener('DOMContentLoaded', function() {
  (() => {
    const openBtns = document.querySelectorAll('.js-open-modal-btn');
    const overlay = document.querySelector('.js-overlay');
    const closeBtns = document.querySelectorAll('.js-modal-close');

    function closeModal (e) {
        const modal = e.target.closest('.js-modal');

        scrollLock.enablePageScroll()

        // document.body.classList.remove('scroll-lock');
        overlay.classList.remove('open');
        modal.classList.remove('open');
    }

    function openModal (e) {
        const path = e.target.dataset.modal;
        const modal = document.querySelector(`.js-modal[data-modal=${path}]`);
        const closeBtn = modal.querySelector('.js-modal-close');

        // document.body.classList.add('scroll-lock');

        scrollLock.disablePageScroll()

        overlay.classList.add('open');
        modal.classList.add('open');
        closeBtn.focus();
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
})();
});

