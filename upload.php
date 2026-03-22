<?php
header('Content-Type: application/json');

// Konfigurasi Folder Upload
$target_dir = "uploads/";

// 1. Buat folder jika belum ada
if (!is_dir($target_dir)) {
    mkdir($target_dir, 0755, true);
}

// 2. Cek Method Request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // 3. Cek apakah ada file
    if (isset($_FILES['mediaFile']) && $_FILES['mediaFile']['error'] == 0) {
        
        $file_name = basename($_FILES["mediaFile"]["name"]);
        // Bersihkan nama file (hanya huruf, angka, dot, underscore) agar aman
        $file_name = preg_replace("/[^a-zA-Z0-9.]/", "_", $file_name);
        // Tambahkan timestamp agar nama file unik
        $target_file = $target_dir . time() . "_" . $file_name;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // 3.1 Cek Ukuran File (Maksimal 5MB)
        if ($_FILES["mediaFile"]["size"] > 5000000) {
            echo json_encode(["success" => false, "message" => "File terlalu besar (Maksimal 5MB)."]);
            exit;
        }

        // 4. Validasi Ekstensi File
        $allowed_extensions = array("jpg", "jpeg", "png", "gif", "mp4", "webp");
        if (!in_array($imageFileType, $allowed_extensions)) {
            echo json_encode(["success" => false, "message" => "Format file tidak diizinkan. Gunakan JPG, PNG, atau MP4."]);
            exit;
        }

        // 5. Pindahkan File ke Folder Uploads
        if (move_uploaded_file($_FILES["mediaFile"]["tmp_name"], $target_file)) {
            
            // Buat URL lengkap untuk diakses browser
            $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
            $domain = $_SERVER['HTTP_HOST'];
            $path = dirname($_SERVER['PHP_SELF']); // Path folder tempat script berada
            
            // Fix untuk path windows atau root
            $path = str_replace('\\', '/', $path);
            if ($path == '/') $path = '';

            $full_url = $protocol . $domain . $path . "/" . $target_file;

            echo json_encode([
                "success" => true,
                "url" => $full_url,
                "type" => ($imageFileType == 'mp4') ? 'video' : 'image'
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Gagal menyimpan file ke server (Permission Denied?)."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Tidak ada file yang dikirim atau file terlalu besar."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Metode request salah."]);
}
?>