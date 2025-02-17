document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    console.error("Кнопка #theme-toggle не найдена!");
    return;
  }

  // ==== При загрузке страницы ====
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("darkstyle");
  }

  // ==== При изменении темы ====
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkstyle");
    
    if (document.body.classList.contains("darkstyle")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});

