import { Accordion, Swiper, Navigation, Keyboard } from './module-libs';

const initAccordion = () => {
    const acordionFirstItem = new Accordion(".about-me-accordion-list.accordion-container", {
        duration: 400,
        showFirst: true,
    });
    acordionFirstItem.open(0);
}

// ============================================= swiper =============================================
const swiperBtnEl = document.querySelector('.about-me-swiper-btn');

    const updateActiveSlide = () => {
        document.querySelectorAll('.about-me-swiper-item.swiper-slide').forEach(slide => {
            slide.classList.remove('active-slide');
        });

        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            activeSlide.classList.add('active-slide');
        }
}
updateActiveSlide();
    
const initSwiper = () => {
    const swiper = new Swiper('.about-me-swiper-gen-wrap.swiper', {
        modules: [Navigation, Keyboard],
        speed: 400,
        slidesPerView: 2,
        loop: true,
        navigation: {
            nextEl: '.about-me-swiper-btn.swiper-button-next',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            768: { slidesPerView: 3 },
            1440: { slidesPerView: 6 }
        },
        on: {
            slideChangeTransitionEnd: updateActiveSlide,
        }
    });

}

document.addEventListener("DOMContentLoaded", function () {
    initAccordion();
    initSwiper();
    
    swiperBtnEl.addEventListener('click', () => {
    const firstSlide = document.querySelector('.about-me-swiper-item.swiper-slide');
    if (firstSlide) {
        firstSlide.classList.remove('active-slide-first');
    }
});
});
