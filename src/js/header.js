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
document.addEventListener("DOMContentLoaded", () => {
    const logoText = document.querySelector(".header-logo-text");
    const menuButton = document.querySelector(".header-menu-button");
    const header = document.querySelector(".header");
    const projectsSection = document.querySelector(".projects");

    let lastScrollY = window.scrollY;

    // ==== Так це у нас базовий колір тексту ====
    logoText.style.color = "#fafafa";
    menuButton.style.color = "#fafafa";

    function checkProjectsSection() {
        if (!projectsSection) return;

        const rect = projectsSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0; // Чи видно секцію?

        if (isInViewport) {
            logoText.style.color = "#65760D";
            menuButton.style.color = "#65760D";
            menuButton.style.borderColor = "#65760D";
        } else {
            logoText.style.color = "#fafafa";
            menuButton.style.color = "#fafafa";
            menuButton.style.borderColor = "#fafafa";
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

