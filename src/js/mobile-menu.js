(() => {
  const openBtn = document.querySelector('[data-open_btn]');
  const closeBtn = document.querySelector('[data-close_btn]');
  const menu = document.querySelector('[data-menu]');
  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', closeMenu);

  function closeMenu() {
    menu.classList.remove('menu-open');
    document.body.classList.remove('no-scroll');
  }
  function toggleMenu() {
    menu.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
  }
})();
