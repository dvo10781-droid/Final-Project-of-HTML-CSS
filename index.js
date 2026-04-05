
function openMenu() {
  document.querySelector('.menu').classList.add('menu--open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  document.querySelector('.menu').classList.remove('menu--open');
  document.body.classList.remove('no-scroll');
}

/* Close on Escape key */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMenu();
});