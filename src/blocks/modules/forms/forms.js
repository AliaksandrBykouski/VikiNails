document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Сброс ошибок
  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("textError").textContent = "";

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const text = document.getElementById("text").value.trim();

  // Валидация имени
  if (name === "") {
    document.getElementById("nameError").textContent =
      "Пожалуйста, введите имя.";
    valid = false;
  }

  // Валидация телефона (например, формат: +7 (XXX) XXX-XX-XX)
  const phoneRegex = /^\+375\(\d{2}\)\d{3}\d{2}\d{2}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Неверный формат телефона. Используйте: +375(XX)XXXXXXX";
    valid = false;
  }

  // Валидация текста
  if (text === "") {
    document.getElementById("textError").textContent =
      "Пожалуйста, введите текст.";
    valid = false;
  }

  // Если все поля валидны, отправляем данные на сервер
  if (valid) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_message.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Показать модальное окно при успешной отправке
        document.getElementById("successModal").style.display = "block";
      } else {
        alert("Произошла ошибка при отправке формы.");
      }
    };

    const params = `name=${encodeURIComponent(name)}&phone=${encodeURIComponent(
      phone
    )}&text=${encodeURIComponent(text)}`;
    xhr.send(params);
  }
});

// Закрытие модального окна
document.getElementById("closeModal").onclick = function () {
  document.getElementById("successModal").style.display = "none";
};

// Закрытие модального окна при нажатии вне его области
window.onclick = function (event) {
  if (event.target == document.getElementById("successModal")) {
    document.getElementById("successModal").style.display = "none";
  }
};

// // Если все поля валидны, показываем модальное окно
//   if (valid) {
//     document.getElementById("successModal").style.display = "block";
//   }
// });
