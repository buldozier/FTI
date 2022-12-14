// Scroll buttons
const peopleFtiBtn = document.querySelector('.people__fti__btn');
const departmentsBtn = document.querySelector('.departments__btn');
const partnersBtn = document.querySelector('.partners__btn');

peopleFtiBtn.addEventListener('click', () => {
  console.log('123');
  window.scrollTo(0, 950);
});

departmentsBtn.addEventListener('click', () => {
  window.scrollTo(0, 2380);
});

partnersBtn.addEventListener('click', () => {
  window.scrollTo(0, 3260);
});

// Btn to top
const btnToTop = document.querySelector('.btn__to__top');

document.addEventListener('scroll', () => {
  if (window.scrollY >= 150) {
    btnToTop.classList.remove('btn__to__top__hidden');
  } else {
    btnToTop.classList.add('btn__to__top__hidden');
  }
});

btnToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

// Slider departments
const sliderLeftBtn = document.querySelector('#btn__1');
const sliderRightBtn = document.querySelector('#btn__2');
const cardsSwiper = document.querySelector('.department__cards');
let sliderPosition = 0;

sliderLeftBtn.addEventListener('click', () => {
  if (sliderPosition === -400) {
    sliderLeftBtn.classList.add('no__color__btn');
    sliderLeftBtn.style.cursor = 'auto';
  }

  if (sliderPosition <= -2400) {
    sliderRightBtn.classList.remove('no__color__btn');
    sliderRightBtn.style.cursor = 'pointer';
  }

  if (sliderPosition < 0) {
    countTranslateSlider(400);
  }
});

sliderRightBtn.addEventListener('click', () => {
  if (sliderPosition <= 0) {
    sliderLeftBtn.classList.remove('no__color__btn');
    sliderLeftBtn.style.cursor = 'pointer';
  }

  if (sliderPosition === -2400) {
    sliderRightBtn.classList.add('no__color__btn');
    sliderRightBtn.style.cursor = 'auto';
  }

  if (sliderPosition > -2800) {
    countTranslateSlider(-400);
  }
});

const countTranslateSlider = function (translateValue) {
  sliderPosition += translateValue;
  cardsSwiper.style.transform = 'translateX(' + sliderPosition + 'px';
};
