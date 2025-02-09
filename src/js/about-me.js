import { Accordion, Swiper, Navigation, Keyboard } from './module-libs';

const initAccordion = () => {
<<<<<<< HEAD
    const acordionFirstItem = new Accordion(".accordion-container", {
=======
    const acordionFirstItem = new Accordion(".about-me-accordion-list.accordion-container", {
>>>>>>> main
        duration: 400,
        showFirst: true,
    });
    acordionFirstItem.open(0);
}

// ============================================= swiper =============================================
const swiperBtnEl = document.querySelector('.about-me-swiper-btn');

    const updateActiveSlide = () => {
<<<<<<< HEAD
        document.querySelectorAll('.swiper-slide').forEach(slide => {
=======
        document.querySelectorAll('.about-me-swiper-item.swiper-slide').forEach(slide => {
>>>>>>> main
            slide.classList.remove('active-slide');
        });

        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            activeSlide.classList.add('active-slide');
        }
}
updateActiveSlide();
    
const initSwiper = () => {
<<<<<<< HEAD
    const swiper = new Swiper('.swiper', {
=======
    const swiper = new Swiper('.about-me-swiper-gen-wrap.swiper', {
>>>>>>> main
        modules: [Navigation, Keyboard],
        speed: 400,
        slidesPerView: 2,
        loop: true,
        navigation: {
<<<<<<< HEAD
            nextEl: '.swiper-button-next',
=======
            nextEl: '.about-me-swiper-btn.swiper-button-next',
>>>>>>> main
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            768: { slidesPerView: 3 },
<<<<<<< HEAD
            1024: { slidesPerView: 6 }
=======
            1440: { slidesPerView: 6 }
>>>>>>> main
        },
        on: {
            slideChangeTransitionEnd: updateActiveSlide,
        }
    });
<<<<<<< HEAD
=======

>>>>>>> main
}

document.addEventListener("DOMContentLoaded", function () {
    initAccordion();
    initSwiper();
    
    swiperBtnEl.addEventListener('click', () => {
<<<<<<< HEAD
    const firstSlide = document.querySelector('.swiper-slide');
=======
    const firstSlide = document.querySelector('.about-me-swiper-item.swiper-slide');
>>>>>>> main
    if (firstSlide) {
        firstSlide.classList.remove('active-slide-first');
    }
});
});
