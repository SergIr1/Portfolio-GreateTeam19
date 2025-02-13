import { Accordion, Swiper, Navigation, Keyboard } from './module-libs.js';

const initAccordion = () => {
    const acordionFirstItem = new Accordion(".about-me-accordion-list.accordion-container", {
        duration: 400,
        showFirst: true,
    });
    acordionFirstItem.open(0);
}

// ============================================= swiper =============================================
const swiperBtnEl = document.querySelector('.about-me-swiper-btn');
const allSlides = document.querySelectorAll('.about-me-swiper-item.swiper-slide');

const removeFirstSlideClass = () => {
    const firstSlide = document.querySelector('.about-me-swiper-item.swiper-slide.active-slide-first');
    if (firstSlide) {
        firstSlide.classList.remove('active-slide-first');
    }
};

allSlides.forEach(slide => {
    slide.setAttribute('tabindex', '0');
});

const addSlideListeners = () => {
    allSlides.forEach(slide => {
        slide.addEventListener('click', removeFirstSlideClass);
        slide.addEventListener('keydown', (event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Tab") {
                removeFirstSlideClass();
            }
        });
        slide.addEventListener('touchstart', removeFirstSlideClass);
    });
};

    const updateActiveSlide = () => {
        document.querySelectorAll('.about-me-swiper-item.swiper-slide').forEach(slide => {
            slide.classList.remove('active-slide');
        });

        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            activeSlide.classList.add('active-slide');
        }
}
    
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
    addSlideListeners();
    
    swiperBtnEl.addEventListener('click', () => {
    const firstSlide = document.querySelector('.about-me-swiper-item.swiper-slide');
    if (firstSlide) {
        firstSlide.classList.remove('active-slide-first');
    }
    });
});
