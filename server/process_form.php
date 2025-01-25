<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents("php://input"), true);
        
        $to = 'deopakunal@gmail.com';
        $websiteName = 'K Primus';
        $subject = 'Enquiry from ' . $websiteName;
        
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $phone = $data['phone'] ?? '';
        $budget = $data['budget'] ?? '';
        $message = strip_tags($data['message'] ?? '');

        $message_body = "Name: $name\nPhone: $phone\nEmail: $email\nBudget: $budget\nMessage: $message";
        $headers = "From: $websiteName <no-reply@kprimus.in>\r\n";
        $headers .= "Reply-To: $name <$email>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $message_body, $headers)) {
            echo json_encode(['success' => true]);
        } else {
            throw new Exception('Failed to send email');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit();
}
?>