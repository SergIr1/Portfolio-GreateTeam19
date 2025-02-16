document.getElementById('theme-toggle').addEventListener('click', function() {
  body.classList.toggle('darkstyle');
});

// ==== При загрузке страницы ==== 
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('darkstyle');
}

// ==== При изменении темы ==== 
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('darkstyle');
  if (document.body.classList.contains('darkstyle')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
