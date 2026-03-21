// --- DATA & STATE MANAGEMENT ---

const DEFAULT_DATA = [
    {
        id: 1,
        name: "Houmi Tropis Pool Villa",
        location: "Batu, Jawa Timur",
        rating: 4.8,
        reviews: 124,
        price: 1500000,
        oldPrice: 2000000,
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
        ],
        category: "Kolam Renang",
        verified: true,
        amenities: ["Private Pool", "WiFi Cepat", "Smart TV", "Dapur", "Area BBQ", "Kapasitas 8 Orang"],
        description: "Villa bergaya tropis modern dengan kolam renang pribadi berukuran besar. Sangat cocok untuk *staycation* bersama teman atau keluarga. Dilengkapi alat BBQ lengkap."
    },
    {
        id: 2,
        name: "Houmi Cabin & Nature",
        location: "Pujon, Malang",
        rating: 4.9,
        reviews: 89,
        price: 850000,
        oldPrice: 1200000,
        images: [
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
        ],
        category: "Pegunungan",
        verified: true,
        amenities: ["Pemandangan Alam", "Api Unggun", "WiFi Cepat", "Kopi & Teh", "Pemanas Air"],
        description: "Rasakan sensasi menginap di kabin kayu estetik yang dikelilingi hutan pinus. Udara sangat sejuk, cocok untuk melarikan diri dari hiruk-pikuk kota."
    },
    {
        id: 3,
        name: "Houmi Grand Family View",
        location: "Oro-oro Ombo, Batu",
        rating: 4.7,
        reviews: 210,
        price: 2200000,
        oldPrice: 2800000,
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687931-57d1ebbcbc20?auto=format&fit=crop&w=800&q=80"
        ],
        category: "Keluarga",
        verified: true,
        amenities: ["Kapasitas 15 Orang", "Biliar", "Karaoke", "Dapur Lengkap", "Garasi Luas", "Rooftop"],
        description: "Villa mewah 3 lantai dengan kapasitas super besar. Fasilitas hiburan lengkap di dalam villa. Pemandangan 360 derajat pegunungan dari rooftop."
    }
];

const DEFAULT_MEDIA = [
    { id: 101, type: 'image', name: 'Pool Villa 1', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
    { id: 102, type: 'image', name: 'Pool Villa 2', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80' },
    { id: 103, type: 'image', name: 'Cabin Exterior', url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80' },
    { id: 104, type: 'image', name: 'Cabin Interior', url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80' },
    { id: 105, type: 'image', name: 'Grand View 1', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' }
];

const DEFAULT_ARTICLES = [
    {
        id: 1,
        title: "5 Tips Liburan Hemat di Batu Malang",
        image: "https://images.unsplash.com/photo-1596401057633-565652f50000?auto=format&fit=crop&w=800&q=80",
        date: "2023-10-15",
        content: "Liburan ke Batu tidak harus mahal. Ada banyak cara untuk menikmati kota wisata ini tanpa menguras kantong. Pertama, pilih penginapan yang memiliki fasilitas dapur lengkap seperti di Houmi Villa, sehingga Anda bisa masak sendiri. Kedua, kunjungi tempat wisata alam yang tiketnya murah meriah seperti Coban Putri atau Hutan Pinus..."
    },
    {
        id: 2,
        title: "Rekomendasi Kuliner Legendaris Kota Batu",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        date: "2023-11-20",
        content: "Ke Batu belum lengkap kalau belum nyobain Pos Ketan Legenda dan Sate Kelinci. Wisata kuliner di Batu menawarkan sensasi makan dengan udara dingin yang bikin nafsu makan bertambah. Jangan lupa mampir ke alun-alun kota Batu untuk menikmati jajanan kaki lima yang bersih dan tertata rapi."
    }
];

let appData = JSON.parse(localStorage.getItem('HOUMI_DATA')) || DEFAULT_DATA;
let mediaData = JSON.parse(localStorage.getItem('HOUMI_MEDIA')) || DEFAULT_MEDIA;
let articlesData = JSON.parse(localStorage.getItem('HOUMI_ARTICLES')) || DEFAULT_ARTICLES;
let bookingsData = JSON.parse(localStorage.getItem('HOUMI_BOOKINGS')) || [];

// Default System Prompt untuk AI
const DEFAULT_AI_PROMPT = `
Anda adalah 'Mimin Houmi', Customer Service AI untuk Houmi Villa di Batu, Malang.
Gaya bicara: Ramah, membantu, dan menggunakan emoji 😊.

DATA VILLA:
- Tropis Pool Villa (Rp 1.5jt, 3 Kamar, Pool)
- Cabin Nature (Rp 850rb, Hutan Pinus, 2 Kamar)
- Grand Family (Rp 2.2jt, Mewah, Karaoke, 5 Kamar)

Jika user ingin booking, arahkan ke website atau admin WA.
`;

function saveMediaToStorage() {
    localStorage.setItem('HOUMI_MEDIA', JSON.stringify(mediaData));
    renderApp();
}

function saveToStorage() {
    localStorage.setItem('HOUMI_DATA', JSON.stringify(appData));
    renderApp();
}

function saveArticlesToStorage() {
    localStorage.setItem('HOUMI_ARTICLES', JSON.stringify(articlesData));
    renderApp();
}

function saveBookingsToStorage() {
    localStorage.setItem('HOUMI_BOOKINGS', JSON.stringify(bookingsData));
    renderApp();
}

function getCategories() {
    const cats = new Set(appData.map(v => v.category));
    return ["Semua", ...Array.from(cats)];
}

let activeCategory = "Semua";
let selectedVilla = null;
let selectedArticle = null;
let currentPage = 'home';
let isAdminLoggedIn = localStorage.getItem('HOUMI_IS_ADMIN') === 'true';
let editingVillaId = null;
let editingArticleId = null;
let calendarCursor = new Date(); // Kursor untuk navigasi kalender

// --- KONFIGURASI AI ---
// PASTE URL WEB APP GOOGLE SCRIPT BOS DI BAWAH INI (Di dalam tanda kutip)
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbwKhbf0doH9ue1Gya9ubLU6ZqrLYM4HkwtTmlGy-exkaWJe3wLTAC3HUR5h2w7fg1Q/exec";
const WHATSAPP_NUMBER = "6281234567890"; // GANTI DISINI: Masukkan nomor WA Admin/CS (Format: 628xxx tanpa + atau 0)

const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
};

function getAmenityIcon(amenity) {
    const am = amenity.toLowerCase();
    if (am.includes('wifi')) return 'wifi';
    if (am.includes('kolam') || am.includes('pool')) return 'wind';
    if (am.includes('bbq') || am.includes('dapur')) return 'flame';
    if (am.includes('kopi') || am.includes('teh')) return 'coffee';
    if (am.includes('orang') || am.includes('kapasitas')) return 'users';
    if (am.includes('pemandangan') || am.includes('alam')) return 'image';
    return 'check-circle';
}

function setCategory(cat) {
    activeCategory = cat;
    renderApp();
}

function getWhatsAppFloatingButton() {
    return `
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Gemini,%20tolong%20bantu%20saya%20mencari%20villa%20terbaik%20di%20Houmi..." target="_blank" class="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-50 group">
        <div class="absolute bottom-full right-0 mb-3 w-max bg-white text-dark text-xs font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none origin-bottom-right">
            Tanya Gemini AI 🧠
            <div class="absolute -bottom-1.5 right-6 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
        <div class="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all transform hover:scale-110 flex items-center justify-center">
            <i data-lucide="message-circle" class="w-7 h-7"></i>
        </div>
    </a>
    `;
}

// --- AI GENERATOR FUNCTION ---
async function generateBuyerPersona() {
    const btn = document.getElementById('btn-generate');
    const resultArea = document.getElementById('persona-result');
    const loadingArea = document.getElementById('persona-loading');
    
    if (bookingsData.length === 0) {
        alert("Belum ada data booking di CRM untuk dianalisa.");
        return;
    }

    if (GAS_API_URL === "PASTE_URL_WEB_APP_GOOGLE_SCRIPT_DISINI" || GAS_API_URL === "") {
        alert("URL Google Apps Script belum dipasang di script.js!");
        return;
    }

    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    try {
        // 1. Siapkan Data
        const dataSummary = bookingsData.map((b, index) => 
            `${index+1}. Nama: ${b.customerName}, Asal: ${b.city}, Tujuan: ${b.purpose}, Jumlah: ${b.pax} Org, Sumber: ${b.source}, Villa: ${b.villaName}, Durasi: ${b.nights} malam`
        ).join('\n');

        const prompt = `
        Bertindaklah sebagai Konsultan Bisnis Villa profesional. Analisa data transaksi berikut ini untuk membuat "Buyer Persona" dan "Strategi Marketing".
        
        Data Transaksi CRM:
        ${dataSummary}
        
        Tolong berikan output dalam format HTML (tanpa tag <html> atau <body>) menggunakan class Tailwind CSS.
        Struktur:
        1. Kotak Ringkasan (Background hijau muda): Total transaksi, Rata-rata malam, Villa Terlaris.
        2. 🎯 Profil Buyer Persona (Detail): Analisa Demografi, Psikografi, dan Perilaku.
        3. 💡 Rekomendasi Strategi: Saran konten medsos dan ide promo.
        `;

        // 2. Kirim ke Google Apps Script (GAS)
        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // GAS butuh header ini agar dianggap text/plain kadang-kadang, tapi kita coba standard json
            body: JSON.stringify({ prompt: prompt }) 
        });

        const data = await response.json();
        
        // 3. Tampilkan Hasil
        let aiText = data.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/```html/g, '').replace(/```/g, ''); // Bersihkan markdown

        resultArea.innerHTML = aiText;
        resultArea.classList.remove('hidden');

    } catch (error) {
        alert("Gagal menghubungi AI: " + error.message);
        console.error(error);
    } finally {
        loadingArea.classList.add('hidden');
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// --- CONTENT CALENDAR GENERATOR ---
async function generateContentCalendar() {
    const btn = document.getElementById('btn-calendar');
    const resultArea = document.getElementById('calendar-result');
    const loadingArea = document.getElementById('calendar-loading');
    
    if (bookingsData.length === 0) {
        alert("Belum ada data booking di CRM untuk dianalisa.");
        return;
    }

    if (GAS_API_URL === "PASTE_URL_WEB_APP_GOOGLE_SCRIPT_DISINI" || GAS_API_URL === "") {
        alert("URL Google Apps Script belum dipasang!");
        return;
    }

    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    try {
        const dataSummary = bookingsData.map((b, index) => 
            `${index+1}. Tamu: ${b.customerName}, Asal: ${b.city}, Tujuan: ${b.purpose}, Jml: ${b.pax}, Villa: ${b.villaName}`
        ).join('\n');

        const prompt = `
        Bertindaklah sebagai Content Strategist Expert. Buatkan Kalender Konten 1 Bulan (4 Minggu) untuk Houmi Villa.
        
        DATA TAMU REAL (Gunakan untuk relevansi konten):
        ${dataSummary}
        
        TUGAS:
        Buat tabel HTML (gunakan class Tailwind: w-full text-left border border-collapse, th bg-gray-100 p-2, td border p-2 text-sm) dengan kolom:
        1. Minggu Ke
        2. Tema Mingguan (Misal: Healing, Family, Promo)
        3. Ide Konten Instagram/TikTok (Visual + Hook Singkat)
        4. Judul Artikel SEO Website (Target keyword relevan)
        `;

        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ prompt: prompt }) 
        });

        const data = await response.json();
        let aiText = data.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/```html/g, '').replace(/```/g, '');

        resultArea.innerHTML = aiText;
        resultArea.classList.remove('hidden');

    } catch (error) {
        alert("Gagal: " + error.message);
    } finally {
        loadingArea.classList.add('hidden');
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// --- AI TRAINING FUNCTIONS ---
async function saveAIPrompt(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    const newPrompt = form.prompt.value;

    btn.disabled = true;
    btn.innerText = "Menyimpan ke Server AI...";

    try {
        // Kirim prompt baru ke GAS untuk disimpan di Script Properties
        // Menggunakan fetch ke URL GAS
        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ 
                action: "update_prompt", 
                system_prompt: newPrompt 
            }) 
        });

        const result = await response.text();
        alert("Berhasil! Pengetahuan AI telah diperbarui.\nRespon Server: " + result);
    } catch (err) {
        alert("Gagal menyimpan: " + err.message);
    } finally {
        btn.disabled = false;
        btn.innerText = "Simpan Pengetahuan Baru";
    }
}

// --- CALENDAR FUNCTIONS (NEW) ---
function changeCalendarMonth(offset) {
    calendarCursor.setMonth(calendarCursor.getMonth() + offset);
    renderApp(); // Refresh tampilan untuk update kalender
}

function isDateBooked(villaId, dateStr) {
    // Cek apakah tanggal (YYYY-MM-DD) ada di database booking untuk villa ini
    return bookingsData.some(b => {
        if (parseInt(b.villaId) !== parseInt(villaId) && b.status !== 'done' && b.status !== 'booked' && b.status !== 'new') return false; 
        // Kita anggap status 'new', 'booked', 'done' sebagai terisi. Kalau 'contacted' mungkin masih negosiasi (opsional).
        // Untuk aman, anggap semua yang masuk CRM memblokir kalender sementara.
        
        let start = new Date(b.date);
        let end = new Date(start);
        end.setDate(end.getDate() + parseInt(b.nights));
        
        let current = new Date(dateStr);
        // Tanggal terisi adalah dari Check-in sampai sebelum Check-out
        return current >= start && current < end;
    });
}

function getCalendarHTML(villaId) {
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // 0 = Minggu
    
    let html = `
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mt-2">
            <div class="flex justify-between items-center mb-4">
                <span class="font-bold text-sm text-gray-800">${monthNames[month]} ${year}</span>
                <div class="flex gap-2">
                    <button onclick="changeCalendarMonth(-1)" class="p-1 border rounded hover:bg-gray-50"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
                    <button onclick="changeCalendarMonth(1)" class="p-1 border rounded hover:bg-gray-50"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-1 text-center text-xs mb-2 font-semibold text-gray-400">
                <div>M</div><div>S</div><div>S</div><div>R</div><div>K</div><div>J</div><div>S</div>
            </div>
            <div class="grid grid-cols-7 gap-1 text-center text-sm">
    `;
    
    // Kotak kosong untuk hari sebelum tanggal 1
    for (let i = 0; i < startDayOfWeek; i++) html += `<div></div>`;
    
    // Loop tanggal 1 sampai akhir bulan
    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
        const booked = isDateBooked(villaId, dateStr);
        const isPast = new Date(dateStr) < new Date().setHours(0,0,0,0);
        
        let classes = "py-1 rounded cursor-default ";
        if (booked) classes += "bg-red-100 text-red-600 line-through decoration-red-600 font-bold";
        else if (isPast) classes += "text-gray-300";
        else classes += "text-gray-700 hover:bg-gray-100 font-medium";
        
        html += `<div class="${classes}">${d}</div>`;
    }
    
    html += `   </div>
                <div class="flex gap-4 mt-4 text-[10px] text-gray-500 justify-center">
                    <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-white border"></span> Tersedia</span>
                    <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100 text-red-600 line-through text-center text-[8px] flex items-center justify-center">x</span> Terisi</span>
                </div>
            </div>`;
    return html;
}

function navigateTo(page) {
    currentPage = page;
    if (page === 'home') selectedVilla = null;
    if (page === 'admin-dashboard' && !isAdminLoggedIn) {
        currentPage = 'admin-login';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
}

function openVillaDetail(id) {
    selectedVilla = appData.find(v => v.id === id);
    calendarCursor = new Date(); // Reset kalender ke bulan sekarang saat buka detail
    navigateTo('detail');
}

function closeVillaDetail() {
    navigateTo('home');
}

function openArticleDetail(id) {
    selectedArticle = articlesData.find(a => a.id === id);
    navigateTo('article-detail');
}

function handleLogin(e) {
    e.preventDefault();
    const pass = document.getElementById('admin-pass').value;
    if (pass === 'admin123') {
        isAdminLoggedIn = true;
        localStorage.setItem('HOUMI_IS_ADMIN', 'true');
        navigateTo('admin-dashboard');
    } else {
        alert('Password salah!');
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    localStorage.removeItem('HOUMI_IS_ADMIN');
    navigateTo('home');
}

function deleteVilla(id) {
    if(confirm('Yakin ingin menghapus villa ini?')) {
        appData = appData.filter(v => v.id !== id);
        saveToStorage();
    }
}

function openEditor(id = null) {
    editingVillaId = id;
    navigateTo('admin-edit');
}

function saveVillaData(e) {
    e.preventDefault();
    const form = e.target;
    
    const newVilla = {
        id: editingVillaId ? editingVillaId : Date.now(),
        name: form.name.value,
        location: form.location.value,
        price: parseInt(form.price.value),
        oldPrice: parseInt(form.oldPrice.value),
        category: form.category.value,
        rating: 4.8,
        reviews: 0,
        verified: true,
        description: form.description.value,
        amenities: form.amenities.value.split(',').map(s => s.trim()),
        images: form.images.value.split('\n').map(s => s.trim()).filter(s => s)
    };

    if (editingVillaId) {
        const index = appData.findIndex(v => v.id === editingVillaId);
        if (index !== -1) appData[index] = { ...appData[index], ...newVilla, rating: appData[index].rating, reviews: appData[index].reviews };
    } else {
        appData.push(newVilla);
    }

    saveToStorage();
    navigateTo('admin-dashboard');
}

// --- ARTICLE FUNCTIONS ---
function deleteArticle(id) {
    if(confirm('Yakin ingin menghapus artikel ini?')) {
        articlesData = articlesData.filter(a => a.id !== id);
        saveArticlesToStorage();
    }
}

function openArticleEditor(id = null) {
    editingArticleId = id;
    navigateTo('admin-article-edit');
}

function saveArticleData(e) {
    e.preventDefault();
    const form = e.target;
    
    const newArticle = {
        id: editingArticleId ? editingArticleId : Date.now(),
        title: form.title.value,
        image: form.image.value,
        date: form.date.value,
        content: form.content.value
    };

    if (editingArticleId) {
        const index = articlesData.findIndex(a => a.id === editingArticleId);
        if (index !== -1) articlesData[index] = newArticle;
    } else {
        articlesData.unshift(newArticle); // Artikel baru di paling atas
    }

    saveArticlesToStorage();
    navigateTo('admin-articles');
}

async function addMedia(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    // Validasi: Harus pilih salah satu (File atau URL)
    if (!form.mediaFile.files.length && !form.mediaUrl.value) {
        alert("Silakan pilih file dari perangkat atau masukkan URL gambar.");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Uploading...";

    try { 
        let finalUrl = form.mediaUrl.value;
        let type = 'image';

        // Jika user memilih file, upload dulu ke server
        if (form.mediaFile.files.length > 0) {
            const formData = new FormData();
            formData.append('mediaFile', form.mediaFile.files[0]);

            // Kirim ke upload.php
            const response = await fetch('upload.php', { method: 'POST', body: formData });

            // Cek apakah response dari server adalah JSON atau HTML error
            const contentType = response.headers.get("content-type");
            if (!response.ok || !contentType || !contentType.includes("application/json")) {
                const errorText = await response.text();
                console.error("Server Response (bukan JSON):", errorText);
                throw new Error(`Server mengembalikan error. Cek console browser untuk detail (Status: ${response.status})`);
            }
            
            const result = await response.json();

            if (result.success) {
                finalUrl = result.url;
            } else {
                throw new Error(result.message || 'Upload gagal di sisi server.');
            }
        }

        // Simpan ke database lokal
        mediaData.unshift({
            id: Date.now(),
            type: type,
            name: form.mediaName.value,
            url: finalUrl
        });
        saveMediaToStorage();
        form.reset();
        alert("Berhasil disimpan!");

    } catch (err) {
        alert("Gagal Upload: " + err.message);
        console.error("Upload Error Details:", err);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
    }
}

function deleteMedia(id) {
    if(confirm('Hapus media ini dari library?')) {
        mediaData = mediaData.filter(m => m.id !== id);
        saveMediaToStorage();
    }
}

function copyMediaLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link berhasil disalin! Silakan paste di form edit villa.');
    });
}

async function submitBooking(e, villaName, villaId) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    btn.disabled = true;
    btn.innerText = "Sedang Memproses...";
    
    try {
        let proofUrl = '';

        // 1. Cek & Upload Bukti Transfer jika ada
        if (form.proof.files.length > 0) {
            const formData = new FormData();
            formData.append('mediaFile', form.proof.files[0]);

            const response = await fetch('upload.php', { method: 'POST', body: formData });
            const result = await response.json();

            if (result.success) {
                proofUrl = result.url;
            } else {
                throw new Error("Gagal upload bukti bayar: " + result.message);
            }
        }

        // 2. Simpan Data Booking
        const newBooking = {
            id: Date.now(),
            villaId: villaId,
            villaName: villaName,
            customerName: form.name.value,
            city: form.city.value,
            pax: form.pax.value,
            purpose: form.purpose.value,
            source: form.source.value,
            phone: form.phone.value,
            date: form.date.value,
            nights: form.nights.value,
            paymentType: form.paymentType.value, // Data Baru: Full/DP
            proofUrl: proofUrl,                  // Data Baru: URL Bukti
            status: proofUrl ? 'booked' : 'new', // Kalau ada bukti, status langsung 'booked' (bisa disesuaikan)
            notes: '',
            createdAt: new Date().toLocaleDateString('id-ID')
        };
        
        bookingsData.unshift(newBooking);
        saveBookingsToStorage();
        
        document.getElementById('booking-modal').remove();
        
        // 3. Siapkan Pesan WA
        let waMessage = `Halo Admin Houmi, saya ingin pesan *${villaName}*.\n\n` +
            `👤 Nama: ${form.name.value}\n` +
            `📱 WA: ${form.phone.value}\n` +
            `🏙 Asal: ${form.city.value}\n` +
            `📅 Tanggal: ${form.date.value} (${form.nights.value} malam)\n` +
            `👥 Tamu: ${form.pax.value} Orang\n` +
            `💳 Pembayaran: ${form.paymentType.value}\n`;

        if (proofUrl) {
            waMessage += `📎 Bukti Transfer: ${proofUrl}\n`;
            waMessage += `(Mohon dicek ya min)`;
        } else {
            waMessage += `(Saya belum transfer, mohon info rekening)`;
        }
        
        const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
        
        if(confirm('Pemesanan berhasil disimpan! Lanjut konfirmasi ke WhatsApp Admin?')) {
            window.open(waLink, '_blank');
        }

    } catch (err) {
        alert("Terjadi kesalahan: " + err.message);
    } finally {
        btn.disabled = false;
        btn.innerText = originalText;
    }
}

function showBookingModal(villaName, villaId) {
    const modalHTML = `
        <div id="booking-modal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity">
            <div class="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl transform transition-all scale-100 opacity-100 font-body">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-gray-800">Form Pemesanan</h3>
                    <button onclick="document.getElementById('booking-modal').remove()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-6 h-6"></i></button>
                </div>
                <p class="text-xs text-gray-500 mb-4">Lengkapi data untuk booking <b>${villaName}</b>.</p>
                
                <form onsubmit="submitBooking(event, '${villaName}', ${villaId})">
                    <div class="space-y-2 mb-4 h-64 overflow-y-auto pr-2 custom-scrollbar">
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap</label>
                            <input type="text" name="name" class="w-full border p-2 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Nama Pemesan" required>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-1">WhatsApp</label>
                            <input type="tel" name="phone" class="w-full border p-2 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="08xxxxx" required>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1">Kota Asal</label>
                                <input type="text" name="city" class="w-full border p-2 rounded-lg text-sm outline-none" placeholder="Cth: Surabaya" required>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1">Jml Peserta</label>
                                <input type="number" name="pax" class="w-full border p-2 rounded-lg text-sm outline-none" placeholder="Org" required>
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-1">Tujuan Menginap</label>
                            <select name="purpose" class="w-full border p-2 rounded-lg text-sm outline-none bg-white">
                                <option value="Liburan Keluarga">Liburan Keluarga</option>
                                <option value="Honeymoon">Honeymoon / Couple</option>
                                <option value="Gathering Kantor">Gathering Kantor</option>
                                <option value="Acara Sekolah/Kampus">Acara Sekolah/Kampus</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                             <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1">Check-in</label>
                                <input type="date" name="date" class="w-full border p-2 rounded-lg text-sm" required>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1">Malam</label>
                                <input type="number" name="nights" min="1" value="1" class="w-full border p-2 rounded-lg text-sm" required>
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-1">Tahu Houmi Dari?</label>
                            <select name="source" class="w-full border p-2 rounded-lg text-sm outline-none bg-white">
                                <option value="Instagram">Instagram</option>
                                <option value="TikTok">TikTok</option>
                                <option value="Google">Google Search</option>
                                <option value="Rekomendasi Teman">Rekomendasi Teman</option>
                            </select>
                        </div>

                        <!-- Bagian Pembayaran -->
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-2">
                            <p class="text-[10px] font-bold text-gray-500 uppercase mb-2">Konfirmasi Pembayaran</p>
                            
                            <div class="mb-3">
                                <div class="text-xs text-gray-600 mb-1">Transfer ke: <span class="font-mono font-bold text-dark">BCA 123-456-7890 (Houmi)</span></div>
                            </div>

                            <div class="grid grid-cols-2 gap-2 mb-3">
                                <label class="cursor-pointer">
                                    <input type="radio" name="paymentType" value="DP (Uang Muka)" class="peer sr-only" required>
                                    <div class="text-center text-xs border rounded py-2 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-colors">DP 50%</div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="paymentType" value="Lunas" class="peer sr-only" required>
                                    <div class="text-center text-xs border rounded py-2 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-colors">Lunas</div>
                                </label>
                            </div>

                            <label class="block text-xs font-bold text-gray-700 mb-1">Upload Bukti Transfer (Opsional)</label>
                            <input type="file" name="proof" accept="image/*" class="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer">
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-xl transition-colors shadow-lg">
                        Pesan & Masuk CRM
                    </button>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    lucide.createIcons();
}

// --- DRAG AND DROP HANDLERS FOR CRM ---
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, id) {
    ev.dataTransfer.setData("text", id);
}

function drop(ev, newStatus) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // Update status booking
    const index = bookingsData.findIndex(b => b.id == data);
    if (index !== -1) {
        bookingsData[index].status = newStatus;
        saveBookingsToStorage();
    }
}

function renderVillaCards() {
    const filtered = activeCategory === "Semua" ? appData : appData.filter(v => v.category === activeCategory);
    
    if (filtered.length === 0) {
        return `<div class="col-span-full py-10 text-center text-gray-500 font-medium">Maaf, belum ada villa untuk kategori ini.</div>`;
    }

    return filtered.map(villa => {
        const discount = Math.round(((villa.oldPrice - villa.price) / villa.oldPrice) * 100);
        return `
        <div onclick="openVillaDetail(${villa.id})" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow flex flex-col sm:flex-row mb-4 sm:mb-0">
            <div class="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-gray-200">
                <img src="${villa.images[0]}" alt="${villa.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div class="absolute top-3 left-3 flex flex-col gap-2">${villa.verified ? `<span class="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center shadow-md"><i data-lucide="check-circle-2" class="w-3 h-3 mr-1"></i> VERIFIED</span>` : ''}</div>
                <div class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md">
                    <i data-lucide="image" class="w-3 h-3 inline mr-1"></i> ${villa.images.length} Foto
                </div>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-1 gap-2">
                        <h3 class="font-bold text-gray-800 text-base sm:text-lg leading-tight line-clamp-1">${villa.name}</h3>
                        <div class="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 shrink-0">
                            <i data-lucide="star" class="w-3 h-3 fill-current mr-0.5 text-green-600"></i>
                            <span class="text-xs font-bold">${villa.rating}</span>
                        </div>
                    </div>
                    <p class="text-gray-500 text-xs sm:text-sm flex items-center mb-3">
                        <i data-lucide="map-pin" class="w-3 h-3 mr-1"></i> ${villa.location}
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        ${villa.amenities.slice(0, 3).map(am => `<span class="bg-gray-100 text-gray-600 text-[9px] sm:text-[10px] px-2 py-1 rounded-md border border-gray-200">${am}</span>`).join('')}
                        ${villa.amenities.length > 3 ? `<span class="text-[10px] text-gray-400 py-1">+${villa.amenities.length - 3}</span>` : ''}
                    </div>
                </div>
                <div class="mt-auto">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">DISKON ${discount}%</span>
                        <span class="text-gray-400 text-xs line-through decoration-dark">${formatRupiah(villa.oldPrice)}</span>
                    </div>
                    <div class="flex justify-between items-end">
                        <div>
                            <span class="text-xl font-bold text-primary">${formatRupiah(villa.price)}</span>
                            <span class="text-gray-500 text-[10px] sm:text-xs font-medium"> / malam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function getHomeHTML() {
    return `
    <div class="pb-20 sm:pb-8 font-body">
        <header class="sticky top-0 z-20 bg-primary shadow-lg py-4 px-4">
            <div class="flex justify-between items-center max-w-5xl mx-auto">
                <div class="flex items-center gap-3">
                    <img src="https://houmi.izzahgroup.com/uploads/1773679372_houmi_logo.png" alt="Houmi Logo" class="w-10 h-10 object-contain">
                    <div>
                        <h1 class="text-2xl font-brand font-bold text-secondary leading-none">Houmi</h1>
                        <p class="text-[10px] font-body text-secondary/80 -mt-1">It's Family Time</p>
                    </div>
                </div>
                <div class="flex gap-4 items-center text-secondary">
                    <button onclick="navigateTo('admin-dashboard')" class="hover:text-accent transition-colors" title="Panel Admin">
                        <i data-lucide="settings" class="w-6 h-6"></i>
                    </button>
                    <i data-lucide="heart" class="w-6 h-6 cursor-pointer hover:text-accent transition-colors"></i>
                    <button class="bg-accent text-white px-4 py-1.5 rounded-md text-sm font-bold shadow-sm hover:bg-accent/90 transition-colors">Masuk</button>
                </div>
            </div>
            <div class="max-w-5xl mx-auto mt-4">
                <div class="bg-white rounded-xl p-3 flex items-center shadow-inner">
                    <i data-lucide="search" class="text-gray-400 w-5 h-5 mr-2"></i>
                    <div class="flex-1">
                        <input type="text" placeholder="Cari villa di Batu, Malang..." class="w-full bg-transparent border-none focus:outline-none text-sm font-medium text-gray-700 placeholder-gray-400" />
                    </div>
                </div>
            </div>
        </header>

        <div class="flex overflow-x-auto hide-scrollbar py-4 px-4 gap-3 max-w-5xl mx-auto bg-gray-50 sticky top-[120px] z-10">
            ${getCategories().map(cat => `
                <button onclick="setCategory('${cat}')" class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm border ${activeCategory === cat ? 'bg-primary text-white border-primary shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'}">
                    ${cat}
                </button>
            `).join('')}
        </div>

        <main class="px-4 pt-4 max-w-5xl mx-auto">
            <h2 class="text-lg font-bold text-gray-800 mb-1">
                ${activeCategory === "Semua" ? "Koleksi Eksklusif Houmi" : `Kategori: ${activeCategory}`}
            </h2>
            <p class="text-sm text-gray-500 mb-4">Temukan pengalaman menginap terbaik untuk Anda.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                ${renderVillaCards()}
            </div>

            <!-- Article Section -->
            <div class="mt-10 mb-20">
                <div class="flex justify-between items-end mb-4">
                    <h2 class="text-lg font-bold text-gray-800">Tips & Inspirasi Wisata</h2>
                    <span class="text-xs text-primary font-semibold cursor-pointer">Lihat Semua</span>
                </div>
                <div class="flex overflow-x-auto hide-scrollbar gap-4 pb-4">
                    ${articlesData.map(article => `
                        <div onclick="openArticleDetail(${article.id})" class="min-w-[260px] w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all">
                            <div class="h-32 bg-gray-200 overflow-hidden">
                                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-3">
                                <div class="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${article.date}</div>
                                <h3 class="font-bold text-gray-800 text-sm leading-snug line-clamp-2 mb-2">${article.title}</h3>
                                <p class="text-xs text-gray-500 line-clamp-2">${article.content}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </main>

        <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-2 px-6 flex justify-between sm:hidden z-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
                    <button class="flex flex-col items-center p-2 text-primary">
                <i data-lucide="search" class="w-6 h-6"></i>
                <span class="text-[10px] mt-1 font-bold">Cari</span>
            </button>
            <button onclick="navigateTo('admin-dashboard')" class="flex flex-col items-center p-2 text-gray-400 hover:text-gray-800 transition">
                <i data-lucide="settings" class="w-6 h-6"></i>
                <span class="text-[10px] mt-1 font-medium">Admin</span>
            </button>
            <button class="flex flex-col items-center p-2 text-gray-400 hover:text-gray-800 transition">
                <i data-lucide="user" class="w-6 h-6"></i>
                <span class="text-[10px] mt-1 font-medium">Akun</span>
            </button>
        </div>
        ${getWhatsAppFloatingButton()}
    </div>
    `;
}

function getDetailHTML(villa) {
    // Generate kalender real-time berdasarkan data booking villa ini
    const calendarHTML = getCalendarHTML(villa.id);

    return `
    <div class="bg-gray-50 min-h-screen pb-24 slide-in relative z-30">
        <div class="relative w-full h-64 sm:h-80 md:h-96 group">
            <button onclick="closeVillaDetail()" class="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-colors">
                <i data-lucide="chevron-left" class="w-6 h-6"></i>
            </button>
            <div class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full h-full">
                ${villa.images.map(img => `
                    <div class="w-full h-full shrink-0 snap-center relative">
                        <img src="${img}" alt="${villa.name}" class="w-full h-full object-cover" />
                    </div>
                `).join('')}
            </div>
            <div class="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
                <i data-lucide="move-horizontal" class="w-3.5 h-3.5"></i> Geser Foto
            </div>
        </div>
        <div class="max-w-3xl mx-auto px-4 py-6 bg-white sm:rounded-t-3xl sm:-mt-6 relative z-10 sm:shadow-sm">
            <div class="mb-6">
                <div class="flex items-center gap-2 mb-2">
                    ${villa.verified ? `<span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded flex items-center border border-primary/20"><i data-lucide="check-circle-2" class="w-3 h-3 mr-1"></i> VERIFIED</span>` : ''}
                    <span class="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded border border-gray-200">${villa.category}</span>
                </div>
                <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">${villa.name}</h1>
                <p class="text-gray-500 text-sm flex items-center">
                    <i data-lucide="map-pin" class="w-4 h-4 mr-1 text-primary"></i> ${villa.location}
                </p>
            </div>
            <hr class="border-gray-100 mb-6" />
            <div class="mb-6">
                <h2 class="text-lg font-bold text-gray-800 mb-3">Tentang Villa Ini</h2>
                <p class="text-gray-600 text-sm leading-relaxed">${villa.description}</p>
            </div> 
            <div class="mb-8">
                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i data-lucide="sparkles" class="w-5 h-5 text-primary"></i> Fasilitas Utama
                </h2>
                <div class="grid grid-cols-2 gap-4">
                    ${villa.amenities.map(amenity => `
                        <div class="flex items-center gap-3 text-gray-700">
                            <div class="bg-gray-50 border border-gray-100 p-2 rounded-lg text-gray-600 shadow-sm">
                                <i data-lucide="${getAmenityIcon(amenity)}" class="w-5 h-5"></i>
                            </div>
                            <span class="text-sm font-medium">${amenity}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <hr class="border-gray-100 mb-6" />
            <div class="mb-6">
                <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
                    <i data-lucide="calendar-days" class="w-5 h-5 text-primary"></i> Cek Ketersediaan
                </h2>
                <p class="text-xs text-gray-500 mb-3">Tanda <span class="text-red-500 line-through">merah coret</span> berarti sudah terisi.</p> <!-- Keep red for unavailability -->
                ${calendarHTML}
                <div class="mt-3 flex gap-2">
                    <div class="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Check-in</p>
                        <p class="text-sm font-semibold text-gray-800">16 Mar 2026</p>
                    </div>
                    <div class="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Check-out</p>
                        <p class="text-sm font-semibold text-gray-800">17 Mar 2026</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.08)] z-40 font-body">
            <div class="max-w-3xl mx-auto flex justify-between items-center">
                <div>
                    <div class="text-[10px] text-gray-400 line-through mb-0.5">${formatRupiah(villa.oldPrice)}</div>
                    <div class="text-lg sm:text-xl font-extrabold text-red-600 leading-none"> <!-- Keep red for prominent price -->
                        ${formatRupiah(villa.price)} <span class="text-xs font-normal text-gray-500">/mlm</span>
                    </div>
                </div>
                <button onclick="showBookingModal('${villa.name}', ${villa.id})" class="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 sm:px-10 rounded-xl shadow-lg transition-transform active:scale-95 text-sm sm:text-base">
                    Pesan Sekarang
                </button>
            </div>
        </div>
        ${getWhatsAppFloatingButton()}
    </div>
    `;
}

function getArticleDetailHTML(article) {
    return `
    <div class="bg-white min-h-screen pb-20">
        <header class="sticky top-0 bg-white/80 backdrop-blur-md p-4 flex items-center gap-3 border-b border-gray-100 z-20">
            <button onclick="navigateTo('home')" class="p-1 hover:bg-gray-100 rounded-full"><i data-lucide="arrow-left" class="w-6 h-6 text-gray-800"></i></button>
            <h1 class="text-sm font-bold text-gray-800 truncate">Artikel</h1>
        </header>
        <div class="w-full h-56 sm:h-72 bg-gray-200">
            <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
        </div>
        <main class="max-w-3xl mx-auto px-4 py-6">
            <div class="text-xs text-gray-500 mb-2 flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${article.date}</div>
            <h1 class="text-2xl font-bold text-gray-900 mb-6 leading-tight">${article.title}</h1>
            <div class="prose prose-sm text-gray-700 leading-relaxed whitespace-pre-line">
                ${article.content}
            </div>
        </main>
        ${getWhatsAppFloatingButton()}
    </div>
    `;
}

function getLoginHTML() {
    return `
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div class="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
            <div class="text-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Admin Login</h2>
                <p class="text-sm text-gray-500">Masuk untuk mengelola villa</p>
            </div>
            <form onsubmit="handleLogin(event)">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" id="admin-pass" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Masukkan password..." required>
                    <p class="text-[10px] text-gray-400 mt-1">Hint: admin123</p>
                </div>
                <button type="submit" class="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary/90 transition">Masuk</button>
                <button type="button" onclick="navigateTo('home')" class="w-full mt-3 text-gray-500 text-sm hover:underline">Kembali ke Home</button>
            </form>
        </div>
    </div>
    `;
}

function getAdminDashboardHTML() {
    return `
    <div class="min-h-screen bg-gray-100 flex flex-col">
        <header class="bg-white shadow p-4 sticky top-0 z-10 shrink-0 font-body">
            <div class="max-w-full mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold text-gray-800">Dashboard Admin</h1>
                <div class="flex gap-2">
                    <button onclick="navigateTo('home')" class="px-3 py-1 text-sm border rounded hover:bg-gray-50">Lihat Web</button>
                    <button onclick="logoutAdmin()" class="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-black">Logout</button>
                </div>
            </div>
        </header>

        <div class="flex flex-1">
            <!-- Sidebar -->
            <aside class="w-64 bg-primary shadow-md p-4 shrink-0 font-body">
                <nav class="space-y-2">
                    <button onclick="navigateTo('admin-crm')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
                        <i data-lucide="kanban-square" class="w-5 h-5 text-secondary"></i> CRM Pipeline
                    </button>
                    <button onclick="navigateTo('admin-generator')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
                        <i data-lucide="brain-circuit" class="w-5 h-5 text-secondary"></i> AI Buyer Persona
                    </button>
                    <button onclick="navigateTo('admin-calendar')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
                        <i data-lucide="calendar-check" class="w-5 h-5 text-secondary"></i> Kalender Konten
                    </button>
                    <button onclick="navigateTo('admin-media')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
                        <i data-lucide="image" class="w-5 h-5 text-secondary"></i> Media Library
                    </button>
                    <button onclick="navigateTo('admin-articles')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
                        <i data-lucide="book-open" class="w-5 h-5 text-secondary"></i> Artikel
                    </button>
                    <button onclick="navigateTo('admin-training')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium bg-white/5">
                        <i data-lucide="bot" class="w-5 h-5 text-accent"></i> Training AI
                    </button>
                </nav>
            </aside>

            <!-- Main Content Area for Dashboard -->
            <main class="flex-1 p-4 overflow-y-auto font-body">
                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div class="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex items-center justify-between">
                            <div>
                                <div class="font-bold text-lg text-gray-800">${appData.length} Villa</div>
                                <div class="text-xs text-gray-500">Total Properti</div>
                            </div>
                            <i data-lucide="home" class="w-8 h-8 text-gray-300"></i>
                        </div>
                        <div class="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex items-center justify-between">
                            <div>
                                <div class="font-bold text-lg text-gray-800">${articlesData.length} Post</div>
                                <div class="text-xs text-gray-500">Total Artikel</div>
                            </div>
                            <i data-lucide="file-text" class="w-8 h-8 text-gray-300"></i>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg font-semibold">Daftar Villa</h2>
                        <button onclick="openEditor()" class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90">
                    <i data-lucide="plus" class="w-4 h-4"></i> Tambah Villa
                </button>
            </div>
            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead class="bg-gray-50 text-gray-700 font-bold uppercase text-xs border-b">
                            <tr>
                                <th class="px-4 py-3">Nama Villa</th>
                                <th class="px-4 py-3">Harga</th>
                                <th class="px-4 py-3">Kategori</th>
                                <th class="px-4 py-3 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            ${appData.map(villa => `
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3 font-medium">${villa.name}</td>
                                <td class="px-4 py-3">${formatRupiah(villa.price)}</td>
                                <td class="px-4 py-3"><span class="bg-gray-100 px-2 py-1 rounded text-xs">${villa.category}</span></td>
                                        <td class="px-4 py-3 text-right flex justify-end gap-2 shrink-0">
                                    <button onclick="openEditor(${villa.id})" class="text-blue-600 hover:text-blue-800 p-1"><i data-lucide="edit" class="w-4 h-4"></i></button>
                                    <button onclick="deleteVilla(${villa.id})" class="text-red-600 hover:text-red-800 p-1"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                                </td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
    `;
}

function getAdminArticlesHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">Kelola Artikel</h1>
        </header>
        <main class="max-w-5xl mx-auto p-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg font-semibold">Daftar Posting</h2>
                <button onclick="openArticleEditor()" class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90">
                    <i data-lucide="plus" class="w-4 h-4"></i> Tulis Baru
                </button>
            </div>
            <div class="space-y-3">
                ${articlesData.map(article => `
                <div class="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
                    <div class="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                        <img src="${article.image}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-gray-800 truncate">${article.title}</h3>
                        <p class="text-xs text-gray-500">${article.date}</p>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="openArticleEditor(${article.id})" class="text-primary p-2 hover:bg-primary/10 rounded"><i data-lucide="edit" class="w-5 h-5"></i></button>
                        <button onclick="deleteArticle(${article.id})" class="text-red-600 p-2 hover:bg-red-50 rounded"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
                    </div>
                </div>
                `).join('')}
                ${articlesData.length === 0 ? '<p class="text-center text-gray-400 py-10">Belum ada artikel.</p>' : ''}
            </div>
        </main>
    </div>
    `;
}

function getAdminGeneratorHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="brain-circuit" class="w-6 h-6 text-pink-600"></i> AI Buyer Persona
            </h1>
        </header>
        <main class="max-w-4xl mx-auto p-6">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                <div class="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                    <i data-lucide="users" class="w-8 h-8"></i>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Analisa Siapa Pembeli Anda</h2>
                <p class="text-gray-500 max-w-lg mx-auto mb-8">
                    AI akan memindai data dari <strong>${bookingsData.length} leads</strong> di CRM Anda untuk menemukan pola perilaku dan karakteristik target market Anda.
                </p>
                
                <button id="btn-generate" onclick="generateBuyerPersona()" class="bg-accent text-white font-bold py-3 px-8 rounded-xl hover:bg-accent/90 shadow-lg transition-all flex items-center gap-2 mx-auto">
                    <i data-lucide="sparkles" class="w-5 h-5"></i> Analisa Sekarang
                </button>
            </div>

            <!-- Loading State -->
            <div id="persona-loading" class="hidden mt-8 text-center py-10">
                <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-600 mx-auto mb-4"></div>
                <p class="text-gray-500 animate-pulse">Sedang membaca data CRM...</p>
            </div>

            <!-- Result Area -->
            <div id="persona-result" class="hidden mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 slide-in text-left"></div>
        </main>
    </div>
    `;
}

function getAdminCalendarHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="calendar-check" class="w-6 h-6 text-purple-600"></i> Kalender Konten
            </h1>
        </header>
        <main class="max-w-4xl mx-auto p-6">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                <div class="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                    <i data-lucide="wand-2" class="w-8 h-8"></i>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Generator Kalender Konten</h2>
                <p class="text-gray-500 max-w-lg mx-auto mb-8">
                    Otomatis buat jadwal posting Sosmed & Blog SEO selama 1 bulan ke depan yang <strong>relevan</strong> dengan tren tamu saat ini.
                </p>
                <button id="btn-calendar" onclick="generateContentCalendar()" class="bg-purple-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-purple-700 shadow-lg transition-all flex items-center gap-2 mx-auto">
                    <i data-lucide="sparkles" class="w-5 h-5"></i> Generate Kalender 1 Bulan
                </button>
            </div>

            <!-- Calendar Result Area -->
            <div id="calendar-loading" class="hidden mt-8 text-center py-10">
                <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p class="text-purple-600 font-bold animate-pulse">Sedang meracik strategi konten...</p>
            </div>
            <div id="calendar-result" class="hidden mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 slide-in text-left overflow-x-auto"></div>
        </main>
    </div>
    `;
}

function getAdminTrainingHTML() {
    // Kita tidak simpan prompt di localStorage karena source of truth ada di GAS.
    // Idealnya kita fetch dulu, tapi untuk simplifikasi kita pakai default/placeholder dulu
    // atau Admin bisa copy-paste prompt lama mereka.
    
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="bot" class="w-6 h-6 text-accent"></i> Training CS AI
            </h1>
        </header>
        <main class="max-w-4xl mx-auto p-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div class="mb-6 bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                    <h3 class="font-bold mb-1 flex items-center gap-2"><i data-lucide="info" class="w-4 h-4"></i> Info Penting</h3>
                    <p>Apa yang Anda tulis di sini akan menjadi <strong>"Otak"</strong> bagi AI di WhatsApp & Website. Tuliskan info harga, fasilitas, dan aturan menjawab dengan jelas.</p>
                </div>

                <form onsubmit="saveAIPrompt(event)">
                    <div class="mb-4">
                        <label class="block text-sm font-bold text-gray-700 mb-2">Instruksi & Pengetahuan Dasar (System Prompt)</label>
                        <textarea name="prompt" rows="15" class="w-full border-2 border-gray-300 p-4 rounded-xl focus:border-accent focus:ring-0 font-mono text-sm leading-relaxed" placeholder="Contoh: Anda adalah CS Houmi...">${DEFAULT_AI_PROMPT.trim()}</textarea>
                    </div>
                    <button type="submit" class="w-full bg-accent text-white font-bold py-3 px-8 rounded-xl hover:bg-accent/90 shadow-lg transition-all flex items-center justify-center gap-2">
                        <i data-lucide="save" class="w-5 h-5"></i> Simpan Pengetahuan Baru
                    </button>
                </form>
            </div>
        </main>
    </div>
    `;
}

function getArticleEditorHTML() {
    const article = editingArticleId ? articlesData.find(a => a.id === editingArticleId) : {
        title: '', image: '', date: new Date().toISOString().split('T')[0], content: ''
    };
    
    return `
    <div class="min-h-screen bg-gray-50 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-articles')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">${editingArticleId ? 'Edit Artikel' : 'Tulis Artikel'}</h1>
        </header>
        <main class="max-w-3xl mx-auto p-4">
            <form onsubmit="saveArticleData(event)" class="bg-white p-6 rounded-xl shadow-sm space-y-4">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Judul Artikel</label>
                    <input type="text" name="title" value="${article.title}" class="w-full border p-2 rounded-lg" required>
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Tanggal</label>
                    <input type="date" name="date" value="${article.date}" class="w-full border p-2 rounded-lg" required>
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">URL Gambar Utama</label>
                    <input type="text" name="image" value="${article.image}" class="w-full border p-2 rounded-lg" placeholder="https://..." required>
                    <p class="text-[10px] text-gray-400 mt-1">Ambil link dari Media Library jika perlu.</p>
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Isi Artikel</label>
                    <textarea name="content" rows="12" class="w-full border p-2 rounded-lg" placeholder="Tulis konten menarik di sini..." required>${article.content}</textarea>
                </div>
                <div class="pt-4">
                    <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 shadow-lg">Simpan Artikel</button>
                </div>
            </form>
        </main>
    </div>
    `;
}

function getEditorHTML() {
    const villa = editingVillaId ? appData.find(v => v.id === editingVillaId) : {
        name: '', location: '', price: '', oldPrice: '', category: 'Umum', 
        description: '', amenities: [], images: []
    };
    
    return ` 
    <div class="min-h-screen bg-gray-50 pb-20">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">${editingVillaId ? 'Edit Villa' : 'Tambah Villa Baru'}</h1>
        </header>
        <main class="max-w-2xl mx-auto p-4">
            <form onsubmit="saveVillaData(event)" class="bg-white p-6 rounded-xl shadow-sm space-y-4">
                <div> 
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nama Villa</label>
                    <input type="text" name="name" value="${villa.name}" class="w-full border p-2 rounded-lg" required>
                </div>
                <div class="grid grid-cols-2 gap-4"> 
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Harga (Angka)</label>
                        <input type="number" name="price" value="${villa.price}" class="w-full border p-2 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Harga Coret (Angka)</label>
                        <input type="number" name="oldPrice" value="${villa.oldPrice}" class="w-full border p-2 rounded-lg">
                    </div>
                </div>
                        <div class="grid grid-cols-2 gap-4"> 
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Lokasi</label>
                        <input type="text" name="location" value="${villa.location}" class="w-full border p-2 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Kategori</label>
                        <input type="text" name="category" value="${villa.category}" class="w-full border p-2 rounded-lg" placeholder="Contoh: Keluarga" required>
                    </div>
                </div>
                        <div> 
                    <label class="block text-sm font-bold text-gray-700 mb-1">Deskripsi</label>
                    <textarea name="description" rows="3" class="w-full border p-2 rounded-lg" required>${villa.description}</textarea>
                </div>
                        <div> 
                    <label class="block text-sm font-bold text-gray-700 mb-1">Fasilitas (Pisahkan dengan koma)</label>
                    <input type="text" name="amenities" value="${Array.isArray(villa.amenities) ? villa.amenities.join(', ') : ''}" class="w-full border p-2 rounded-lg" placeholder="WiFi, Kolam Renang, TV">
                </div>
                        <div> 
                    <label class="block text-sm font-bold text-gray-700 mb-1">Link Gambar (Satu per baris)</label>
                    <textarea name="images" rows="4" class="w-full border p-2 rounded-lg font-mono text-xs" placeholder="https://...">${Array.isArray(villa.images) ? villa.images.join('\n') : ''}</textarea>
                    <p class="text-[10px] text-gray-400 mt-1">Gunakan link gambar langsung (Unsplash/Google Photos)</p>
                </div>
                        <div class="pt-4"> 
                            <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 shadow-lg">Simpan Data</button>
                </div>
            </form>
        </main>
    </div>
    `;
}

function getAdminCRMHTML() {
    const columns = [
        { id: 'new', title: 'Baru Masuk', color: 'bg-blue-50 border-blue-200', text: 'text-blue-700' },
        { id: 'contacted', title: 'Follow Up', color: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-700' },
        { id: 'booked', title: 'Closing / DP', color: 'bg-green-50 border-green-200', text: 'text-green-700' },
        { id: 'done', title: 'Selesai', color: 'bg-gray-50 border-gray-200', text: 'text-gray-700' }
    ];

    return `
    <div class="min-h-screen bg-gray-100 flex flex-col h-screen overflow-hidden font-body">
        <header class="bg-white shadow p-4 z-10 flex justify-between items-center shrink-0">
            <div class="flex items-center gap-3">
                <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6 text-gray-600"></i></button>
                <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2"><i data-lucide="kanban-square" class="w-6 h-6 text-orange-600"></i> CRM Pipeline</h1>
            </div>
            <div class="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full hidden sm:block">
                Tips: Geser kartu (Drag & Drop) untuk ubah status
            </div>
        </header>
        
        <main class="flex-1 overflow-x-auto overflow-y-hidden p-4">
            <div class="flex gap-4 h-full min-w-[1000px]">
                ${columns.map(col => `
                    <div class="flex-1 flex flex-col ${col.color} border rounded-xl h-full max-h-full" 
                         ondrop="drop(event, '${col.id}')" 
                         ondragover="allowDrop(event)">
                        
                        <!-- Column Header -->
                        <div class="p-3 border-b border-gray-200/50 flex justify-between items-center bg-white/50 rounded-t-xl backdrop-blur-sm">
                            <h3 class="font-bold ${col.text}">${col.title}</h3>
                            <span class="bg-white px-2 py-0.5 rounded text-xs font-bold text-gray-500 shadow-sm">
                                ${bookingsData.filter(b => b.status === col.id).length}
                            </span>
                        </div>
                        
                        <!-- Cards Container -->
                        <div class="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
                            ${bookingsData.filter(b => b.status === col.id).map(booking => `
                                <div draggable="true" ondragstart="drag(event, ${booking.id})" class="bg-white p-3 rounded-lg shadow-sm border border-gray-100 cursor-move hover:shadow-md transition-all group relative">
                                    <div class="flex justify-between items-start mb-1">
                                        <span class="text-[10px] text-gray-400 font-mono">${booking.createdAt}</span>
                                        <button onclick="if(confirm('Hapus data ini?')) { bookingsData = bookingsData.filter(b => b.id != ${booking.id}); saveBookingsToStorage(); }" class="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-opacity"><i data-lucide="trash" class="w-3 h-3"></i></button>
                                    </div>
                                    <h4 class="font-bold text-gray-800 text-sm mb-0.5">${booking.customerName}</h4>
                                    <div class="text-xs text-primary mb-2 font-medium">${booking.villaName}</div>
                                    
                                    <div class="flex flex-wrap gap-2 text-[10px] text-gray-500 border-t pt-2 mt-1">
                                        <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${booking.date}</span>
                                        <span class="flex items-center gap-1" title="Lama Menginap"><i data-lucide="moon" class="w-3 h-3"></i> ${booking.nights} Mlm</span>
                                        <span class="flex items-center gap-1" title="Jumlah Tamu"><i data-lucide="users" class="w-3 h-3"></i> ${booking.pax || '-'}</span>
                                    </div>
                                    <div class="text-[10px] text-gray-400 mt-1 flex items-center justify-between">
                                        <span class="truncate max-w-[100px]" title="${booking.city}">${booking.city || 'Kota -'}</span>
                                        <span class="bg-gray-100 px-1.5 py-0.5 rounded text-[9px]">${booking.source || 'Web'}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </main>
    </div>
    `;
}

function getMediaLibraryHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">Media Library</h1>
        </header>
        <main class="max-w-5xl mx-auto p-4">
            <div class="bg-white p-4 rounded-xl shadow-sm mb-6">
                <h3 class="font-bold text-gray-800 mb-3 text-sm">Tambah Media Baru</h3>
                <form onsubmit="addMedia(event)" class="flex flex-col gap-3">
                    <input type="text" name="mediaName" placeholder="Nama Gambar/Video (Contoh: Kolam Renang)" class="border p-2 rounded-lg w-full text-sm" required>
                    
                    <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                        <div class="flex-1 w-full">
                            <input type="file" name="mediaFile" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" accept="image/*,video/*">
                        </div>
                        <div class="hidden sm:block text-xs font-bold text-gray-400">ATAU</div>
                        <input type="url" name="mediaUrl" placeholder="Paste URL (Jika punya link luar)" class="border p-2 rounded-lg flex-1 w-full text-sm">
                    </div>
                    
                    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 w-full sm:w-auto self-end mt-2">Upload & Simpan</button>
                </form>
                <p class="text-[10px] text-gray-400 mt-2">*Mendukung: JPG, PNG, MP4. File akan disimpan di server Hostinger Anda.</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                ${mediaData.map(media => `
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden group border border-gray-200 relative">
                        <div class="aspect-square bg-gray-100 overflow-hidden relative">
                            <img src="${media.url}" alt="${media.name}" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button onclick="copyMediaLink('${media.url}')" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200" title="Copy Link">
                                    <i data-lucide="copy" class="w-4 h-4"></i>
                                </button>
                                <button onclick="deleteMedia(${media.id})" class="bg-red-600 text-white p-2 rounded-full hover:bg-red-700" title="Hapus">
                                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                        <div class="p-2">
                            <p class="text-xs font-medium text-gray-700 truncate" title="${media.name}">${media.name}</p>
                            <div class="flex justify-between items-center mt-1">
                                <span class="text-[10px] text-gray-400 uppercase">${media.type}</span>
                                        <button onclick="copyMediaLink('${media.url}')" class="text-[10px] text-primary hover:underline">Copy URL</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            ${mediaData.length === 0 ? '<p class="text-center text-gray-400 py-10 text-sm">Belum ada media tersimpan.</p>' : ''}
        </main>
    </div>
    `;
}

function renderApp() {
    const appDiv = document.getElementById('app');
    
    if (currentPage === 'admin-login') {
        appDiv.innerHTML = getLoginHTML();
    } else if (currentPage === 'admin-dashboard') {
        appDiv.innerHTML = getAdminDashboardHTML();
    } else if (currentPage === 'admin-crm') {
        appDiv.innerHTML = getAdminCRMHTML();
    } else if (currentPage === 'admin-generator') {
        appDiv.innerHTML = getAdminGeneratorHTML();
    } else if (currentPage === 'admin-calendar') {
        appDiv.innerHTML = getAdminCalendarHTML();
    } else if (currentPage === 'admin-training') {
        appDiv.innerHTML = getAdminTrainingHTML();
    } else if (currentPage === 'admin-articles') {
        appDiv.innerHTML = getAdminArticlesHTML();
    } else if (currentPage === 'admin-article-edit') {
        appDiv.innerHTML = getArticleEditorHTML();
    } else if (currentPage === 'admin-media') {
        appDiv.innerHTML = getMediaLibraryHTML();
    } else if (currentPage === 'admin-edit') {
        appDiv.innerHTML = getEditorHTML();
    } else if (currentPage === 'article-detail' && selectedArticle) {
        appDiv.innerHTML = getArticleDetailHTML(selectedArticle);
    } else if (currentPage === 'detail' && selectedVilla) {
        appDiv.innerHTML = getDetailHTML(selectedVilla);
    } else {
        appDiv.innerHTML = getHomeHTML();
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderApp();
});