<?php
// api/get_projects.php

// --- 1. CONFIGURATION & HEADERS ---
// Allow CORS requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// --- 2. MANUAL .ENV LOADER ---
function loadEnv($path) {
    if (!file_exists($path)) {
        // It's okay if .env doesn't exist in some production setups where env vars are set globally,
        // but for this setup we'll warn if missing.
        return; 
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // Skip comments

        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);
            $value = trim($value, '"\''); // Remove quotes

            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv(sprintf('%s=%s', $name, $value));
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }
    }
}

// Load the environment variables
loadEnv(__DIR__ . '/.env');

// --- 3. DATABASE CONNECTION ---
// Check if variables exist
if (!isset($_ENV['DB_HOST'])) {
    http_response_code(500);
    echo json_encode(["error" => "Environment variables missing. Check .env file."]);
    exit;
}

$host = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$dbname = $_ENV['DB_DATABASE'];
$user = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];

$dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password";

try {
    $pdo = new PDO($dsn);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // --- 4. DATA FETCHING ---
    // Fetch id, title, image_url, and tags
    $stmt = $pdo->query("SELECT id, title, image_url, tags FROM projects");
    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Helper to parse Postgres Array format "{val1,val2}"
    function parsePgArray($pgArrayString) {
        if (empty($pgArrayString) || $pgArrayString === '{}') return [];
        return explode(',', trim($pgArrayString, '{}'));
    }

    // --- 5. DATA PROCESSING ---
    $finalData = array_map(function($project) {
        $tagsArray = parsePgArray($project['tags']);
        
        // Format tags with hash: #UI #Web
        $tagsString = !empty($tagsArray) ? '#' . implode(' #', $tagsArray) : '';
        
        // We now return title and tags separately so the frontend can style them differently
        return [
            'id' => $project['id'],
            'image' => $project['image_url'], // Ensure this column name matches your DB exactly
            'title' => $project['title'],
            'tags' => $tagsString
        ];
    }, $projects);

    echo json_encode($finalData);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database Error: " . $e->getMessage()]);
}
?>