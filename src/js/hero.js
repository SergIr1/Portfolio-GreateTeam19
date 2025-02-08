document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero-container").style.opacity = "1";
    document.querySelector(".hero-container").style.transform = "translateY(0)";
});


document.querySelectorAll(".hero-sm-link, .hero-email-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("hovered");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("hovered");
    });

    link.addEventListener("focus", () => {
        link.classList.add("hovered");
    });

    link.addEventListener("blur", () => {
        link.classList.remove("hovered");
    });
});

