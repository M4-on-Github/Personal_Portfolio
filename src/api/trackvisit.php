<?php
// --- 1. Load Environment Variables ---
function loadEnv($path) {
    if (!file_exists($path)) {
        die("Error: .env file not found.");
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0 || strpos($line, '=') === false) continue;
        list($name, $value) = explode('=', $line, 2);
        $_ENV[trim($name)] = trim($value, '"\' ');
    }
}
loadEnv(__DIR__ . '/.env');

// --- 2. CORS Headers ---
// Allow React to talk to this PHP script
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// --- 3. Capture User Data ---
$user_ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$input = json_decode(file_get_contents('php://input'), true);
$page_url = isset($input['page_url']) ? $input['page_url'] : '';

// --- 4. Connect to Supabase (Direct SQL) ---
$host = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$db   = $_ENV['DB_DATABASE'];
$user = $_ENV['DB_USERNAME'];
$pass = $_ENV['DB_PASSWORD'];

$dsn = "pgsql:host=$host;port=$port;dbname=$db";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // --- 5. Insert Data ---
    // We use a prepared statement here to prevent SQL Injection
    $stmt = $pdo->prepare("
        INSERT INTO website_visits (ip_address, user_agent, page_url) 
        VALUES (:ip, :ua, :url)
    ");

    $stmt->execute([
        ':ip' => $user_ip,
        ':ua' => $user_agent,
        ':url' => $page_url
    ]);

    echo json_encode(["status" => "success", "message" => "Visit recorded"]);

} catch (PDOException $e) {
    // Log the error securely to the server logs, not the browser
    error_log("Database Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
}
?>