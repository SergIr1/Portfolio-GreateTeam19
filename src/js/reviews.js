import { Swiper, Navigation, Keyboard, iziToast } from './module-libs';

const reviewList = document.querySelector('.reviews-list');
const btnContainer= document.querySelector('.reviews-buttons');


const renderReviews = info =>{
    return `
    <li class="reviews-card swiper-slide">
                <img class="reviews-card-avatar" src="${info.avatar_url}"></img>
                <h4 class="reviews-card-name">${info.author}</h4>
                <p class="reviews-card-description">${info.review}</p>
            </li>
    `;
};


fetch('https://portfolio-js.b.goit.study/api/reviews')
.then(response => {
    if(!response.ok){
        throw new Error(response.status);
    }
   return response.json();
   
} ).then (data =>{   
    const reviewCards = data.map(el => renderReviews(el)).join('');
    reviewList.innerHTML = reviewCards;
})
.catch(err =>{
    if(err.message === '404'){
        iziToast.error({
            title: 'Error',
            position: 'topRight',
            message:
              'Sorry, there are no reviews of this autohor yet. Please try again later!',
          });
        reviewList.innerHTML = '<h3 class="reviews-title">Not Found</h3>';
        btnContainer.classList.add('hidden-card');
    }
});

//--swiper--//

 const initSwiperReviews = () => {
    const swiper = new Swiper('.reviews-container-card.swiper', {
        modules: [Navigation, Keyboard],
        speed: 400,
        slidesPerView: 1,
        loop: false,
        navigation: {
           nextEl: '.reviews-button.swiper-button-next',
           prevEl: '.reviews-button.swiper-button-prev',
       },
       keyboard: {
          enabled: true,
          onlyInViewport: true,
       },
       breakpoints: {
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 4 }
       },
       on: {
        init: function () {
        updateArrowStatus(this);
        },
        slideChange: function () {
        updateArrowStatus(this);
        }
        }
});
}
const updateArrowStatus = (swiper) => {
        const prevBtn = document.querySelector('.reviews-button-left');
        const nextBtn = document.querySelector('.reviews-button-right');
        
        if (swiper.isBeginning) {
            prevBtn.setAttribute('disabled', true);
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.removeAttribute('disabled');
            prevBtn.classList.remove('disabled');
        }
        
        if (swiper.isEnd) {
            nextBtn.setAttribute('disabled', true);
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.removeAttribute('disabled');
            nextBtn.classList.remove('disabled');
        }
        };
document.addEventListener("DOMContentLoaded", function () {
    initSwiperReviews();
    });