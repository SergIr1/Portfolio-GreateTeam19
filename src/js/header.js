document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn-mobil");
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");
    const orderBtn = document.querySelector(".order-btn");

    // Открытие меню
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.add("show");
        menu.classList.remove("hide");
        orderBtn.style.display = "block"; // Показываем кнопку "Order the project"
        document.body.style.overflow = "hidden";
      
    });

    // Закрытие меню
    function closeMenu() {
        menu.classList.remove("show");
        menu.classList.add("hide");
        orderBtn.style.display = "none"; // Скрываем кнопку, когда меню закрыто
        document.body.style.overflow = ""; // Включаем скролл
    }

    // Закрытие меню по кнопке
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        closeMenu();
    });

    // Закрытие меню по клику на пункт меню
    const menuItems = document.querySelectorAll(".menu ul li a");
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
