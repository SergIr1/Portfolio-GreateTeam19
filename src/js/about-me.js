import Accordion from "accordion-js";
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const initAccordion = () => {
    const acordionFirstItem = new Accordion(".accordion-container", {
        duration: 400,
        showFirst: true,
    });
    acordionFirstItem.open(0);
}

// ============================================= swiper =============================================

    const updateActiveSlide = () => {
        document.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.classList.remove('active-slide');
        });

        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            activeSlide.classList.add('active-slide');
        }
}
updateActiveSlide();
    
const initSwiper = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Keyboard],
        speed: 400,
        slidesPerView: 2,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 }
        },
        on: {
            slideChangeTransitionEnd: updateActiveSlide,
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initAccordion();
    initSwiper();
});