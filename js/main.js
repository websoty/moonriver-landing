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


// form 

const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputEmail = form.querySelector('input[type="email"]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    const valueEmail = inputEmail.value.trim();

      if (valueEmail && valueEmail.includes('@')) {
        showModal('Спасибо, Ваш e-mail отправлен!');
      } else {
        const msg = document.createElement('div');
        msg.textContent = "Ошибка: неккоректно указан e-mail! Адрес электронной почты должен содержать символ '@'";
        msg.classList.add('error');
        const haveMsg = form.querySelector('.error');
        if (haveMsg) {
          haveMsg.remove();
        }
        inputEmail.after(msg);
      }
    });
      inputEmail.addEventListener('input', () => {
      const haveMsg = form.querySelector('.error');
      if (haveMsg) haveMsg.remove();
    });
  });

  const showModal = (message) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
      <p>${message}</p>
      <button class="modal-close">Закрыть</button>
    </div>`;

    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  };