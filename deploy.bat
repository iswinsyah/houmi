@echo off
echo ==========================================
echo  🚀 PROSES TERBANG KE GITHUB & HOSTINGER
echo ==========================================
git add .
set /p pesan="Masukkan pesan update / commit: "
git commit -m "%pesan%"
git push origin main
echo ==========================================
echo  ✅ KODE BERHASIL DITERBANGKAN BOSKU!
pause