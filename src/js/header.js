document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".js-header-menu-toggle");
    const nav = document.querySelector(".js-header-navigation-list");
    const navLinks = document.querySelectorAll(".js-header-navigation-link");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});
let lastScrollY = 0;
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let currentScrollY = window.scrollY;
    
    // Себе пометку - прокручиваем вниз и прокрутили больше, чем на 100px скрываем хедер
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hidden');
    } 
    // Тут если прокручиу вверх показываем хедер
    else if (currentScrollY < lastScrollY) {
        header.classList.remove('hidden');
    }
    // прокручую більше ніж 100px, роблю хедер непрозорим
    if (currentScrollY = 100) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
    // Тут оновив позицію скролу)))
    lastScrollY = currentScrollY;
});