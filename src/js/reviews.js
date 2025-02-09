import { Swiper, Navigation, Keyboard } from './module-libs';

const reviewList = document.querySelector('.reviews-list');
const btnContainer= document.querySelector('.reviews-button')
const renderReviews = info =>{

    return `
    <li class="reviews-card">
                <img class="reviews-card-avatar" src="${info.avatar_url}"></img>
                <h4 class="reviews-card-name">${info.author}</h4>
                <p class="reviews-card-description">${info.review}</p>
            </li>
    `;
};
// const errorMessage = () => {
//     return `
//     <h3 class="reviews-title">`Not Found`</h3>
//     `
// };


fetch('https://portfolio-js.b.goit.study/api/reviews')
.then(response => {
    if(!response.ok){
        throw new Error(response.status);
        reviewList.innerHTML = '<h3 class="reviews-title">Not Found</h3>';
        btnContainer.classList.add('hidden-card');
    }
   
   return response.json();
   
} ).then (data =>{   
    const reviewCards = data.map(el => renderReviews(el)).join('');
    // if(data.lenth > 4){


    // }
    reviewList.innerHTML = reviewCards;
    // initSwiperReviews();

})
.catch(err =>{
    if(err.message === '404'){
        // alert('Sorry. there is no reviews yet');
        reviewList.innerHTML = '<h3 class="reviews-title">Not Found</h3>';
        btnContainer.classList.add('hidden-card');
    }
});

// const reviewCard = document.querySelector('.reviews-card');

//--swiper--//

document.addEventListener("DOMContentLoaded", function () {

    initSwiperReviews();
    });
    

 const initSwiperReviews = () => {
    const swiper = new Swiper ('.reviews-container-card', {
   modules: [Navigation, Keyboard],
    speed: 400,
    slidesPerView: 2,
    loop: false,
     navigation: {
        nextEl: '.reviews-button-right',
        prevEl: '.reviews-button-left',
   },
   keyboard: {
       enabled: true,
       onlyInViewport: true,
  },
  breakpoints: {
      768: { slidesPerView: 2 },
       1024: { slidesPerView: 4 }
   },
//    on: {
//         slideChangeTransitionEnd: updateActiveCards,
//    }
});
}

