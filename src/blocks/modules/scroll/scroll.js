const scrollToTopButton = document.getElementById("scrollToTop");

// Следим за скроллом страницы
window.addEventListener("scroll", function () {
  if (window.scrollY > 1600) {
    scrollToTopButton.style.display = "block"; // Показываем кнопку
  } else {
    scrollToTopButton.style.display = "none"; // Прячем кнопку
  }
});

// Поднятие вверх при клике
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
