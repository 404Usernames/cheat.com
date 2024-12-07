// Обработчик отправки формы
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Остановить стандартное поведение формы (перезагрузку страницы)

  // Получаем значения из полей формы
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Отправляем данные через fetch (AJAX)
  fetch("send.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded" // Тип контента для передачи данных формы
    },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}` // Отправляем данные как x-www-form-urlencoded
  })
  .then(response => response.text()) // Получаем ответ от сервера
  .then(data => {
    console.log(data); // Выводим данные, полученные от сервера (по желанию)
  })
  .catch(error => {
    console.error("Ошибка при отправке данных:", error); // Логируем ошибки в консоль
  });
});
