import { Swiper, Navigation, Keyboard } from './module-libs';

const initSwiper = () => {
  const swiper = new Swiper('.ps-swiper.swiper', {
    modules: [Navigation, Keyboard],
    speed: 1200,

    loop: false,
    navigation: {
      nextEl: '.ps-btn-next.swiper-button-next',
      prevEl: '.ps-btn-prev.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    on: {
      slideChange: function () {
        const prevButton = document.querySelector(
          '.ps-btn-prev.swiper-button-prev'
        );
        const nextButton = document.querySelector(
          '.ps-btn-next.swiper-button-next'
        );
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
};

document.addEventListener('DOMContentLoaded', initSwiper);
