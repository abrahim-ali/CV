<?php
// معالجة البيانات المستلمة من النموذج
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // جمع البيانات مع التحقق من وجودها
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // التحقق من أن جميع الحقول ممتلئة
    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('يرجى ملء جميع الحقول.'); window.history.back();</script>";
        exit;
    }

    // عنوان الارسال (بريدك الخاص)
    $to = "abrahim71192@gmail.com"; // استبدلها بعنوان بريدك الحقيقي

    // عنوان الرسالة
    $subject = "رسالة جديدة من نموذج الاتصال";

    // محتوى الرسالة
    $body = "اسم المرسل: $name\n";
    $body .= "البريد الإلكتروني: $email\n";
    $body .= "الرسالة:\n$message";

    // إعداد الرؤوس
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // إرسال البريد
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('تم إرسال رسالتك بنجاح!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('طريقة الطلب غير مسموح بها.'); window.history.back();</script>";
}
?>
