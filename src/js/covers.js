document.addEventListener("DOMContentLoaded", () => {
  const coversSection = document.querySelector(".covers");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".cover-list").style.animationPlayState = "running";
      } else {
        document.querySelector(".cover-list").style.animationPlayState = "paused";
      }
    });
  });

  observer.observe(coversSection);
});
