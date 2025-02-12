document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".js-header-menu-toggle");
    const nav = document.querySelector(".js-header-navigation-list");
    const navLinks = document.querySelectorAll(".js-header-navigation-link");

    menuToggle.addEventListener("click", (event) => {
            // ==== Так це я прибераю спрацьовуванню події на document ====
        event.stopPropagation(); 
        nav.classList.toggle("active");
    });

    // ==== Тут закриваємо меню при кліку на посилання ==== 
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    // ==== Закриваємо меню при кліку будь-де на сторінці, крім самого меню і кнопки ====
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // const logoText = document.querySelector(".header-logo-text");
    // const menuButton = document.querySelector(".header-menu-button");
    const header = document.querySelector(".header");
    const aboutMeSection = document.querySelector(".js-about-me");

    let lastScrollY = window.scrollY;

    // ==== Так це у нас базовий колір тексту ====
    // logoText.style.color = "#fafafa";
    // menuButton.style.color = "#fafafa";

    function checkProjectsSection() {
        if (!aboutMeSection) return;

        const rect = aboutMeSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight;

        if (isInViewport) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            // logoText.style.color = "#65760D";
            // menuButton.style.color = "#65760D";
            // menuButton.style.borderColor = "#65760D";
        } else {
            header.style.backgroundColor = 'transparent';
            // logoText.style.color = "#fafafa";
            // menuButton.style.color = "#fafafa";
            // menuButton.style.borderColor = "#fafafa";
        }
    }

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;

        // ==== Для себе ховаю хедер при скролі вниз :) ====
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add("hidden");
        }
        // ==== Показую хедер при скролі вверх ====
        else if (currentScrollY < lastScrollY) {
            header.classList.remove("hidden");
        }

        checkProjectsSection();

        lastScrollY = currentScrollY;
    });

    // ==== Перевіряємо секцію при завантаженні сторінки ====
    checkProjectsSection();
});

