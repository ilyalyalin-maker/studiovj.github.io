// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Фиксация хедера при скролле
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Функция для проверки и корректировки размера элементов
function adjustLayoutForScreen() {
  const screenWidth = window.innerWidth;
  const header = document.querySelector(".header");
  const logo = document.querySelector(".logo img");
  const nav = document.querySelector(".nav");

  if (screenWidth <= "480px") {
    // Дополнительные корректировки для маленьких экранов
    if (logo) {
      logo.style.maxWidth = "100px";
    }

    if (nav && nav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  } else {
    // Сброс стилей для больших экранов
    if (logo) {
      logo.style.maxWidth = "";
    }
    document.body.style.overflow = "";
  }
}

// Обновите DOMContentLoaded функцию
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    adjustLayoutForScreen(); // Вызов функции при открытии/закрытии меню
  });

  // Вызов функции при загрузке
  adjustLayoutForScreen();

  // Вызов функции при изменении размера окна
  window.addEventListener("resize", adjustLayoutForScreen);

  // ... остальной код без изменений
});
