<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$directory = "uploads/";
$files_list = [];

// Cek apakah folder uploads ada
if (is_dir($directory)) {
    // Scan folder, hilangkan . dan ..
    $files = array_diff(scandir($directory), array('..', '.'));
    
    // Siapkan URL dasar
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
    $domain = $_SERVER['HTTP_HOST'];
    $path = dirname($_SERVER['PHP_SELF']);
    $path = str_replace('\\', '/', $path);
    if ($path == '/') $path = '';
    
    foreach ($files as $file) {
        $file_path = $directory . $file;
        $ext = strtolower(pathinfo($file_path, PATHINFO_EXTENSION));
        
        // Filter hanya file gambar/video yang valid
        if (in_array($ext, ['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4'])) {
            $full_url = $protocol . $domain . $path . "/" . $file_path;
            
            $files_list[] = [
                "name" => $file,
                "url" => $full_url,
                "type" => ($ext == 'mp4') ? 'video' : 'image',
                "date" => filemtime($file_path) // Waktu file diupload
            ];
        }
    }
}

// Urutkan dari yang terbaru (Descending)
usort($files_list, function($a, $b) {
    return $b['date'] - $a['date'];
});

echo json_encode($files_list);
?>