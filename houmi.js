console.log("🚀 HOUMI.JS v6.1 (Final Stability & Error Check) Berhasil Dimuat!");
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

// Fungsi Aman untuk membaca LocalStorage (Anti-Crash/Blank)
function safeParse(key, defaultValue) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.warn(`Data ${key} rusak, mereset ke default.`, e);
        return defaultValue;
    }
}

let appData = safeParse('HOUMI_DATA', DEFAULT_DATA);
let mediaData = safeParse('HOUMI_MEDIA', DEFAULT_MEDIA);
let articlesData = safeParse('HOUMI_ARTICLES', DEFAULT_ARTICLES);
let bookingsData = safeParse('HOUMI_BOOKINGS', []);

let agentsData = safeParse('HOUMI_AGENTS', []);
function saveAgentsToStorage() {
    localStorage.setItem('HOUMI_AGENTS', JSON.stringify(agentsData));
    renderApp();
}

function initTracking() {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) localStorage.setItem('HOUMI_TRACKING_REF', ref);
}
initTracking();

function getAdminArticlesHTML() { return ""; }
function getAdminGalleryHTML() { return ""; }
function getAdminTestimonialsHTML() { return ""; }
function getAdminAgentsHTML() { return ""; }

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

// --- FITUR SYNC SERVER (SOLUSI BEDA DEVICE) ---
async function syncMediaFromServer() {
    try {
        const response = await fetch('get_files.php');
        if (!response.ok) return; // Jika file php belum ada/error, abaikan

        const serverFiles = await response.json();
        
        // Gabungkan data server dengan data lokal
        // Kita pakai URL sebagai kunci unik
        let hasNewData = false;
        
        serverFiles.forEach(serverFile => {
            // Cek apakah file ini sudah ada di mediaData lokal
            const exists = mediaData.some(local => local.url === serverFile.url);
            
            if (!exists) {
                // Jika belum ada, tambahkan ke mediaData
                mediaData.unshift({
                    id: Date.now() + Math.random(), // ID acak
                    type: serverFile.type,
                    name: serverFile.name, // Gunakan nama file asli sebagai nama default
                    url: serverFile.url
                });
                hasNewData = true;
            }
        });

        if (hasNewData) {
            saveMediaToStorage(); // Simpan update ke localStorage laptop
            console.log("Media Library disinkronisasi dengan Server!");
        }
    } catch (e) {
        console.log("Gagal sync media:", e);
    }
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
let tempGeneratedArticle = null;
let calendarCursor = new Date();

// --- KONFIGURASI AI ---
// 👇 PASTE URL BARU DARI GOOGLE APPS SCRIPT (HASIL NEW DEPLOYMENT) DI BAWAH INI 👇
// Hapus tulisan PASTE_URL_DISINI dan masukkan URL yang berakhiran /exec
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbxN22UL2gCkEEWza1uj936au8KU6exvg6aYFeZHtPZcUa2L1p8Ps5TvyMg4clKBzDVa/exec";
const WHATSAPP_NUMBER = "+6285335068318"; // GANTI DISINI: Masukkan nomor WA Admin/CS (Format: 628xxx tanpa + atau 0)

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

// --- LOGIKA CS AI CHAT WIDGET ---
let chatHistory = [];

window.toggleAIChat = function() {
    const w = document.getElementById('ai-chat-window');
    if(!w) return;
    if(w.classList.contains('hidden')) {
        w.classList.remove('hidden');
        w.classList.add('flex');
        setTimeout(() => {
            const input = document.getElementById('ai-chat-input');
            if(input) input.focus();
            scrollToBottomAIChat();
        }, 100);
    } else {
        w.classList.add('hidden');
        w.classList.remove('flex');
    }
};

window.scrollToBottomAIChat = function() {
    const container = document.getElementById('ai-chat-messages');
    if(container) container.scrollTop = container.scrollHeight;
};

window.appendChatBubble = function(role, text) {
    const typing = document.getElementById('ai-typing-indicator');
    if(!typing) return;
    
    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const isUser = role === 'user';
    const bubbleRaw = `
        <div class="flex flex-col gap-1 ${isUser ? 'items-end' : 'items-start'} animate-fade-in-up">
            <div class="${isUser ? 'bg-[#D9FDD3] text-gray-800 rounded-b-xl rounded-tl-xl' : 'bg-white text-gray-800 rounded-b-xl rounded-tr-xl border border-gray-200'} text-sm p-3 font-body shadow-sm max-w-[85%] relative whitespace-pre-wrap break-words">
                ${text}
            </div>
            <span class="text-[10px] text-gray-400 ${isUser ? 'mr-1' : 'ml-1'}">${timeStr} ${isUser ? '<i data-lucide="check-check" class="w-3 h-3 inline text-blue-400"></i>' : ''}</span>
        </div>
    `;
    
    typing.insertAdjacentHTML('beforebegin', bubbleRaw);
    if(window.lucide) window.lucide.createIcons();
    scrollToBottomAIChat();
};

window.sendAIChatMessage = async function(e) {
    e.preventDefault();
    const input = document.getElementById('ai-chat-input');
    const btn = document.getElementById('ai-chat-btn');
    const typing = document.getElementById('ai-typing-indicator');
    const msg = input.value.trim();
    if(!msg) return;
    
    input.value = '';
    input.disabled = true;
    btn.disabled = true;
    
    appendChatBubble('user', msg);
    typing.classList.remove('hidden');
    typing.classList.add('flex');
    scrollToBottomAIChat();
    
    let promptString = "Percakapan dengan Customer:\\n\\n";
    chatHistory.push({ role: 'user', msg: msg });
    
    const recent = chatHistory.slice(-5);
    recent.forEach(c => {
        promptString += `${c.role === 'user' ? 'Customer' : 'CS Mimin'}: ${c.msg}\\n`;
    });
    promptString += "\\nCS Mimin: ";
    
    try {
        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ action: "chat", prompt: promptString })
        });
        
        if (!response.ok) throw new Error("HTTP " + response.status);
        const txt = await response.text();
        let payload = null;
        try { payload = JSON.parse(txt); } catch(err) { throw new Error("Data salah " + txt.substring(0, 20)); }
        
        if (payload.error) throw new Error(payload.error.message || JSON.stringify(payload.error));
        
        let aiText = payload.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/```html/g, '').replace(/```/g, '').trim();
        
        chatHistory.push({ role: 'ai', msg: aiText });
        typing.classList.remove('flex');
        typing.classList.add('hidden');
        appendChatBubble('ai', aiText);
        
    } catch (err) {
        typing.classList.remove('flex');
        typing.classList.add('hidden');
        appendChatBubble('ai', "Maaf Kak, jaringan Mimin lagi kendala nih 😔. Boleh coba tanya lagi? Atau bisa langsung ngobrol bareng Admin Manusia klik link di bawah 👇.");
    } finally {
        input.disabled = false;
        btn.disabled = false;
        input.focus();
    }
};

function getWhatsAppFloatingButton() {
    return `
    <div id="ai-chat-widget" class="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col items-end font-body">
        
        <!-- Jendela Chat (Awalnya Sembunyi) -->
        <div id="ai-chat-window" class="hidden w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-200 mb-4 flex-col transition-all duration-300 origin-bottom-right overflow-hidden">
            <!-- Header mirip WA -->
            <div class="bg-[#075E54] p-3 sm:p-4 text-white flex items-center justify-between shadow-md relative z-10">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shrink-0">
                        <span class="text-xl">🤖</span>
                    </div>
                    <div>
                        <h3 class="font-bold text-[15px] leading-tight">CS Mimin Houmi</h3>
                        <p class="text-[11px] text-green-100 flex items-center gap-1"><span class="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span> Online (AI)</p>
                    </div>
                </div>
                <button onclick="toggleAIChat()" class="text-white/80 hover:text-white p-1 rounded-full transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            
            <!-- Area Percakapan -->
            <div id="ai-chat-messages" class="flex-1 p-4 bg-[#E5DDD5] bg-opacity-40 overflow-y-auto space-y-3 relative custom-scrollbar" style="height: 380px;">
                <!-- Chat Bubble AI Pertama -->
                <div class="flex flex-col gap-1 items-start">
                    <div class="bg-white text-gray-800 text-sm p-3 font-body shadow-sm rounded-b-xl rounded-tr-xl border border-gray-200 max-w-[85%] relative">
                        Halo Kak! 👋 Mimin Houmi siap bantu. Ada yang mau ditanyakan soal villa atau mau booking di tanggal tertentu? 
                    </div>
                    <span class="text-[10px] text-gray-400 ml-1">Baru saja</span>
                </div>
                
                <!-- Pesan "Typing..." tersembunyi -->
                <div id="ai-typing-indicator" class="hidden flex-col gap-1 items-start">
                    <div class="bg-white text-gray-800 text-sm py-3 px-4 rounded-b-xl rounded-tr-xl shadow-sm border border-gray-200 max-w-[85%] flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
                    </div>
                </div>
            </div>
            
            <!-- Input Area -->
            <form onsubmit="sendAIChatMessage(event)" class="p-2 sm:p-3 bg-[#F0F0F0] flex items-end gap-2 border-t border-gray-200">
                <input type="text" id="ai-chat-input" placeholder="Ketik pesan..." class="flex-1 px-4 py-3 rounded-full text-sm border-none focus:ring-0 focus:outline-none shadow-sm text-dark bg-white" autocomplete="off" required>
                <button type="submit" id="ai-chat-btn" class="bg-[#128C7E] text-white w-10 h-10 rounded-full shadow-md hover:bg-[#075E54] transition-colors shrink-0 flex items-center justify-center border-none">
                    <i data-lucide="send" class="w-4 h-4 ml-0.5"></i>
                </button>
            </form>
            
            <!-- Link Alternatif Asli WhatsApp -->
            <div class="bg-white text-center py-2 text-[10px] border-t border-gray-100 text-gray-500">
                Mau titip DP / Lanjut CS Manusia? <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin!%20Saya%20mau%20pesan%20villa." target="_blank" class="text-[#128C7E] font-bold hover:underline">Ke WhatsApp Asli</a>
            </div>
        </div>

        <!-- Tombol Apung (Trigger) -->
        <button onclick="toggleAIChat()" class="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all transform hover:scale-110 flex items-center justify-center relative z-20">
            <span class="absolute -top-1 -right-1 flex h-4 w-4">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 border border-white text-[9px] font-bold items-center justify-center text-white">1</span>
            </span>
            <i data-lucide="message-circle" class="w-7 h-7"></i>
        </button>
    </div>
    `;
}

// --- SEO ARTICLE GENERATOR (DIKEMBALIKAN) ---
async function generateSEOArticle() {
    const btn = document.getElementById('btn-article-gen');
    const resultArea = document.getElementById('article-gen-result');
    const loadingArea = document.getElementById('article-gen-loading');
    const topic = document.getElementById('article-topic').value;
    const keywords = document.getElementById('article-keywords').value;

    if (!topic) { alert("Topik artikel harus diisi!"); return; }
    if (!GAS_API_URL || GAS_API_URL.includes("PASTE_URL")) { alert("URL Google Apps Script belum dipasang!"); return; }

    btn.disabled = true;
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    try {
        const prompt = `
        Bertindaklah sebagai Senior SEO Content Writer spesialis pariwisata Batu & Malang.
        Tulis artikel Blog untuk website "Houmi Villa" yang memenuhi standar Google E-E-A-T.

        Topik: ${topic}
        Target Keyword: ${keywords}
        
        Panduan:
        1. Gaya Bahasa: Ramah, Informatif, Soft Selling (ajak menginap di Houmi).
        2. Format Output: JSON MURNI (tanpa markdown).
        3. PENTING: Pastikan string JSON valid. Hindari karakter enter/newline (\n) mentah di dalam value. Gunakan tag HTML <br> atau <p>. Escape double quotes dengan benar.
        
        STRUKTUR JSON TARGET:
        {
            "title": "Judul Artikel Menarik (H1)",
            "content": "Isi artikel lengkap format HTML (<p>, <h2>, <ul>)..."
        }
        `;

        // Bersihkan URL dari spasi (sering terjadi saat copas)
        const cleanUrl = GAS_API_URL.trim();
        
        const response = await fetch(cleanUrl, {
            method: "POST",
            redirect: "follow", // Pastikan browser mengikuti redirect Google
            headers: { "Content-Type": "text/plain" }, // Gunakan text/plain agar tidak kena Preflight CORS
            body: JSON.stringify({ prompt: prompt })
        });

        if (!response.ok) throw new Error("Gagal menghubungi server AI (HTTP " + response.status + ")");
        
        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            console.warn("Raw Response:", responseText);
            throw new Error("Format respons AI tidak valid. Cek Console.");
        }

        // HAPUS TOTAL: Pengecekan 'Model Usang' yang bikin error.
        // Langsung cek error bawaan Google saja.
        if (data.error) {
            throw new Error("Google AI Error: " + JSON.stringify(data.error));
        }

        if (!data.candidates || !data.candidates[0].content) {
            throw new Error("AI tidak memberikan jawaban (Candidates Empty).");
        }

        let aiText = data.candidates[0].content.parts[0].text;
        
        // Bersihkan markdown (```json ... ```) jika ada
        aiText = aiText.replace(/```json/g, '').replace(/```/g, '');
        
        // Ambil bagian JSON saja (antisipasi teks pembuka/penutup)
        const firstBrace = aiText.indexOf('{');
        const lastBrace = aiText.lastIndexOf('}');
        
        if (firstBrace !== -1 && lastBrace > firstBrace) {
            aiText = aiText.substring(firstBrace, lastBrace + 1);
        }

        let articleJson;
        try {
            articleJson = JSON.parse(aiText);
        } catch (jsonError) {
            // Upaya perbaikan manual untuk karakter newline yang sering bikin error
            try {
                // Ganti newline nyata dengan spasi agar JSON tidak rusak, karena HTML sudah pakai tag <p>
                const sanitized = aiText.replace(/\n/g, " ");
                articleJson = JSON.parse(sanitized);
            } catch (retryError) {
                console.error("JSON Error:", jsonError);
                console.log("Raw Text yang gagal diparse:", aiText);
                throw new Error("Gagal membaca struktur JSON dari AI. Cek Console (F12) untuk melihat teks aslinya.");
            }
        }
        
        // Simpan sementara di window untuk fungsi save
        window.generatedArticleCache = articleJson;

        // Tampilkan Preview
        document.getElementById('preview-title').innerText = articleJson.title;
        document.getElementById('preview-content').innerHTML = articleJson.content;
        
        resultArea.classList.remove('hidden');
    } catch (error) {
        if (error.message.includes("Failed to fetch")) {
            console.error(error);
            alert("⛔ KONEKSI DIBLOKIR / SERVER ERROR!\n\nSolusi:\n1. Cek Console (F12) jika ada 'ERR_BLOCKED_BY_CLIENT' (Matikan AdBlocker).\n2. Pastikan Deploy GAS: 'Who has access' = 'Anyone'.\n3. Pastikan URL GAS adalah hasil 'New Deployment' (bukan url script editor).");
        } else {
            alert("Gagal generate: " + error.message);
        }
    } finally {
        loadingArea.classList.add('hidden');
        btn.disabled = false;
    }
}

function transferToEditor() {
    if (!window.generatedArticleCache) return;
    
    // Simpan hasil generate ke variabel sementara
    tempGeneratedArticle = window.generatedArticleCache;
    editingArticleId = null; // Pastikan modenya 'Baru', bukan edit ID lama
    
    // Pindah ke halaman editor
    navigateTo('admin-article-edit');
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

    if (!GAS_API_URL || GAS_API_URL.includes("PASTE_URL")) {
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

        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ prompt: prompt })
        });

        // DIAGNOSA HTTP STATUS: Cek apakah server Google menolak (404/500/401)
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText} (Cek 'Executions' di GAS)`);
        }

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            throw new Error("Backend Error (Raw): " + responseText);
        }

        // CEK ERROR DARI GOOGLE (PENTING: Agar ketahuan jika API Key salah/kosong)
        if (data.error) {
            throw new Error("Google AI Error: " + (data.error.message || JSON.stringify(data.error)));
        }
        
        // 3. Tampilkan Hasil
        let aiText;
        try {
            aiText = data.candidates[0].content.parts[0].text;
            aiText = aiText.replace(/```html/g, '').replace(/```/g, ''); // Bersihkan markdown

            resultArea.innerHTML = aiText;
            resultArea.classList.remove('hidden');
        } catch (e) {
             // Cek pesan error manual dari server
             if (responseText.includes("Maaf")) {
                 throw new Error("Google Script Gagal Kontak AI. Coba 'New Deploy' di GAS & Cek API Key.");
            }
            throw new Error("Format respons AI tidak valid.");
        }

    } catch (error) {
        if (error.message.includes("Failed to fetch")) {
            alert("⛔ GAGAL KONEKSI!\nPastikan URL GAS benar dan setting 'Who has access: Anyone'.");
        } else {
            alert("Gagal Analisa: " + error.message);
        }
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

    if (!GAS_API_URL || GAS_API_URL.includes("PASTE_URL")) {
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

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText} (Cek 'Executions' di GAS)`);
        }

        // REVISI: Gunakan text() + JSON.parse() agar aman (Sama seperti generator artikel)
        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            throw new Error("Respon Server bukan JSON valid: " + responseText.substring(0, 100));
        }

        // CEK ERROR DARI GOOGLE
        if (data.error) {
            throw new Error("Google AI Error: " + (data.error.message || JSON.stringify(data.error)));
        }

        let aiText = data.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/```html/g, '').replace(/```/g, '');

        resultArea.innerHTML = aiText;
        resultArea.classList.remove('hidden');

    } catch (error) {
        if (error.message.includes("Failed to fetch")) {
            alert("⛔ GAGAL KONEKSI!\nPastikan URL GAS benar dan setting 'Who has access: Anyone'.");
        } else {
            alert("Gagal: " + error.message);
        }
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
        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ 
                action: 'update_prompt', 
                system_prompt: newPrompt 
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
        }

        const result = await response.text();
        alert("Berhasil! Pengetahuan AI telah diperbarui.\nRespon Server: " + result);
    } catch (err) {
        if (err.message.includes("Failed to fetch")) {
            alert("⛔ GAGAL KONEKSI!\nCek apakah URL GAS sudah benar dan Deployment akses 'Anyone'.");
        } else {
            alert("Gagal menyimpan: " + err.message);
        }
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
        
        // Fix: Gunakan konstruktor lokal (year, month, date) agar konsisten dengan waktu lokal
        // new Date(dateStr) dianggap UTC, bisa menyebabkan bug "hari ini dianggap masa lalu" di zona waktu tertentu
        const isPast = new Date(year, month, d) < new Date().setHours(0,0,0,0);
        
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

    // Ambil data gambar dari 10 input terpisah
    const collectedImages = [];
    for (let i = 0; i < 10; i++) {
        const imgUrl = form['image_' + i].value.trim();
        if (imgUrl) collectedImages.push(imgUrl);
    }
    
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
        images: collectedImages
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
    if (!id) tempGeneratedArticle = null; // Reset draf AI jika buka editor manual (Tulis Baru)
    navigateTo('admin-article-edit');
}

// Fungsi Helper untuk Toolbar Editor Artikel
function execCmd(command, value = null) {
    document.execCommand(command, false, value);
    // Fokus kembali ke editor setelah klik tombol toolbar
    const editor = document.getElementById('editor-content');
    if(editor) editor.focus();
}

function insertLink(e) {
    e.preventDefault(); // Mencegah tombol merebut fokus
    const selection = window.getSelection();
    if (selection.rangeCount === 0 || selection.toString().length === 0) {
        alert("Silakan sorot (blok) teks yang ingin diberi link terlebih dahulu!");
        return;
    }
    
    // Simpan range seleksi saat ini
    const range = selection.getRangeAt(0).cloneRange();
    
    // Tampilkan prompt
    const url = prompt('Masukkan URL tautan (contoh: https://google.com):');
    if (url) {
        // Kembalikan seleksi sebelum eksekusi
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('createLink', false, url);
    }
    
    // Kembalikan fokus
    const editor = document.getElementById('editor-content');
    if(editor) editor.focus();
}

function saveArticleData(e) {
    e.preventDefault();
    const form = e.target;
    
    const newArticle = {
        id: editingArticleId ? editingArticleId : Date.now(),
        title: form.title.value,
        image: form.image.value,
        date: form.date.value, 
        content: document.getElementById('editor-content').innerHTML // Ambil dari Div ContentEditable
    };

    if (editingArticleId) {
        const index = articlesData.findIndex(a => a.id === editingArticleId);
        if (index !== -1) articlesData[index] = newArticle;
    } else {
        articlesData.unshift(newArticle); // Artikel baru di paling atas
    }

    // Reset temp data jika ada
    tempGeneratedArticle = null;

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
        const trackRef = localStorage.getItem('HOUMI_TRACKING_REF');
        let waMessage = `Halo Admin Houmi, saya ingin pesan *${villaName}*.\n` +
            (trackRef ? `(Kode Agen / Referral: ${trackRef})\n\n` : '\n') +
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
        
        // By-pass konfirmasi, langsung arahkan ke WhatsApp asli Admin
        alert('Pemesanan berhasil disimpan! Mengarahkan otomatis ke WhatsApp Admin...');
        window.open(waLink, '_blank');

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
                                <div class="text-xs text-gray-600 mb-1">Transfer ke: <span class="font-mono font-bold text-dark">BSI 7279764638 (an Sabeq)</span></div>
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
                        Pesan Sekarang
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

function deleteBooking(id) {
    if(confirm('Hapus data booking ini permanen?')) {
        bookingsData = bookingsData.filter(b => b.id !== id);
        saveBookingsToStorage();
    }
}

function acceptBooking(id) {
    const booking = bookingsData.find(b => b.id === id);
    if (!booking) return;
    
    // Logika tombol Accept: Maju ke tahap berikutnya
    let nextStatus = 'booked'; // Default target
    if (booking.status === 'booked') nextStatus = 'done';
    if (booking.status === 'done') return; // Mentok di selesai

    booking.status = nextStatus;
    saveBookingsToStorage();
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

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    if (!menu || !overlay) return;

    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Kunci scroll body saat menu terbuka
    } else {
        menu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function toggleAdminMenu() {
    const menu = document.getElementById('admin-mobile-menu');
    const overlay = document.getElementById('admin-mobile-menu-overlay');
    if (!menu || !overlay) return;

    if (menu.classList.contains('-translate-x-full')) {
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function getAdminNavLinks(isMobile = false) {
    const clickAction = isMobile ? "toggleAdminMenu()" : "";
    return `
    <button onclick="navigateTo('admin-crm'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="kanban-square" class="w-5 h-5 text-secondary"></i> CRM Pipeline
    </button>
    <button onclick="navigateTo('admin-generator'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="brain-circuit" class="w-5 h-5 text-secondary"></i> AI Buyer Persona
    </button>
    <button onclick="navigateTo('admin-calendar'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="calendar-check" class="w-5 h-5 text-secondary"></i> Kalender Konten
    </button>
    <div class="pl-4 border-l border-white/5 ml-4 mt-1 mb-3">
        <button onclick="navigateTo('admin-sosmed-generator'); ${clickAction}" class="w-full text-left flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition text-secondary text-sm font-medium text-gray-300">
            <i data-lucide="clapperboard" class="w-4 h-4 text-pink-400"></i> Buat Konten Sosmed
        </button>
    </div>
    <!-- FITUR AI DINONAKTIFKAN
    <button onclick="navigateTo('admin-generator')" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium opacity-50 cursor-not-allowed" title="Fitur AI Nonaktif">
        <i data-lucide="brain-circuit" class="w-5 h-5 text-secondary"></i> AI Buyer Persona (Nonaktif)
    </button> 
    -->
    <button onclick="navigateTo('admin-media'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="image" class="w-5 h-5 text-secondary"></i> Media Library
    </button>
    <button onclick="navigateTo('admin-articles'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="book-open" class="w-5 h-5 text-secondary"></i> Artikel
    </button>
    <button onclick="navigateTo('admin-gallery'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="camera" class="w-5 h-5 text-secondary"></i> Galeri Kenangan
    </button>
    <button onclick="navigateTo('admin-testimonials'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="message-square" class="w-5 h-5 text-secondary"></i> Testimoni Tamu
    </button>
    <button onclick="navigateTo('admin-agents'); \\${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="users" class="w-5 h-5 text-secondary"></i> Kelola Mitra Agen
    </button>
    <button onclick="navigateTo('admin-article-generator'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="pen-tool" class="w-5 h-5 text-secondary"></i> Generator Artikel SEO
    </button>
    
    <div class="my-4 border-t border-white/10"></div>
    
    <button onclick="navigateTo('admin-training'); ${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium bg-white/5 border border-white/10 shadow-sm">
        <i data-lucide="bot" class="w-5 h-5 text-accent animate-pulse"></i> Training Otak CS AI
    </button>
    `;
}

function getHomeHTML() {
    return `
    <div class="pb-20 sm:pb-8 font-body bg-white min-h-screen relative overflow-x-hidden">
        
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu-overlay" onclick="toggleMobileMenu()" class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity backdrop-blur-sm"></div>

        <!-- Mobile Menu Drawer (Hamburger Content) -->
        <div id="mobile-menu" class="fixed inset-y-0 right-0 w-[75%] max-w-xs bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50 flex flex-col font-body">
            <div class="p-5 flex justify-between items-center border-b border-gray-100 bg-primary text-white">
                <span class="font-brand font-bold text-xl">Menu</span>
                <button onclick="toggleMobileMenu()" class="hover:bg-white/20 p-1 rounded-full transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                <button onclick="toggleMobileMenu(); navigateTo('home')" class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 hover:text-primary w-full text-left p-3 rounded-xl transition-all"><i data-lucide="home" class="w-5 h-5 text-gray-400"></i> <span class="font-bold">Beranda</span></button>
                <button onclick="toggleMobileMenu(); navigateTo('admin-dashboard')" class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 hover:text-primary w-full text-left p-3 rounded-xl transition-all"><i data-lucide="settings" class="w-5 h-5 text-gray-400"></i> <span class="font-bold">Admin Panel</span></button>
                <button onclick="toggleMobileMenu()" class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 hover:text-primary w-full text-left p-3 rounded-xl transition-all"><i data-lucide="heart" class="w-5 h-5 text-gray-400"></i> <span class="font-bold">Favorit Saya</span></button>
            </nav>
            <div class="p-4 border-t border-gray-100 bg-gray-50">
                <button class="bg-accent text-white w-full py-3 rounded-xl font-bold shadow-lg hover:bg-accent/90 transition-transform active:scale-95 flex justify-center items-center gap-2"><i data-lucide="log-in" class="w-4 h-4"></i> Masuk / Daftar</button>
            </div>
        </div>

        <header class="sticky top-0 z-20 bg-primary shadow-2xl py-4 px-4">
            <div class="flex justify-between items-center max-w-5xl mx-auto">
                <div class="flex items-center gap-4">
                    <img src="https://houmi.izzahgroup.com/uploads/1773679372_houmi_logo.png" alt="Houmi Logo" class="w-14 h-14 object-contain">
                    <div>
                        <h1 class="text-3xl font-brand font-bold text-secondary leading-none">Houmi</h1>
                        <p class="text-xs font-body text-secondary/80">It's Family Time</p>
                    </div>
                </div>
                <!-- Menu Desktop (Hidden di HP) -->
                <div class="hidden sm:flex gap-4 items-center text-secondary">
                    <button onclick="navigateTo('admin-dashboard')" class="hover:text-accent transition-colors" title="Panel Admin">
                        <i data-lucide="settings" class="w-6 h-6"></i>
                    </button>
                    <i data-lucide="heart" class="w-6 h-6 cursor-pointer hover:text-accent transition-colors"></i>
                    <button class="bg-accent text-white px-4 py-1.5 rounded-md text-sm font-bold shadow-sm hover:bg-accent/90 transition-colors">Masuk</button>
                </div>
                
                <!-- Tombol Hamburger (Hanya muncul di HP) -->
                <button onclick="toggleMobileMenu()" class="sm:hidden text-secondary p-1 hover:bg-white/10 rounded-lg transition-colors">
                    <i data-lucide="menu" class="w-8 h-8"></i>
                </button>
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

            <!-- Galeri Kenangan Section -->
            <div class="mt-12">
                <div class="flex justify-between items-end mb-4">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800 flex items-center gap-2"><i data-lucide="camera" class="w-5 h-5 text-primary"></i> Galeri Kenangan</h2>
                        <p class="text-xs text-gray-500 mt-1">Momen seru tamu menginap di Houmi Villa.</p>
                    </div>
                </div>
                <div class="columns-2 md:columns-4 gap-3 space-y-3">
                    <div class="relative rounded-2xl overflow-hidden group shadow-sm inline-block w-full">
                        <img src="https://images.unsplash.com/photo-1543805128-db626df424dd?auto=format&fit=crop&w=500&q=80" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                    </div>
                    <div class="relative rounded-2xl overflow-hidden group shadow-sm inline-block w-full">
                        <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=500&q=80" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                    </div>
                    <div class="relative rounded-2xl overflow-hidden group shadow-sm inline-block w-full">
                        <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=500&q=80" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                    </div>
                    <div class="relative rounded-2xl overflow-hidden group shadow-sm inline-block w-full">
                        <img src="https://images.unsplash.com/photo-1522771731474-c352edec9dc6?auto=format&fit=crop&w=500&q=80" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                        <div class="absolute bottom-2 left-2 bg-white/80 backdrop-blur text-[9px] font-bold px-2 py-1 rounded-md text-gray-800">Family Time ❤️</div>
                    </div>
                    <div class="relative rounded-2xl overflow-hidden group shadow-sm inline-block w-full hidden md:inline-block">
                        <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=500&q=80" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-full text-xs transition-colors flex items-center gap-2 mx-auto shadow-sm">
                        <i data-lucide="instagram" class="w-4 h-4 text-pink-600"></i> Lihat Instagram Kami
                    </button>
                </div>
            </div>

            <!-- Testimoni Section -->
            <div class="mt-12 bg-gray-50 -mx-4 px-4 py-10 relative">
                <!-- Background decoration -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                </div>
                
                <div class="relative z-10 max-w-5xl mx-auto">
                    <div class="text-center mb-6">
                        <h2 class="text-xl font-bold text-gray-800 mb-1">Apa Kata Mereka?</h2>
                        <p class="text-sm text-gray-500">Cerita tamu yang sudah menikmati liburan di Houmi.</p>
                    </div>

                    <div class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4">
                        ${testimonialsData.length === 0 ? '<p class="text-sm text-gray-400 text-center w-full py-4">Belum ada testimoni.</p>' : testimonialsData.map(t => `
                        <!-- Testi Item -->
                        <div class="min-w-[280px] w-[280px] sm:min-w-[320px] bg-white rounded-2xl p-5 shadow-sm border border-gray-100 snap-center shrink-0">
                            <div class="flex items-center gap-1 mb-3 text-accent">
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            </div>
                            <p class="text-sm text-gray-600 mb-4 h-[65px] line-clamp-3 leading-relaxed">"${t.text}"</p>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 ${t.bgClass} rounded-full flex items-center justify-center font-bold ${t.textClass} shrink-0">${t.initial}</div>
                                <div>
                                    <h4 class="font-bold text-sm text-gray-800">${t.name}</h4>
                                    <p class="text-[10px] text-gray-400">${t.location} • Nginep di ${t.villa}</p>
                                </div>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
            </div>

            <!-- Article Section -->
            <div class="mt-10 mb-20">
                <div class="flex justify-between items-end mb-4">
                    <h2 class="text-lg font-bold text-gray-800">Tips & Inspirasi Wisata</h2>
                    <span class="text-xs text-primary font-semibold cursor-pointer">Lihat Semua</span>
                </div>
                <div class="flex items-stretch overflow-x-auto hide-scrollbar gap-4 pb-4">
                    ${articlesData.map(article => `
                        <div onclick="openArticleDetail(${article.id})" class="min-w-[260px] w-[260px] bg-white rounded-xl flex flex-col overflow-hidden shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all h-full">
                            <div class="h-32 bg-gray-200 shrink-0 overflow-hidden">
                                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-3 flex-1 flex flex-col">
                                <div class="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${article.date}</div>
                                <h3 class="font-bold text-gray-800 text-sm leading-snug line-clamp-2 mb-2 h-[40px]">${article.title}</h3>
                                <p class="text-xs text-gray-500 line-clamp-3 mt-auto break-words">${(article.content || '').replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </main>

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
            
            <!-- BAGIAN GALERI FOTO (GRID) -->
            <div class="mb-8">
                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i data-lucide="image" class="w-5 h-5 text-primary"></i> Galeri Foto
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    ${villa.images.map((img, idx) => `
                        <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative shadow-sm group">
                             <img src="${img}" alt="${villa.name} ${idx + 1}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
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
    <div class="min-h-screen bg-gray-100 flex flex-col relative overflow-x-hidden">
        
        <!-- Admin Mobile Menu Overlay -->
        <div id="admin-mobile-menu-overlay" onclick="toggleAdminMenu()" class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity backdrop-blur-sm"></div>

        <!-- Admin Mobile Menu Drawer -->
        <div id="admin-mobile-menu" class="fixed inset-y-0 left-0 w-64 bg-primary shadow-2xl transform -translate-x-full transition-transform duration-300 ease-in-out z-50 flex flex-col font-body">
             <div class="p-4 flex justify-between items-center border-b border-white/10 text-white">
                <span class="font-bold text-xl">Admin Menu</span>
                <button onclick="toggleAdminMenu()" class="hover:bg-white/10 p-1 rounded transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                ${getAdminNavLinks(true)}
            </nav>
        </div>

        <header class="bg-white shadow p-4 sticky top-0 z-10 shrink-0 font-body">
            <div class="max-w-full mx-auto flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <button onclick="toggleAdminMenu()" class="sm:hidden p-1 hover:bg-gray-100 rounded">
                        <i data-lucide="menu" class="w-6 h-6 text-gray-800"></i>
                    </button>
                    <h1 class="text-xl font-bold text-gray-800">Dashboard Admin</h1>
                </div>
                <div class="flex gap-2">
                    <button onclick="navigateTo('home')" class="px-3 py-1 text-sm border rounded hover:bg-gray-50">Lihat Web</button>
                    <button onclick="logoutAdmin()" class="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-black">Logout</button>
                </div>
            </div>
        </header>

        <div class="flex flex-1">
            <!-- Sidebar -->
            <aside class="hidden sm:block w-64 bg-primary shadow-md p-4 shrink-0 font-body">
                <nav class="space-y-2">
                    ${getAdminNavLinks(false)}
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

function getAdminArticleGeneratorHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="pen-tool" class="w-6 h-6 text-green-600"></i> Generator Artikel SEO
            </h1>
        </header>
        <main class="max-w-4xl mx-auto p-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Topik Artikel</label>
                        <input type="text" id="article-topic" class="w-full border p-3 rounded-xl outline-none" placeholder="Contoh: 7 Tempat Makan Keluarga di Batu">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Target Keyword</label>
                        <input type="text" id="article-keywords" class="w-full border p-3 rounded-xl outline-none" placeholder="kuliner batu, wisata murah">
                    </div>
                    <button id="btn-article-gen" onclick="generateSEOArticle()" class="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 shadow-lg flex items-center justify-center gap-2">
                        <i data-lucide="sparkles" class="w-5 h-5"></i> Tulis Artikel Sekarang
                    </button>
                </div>
            </div>

            <!-- Loading -->
            <div id="article-gen-loading" class="hidden mt-8 text-center py-10">
                <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p class="text-green-600 animate-pulse">Sedang menulis artikel...</p>
            </div>

            <!-- Result -->
            <div id="article-gen-result" class="hidden bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden slide-in">
                <div class="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 class="font-bold text-gray-700">Preview</h3>
                    <button onclick="transferToEditor()" class="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"><i data-lucide="edit-3" class="w-4 h-4"></i> Siap Terbitkan</button>
                </div>
                <div class="p-8 prose max-w-none">
                    <h1 id="preview-title" class="text-2xl font-bold mb-4"></h1>
                    <div id="preview-content" class="text-gray-700 leading-relaxed"></div>
                </div>
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

// --- SOSMED CONTENT GENERATOR ---
async function generateSosmedContent() {
    const btn = document.getElementById('btn-sosmed-gen');
    const resultArea = document.getElementById('sosmed-result');
    const loadingArea = document.getElementById('sosmed-loading');
    const inputTopic = document.getElementById('sosmed-topic').value.trim();
    const inputBrief = document.getElementById('sosmed-brief').value.trim();

    if (!inputTopic) {
        alert("Silakan masukkan topik konten terlebih dahulu!");
        return;
    }

    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    try {
        const prompt = `
        Bertindaklah sebagai Content Creator Expert untuk Houmi Villa.
        Buatkan materi lengkap untuk diposting di TikTok/Instagram Reels.
        
        Topik Konten: ${inputTopic}
        Brief Tambahan: ${inputBrief ? inputBrief : "Tidak ada."}
        
        TUGAS:
        Buat konten dalam 4 bagian dengan format terstruktur menggunakan HTML dasar (<h2>, <p>, <ul>, <b>):
        1. 🎥 Konsep Visual Video (Ide angel kamera/suasana per detik)
        2. 🎙️ Script Voice Over (Skrip pendek untuk di-dubbing)
        3. ✍️ Caption (Copywriting memikat, tambahkan ajakan Call To Action ke WA)
        4. #️⃣ Hashtag (Daftar hashtag populer dan relevan)
        `;

        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ prompt: prompt })
        });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const responseText = await response.text();
        let data;
        try { data = JSON.parse(responseText); } catch (e) { throw new Error("Respon bukan JSON valid."); }
        if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));

        let aiText = data.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/```html/g, '').replace(/```/g, '');

        resultArea.innerHTML = `
            <div class="prose max-w-none text-sm text-gray-800">
                ${aiText}
            </div>
            <div class="mt-6 flex justify-end border-t pt-4">
                <button onclick="this.innerHTML='<i data-lucide=\\'check\\'></i> Tersalin!'; navigator.clipboard.writeText(document.getElementById('sosmed-result').innerText); setTimeout(()=>this.innerHTML='<i data-lucide=\\'copy\\'></i> Copy Text Saja', 2000)" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                    <i data-lucide="copy" class="w-4 h-4"></i> Copy Text Saja
                </button>
            </div>
        `;
        resultArea.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();

    } catch (error) {
        if (error.message.includes("Failed to fetch")) {
            alert("⛔ GAGAL KONEKSI SERVER AI!");
        } else {
            alert("Terjadi kesalahan:\\n" + error.message);
        }
    } finally {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        loadingArea.classList.add('hidden');
    }
}

function getAdminSosmedGeneratorHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="video" class="w-6 h-6 text-pink-500"></i> Konten Sosmed
            </h1>
        </header>
        <main class="max-w-4xl mx-auto p-4 sm:p-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div class="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-pink-500">
                    <i data-lucide="clapperboard" class="w-8 h-8"></i>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Content Sosmed Generator</h2>
                <p class="text-gray-500 mb-6 text-sm">
                    Buat Script Video, Voice Over, Caption, dan Hashtag instan berdasarkan topik di Kalender Konten Anda.
                </p>
                
                <div class="space-y-4 text-left">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Topik Konten (Sesuai Kalender)</label>
                        <input type="text" id="sosmed-topic" placeholder="Misal: Keseruan BBQ di Tropis Pool Villa" class="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none text-sm">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1">Deskripsi Tambahan / Promo (Opsional)</label>
                        <textarea id="sosmed-brief" placeholder="Misal: Sediakan skrip yang berujung ajakan diskon 20%" class="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none text-sm" rows="2"></textarea>
                    </div>
                    <button id="btn-sosmed-gen" onclick="generateSosmedContent()" class="w-full bg-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-pink-600 shadow-lg transition-all flex items-center justify-center gap-2">
                        <i data-lucide="wand-2" class="w-5 h-5"></i> Generate Materi Sosmed
                    </button>
                </div>
            </div>

            <!-- Sosmed Loading -->
            <div id="sosmed-loading" class="hidden mt-8 text-center py-10">
                <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500 mx-auto mb-4"></div>
                <p class="text-pink-500 font-bold animate-pulse">Mengetik Script & Caption (5-10 detik)...</p>
            </div>
            
            <!-- Sosmed Result Area -->
            <div id="sosmed-result" class="hidden mt-6 overflow-x-hidden bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 slide-in text-left"></div>
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

function openMediaFromEditor() {
    // Simpan semua state editor yang sekarang supaya tidak hilang
    const form = document.querySelector('form');
    if (form) {
        window.articleDraftForMedia = {
            title: form.title ? form.title.value : '',
            date: form.date ? form.date.value : new Date().toISOString().split('T')[0],
            image: form.image ? form.image.value : '',
            content: document.getElementById('editor-content') ? document.getElementById('editor-content').innerHTML : ''
        };
    }
    
    // Set flag supaya halaman Media Library tau kita datang dari editor
    window.mediaCallbackPage = 'admin-article-edit';
    
    navigateTo('admin-media');
}

function getArticleEditorHTML() {
    let article = {
        title: '', 
        image: '', 
        date: new Date().toISOString().split('T')[0], 
        content: '<p>Mulai menulis di sini...</p>'
    };

    // Cek draft jika barusan kembali dari Media Library
    if (window.articleDraftForMedia) {
        article = { ...window.articleDraftForMedia };
        window.articleDraftForMedia = null; // Clear flag
    }
    // Cek apakah mode edit artikel lama
    else if (editingArticleId) {
        const existing = articlesData.find(a => a.id === editingArticleId);
        if (existing) article = { ...existing };
    } 
    // Cek apakah dari hasil generate AI
    else if (tempGeneratedArticle) {
        article.title = tempGeneratedArticle.title;
        article.content = tempGeneratedArticle.content;
        // Gambar default random jika dari AI
        article.image = "https://images.unsplash.com/photo-1596401057633-565652f50000?auto=format&fit=crop&w=800&q=80"; 
    }

    // Style tombol toolbar
    const btnStyle = "p-2 hover:bg-gray-200 rounded text-gray-600 transition-colors";
    const btnActiveStyle = "p-2 bg-gray-200 rounded text-black font-bold";
    
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
                    <div class="flex justify-between items-center mb-1">
                        <label class="block text-sm font-bold text-gray-700">URL Gambar Utama / Sisip Gambar</label>
                        <button type="button" onclick="openMediaFromEditor()" class="text-[10px] sm:text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold px-3 py-1 rounded flex items-center gap-1 shadow-sm border border-blue-100 transition-colors"><i data-lucide="image" class="w-3 h-3 sm:w-4 sm:h-4"></i> Ke Media Library</button>
                    </div>
                    <input type="text" name="image" value="${article.image}" class="w-full border p-2 rounded-lg" placeholder="https://..." required>
                    <p class="text-[10px] text-gray-400 mt-1">Paste link di atas ATAU sorot teks di editor bawah lalu klik ikon Link (<i data-lucide="link" class="w-3 h-3 inline"></i>) untuk sisipkan link pada teks.</p>
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Konten Artikel</label>
                    
                    <!-- TOOLBAR EDITOR -->
                    <div class="border border-gray-300 rounded-t-lg bg-gray-100 p-2 flex flex-wrap gap-1 items-center sticky top-[70px] z-20 shadow-sm">
                        <button type="button" onclick="execCmd('bold')" class="${btnStyle}" title="Bold"><i data-lucide="bold" class="w-4 h-4"></i></button>
                        <button type="button" onclick="execCmd('italic')" class="${btnStyle}" title="Italic"><i data-lucide="italic" class="w-4 h-4"></i></button>
                        <button type="button" onclick="execCmd('underline')" class="${btnStyle}" title="Underline"><i data-lucide="underline" class="w-4 h-4"></i></button>
                        <div class="w-px h-6 bg-gray-300 mx-1"></div>
                        
                        <button type="button" onclick="execCmd('formatBlock', 'H2')" class="${btnStyle} font-serif font-bold" title="Heading 1">H1</button>
                        <button type="button" onclick="execCmd('formatBlock', 'H3')" class="${btnStyle} font-serif font-bold text-sm" title="Heading 2">H2</button>
                        <button type="button" onclick="execCmd('formatBlock', 'H4')" class="${btnStyle} font-serif font-bold text-xs" title="Heading 3">H3</button>
                        <div class="w-px h-6 bg-gray-300 mx-1"></div>

                        <button type="button" onclick="execCmd('justifyLeft')" class="${btnStyle}" title="Rata Kiri"><i data-lucide="align-left" class="w-4 h-4"></i></button>
                        <button type="button" onclick="execCmd('justifyCenter')" class="${btnStyle}" title="Rata Tengah"><i data-lucide="align-center" class="w-4 h-4"></i></button>
                        <button type="button" onclick="execCmd('justifyRight')" class="${btnStyle}" title="Rata Kanan"><i data-lucide="align-right" class="w-4 h-4"></i></button>
                        <div class="w-px h-6 bg-gray-300 mx-1"></div>

                        <button type="button" onmousedown="insertLink(event)" class="${btnStyle}" title="Link"><i data-lucide="link" class="w-4 h-4"></i></button>
                        <button type="button" onclick="execCmd('removeFormat')" class="${btnStyle} text-red-500" title="Hapus Format"><i data-lucide="x" class="w-4 h-4"></i></button>
                    </div>

                    <!-- AREA EDIT (WYSIWYG) -->
                    <div id="editor-content" 
                         contenteditable="true" 
                         class="w-full border-x border-b border-gray-300 p-4 rounded-b-lg min-h-[300px] bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 prose max-w-none"
                    >
                        ${article.content}
                    </div>
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

    // Generate 10 Input untuk Gambar
    let imageInputsHTML = '<div class="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">';
    for (let i = 0; i < 10; i++) {
        const val = (villa.images && villa.images[i]) ? villa.images[i] : '';
        imageInputsHTML += `
            <div>
                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-1">URL Gambar ${i + 1}</label>
                <input type="text" name="image_${i}" value="${val}" class="w-full border p-2 rounded-lg text-sm bg-white focus:ring-1 focus:ring-primary outline-none" placeholder="https://...">
            </div>`;
    }
    imageInputsHTML += '</div>';
    
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
                    <label class="block text-sm font-bold text-gray-700 mb-2">Galeri Foto (Maks 10)</label>
                    ${imageInputsHTML}
                    <p class="text-[10px] text-gray-400 mt-2">Tips: Gunakan "Media Library" untuk upload foto, lalu copy link-nya ke sini.</p>
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
                                        <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            ${booking.status !== 'done' ? `
                                            <button onclick="acceptBooking(${booking.id})" class="text-green-500 hover:text-green-600 transition-colors" title="Terima / Lanjut Tahap"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i></button>
                                            ` : ''}
                                            <button onclick="deleteBooking(${booking.id})" class="text-red-400 hover:text-red-600 transition-colors" title="Hapus"><i data-lucide="trash" class="w-3.5 h-3.5"></i></button>
                                        </div>
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
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
                <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                <h1 class="text-xl font-bold text-gray-800">Media Library</h1>
            </div>
            ${window.mediaCallbackPage ? `
            <button onclick="let p=window.mediaCallbackPage; window.mediaCallbackPage=null; navigateTo(p)" class="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 hover:bg-primary/90 transition-colors"><i data-lucide="check-circle-2" class="w-4 h-4"></i> Selesai & Kembali</button>
            ` : ''}
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


let currentAgent = null;

function loginAgent(e) {
    e.preventDefault();
    const wa = e.target.whatsapp.value.replace(/[^0-9]/g, '');
    const found = agentsData.find(a => a.whatsapp === wa);
    if(found) {
        currentAgent = found;
        navigateTo('agent-dashboard');
    } else {
        alert('Nomor WA tidak terdaftar sebagai Mitra Houmi! Hubungi Admin.');
    }
}

function copyAgentLink(url) {
    navigator.clipboard.writeText(url);
    alert('Link berpelacak berhasil di copy!\nSilahkan sebar ke target konsumen.\n\n' + url);
}

function getAgentPortalHTML() {
    return `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="users" class="w-8 h-8 text-primary"></i>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Portal Mitra Agen</h2>
            <p class="text-sm text-gray-500 mb-6">Masukkan Nomor WA terdaftar Anda untuk masuk ke dashboard senjata berburu.</p>
            <form onsubmit="loginAgent(event)" class="space-y-4">
                <input type="text" name="whatsapp" placeholder="Nomor WA (contoh: 62812...)" class="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-primary outline-none text-center font-bold tracking-wider" required>
                <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 shadow-md">Masuk Sekarang</button>
            </form>
            <button onclick="navigateTo('home')" class="mt-4 text-xs text-gray-400 hover:text-gray-600">Kembali ke Beranda</button>
        </div>
    </div>
    `;
}

function getAgentDashboardHTML() {
    if(!currentAgent) return getAgentPortalHTML();
    
    // Asumsi URL server live saat ini:
    const baseUrl = window.location.href.split('?')[0]; 
    
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-primary text-white shadow-lg p-6 sticky top-0 z-10 rounded-b-3xl">
            <div class="flex justify-between items-center max-w-4xl mx-auto">
                <div>
                    <p class="text-secondary/80 text-xs">Selamat berburu,</p>
                    <h1 class="text-2xl font-bold">${currentAgent.name}</h1>
                </div>
                <button onclick="currentAgent=null; navigateTo('agent-portal')" class="bg-white/20 hover:bg-white/30 p-2 rounded-xl backdrop-blur text-xs font-bold transition">Keluar</button>
            </div>
        </header>
        <main class="max-w-4xl mx-auto p-4 mt-4">
            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2"><i data-lucide="home" class="w-5 h-5 text-primary"></i> Link Penjualan Villa</h3>
            <div class="space-y-3 mb-8">
                ${appData.map(v => {
                    const sellUrl = baseUrl + '?page=detail&id=' + v.id + '&ref=' + currentAgent.whatsapp;
                    return `
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center">
                        <img src="${v.images[0]}" class="w-16 h-16 rounded-lg object-cover bg-gray-200 shrink-0">
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-gray-800 text-sm truncate">${v.name}</h4>
                            <button onclick="copyAgentLink('${sellUrl}')" class="mt-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-100 flex items-center gap-1 transition w-fit">
                                <i data-lucide="copy" class="w-3 h-3"></i> Copy Link Promosi
                            </button>
                        </div>
                    </div>
                `;}).join('')}
            </div>

            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2"><i data-lucide="book-open" class="w-5 h-5 text-primary"></i> Link Pancingan Artikel</h3>
            <div class="space-y-3">
                ${articlesData.map(a => {
                    const sellUrl = baseUrl + '?page=article&id=' + a.id + '&ref=' + currentAgent.whatsapp;
                    return `
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <h4 class="font-bold text-gray-800 text-sm line-clamp-2">${a.title}</h4>
                        <div class="mt-2 text-right">
                            <button onclick="copyAgentLink('${sellUrl}')" class="bg-purple-50 text-purple-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-purple-100 inline-flex items-center gap-1">
                                <i data-lucide="copy" class="w-3 h-3"></i> Copy Link Pancingan
                            </button>
                        </div>
                    </div>
                `;}).join('')}
            </div>
            
            <div class="mt-8 bg-gradient-to-r from-primary to-accent text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <i data-lucide="share-2" class="absolute -right-4 -bottom-4 w-32 h-32 text-white/10"></i>
                <div class="relative z-10">
                    <h3 class="font-bold text-lg mb-1">Sebar Halaman Utama</h3>
                    <p class="text-xs text-white/80 mb-4">Arahkan konsumen untuk melihat koleksi Houmi Villa.</p>
                    <button onclick="copyAgentLink('${baseUrl}?ref=${currentAgent.whatsapp}')" class="bg-white text-primary px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:scale-105 transition">
                        Copy Link Beranda Saja
                    </button>
                </div>
            </div>
        </main>
    </div>
    `;
}

// === MISSING MENUS PATCH ===

function deleteArticle(id) {
    if(confirm('Hapus artikel ini permanen?')) {
        articlesData = articlesData.filter(a => a.id !== id);
        saveArticlesToStorage();
    }
}

function getAdminArticlesHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
                <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                <h1 class="text-xl font-bold text-gray-800">Kelola Artikel</h1>
            </div>
            <button onclick="editingArticleId=null; tempGeneratedArticle=null; navigateTo('admin-article-edit')" class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition"><i data-lucide="plus" class="w-4 h-4"></i> Tulis Baru</button>
        </header>
        <main class="max-w-4xl mx-auto p-4">
            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 class="font-bold text-gray-700">Daftar Artikel SEO</h3>
                    <span class="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-bold">${articlesData.length} Total</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    ${articlesData.map(a => `
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition">
                        <img src="${a.image}" alt="${a.title}" class="w-full h-32 object-cover bg-gray-100">
                        <div class="p-4 flex-1 flex flex-col">
                            <p class="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${a.date}</p>
                            <h4 class="font-bold text-gray-800 text-sm mb-2 line-clamp-2" title="${a.title}">${a.title}</h4>
                            <div class="mt-auto flex justify-end gap-2 border-t border-gray-100 pt-3">
                                <button onclick="editingArticleId=${a.id}; navigateTo('admin-article-edit')" class="text-blue-500 hover:text-blue-700 bg-blue-50 p-2 rounded-lg transition" title="Edit"><i data-lucide="edit-2" class="w-4 h-4"></i></button>
                                <button onclick="deleteArticle(${a.id})" class="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded-lg transition" title="Hapus"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                    `).join('')}
                </div>
                ${articlesData.length === 0 ? '<div class="text-center text-gray-400 py-10"><i data-lucide="book-open" class="w-12 h-12 mx-auto mb-3 opacity-50"></i><p>Belum ada artikel. Yuk tulis yang pertama!</p></div>' : ''}
            </div>
        </main>
    </div>
    `;
}

function getAdminGalleryHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">Kelola Galeri</h1>
        </header>
        <main class="max-w-4xl mx-auto p-4">
            <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                <i data-lucide="camera" class="w-12 h-12 text-primary mx-auto mb-4 opacity-50"></i>
                <h3 class="font-bold text-gray-800 mb-2">Galeri Kenangan Utama</h3>
                <p class="text-sm text-gray-500 mb-4">Galeri di halaman utama saat ini menggunakan hardcoded data atau dari Media Library Anda. Pastikan Anda mengunggah foto-foto terbaik tamu Anda di Media Library.</p>
                <button onclick="navigateTo('admin-media')" class="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition shadow-md">
                    Ke Media Library
                </button>
            </div>
        </main>
    </div>
    `;
}

function deleteTestimonial(id) {
    if(confirm('Hapus testimoni ini?')) {
        testimonialsData = testimonialsData.filter(t => t.id !== id);
        saveTestimonialsToStorage();
    }
}

function saveTestimonial(e) {
    e.preventDefault();
    const form = e.target;
    const colors = [
        { bg: 'bg-primary/20', text: 'text-primary' },
        { bg: 'bg-accent/20', text: 'text-accent' },
        { bg: 'bg-blue-100', text: 'text-blue-600' },
        { bg: 'bg-green-100', text: 'text-green-600' },
        { bg: 'bg-purple-100', text: 'text-purple-600' }
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    testimonialsData.unshift({
        id: Date.now(),
        name: form.name.value,
        location: form.location.value,
        villa: form.villa.value,
        text: form.text.value,
        initial: form.name.value.charAt(0).toUpperCase(),
        bgClass: color.bg,
        textClass: color.text
    });
    saveTestimonialsToStorage();
    form.reset();
}

function getAdminTestimonialsHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">Kelola Testimoni</h1>
        </header>
        <main class="max-w-4xl mx-auto p-4">
            <div class="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 class="font-bold text-gray-800 mb-2">Tambah Testimoni Baru</h3>
                <form onsubmit="saveTestimonial(event)" class="space-y-3">
                    <div class="flex flex-col sm:flex-row gap-3">
                        <input type="text" name="name" placeholder="Nama Tamu" class="border p-2 rounded-lg flex-1 text-sm" required>
                        <input type="text" name="location" placeholder="Asal Kota" class="border p-2 rounded-lg flex-1 text-sm" required>
                        <input type="text" name="villa" placeholder="Nginep di Villa Apa?" class="border p-2 rounded-lg flex-1 text-sm" required>
                    </div>
                    <textarea name="text" placeholder="Isi testimoni / review..." class="border p-2 rounded-lg w-full text-sm" rows="3" required></textarea>
                    <button type="submit" class="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-primary/90 transition w-full sm:w-auto">Simpan Testimoni</button>
                </form>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm overflow-hidden p-4">
                <h3 class="font-bold text-gray-800 mb-4 border-b pb-2">Daftar Testimoni</h3>
                <div class="space-y-4">
                    ${testimonialsData.length === 0 ? '<p class="text-center text-gray-400 py-6">Belum ada testimoni.</p>' : ''}
                    ${testimonialsData.map(t => `
                    <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div class="w-12 h-12 ${t.bgClass} rounded-full flex items-center justify-center font-bold ${t.textClass} shrink-0">${t.initial}</div>
                        <div class="flex-1">
                            <h4 class="font-bold text-sm text-gray-800">${t.name} <span class="text-xs font-normal text-gray-400">(${t.location} • ${t.villa})</span></h4>
                            <p class="text-xs text-gray-600 mt-1 italic">"${t.text}"</p>
                        </div>
                        <button onclick="deleteTestimonial(${t.id})" class="text-red-500 hover:bg-red-50 p-2 rounded-lg mt-2 sm:mt-0"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                    </div>
                    `).join('')}
                </div>
            </div>
        </main>
    </div>
    `;
}

function deleteAgent(id) {
    if(confirm('Hapus agen ini?')) {
        agentsData = agentsData.filter(a => a.id !== id);
        saveAgentsToStorage();
    }
}

function saveAgent(e) {
    e.preventDefault();
    const form = e.target;
    agentsData.unshift({
        id: Date.now(),
        name: form.name.value,
        whatsapp: form.whatsapp.value.replace(/[^0-9]/g, '')
    });
    saveAgentsToStorage();
    form.reset();
}

function getAdminAgentsHTML() {
    return `
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center gap-3">
            <button onclick="navigateTo('admin-dashboard')" class="p-1 hover:bg-gray-100 rounded"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
            <h1 class="text-xl font-bold text-gray-800">Kelola Mitra Agen</h1>
        </header>
        <main class="max-w-4xl mx-auto p-4">
            <div class="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 class="font-bold text-gray-800 mb-2">Pendaftaran Agen Baru</h3>
                <p class="text-xs text-gray-500 mb-4">Tambahkan mitra untuk memberi mereka akses ke Portal Generator Link.</p>
                <form onsubmit="saveAgent(event)" class="flex flex-col sm:flex-row gap-3">
                    <input type="text" name="name" placeholder="Nama Agen" class="border p-2 rounded-lg flex-1 text-sm" required>
                    <input type="text" name="whatsapp" placeholder="Nomor WA (Mulai 628...)" class="border p-2 rounded-lg flex-1 text-sm" required>
                    <button type="submit" class="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-primary/90 transition">Daftarkan</button>
                </form>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                <table class="w-full text-left text-sm">
                    <thead class="bg-gray-50 text-gray-600">
                        <tr>
                            <th class="p-3">Nama Agen</th>
                            <th class="p-3">Nomor WA</th>
                            <th class="p-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${agentsData.map(a => `
                        <tr class="border-t">
                            <td class="p-3 font-bold text-gray-800">${a.name}</td>
                            <td class="p-3 text-gray-500">${a.whatsapp}</td>
                            <td class="p-3 text-right">
                                <button onclick="deleteAgent(${a.id})" class="text-red-500 hover:bg-red-50 p-2 rounded-lg"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
                ${agentsData.length === 0 ? '<p class="text-center text-gray-400 py-6">Belum ada agen terdaftar.</p>' : ''}
            </div>
        </main>
    </div>
    `;
}

function renderApp() {
    const appDiv = document.getElementById('app');
    
    // DIRECT LINK PARSING
    if(!window.hasHandledDirect) {
        window.hasHandledDirect = true;
        const urlParams = new URLSearchParams(window.location.search);
        const p = urlParams.get('page');
        const idP = parseInt(urlParams.get('id'));
        if (p === 'detail' && idP) {
            const v = appData.find(x => x.id === idP);
            if(v) { selectedVilla = v; currentPage = 'detail'; }
        } else if (p === 'article' && idP) {
            const a = articlesData.find(x => x.id === idP);
            if(a) { selectedArticle = a; currentPage = 'article-detail'; }
        } else if (p === 'agent-portal') {
            currentPage = 'agent-portal';
        }
    }

    if (currentPage === 'admin-login') {
        appDiv.innerHTML = getLoginHTML();
    } else if (currentPage === 'admin-dashboard') {
        appDiv.innerHTML = getAdminDashboardHTML();
    } else if (currentPage === 'admin-crm') {
        appDiv.innerHTML = getAdminCRMHTML();
    } else if (currentPage === 'admin-generator') {
        appDiv.innerHTML = getAdminGeneratorHTML();
    } else if (currentPage === 'admin-article-generator') {
        appDiv.innerHTML = getAdminArticleGeneratorHTML();
    } else if (currentPage === 'admin-calendar') {
        appDiv.innerHTML = getAdminCalendarHTML();
    } else if (currentPage === 'admin-sosmed-generator') {
        appDiv.innerHTML = getAdminSosmedGeneratorHTML();
    } else if (currentPage === 'admin-training') {
        appDiv.innerHTML = getAdminTrainingHTML();
    } else if (currentPage === 'admin-articles') {
        appDiv.innerHTML = getAdminArticlesHTML();
    } else if (currentPage === 'admin-article-edit') {
        appDiv.innerHTML = getArticleEditorHTML();
    } else if (currentPage === 'admin-media') {
        syncMediaFromServer(); // <--- TRIGGER SYNC SAAT BUKA HALAMAN MEDIA
        appDiv.innerHTML = getMediaLibraryHTML();
    } else if (currentPage === 'admin-edit') {
        appDiv.innerHTML = getEditorHTML();
    } else if (currentPage === 'admin-gallery') {
        appDiv.innerHTML = getAdminGalleryHTML();
    } else if (currentPage === 'admin-testimonials') {
        appDiv.innerHTML = getAdminTestimonialsHTML();
    } else if (currentPage === 'admin-agents') {
        appDiv.innerHTML = getAdminAgentsHTML();
    } else if (currentPage === 'agent-portal') {
        appDiv.innerHTML = getAgentPortalHTML();
    } else if (currentPage === 'agent-dashboard') {
        appDiv.innerHTML = getAgentDashboardHTML();
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

// --- SAFE INITIALIZATION ---
// Pastikan renderApp dipanggil bahkan jika event DOMContentLoaded sudah lewat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log("Houmi App v5.8 - Init via EventListener 🚀");
        renderApp();
    });
} else {
    console.log("Houmi App v5.8 - Init Direct (DOM Ready) ⚡");
    renderApp();
}