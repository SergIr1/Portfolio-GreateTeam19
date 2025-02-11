import { Swiper } from './module-libs';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.ps-swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 1200,
    navigation: {
      nextEl: '.ps-btn-next',
      prevEl: '.ps-btn-prev',
      disabledClass: 'swiper-button-disabled',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 30,
    on: {
      init: function () {
        updateNavigationButtons(this);
      },
      slideChange: function () {
        updateNavigationButtons(this);
      },
    },
  });

  function updateNavigationButtons(swiperInstance) {
    const prevButton = document.querySelector('.ps-btn-prev');
    const nextButton = document.querySelector('.ps-btn-next');

    if (swiperInstance.isBeginning) {
      prevButton.classList.add('swiper-button-disabled');
    } else {
      prevButton.classList.remove('swiper-button-disabled');
    }

    if (swiperInstance.isEnd) {
      nextButton.classList.add('swiper-button-disabled');
    } else {
      nextButton.classList.remove('swiper-button-disabled');
    }
  }
});
