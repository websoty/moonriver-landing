const openMenu = document.querySelector('.header__btn.menu');
const showMenu = document.querySelector('.nav__show')
const closedMenu = document.querySelector('.nav__head-btn.menu')

openMenu.addEventListener('click', () => {
  showMenu.classList.add('active');
});

closedMenu.addEventListener('click', () => {
  showMenu.classList.remove('active');
})


// slider

const track = document.querySelector('.slider__track');
const [btnPrev, btnNext] = document.querySelectorAll('.slider__btns button');
const slides = Array.from(track.children); // массив слайдов

let currentSlide = 0;

  btnPrev.addEventListener('click', () => {
    currentSlide--;
  let slideWidth = slides[0].offsetWidth;
  if (currentSlide < 0) 
    currentSlide = slides.length - 1;
  let offset = slideWidth * currentSlide;

  track.style.transform = `translateX(-${offset}px)`
  });

   btnNext.addEventListener('click', () => {
    currentSlide++;
  let slideWidth = slides[0].offsetWidth;
  if (currentSlide > slides.length -1 )
    currentSlide = 0;

  let offset = slideWidth * currentSlide;

  track.style.transform = `translateX(-${offset}px)`
  });
