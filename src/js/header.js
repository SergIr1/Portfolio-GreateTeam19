document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn-mobil");
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");
    const menuItems = document.querySelectorAll(".menu ul li a");

    // Открытие меню
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.add("show");
        menu.classList.remove("hide");
        document.body.style.overflow = "hidden"; // Отключаем скролл страницы
    });

    // Закрытие меню
    function closeMenu() {
        menu.classList.remove("show");
        menu.classList.add("hide");
        document.body.style.overflow = ""; // Включаем скролл
    }

    // Закрытие меню по кнопке
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        closeMenu();
    });

    // Закрытие меню по клику на пункт меню
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            closeMenu();
        });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });
});
