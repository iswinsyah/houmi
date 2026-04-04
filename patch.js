const fs = require('fs');
let code = fs.readFileSync('d:/LOCALHOST/houmi/houmi.js', 'utf8');

// 1. Add Agent State
const agentState = `
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
`;
if (!code.includes("HOUMI_TRACKING_REF")) {
    code = code.replace(/let testimonialsData = [^\n]+;/, match => match + '\n' + agentState);
}

// 2. Add Kelola Agen Menu
const adminMenuAdd = `
    <button onclick="navigateTo('admin-agents'); \\\\\${clickAction}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition text-secondary font-medium">
        <i data-lucide="users" class="w-5 h-5 text-secondary"></i> Kelola Mitra Agen
    </button>`;
if (!code.includes("Kelola Mitra Agen")) {
    code = code.replace(
        /    <button onclick="navigateTo\('admin-testimonials'\); \$\{clickAction\}" class="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white\/10 transition text-secondary font-medium">\s*<i data-lucide="message-square" class="w-5 h-5 text-secondary"><\/i> Testimoni Tamu\s*<\/button>/,
        match => match + adminMenuAdd.replace(/\\\\\\$/g, '$')
    );
}

// 3. Admin Agents HTML
const adminAgentsHtml = `
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
}

function getAdminAgentsHTML() {
    return \`
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
                    <button type="submit" class="bg-primary text-white font-bold px-6 py-2 rounded-lg">Daftarkan</button>
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
                        \$\{agentsData.map(a => \`
                        <tr class="border-t">
                            <td class="p-3 font-bold text-gray-800">\$\{a.name\}</td>
                            <td class="p-3 text-gray-500">\$\{a.whatsapp\}</td>
                            <td class="p-3 text-right">
                                <button onclick="deleteAgent(\$\{a.id\})" class="text-red-500 hover:bg-red-50 p-2 rounded-lg"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </td>
                        </tr>
                        \`).join('')}
                    </tbody>
                </table>
                \$\{agentsData.length === 0 ? '<p class="text-center text-gray-400 py-6">Belum ada agen terdaftar.</p>' : ''}
            </div>
        </main>
    </div>
    \`;
}
`;

if (!code.includes("getAdminAgentsHTML")) {
    code = code.replace(/function getAdminTestimonialsHTML\(\) \{/, match => adminAgentsHtml + '\n' + match);
}

// 4. Agent Portal (Generator)
const agentPortalHtml = `
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
    alert('Link berpelacak berhasil di copy!\\nSilahkan sebar ke target konsumen.\\n\\n' + url);
}

function getAgentPortalHTML() {
    return \`
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
    \`;
}

function getAgentDashboardHTML() {
    if(!currentAgent) return getAgentPortalHTML();
    
    // Asumsi URL server live saat ini:
    const baseUrl = window.location.href.split('?')[0]; 
    
    return \`
    <div class="min-h-screen bg-gray-100 pb-20 font-body">
        <header class="bg-primary text-white shadow-lg p-6 sticky top-0 z-10 rounded-b-3xl">
            <div class="flex justify-between items-center max-w-4xl mx-auto">
                <div>
                    <p class="text-secondary/80 text-xs">Selamat berburu,</p>
                    <h1 class="text-2xl font-bold">\$\{currentAgent.name\}</h1>
                </div>
                <button onclick="currentAgent=null; navigateTo('agent-portal')" class="bg-white/20 hover:bg-white/30 p-2 rounded-xl backdrop-blur text-xs font-bold transition">Keluar</button>
            </div>
        </header>
        <main class="max-w-4xl mx-auto p-4 mt-4">
            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2"><i data-lucide="home" class="w-5 h-5 text-primary"></i> Link Penjualan Villa</h3>
            <div class="space-y-3 mb-8">
                \$\{appData.map(v => {
                    const sellUrl = baseUrl + '?page=detail&id=' + v.id + '&ref=' + currentAgent.whatsapp;
                    return \\\`
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center">
                        <img src="\\\$\{v.images[0]\}" class="w-16 h-16 rounded-lg object-cover bg-gray-200 shrink-0">
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-gray-800 text-sm truncate">\\\$\{v.name\}</h4>
                            <button onclick="copyAgentLink('\\\$\{sellUrl\}')" class="mt-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-100 flex items-center gap-1 transition w-fit">
                                <i data-lucide="copy" class="w-3 h-3"></i> Copy Link Promosi
                            </button>
                        </div>
                    </div>
                \\\`;}).join('')\}
            </div>

            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2"><i data-lucide="book-open" class="w-5 h-5 text-primary"></i> Link Pancingan Artikel</h3>
            <div class="space-y-3">
                \$\{articlesData.map(a => {
                    const sellUrl = baseUrl + '?page=article&id=' + a.id + '&ref=' + currentAgent.whatsapp;
                    return \\\`
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <h4 class="font-bold text-gray-800 text-sm line-clamp-2">\\\$\{a.title\}</h4>
                        <div class="mt-2 text-right">
                            <button onclick="copyAgentLink('\\\$\{sellUrl\}')" class="bg-purple-50 text-purple-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-purple-100 inline-flex items-center gap-1">
                                <i data-lucide="copy" class="w-3 h-3"></i> Copy Link Pancingan
                            </button>
                        </div>
                    </div>
                \\\`;}).join('')\}
            </div>
            
            <div class="mt-8 bg-gradient-to-r from-primary to-accent text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <i data-lucide="share-2" class="absolute -right-4 -bottom-4 w-32 h-32 text-white/10"></i>
                <div class="relative z-10">
                    <h3 class="font-bold text-lg mb-1">Sebar Halaman Utama</h3>
                    <p class="text-xs text-white/80 mb-4">Arahkan konsumen untuk melihat koleksi Houmi Villa.</p>
                    <button onclick="copyAgentLink('\$\{baseUrl\}?ref=\$\{currentAgent.whatsapp\}')" class="bg-white text-primary px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:scale-105 transition">
                        Copy Link Beranda Saja
                    </button>
                </div>
            </div>
        </main>
    </div>
    \`;
}
`;

if (!code.includes("getAgentPortalHTML")) {
    code = code.replace(/function renderApp\(\) \{/, match => agentPortalHtml + '\n' + match);
}

// 5. Update renderApp Routes
if (!code.includes("window.hasHandledDirect")) {
    code = code.replace(
        /if \(currentPage === 'admin-login'\) \{/,
        `// DIRECT LINK PARSING
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

    if (currentPage === 'admin-login') {`
    );
}

if (!code.includes("admin-agents")) {
code = code.replace(
    /else if \(currentPage === 'admin-testimonials'\) \{\s*appDiv\.innerHTML = getAdminTestimonialsHTML\(\);\s*\}/,
    match => match + `
    } else if (currentPage === 'admin-agents') {
        appDiv.innerHTML = getAdminAgentsHTML();
    } else if (currentPage === 'agent-portal') {
        appDiv.innerHTML = getAgentPortalHTML();
    } else if (currentPage === 'agent-dashboard') {
        appDiv.innerHTML = getAgentDashboardHTML();`
);
}

// 6. Append WA Reference logic in submitBooking
if (!code.includes("trackRef")) {
    code = code.replace(
        /let waMessage = `Halo Admin Houmi, saya ingin pesan \*.*\*\.\\n\\n` \+/,
        "const trackRef = localStorage.getItem('HOUMI_TRACKING_REF');\n        let waMessage = `Halo Admin Houmi, saya ingin pesan *${villaName}*.\\n` +\n            (trackRef ? `(Kode Agen / Referral: ${trackRef})\\n\\n` : '\\n') +"
    );
}

// 7. Add Menu in the Mobile Hamburger
if (!code.includes("Portal Mitra Agen")) {
    code = code.replace(
        /<button onclick="toggleMobileMenu\(\); navigateTo\('home'\)"[^>]+>.*?<\/button>/,
        match => match + `\n                <button onclick="toggleMobileMenu(); navigateTo('agent-portal')" class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 hover:text-primary w-full text-left p-3 rounded-xl transition-all"><i data-lucide="users" class="w-5 h-5 text-gray-400"></i> <span class="font-bold">Portal Mitra Agen</span></button>`
    );
}

fs.writeFileSync('d:/LOCALHOST/houmi/houmi.js', code);
console.log('Affiliate patch completed successfully.');
