import { Swiper, Navigation, Keyboard } from './module-libs';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      slideChange: function () {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        if (swiper.isBeginning) {
          prevButton.classList.add('swiper-button-disabled');
          prevButton.setAttribute('disabled', true);
        } else {
          prevButton.classList.remove('swiper-button-disabled');
          prevButton.removeAttribute('disabled');
        }

        if (swiper.isEnd) {
          nextButton.classList.add('swiper-button-disabled');
          nextButton.setAttribute('disabled', true);
        } else {
          nextButton.classList.remove('swiper-button-disabled');
          nextButton.removeAttribute('disabled');
        }
      },
    },
  });
  swiper.emit('slideChange');
});
