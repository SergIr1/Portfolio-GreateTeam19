// import Swiper from 'swiper/bundle';

// import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const loadElements = document.querySelectorAll('load');
  const promises = Array.from(loadElements).map(loadElement => {
    const src = loadElement.getAttribute('src');
    return fetch(src)
      .then(response => response.text())
      .then(data => {
        loadElement.outerHTML = data;
      });
  });

  Promise.all(promises)
    .then(() => {
      const swiper = new Swiper('swiper', {
        loop: false,
        navigation: {
          nextEl: '.ps-swiper-button-next',
          prevEl: '.ps-swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        on: {
          slideChange: function () {
            const prevButton = document.querySelector('.ps-swiper-button-prev');
            const nextButton = document.querySelector('.ps-swiper-button-next');

            if (swiper.isBeginning) {
              prevButton.classList.add('ps-swiper-button-disabled');
              prevButton.setAttribute('disabled', true);
            } else {
              prevButton.classList.remove('ps-swiper-button-disabled');
              prevButton.removeAttribute('disabled');
            }

            if (swiper.isEnd) {
              nextButton.classList.add('ps-swiper-button-disabled');
              nextButton.setAttribute('disabled', true);
            } else {
              nextButton.classList.remove('ps-swiper-button-disabled');
              nextButton.removeAttribute('disabled');
            }
          },
        },
      });

      swiper.emit('slideChange');
    })
    .catch(error => console.error('Error loading content:', error));
});
