const openMenu = document.querySelector('.header__btn.menu');
const showMenu = document.querySelector('.nav__show')
const closedMenu = document.querySelector('.nav__head-btn.menu')

openMenu.addEventListener('click', () => {
  showMenu.classList.toggle('active');
});

closedMenu.addEventListener('click', () => {
  showMenu.classList.remove('active');
})
