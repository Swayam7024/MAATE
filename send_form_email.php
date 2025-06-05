<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $subject = htmlspecialchars($_POST['subject']);
    $question = htmlspecialchars($_POST['question']);

    // Recipient email address
    $to = "swayamkhantwal702@gmail.com";  // Replace with your email

    // Email subject and body
    $email_subject = "New Contact Us Form Submission";
    $email_body = "You have received a new message from your contact form.\n\n".
                  "Here are the details:\n".
                  "Name: $name\n".
                  "Phone: $phone\n".
                  "Email: $email\n".
                  "Company: $company\n".
                  "Subject: $subject\n".
                  "Question: $question\n";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email and provide feedback via alert
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='contact_us.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.location.href='contact_us.html';</script>";
    }
}    
?>
