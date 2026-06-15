// ==========================================================================
// INITIALIZATION & DYNAMIC STATES
// ==========================================================================

// Global state for participants data and statistics
const participantState = {
    totalRegistered: 125,
    attendanceRate: 96,
    avgEvaluation: 4.8,
    reportsGenerated: 84,
    
    // Initial mock participants database for Panitia Dashboard
    participants: [
        { id: 1, name: "Siti Halimah, S.Pd.", nip: "19920814 201802 2 003", school: "SDN 02 Singkawang Selatan", district: "Singkawang Selatan", reportStatus: "Sudah Dibuat" },
        { id: 2, name: "Budi Pratama, S.Pd.SD.", nip: "19840510 200904 1 001", school: "SDN 09 Singkawang Tengah", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 3, name: "Amelia Rosa, S.Pd.", nip: "19951225 202010 2 005", school: "SDN 15 Singkawang Utara", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 4, name: "Hendra Wijaya, S.Pd.B.", nip: "19890104 201402 1 003", school: "SDN 01 Singkawang Barat", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 5, name: "Kartika Sari, S.Pd.", nip: "19910319 201708 2 002", school: "SDN 05 Singkawang Timur", district: "Singkawang Timur", reportStatus: "Belum Dibuat" }
    ],
    
    // Evaluation rating counts
    evaluations: {
        stars5: 98,
        stars4: 21,
        stars3: 5,
        stars2: 1,
        stars1: 0
    },
    
    // Attendance counts per session
    attendance: {
        pembukaan: 121,
        materi1: 119,
        praktik1: 120,
        materi2: 118,
        praktik2: 117
    }
};

// Current active report data (used in previews and downloads)
let currentReportData = {
    nama: "Budi Santoso, S.Pd.",
    nip: "19880415 201101 1 002",
    sekolah: "SDN 12 Singkawang Barat",
    kecamatan: "Singkawang Barat",
    materi: [
        "Konsep Dasar Pembelajaran Numerasi Menyenangkan",
        "Pengembangan Alat Peraga Matematika Kreatif",
        "Gamifikasi Kelas Menggunakan Papan Grid Geometri",
        "Pembuatan Media Pembelajaran Interaktif Digital"
    ],
    kesan: "Pelatihan ini memberikan wawasan baru tentang pentingnya menghidupkan suasana gembira dalam kelas numerasi dasar.",
    implementasi: "Menerapkan media visual dadu numerasi untuk pengenalan pecahan di kelas 4 SDN 12 Singkawang Barat."
};

// Dashboard Chart references
let kehadiranChartObj = null;
let evaluasiChartObj = null;

// Initialize Lucide Icons & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialise Lucide Icons
    lucide.createIcons();
    
    // Sticky Header scroll reveal
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-open');
        });
        
        // Close menu on link click (mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
            });
        });
    }
    
    // Scroll Reveal Intersection Observer
    initScrollReveal();
    
    // Initialize Dashboard data table
    renderDashboardTable();
});

// ==========================================================================
// SCROLL EFFECTS & REVEAL ANIMATIONS
// ==========================================================================
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll section
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a:not(.highlight-nav)');
    
    let currentSectionId = '';
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 120;
        const secHeight = sec.clientHeight;
        if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
            currentSectionId = sec.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.15
    });
    
    reveals.forEach(el => observer.observe(el));
}

// ==========================================================================
// DIGITAL MATERIAL SEARCH & FILTERS
// ==========================================================================
function filterCategory(category, btnElement) {
    // Toggle active filter button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const searchVal = document.getElementById('material-search').value.toLowerCase();
    const cards = document.querySelectorAll('#materials-container .material-card');
    
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        const cardDesc = card.querySelector('p').innerText.toLowerCase();
        
        const matchesCat = (category === 'semua' || cardCat === category);
        const matchesSearch = (cardTitle.includes(searchVal) || cardDesc.includes(searchVal));
        
        if (matchesCat && matchesSearch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function filterMaterials() {
    const activeBtn = document.querySelector('.filter-btn.active');
    let category = 'semua';
    if (activeBtn) {
        const text = activeBtn.innerText.toLowerCase();
        if (text.includes('modul')) category = 'modul';
        if (text.includes('game') || text.includes('edugame')) category = 'edugame';
        if (text.includes('surat') || text.includes('undangan') || text.includes('dokumen')) category = 'dokumen';
    }
    
    const searchVal = document.getElementById('material-search').value.toLowerCase();
    const cards = document.querySelectorAll('#materials-container .material-card');
    
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        const cardDesc = card.querySelector('p').innerText.toLowerCase();
        
        const matchesCat = (category === 'semua' || cardCat === category);
        const matchesSearch = (cardTitle.includes(searchVal) || cardDesc.includes(searchVal));
        
        if (matchesCat && matchesSearch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Mock Download simulator with toast notification
function downloadSimulator(fileName) {
    showToast(`Memulai pengunduhan berkas: ${fileName}`, 'download');
    setTimeout(() => {
        showToast(`Selesai mengunduh: ${fileName}`, 'check-circle');
    }, 2000);
}

// ==========================================================================
// VIDEO CENTER FILTER & MODAL PLAYER
// ==========================================================================


// ==========================================================================
// PORTAL PESERTA INTERACTIVITY (TABS, FORMS, UPLOADS)
// ==========================================================================
function switchPortalTab(tabName, btnElement) {
    const buttons = document.querySelectorAll('.portal-tab-link');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const panes = document.querySelectorAll('.portal-pane');
    panes.forEach(pane => pane.classList.remove('active'));
    
    const targetPane = document.getElementById(`portal-${tabName}`);
    if (targetPane) {
        targetPane.classList.add('active');
    }
    lucide.createIcons();
}

// Presensi form submit
function handlePresensiSubmit(event) {
    event.preventDefault();
    const nama = document.getElementById('p-nama').value;
    const nip = document.getElementById('p-nip').value || '-';
    const sekolah = document.getElementById('p-sekolah').value;
    const hari = document.getElementById('p-hari').value;
    
    // Add dynamically to dashboard database
    const newId = participantState.participants.length + 1;
    const words = sekolah.split(' ');
    // Try to extract district based on common school naming in Singkawang
    let district = "Singkawang Barat";
    if (sekolah.toLowerCase().includes("selatan")) district = "Singkawang Selatan";
    if (sekolah.toLowerCase().includes("tengah")) district = "Singkawang Tengah";
    if (sekolah.toLowerCase().includes("utara")) district = "Singkawang Utara";
    if (sekolah.toLowerCase().includes("timur")) district = "Singkawang Timur";

    participantState.participants.push({
        id: newId,
        name: nama,
        nip: nip,
        school: sekolah,
        district: district,
        reportStatus: "Belum Dibuat"
    });
    
    // Update attendance counts in state
    participantState.totalRegistered += 1;
    if (hari.includes("Hari 1")) {
        participantState.attendance.materi1 += 1;
        participantState.attendance.praktik1 += 1;
    } else {
        participantState.attendance.materi2 += 1;
        participantState.attendance.praktik2 += 1;
    }
    
    // Update local statistics rendering
    updateDashboardStats();
    renderDashboardTable();
    if (kehadiranChartObj) {
        kehadiranChartObj.data.datasets[0].data = [
            participantState.attendance.pembukaan,
            participantState.attendance.materi1,
            participantState.attendance.praktik1,
            participantState.attendance.materi2,
            participantState.attendance.praktik2
        ];
        kehadiranChartObj.update();
    }
    
    showToast(`Presensi berhasil! Terima kasih ${nama}.`, 'check-circle');
    document.getElementById('form-presensi').reset();
}

// Evaluation Rating star handler
function setRating(field, score) {
    const parent = document.getElementById(`star-${field}`);
    const hiddenInput = document.getElementById(`val-${field}`);
    if (parent && hiddenInput) {
        hiddenInput.value = score;
        const stars = parent.querySelectorAll('.star-icon');
        stars.forEach((star, idx) => {
            if (idx < score) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
}

// Evaluasi Form submit
function handleEvaluasiSubmit(event) {
    event.preventDefault();
    const nama = document.getElementById('e-nama').value || 'Anonim';
    const sekolah = document.getElementById('e-sekolah').value;
    const kepuasan = parseInt(document.getElementById('val-kepuasan').value);
    const manfaat = parseInt(document.getElementById('val-manfaat').value);
    
    // Update state evaluations distribution
    const scoreKey = `stars${kepuasan}`;
    if (participantState.evaluations[scoreKey] !== undefined) {
        participantState.evaluations[scoreKey] += 1;
    }
    
    // Recalculate average evaluation
    let totalScore = 0;
    let totalResponses = 0;
    for (let s = 1; s <= 5; s++) {
        const count = participantState.evaluations[`stars${s}`];
        totalScore += count * s;
        totalResponses += count;
    }
    participantState.avgEvaluation = (totalScore / totalResponses).toFixed(2);
    
    // Update dashboard visual values
    updateDashboardStats();
    if (evaluasiChartObj) {
        evaluasiChartObj.data.datasets[0].data = [
            participantState.evaluations.stars5,
            participantState.evaluations.stars4,
            participantState.evaluations.stars3,
            participantState.evaluations.stars2,
            participantState.evaluations.stars1
        ];
        evaluasiChartObj.update();
    }
    
    showToast(`Terima kasih! Evaluasi Anda berhasil kami terima.`, 'check-circle');
    document.getElementById('form-evaluasi').reset();
    
    // Reset star rating representation back to 5 stars
    setRating('kepuasan', 5);
    setRating('manfaat', 5);
}

// File uploading mock interactions
function triggerFileInput() {
    document.getElementById('file-input').click();
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = 'var(--color-secondary)';
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = 'var(--color-border)';
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        simulateFileUpload(files[0]);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        simulateFileUpload(files[0]);
    }
}

let uploadTimer = null;
function simulateFileUpload(file) {
    const progressBox = document.getElementById('upload-progress-box');
    const filenameLabel = document.getElementById('upload-filename');
    const filesizeLabel = document.getElementById('upload-filesize');
    const fill = document.getElementById('progress-bar-fill');
    const percentText = document.getElementById('upload-percent');
    
    filenameLabel.innerText = file.name;
    filesizeLabel.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
    
    progressBox.classList.remove('hidden');
    fill.style.width = '0%';
    percentText.innerText = '0% Sedang diunggah...';
    
    let progress = 0;
    if (uploadTimer) clearInterval(uploadTimer);
    
    uploadTimer = setInterval(() => {
        progress += 10;
        fill.style.width = `${progress}%`;
        percentText.innerText = `${progress}% Sedang diunggah...`;
        
        if (progress >= 100) {
            clearInterval(uploadTimer);
            percentText.innerHTML = '<span style="color:var(--color-success)">✓ Selesai diunggah! Berkas Anda berhasil terekam panitia.</span>';
            showToast(`Berkas ${file.name} berhasil diunggah!`, 'check-circle');
        }
    }, 150);
}

function cancelUpload() {
    if (uploadTimer) clearInterval(uploadTimer);
    const progressBox = document.getElementById('upload-progress-box');
    progressBox.classList.add('hidden');
    showToast('Unggahan dibatalkan.', 'x');
}

// ==========================================================================
// AUTOMATIC REPORT GENERATOR & PREVIEWS
// ==========================================================================
function openReportModal() {
    document.getElementById('report-modal').classList.add('active');
}

function closeReportModal() {
    document.getElementById('report-modal').classList.remove('active');
}

function closeReportPreviewModal() {
    document.getElementById('report-preview-modal').classList.remove('active');
}

function generateLaporanPreview(event) {
    event.preventDefault();
    
    const nama = document.getElementById('rep-nama').value;
    const nip = document.getElementById('rep-nip').value;
    const sekolah = document.getElementById('rep-sekolah').value;
    const kecamatan = document.getElementById('rep-kecamatan').value;
    const kesan = document.getElementById('rep-kesan').value;
    const implementasi = document.getElementById('rep-implementasi').value;
    
    // Selected material checklist
    const selectedMaterials = [];
    const checkboxed = document.querySelectorAll('input[name="rep-materi"]:checked');
    checkboxed.forEach(chk => {
        selectedMaterials.push(chk.value);
    });
    
    // Store in global reference
    currentReportData = {
        nama: nama,
        nip: nip,
        sekolah: sekolah,
        kecamatan: kecamatan,
        materi: selectedMaterials,
        kesan: kesan,
        implementasi: implementasi
    };
    
    // Populate Preview Document elements
    document.getElementById('cov-nama').innerText = nama;
    document.getElementById('cov-nip').innerText = nip;
    document.getElementById('cov-sekolah').innerText = sekolah;
    document.getElementById('cov-kecamatan').innerText = kecamatan;
    
    document.getElementById('sig-peserta-nama').innerText = nama;
    document.getElementById('sig-peserta-nip').innerText = nip;
    
    // Materials list populate
    const listContainer = document.getElementById('preview-materi-list');
    listContainer.innerHTML = '';
    selectedMaterials.forEach(mat => {
        const li = document.createElement('li');
        li.innerText = mat;
        listContainer.appendChild(li);
    });
    
    document.getElementById('preview-implementasi-text').innerText = implementasi;
    document.getElementById('preview-kesan-text').innerText = kesan;
    
    // Dynamically flag report generated count in state
    participantState.reportsGenerated += 1;
    updateDashboardStats();
    
    // Toggle status in dashboard table for matching name
    const matchingParticipant = participantState.participants.find(p => p.name.toLowerCase().includes(nama.toLowerCase()) || nama.toLowerCase().includes(p.name.toLowerCase()));
    if (matchingParticipant) {
        matchingParticipant.reportStatus = "Sudah Dibuat";
        renderDashboardTable();
    }
    
    // Close form, show preview A4
    closeReportModal();
    document.getElementById('report-preview-modal').classList.add('active');
    lucide.createIcons();
}

// Download PDF using jsPDF
function downloadPDFReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    const r = currentReportData;
    
    // Page 1: COVER
    // Double Border
    doc.setDrawColor(15, 23, 42); // Primary color slate
    doc.setLineWidth(1.5);
    doc.rect(8, 8, 194, 281);
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 277);
    
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("LAPORAN PENGEMBANGAN DIRI", 105, 40, { align: "center" });
    
    doc.setFontSize(12);
    doc.text("PARTISIPASI AKTIF DALAM KEGIATAN", 105, 48, { align: "center" });
    doc.setFontSize(15);
    doc.text("PELATIHAN PENINGKATAN KOMPETENSI GURU", 105, 56, { align: "center" });
    doc.text("MELALUI METODE MATEMATIKA GEMBIRA", 105, 64, { align: "center" });
    doc.setFontSize(11);
    doc.text("TANGGAL: 17–18 JUNI 2026 | KOTA SINGKAWANG", 105, 72, { align: "center" });
    
    // Line separator
    doc.setDrawColor(217, 119, 6); // Accent Gold
    doc.setLineWidth(1);
    doc.line(40, 80, 170, 80);
    
    // Draw simple math geometric symbol
    doc.ellipse(105, 115, 18, 18);
    doc.text("f(x)", 105, 117, { align: "center" });
    doc.line(95, 125, 115, 125);
    
    // Participant Metadata info
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(11);
    doc.text("Disusun Oleh (Peserta):", 105, 160, { align: "center" });
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(13);
    doc.text(r.nama, 105, 168, { align: "center" });
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`NIP / NUPTK: ${r.nip}`, 105, 176, { align: "center" });
    doc.text(`Sekolah: ${r.sekolah}`, 105, 184, { align: "center" });
    doc.text(`Kecamatan: ${r.kecamatan}`, 105, 192, { align: "center" });
    
    // Bottom publishing organizers
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.text("DINAS PENDIDIKAN DAN KEBUDAYAAN KOTA SINGKAWANG", 105, 240, { align: "center" });
    doc.text("IKATAN GURU INDONESIA (IGI) KOTA SINGKAWANG", 105, 248, { align: "center" });
    doc.setFont("Helvetica", "normal");
    doc.text("Tahun 2026", 105, 256, { align: "center" });
    
    // Page 2: CONTENT
    doc.addPage();
    
    // Page Header
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text("Laporan Pengembangan Diri - Pelatihan Matematika Gembira Singkawang 2026", 20, 15);
    doc.line(20, 17, 190, 17);
    
    doc.setTextColor(0, 0, 0);
    
    // Chapter I
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.text("BAB I: PENDAHULUAN", 20, 28);
    
    doc.setFontSize(10);
    doc.text("1.1 Latar Belakang", 20, 36);
    doc.setFont("Helvetica", "normal");
    let text1 = "Matematika adalah landasan berpikir logis dan pemecahan masalah yang mendasar bagi jenjang pendidikan selanjutnya. Namun, di tingkat Sekolah Dasar, matematika kerap kali menjadi mata pelajaran yang kurang diminati karena metode pembelajaran konvensional yang kaku. Menyadari hal tersebut, Dinas Pendidikan bersama IGI Singkawang memprogramkan Pelatihan Matematika Gembira guna membekali guru agar mampu merancang metode mengajar yang interaktif.";
    let splitText1 = doc.splitTextToSize(text1, 170);
    doc.text(splitText1, 20, 42);
    
    // Chapter II
    doc.setFont("Helvetica", "bold");
    doc.text("BAB II: PELAKSANAAN KEGIATAN", 20, 75);
    doc.setFont("Helvetica", "normal");
    doc.text("Waktu Pelaksanaan: Rabu–Kamis, 17–18 Juni 2026", 20, 83);
    doc.text("Tempat: Aula Dinas Pendidikan & Kebudayaan Kota Singkawang", 20, 89);
    doc.text("Tujuan: Meningkatkan keahlian materi dan digitalisasi numerasi guru SD.", 20, 95);
    
    // Chapter III
    doc.setFont("Helvetica", "bold");
    doc.text("BAB III: MATERI KOMPETENSI YANG DIPEROLEH", 20, 110);
    doc.setFont("Helvetica", "normal");
    doc.text("Dalam kegiatan ini, penyusun telah mendalami materi kompetensi utama berikut:", 20, 117);
    
    let yOffset = 124;
    r.materi.forEach((mat, idx) => {
        doc.text(`[x]  ${mat}`, 25, yOffset);
        yOffset += 6;
    });
    
    // Chapter IV & V
    doc.setFont("Helvetica", "bold");
    doc.text("BAB IV: IMPLEMENTASI RTL DI SEKOLAH", 20, yOffset + 6);
    doc.setFont("Helvetica", "normal");
    let splitImpl = doc.splitTextToSize(r.implementasi, 170);
    doc.text(splitImpl, 20, yOffset + 12);
    
    yOffset = yOffset + 12 + (splitImpl.length * 5);
    
    doc.setFont("Helvetica", "bold");
    doc.text("BAB V: REFLEKSI DAN TINDAK LANJUT", 20, yOffset + 6);
    doc.setFont("Helvetica", "normal");
    let splitKesan = doc.splitTextToSize(r.kesan, 170);
    doc.text(splitKesan, 20, yOffset + 12);
    
    yOffset = yOffset + 12 + (splitKesan.length * 5);
    
    // Signatures
    doc.setFontSize(10);
    doc.text("Mengetahui,", 25, yOffset + 15);
    doc.text("Kepala Sekolah,", 25, yOffset + 20);
    doc.text("___________________________", 25, yOffset + 40);
    doc.text("NIP. ", 25, yOffset + 46);
    
    doc.text("Singkawang, 19 Juni 2026", 120, yOffset + 15);
    doc.text("Penyusun Laporan,", 120, yOffset + 20);
    doc.setFont("Helvetica", "bold");
    doc.text(r.nama, 120, yOffset + 40);
    doc.setFont("Helvetica", "normal");
    doc.text(`NIP. ${r.nip}`, 120, yOffset + 46);
    
    // Save document
    const safeName = r.nama.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`Laporan_Kegiatan_Matematika_Gembira_${safeName}.pdf`);
    
    showToast("PDF Laporan Berhasil Didownload!", "check-circle");
    closeReportPreviewModal();
}

// Generate MS Word report (structured HTML converted to Docx)
function downloadWordReport() {
    const r = currentReportData;
    const safeName = r.nama.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    
    // Format materials list as HTML string
    let materialsHtml = '';
    r.materi.forEach(mat => {
        materialsHtml += `<li>${mat}</li>`;
    });
    
    // MS Word formatted HTML content template
    const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <title>Laporan Kegiatan Pelatihan Matematika Gembira</title>
        <style>
            body { font-family: 'Times New Roman', serif; line-height: 1.5; }
            h1 { text-align: center; font-size: 16pt; font-weight: bold; margin-top: 50px; }
            h2 { text-align: center; font-size: 14pt; font-weight: bold; margin-bottom: 30px; }
            h3 { font-size: 12pt; font-weight: bold; text-align: center; margin-top: 30px; }
            p { font-size: 11pt; text-align: justify; }
            .indent { text-indent: 40px; }
            .cover-box { border: 3px double #000000; padding: 30px; margin: 20px; }
            .meta-table { width: 100%; border: none; margin: 40px 0; }
            .sig-table { width: 100%; border: none; margin-top: 50px; }
        </style>
    </head>
    <body>
        <!-- Page 1: COVER -->
        <div class="cover-box" style="text-align:center;">
            <h1>LAPORAN PENGEMBANGAN DIRI</h1>
            <h2>MENGIKUTI KEGIATAN PELATIHAN PENINGKATAN KOMPETENSI GURU MELALUI MATEMATIKA GEMBIRA</h2>
            <br><br><br>
            <p style="text-align:center;"><b>Disusun Oleh:</b></p>
            <p style="text-align:center; font-size:13pt; text-decoration:underline;"><b>${r.nama}</b></p>
            <p style="text-align:center;">NIP: ${r.nip}</p>
            <p style="text-align:center;">Instansi: ${r.sekolah}</p>
            <p style="text-align:center;">Kecamatan: ${r.kecamatan}</p>
            <br><br><br><br>
            <p style="text-align:center;"><b>DINAS PENDIDIKAN DAN KEBUDAYAAN KOTA SINGKAWANG</b></p>
            <p style="text-align:center;"><b>IKATAN GURU INDONESIA (IGI) KOTA SINGKAWANG</b></p>
            <p style="text-align:center;">Tahun 2026</p>
        </div>
        
        <br style="page-break-before:always; clear:both;">
        
        <!-- Page 2: CONTENT -->
        <h3>BAB I: PENDAHULUAN</h3>
        <p><b>1.1 Latar Belakang</b></p>
        <p class="indent">Matematika seringkali dianggap sebagai mata pelajaran yang menakutkan, kaku, dan sulit dipahami oleh siswa Sekolah Dasar. Pendekatan konvensional yang berfokus pada hafalan rumus membuat siswa jenuh dan kehilangan minat belajar. Pelatihan Matematika Gembira hadir untuk membekali guru dengan kompetensi numerasi interaktif.</p>
        <p><b>1.2 Tujuan</b></p>
        <p class="indent">Tujuan mengikuti pelatihan ini adalah meningkatkan kompetensi numerasi, melatih pembuatan alat peraga kreatif, dan menerapkan media digital gamifikasi pada kelas matematika SD.</p>
        
        <h3>BAB II: PELAKSANAAN KEGIATAN</h3>
        <p>Kegiatan dilaksanakan pada:</p>
        <table style="width:100%; border:1px solid #000; border-collapse:collapse;">
            <tr><td style="border:1px solid #000; padding:6px;"><b>Tanggal</b></td><td style="border:1px solid #000; padding:6px;">17–18 Juni 2026</td></tr>
            <tr><td style="border:1px solid #000; padding:6px;"><b>Tempat</b></td><td style="border:1px solid #000; padding:6px;">Aula Dinas Pendidikan & Kebudayaan Kota Singkawang</td></tr>
            <tr><td style="border:1px solid #000; padding:6px;"><b>Penyelenggara</b></td><td style="border:1px solid #000; padding:6px;">Dinas Pendidikan & IGI Kota Singkawang</td></tr>
        </table>

        <h3>BAB III: MATERI YANG DIPEROLEH</h3>
        <p>Penyusun memperoleh beberapa kompetensi inti berikut:</p>
        <ul>
            ${materialsHtml}
        </ul>

        <h3>BAB IV: IMPLEMENTASI DI SEKOLAH</h3>
        <p><b>4.1 Rencana Tindak Lanjut (RTL)</b></p>
        <p class="indent">${r.implementasi}</p>

        <h3>BAB V: REFLEKSI DAN TINDAK LANJUT</h3>
        <p><b>5.1 Refleksi Hasil</b></p>
        <p class="indent">${r.kesan}</p>
        <p><b>5.2 Tindak Lanjut</b></p>
        <p class="indent">Hasil pelatihan akan dipaparkan dan dibagikan kepada rekan sejawat di forum Kelompok Kerja Guru (KKG) gugus sekolah dasar.</p>

        <table class="sig-table">
            <tr>
                <td style="width:50%;">
                    Mengetahui,<br>Kepala Sekolah
                    <br><br><br><br>
                    ___________________________<br>NIP.
                </td>
                <td style="width:50%; text-align:right;">
                    Singkawang, 19 Juni 2026<br>Penyusun Laporan,
                    <br><br><br><br>
                    <b>${r.nama}</b><br>NIP. ${r.nip}
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
    
    const blob = new Blob(['\ufeff' + content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_Kegiatan_Matematika_Gembira_${safeName}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast("Dokumen Word Laporan Berhasil Didownload!", "check-circle");
    closeReportPreviewModal();
}

// ==========================================================================
// SPEAKER BIO INFRASTRUCTURE & DETAIL MODAL
// ==========================================================================
const speakerBioData = {
    1: {
        nama: "Reno Susanto, S.Pd",
        lahir: "Setapuk Besar, 25 Mei 1989",
        sekolah: "SD Negeri 89 Singkawang",
        alamat: "Jalan Demang Akub, Kel. Sungai Rasau, Kota Singkawang",
        kontak: "083151498262",
        email: "renosusanto7@gmail.com",
        motto: "Bahagia Selalu dengan Senyum",
        foto: "assets/narsum/narsum_1.jpg",
        role: "Fasilitator Matematika Gasing | Ketua KKG Gugus 18",
        profil: "Reno Susanto, S.Pd. merupakan guru profesional di SD Negeri 89 Singkawang dengan keahlian utama pada pembelajaran matematika metode Gasing (Gampang, Asyik, dan Menyenangkan). Beliau aktif sebagai fasilitator pelatihan guru tingkat kota dan kabupaten, serta menjabat sebagai Ketua KKG Gugus 18 Kota Singkawang.",
        pendidikan: [
            { tahun: "-", jenjang: "SD", institusi: "SD Negeri 5 Singkawang Utara" },
            { tahun: "-", jenjang: "SMP", institusi: "SMP Negeri 8 Singkawang" },
            { tahun: "-", jenjang: "SMK", institusi: "SMK Negeri 2 Singkawang, Jurusan Administrasi Perkantoran" },
            { tahun: "-", jenjang: "S1", institusi: "Universitas Terbuka" },
            { tahun: "Proses", jenjang: "S2", institusi: "Magister – Dalam Proses" }
        ],
        pengalaman: [
            "Pengajar AT Gasing Kota Singkawang",
            "Pengajar AT Gasing Kabupaten Parigi Moutong, Provinsi Sulawesi Tengah",
            "Fasilitator Matematika Gembira",
            "Ketua KKG Gugus 18 Kota Singkawang",
            "Sekretaris PSLCC (Smart Learning and Character Center) – PGRI"
        ],
        keahlian: [
            "Pembelajaran Matematika Metode Gasing",
            "Pendampingan dan Pelatihan Guru",
            "Fasilitasi Kegiatan Pengembangan Kompetensi Pendidik",
            "Penguatan Komunitas Belajar dan KKG"
        ],
        materi: "Matematika Gembira: Metode Gasing sebagai Pendekatan Numerasi Aktif dan Menyenangkan untuk Siswa SD"
    },
    2: {
        nama: "U. Witra Ardita, S.Pd",
        lahir: "Singkawang, 19 Mei 1987",
        sekolah: "SD Negeri 17 Singkawang",
        alamat: "Jalan Bambang Ismoyo, Kel. Jawa, Kota Singkawang",
        kontak: "089518362159",
        email: "uraywitraardita123@gmail.com",
        motto: "Berusaha, Berdoa, dan Bersyukur",
        foto: "assets/narsum/narsum_2.png",
        role: "Guru SD | Praktisi Pembelajaran Inovatif",
        profil: "U. Witra Ardita, S.Pd. adalah guru di SD Negeri 17 Singkawang dengan pengalaman luas di bidang profesional sebelum terjun ke dunia pendidikan. Beliau membawa perspektif unik dari dunia industri ke dalam kelas, menciptakan pendekatan pembelajaran yang adaptif, kreatif, dan relevan dengan kebutuhan siswa masa kini.",
        pendidikan: [
            { tahun: "-", jenjang: "SD", institusi: "SD Negeri 1 Singkawang" },
            { tahun: "-", jenjang: "SMP", institusi: "SMP Negeri 4 Singkawang" },
            { tahun: "-", jenjang: "SMA", institusi: "SMU Negeri 3 Singkawang" },
            { tahun: "-", jenjang: "S1", institusi: "Universitas Terbuka" }
        ],
        pengalaman: [
            "Karyawan Swasta (Kaisar Bakery, Nestle, Mustika Ratu, Martha Tilaar, Pixy, Konimex, Vitalis) — Kasir, Admin, Beauty Advisor, MD (2006–2017)",
            "Guru SD Negeri 17 Singkawang (2017 – Sekarang)"
        ],
        keahlian: [
            "Pembelajaran Adaptif dan Inovatif",
            "Manajemen Kelas yang Efektif",
            "Pendekatan Kontekstual dalam Pembelajaran",
            "Komunikasi dan Kolaborasi Profesional"
        ],
        materi: "Inovasi Pembelajaran Matematika: Menghadirkan Suasana Belajar yang Menyenangkan di Kelas SD"
    },
    3: {
        nama: "Dewi Susanti, S.Pd",
        lahir: "Singkawang, 27 September 1992",
        sekolah: "SDN 70 Singkawang",
        alamat: "Jalan Sebakuan RT.03 RW.04, Kel. Mayasopa, Kec. Singkawang Timur",
        kontak: "0895354804666",
        email: "sdewi1365@gmail.com",
        motto: "Jadi lebih baik setiap hari",
        foto: "assets/narsum/narsum_3.png",
        role: "Guru SD | Anggota PGRI | Fasilitator KKG",
        profil: "Dewi Susanti, S.Pd. adalah guru di SDN 70 Singkawang yang menyelesaikan pendidikan sarjananya di Program Studi PGSD Universitas Tanjungpura. Beliau aktif dalam organisasi PGRI dan memiliki keahlian dalam fasilitasi kegiatan pengembangan kompetensi pendidik serta penguatan komunitas belajar di tingkat gugus.",
        pendidikan: [
            { tahun: "-", jenjang: "SD", institusi: "SD Negeri 8 Singkawang Tengah" },
            { tahun: "-", jenjang: "SMP", institusi: "SMP Negeri 4 Singkawang" },
            { tahun: "-", jenjang: "SMA", institusi: "SMA Negeri 3 Singkawang" },
            { tahun: "-", jenjang: "S1", institusi: "Universitas Tanjungpura, Program Studi PGSD" }
        ],
        pengalaman: [
            "Guru di SDN 70 Singkawang",
            "Anggota Organisasi PGRI Kota Singkawang",
            "Fasilitator Kegiatan Pengembangan Kompetensi Pendidik",
            "Penggerak Komunitas Belajar dan KKG"
        ],
        keahlian: [
            "Fasilitasi Pengembangan Kompetensi Pendidik",
            "Penguatan Komunitas Belajar dan KKG",
            "Pembelajaran PGSD Berbasis Kurikulum Merdeka",
            "Kolaborasi dan Mentoring Antar Guru"
        ],
        materi: "Penguatan Komunitas Belajar: Strategi Kolaboratif Guru dalam Mengimplementasikan Matematika Gembira"
    },
    4: {
        nama: "Yeni Febry Astuti, S.Pd",
        lahir: "Pemangkat, 15 Februari 1988",
        sekolah: "SD Negeri 94 Singkawang",
        alamat: "Jalan Demang Akub, Kel. Sungai Naram, Kota Singkawang",
        kontak: "0895352564764",
        email: "yenifebryastuti19@gmail.com",
        motto: "Lebih baik mencoba lalu gagal daripada menyesal karena tidak pernah memulai.",
        foto: "assets/narsum/narsum_4.png",
        role: "Guru SD | Praktisi PPKn & PGSD",
        profil: "Yeni Febry Astuti, S.Pd. adalah guru berpengalaman di SD Negeri 94 Singkawang dengan dua gelar sarjana, yaitu PPKn dari STKIP PGRI Pontianak dan PGSD dari Universitas Terbuka. Perpaduan keahlian pendidikan kewarganegaraan dan guru sekolah dasar menjadikan beliau fasilitator yang mampu mengintegrasikan nilai karakter dalam setiap pembelajaran, termasuk matematika.",
        pendidikan: [
            { tahun: "-", jenjang: "SD", institusi: "SD Negeri 7 Singkawang" },
            { tahun: "-", jenjang: "SMP", institusi: "SMP Negeri 4 Singkawang" },
            { tahun: "-", jenjang: "SMK", institusi: "SMK Negeri 2 Singkawang, Jurusan Administrasi Perkantoran" },
            { tahun: "-", jenjang: "S1", institusi: "STKIP PGRI Pontianak, Jurusan PPKn" },
            { tahun: "-", jenjang: "S1", institusi: "Universitas Terbuka, Jurusan PGSD" }
        ],
        pengalaman: [
            "Guru di SDN 4 Singkawang (2009 – 2017)",
            "Guru di SDN 94 Singkawang (2017 – Sekarang)"
        ],
        keahlian: [
            "Pendidikan Kewarganegaraan (PPKn)",
            "Pendidikan Guru Sekolah Dasar (PGSD)",
            "Integrasi Nilai Karakter dalam Pembelajaran",
            "Desain Pembelajaran Aktif dan Kreatif"
        ],
        materi: "Integrasi Nilai Karakter dan Pendidikan Karakter dalam Pembelajaran Matematika yang Menyenangkan"
    },
    5: {
        nama: "Harini Pawi, S.Pd",
        lahir: "Matang Segantar, 12 Maret 1995",
        sekolah: "SD Negeri 63 Singkawang",
        alamat: "Jalan Raya Naram, Kel. Naram, Kec. Singkawang Utara",
        kontak: "085939305595",
        email: "harinipawi.123@gmail.com",
        motto: "Man Jadda Wa Jada (Siapa yang bersungguh-sungguh pasti berhasil)",
        foto: "assets/narsum/narsum_5.png",
        role: "Guru SD | Lulusan Universitas Tanjungpura",
        profil: "Harini Pawi, S.Pd. adalah guru muda bersemangat di SD Negeri 63 Singkawang. Lulusan Universitas Tanjungpura Pontianak ini telah meniti karier mengajar sejak 2017, dengan pengalaman mengajar di berbagai jenjang sekolah mulai dari SMK hingga SMP sebelum bergabung di SD Negeri 63 Singkawang. Dedikasi dan semangat belajarnya menjadi inspirasi bagi peserta pelatihan.",
        pendidikan: [
            { tahun: "2000–2006", jenjang: "SD", institusi: "SD Negeri 9 Danau Peradah (Paloh)" },
            { tahun: "2006–2011", jenjang: "SMP", institusi: "SMP Negeri 3 Teluk Keramat" },
            { tahun: "2011–2013", jenjang: "SMA", institusi: "SMA Negeri 2 Teluk Keramat" },
            { tahun: "2013–2017", jenjang: "S1", institusi: "Universitas Tanjungpura Pontianak, Sarjana Pendidikan" }
        ],
        pengalaman: [
            "Guru di SMKN 1 Paloh (2017 – 2023)",
            "Guru di SMPN 2 Singkawang (2023 – 2024)",
            "Guru di SDN 63 Singkawang (2024 – Sekarang)"
        ],
        keahlian: [
            "Adaptasi Pembelajaran Lintas Jenjang",
            "Pendekatan Pembelajaran Aktif dan Inovatif",
            "Manajemen Kelas yang Kondusif",
            "Pengembangan Diri dan Profesionalisme Guru"
        ],
        materi: "Semangat Baru Mengajar: Transformasi Cara Pandang Guru terhadap Pembelajaran Matematika SD"
    },
    6: {
        nama: "Amalia Kiftiah, S.Pd",
        lahir: "Mempawah, 10 Maret 1984",
        sekolah: "SD Negeri 29 Singkawang",
        alamat: "Jalan Pulau Beliung, Kel. Pasiran, Kec. Singkawang Barat 79123",
        kontak: "085245881585",
        email: "amaliakiftiah84@gmail.com",
        motto: "Jangan Menyerah, Allah Bersama Ku",
        foto: "assets/narsum/narsum_6.png",
        role: "Guru SD | Sekretaris APKS PGRI | Ketua KKG Gugus 8",
        profil: "Amalia Kiftiah, S.Pd. merupakan guru senior berpengalaman di SD Negeri 29 Singkawang dengan dua gelar sarjana dan sedang menempuh program Magister (S2). Beliau aktif di organisasi PGRI sebagai Sekretaris APKS (Asosiasi Profesi dan Keahlian Sejenis) serta terlibat dalam KKG Gugus 8, menjadikannya figur penting dalam pengembangan kompetensi guru di Kota Singkawang.",
        pendidikan: [
            { tahun: "-", jenjang: "SD", institusi: "SD Negeri 4 Mempawah" },
            { tahun: "-", jenjang: "MTs", institusi: "MTs Al-Falah Mempawah" },
            { tahun: "-", jenjang: "SMA", institusi: "SMA Negeri 1 Mempawah" },
            { tahun: "-", jenjang: "S1", institusi: "STKIP Pontianak, Jurusan PPKn" },
            { tahun: "-", jenjang: "S1", institusi: "Universitas Terbuka" },
            { tahun: "Proses", jenjang: "S2", institusi: "Magister – Dalam Proses (Bismillah)" }
        ],
        pengalaman: [
            "Guru di SDS Karuna Buddha Maitreya Singkawang",
            "Guru di SD Negeri 29 Singkawang",
            "Pengurus KKG Gugus 8 Kota Singkawang",
            "Sekretaris APKS (Asosiasi Profesi dan Keahlian Sejenis) – Organisasi PGRI"
        ],
        keahlian: [
            "Manajemen Organisasi Profesi Kependidikan",
            "Pengembangan Kompetensi Guru (PPKn & PGSD)",
            "Koordinasi dan Fasilitasi KKG",
            "Kepemimpinan Pendidikan dan Advokasi Guru"
        ],
        materi: "Peran Organisasi Profesi dalam Mendukung Inovasi Pembelajaran Matematika Gembira di Sekolah"
    }
};

function openSpeakerModal(id) {
    const data = speakerBioData[id];
    if (!data) return;

    // Build modal content dynamically
    const modal = document.getElementById('speaker-modal');
    const modalBody = modal.querySelector('.modal-body') || modal.querySelector('.speaker-modal-bio-layout')?.parentElement?.parentElement;
    
    // Find and update the modal content
    const modalInner = modal.querySelector('.modal-card') || modal.querySelector('.modal-content-inner');
    
    // Build the full rich HTML for the modal
    const pendidikanHTML = data.pendidikan.map(p => `
        <div class="cv-timeline-item">
            <div class="cv-timeline-dot"></div>
            <div class="cv-timeline-body">
                <span class="cv-timeline-year">${p.tahun}</span>
                <strong>${p.jenjang}</strong> — ${p.institusi}
            </div>
        </div>`).join('');

    const pengalamanHTML = data.pengalaman.map(e => `
        <div class="cv-exp-item">
            <i data-lucide="check-circle-2"></i>
            <span>${e}</span>
        </div>`).join('');

    const keahlianHTML = data.keahlian.map(k => `<span class="cv-skill-tag">${k}</span>`).join('');

    const fullHTML = `
        <div class="cv-modal-header">
            <div class="cv-photo-wrap">
                <img src="${data.foto}" alt="Foto ${data.nama}" class="cv-modal-photo">
            </div>
            <div class="cv-modal-identity">
                <h2 class="cv-modal-name">${data.nama}</h2>
                <p class="cv-modal-role">${data.role}</p>
                <p class="cv-modal-school"><i data-lucide="school"></i> ${data.sekolah}</p>
                <p class="cv-modal-motto"><i data-lucide="quote"></i> <em>"${data.motto}"</em></p>
                <div class="cv-contact-row">
                    <span><i data-lucide="phone"></i> ${data.kontak}</span>
                    <span><i data-lucide="mail"></i> ${data.email}</span>
                </div>
            </div>
        </div>

        <div class="cv-modal-body">
            <div class="cv-section">
                <h4><i data-lucide="user-circle"></i> Profil Singkat</h4>
                <p>${data.profil}</p>
            </div>

            <div class="cv-section">
                <h4><i data-lucide="graduation-cap"></i> Riwayat Pendidikan</h4>
                <div class="cv-timeline">${pendidikanHTML}</div>
            </div>

            <div class="cv-section">
                <h4><i data-lucide="briefcase"></i> Pengalaman Profesional</h4>
                <div class="cv-exp-list">${pengalamanHTML}</div>
            </div>

            <div class="cv-section">
                <h4><i data-lucide="star"></i> Bidang Keahlian</h4>
                <div class="cv-skills">${keahlianHTML}</div>
            </div>

            <div class="cv-section cv-materi-box">
                <h4><i data-lucide="book-open"></i> Materi pada Pelatihan Matematika Gembira</h4>
                <p class="cv-materi-text">${data.materi}</p>
            </div>
        </div>
    `;

    // Inject into modal
    const target = modal.querySelector('#cv-modal-content');
    if (target) {
        target.innerHTML = fullHTML;
    } else {
        // fallback: update legacy fields if exist
        const namaEl = document.getElementById('sp-modal-nama');
        const roleEl = document.getElementById('sp-modal-role');
        if (namaEl) namaEl.innerText = data.nama;
        if (roleEl) roleEl.innerText = data.role;
    }

    modal.classList.add('active');
    lucide.createIcons();
}

function closeSpeakerModal() {
    document.getElementById('speaker-modal').classList.remove('active');
}


// ==========================================================================
// PANITIA DASHBOARD CONTROL PANEL (PIN: 1234)
// ==========================================================================
function getPanitiaPin() {
    let savedPin = localStorage.getItem('panitia_pin');
    if (!savedPin) {
        savedPin = '1234';
        localStorage.setItem('panitia_pin', savedPin);
    }
    return savedPin;
}

function verifyPin() {
    const pin = document.getElementById('panitia-pin').value;
    const correctPin = getPanitiaPin();
    if (pin === correctPin) {
        document.getElementById('dashboard-login-box').classList.add('hidden');
        document.getElementById('dashboard-main-content').classList.remove('hidden');
        
        // Render Dashboard Stats and Charts
        updateDashboardStats();
        initDashboardCharts();
        renderDashboardTable();
        
        showToast('Buka Dashboard Berhasil!', 'unlock');
    } else {
        showToast('PIN yang Anda masukkan salah!', 'x');
    }
}

function lockDashboard() {
    document.getElementById('dashboard-main-content').classList.add('hidden');
    document.getElementById('dashboard-login-box').classList.remove('hidden');
    document.getElementById('panitia-pin').value = '';
    
    // Destroy charts to allow clean re-initialization
    if (kehadiranChartObj) kehadiranChartObj.destroy();
    if (evaluasiChartObj) evaluasiChartObj.destroy();
    
    showToast('Dashboard Terkunci.', 'lock');
}

function openSettingsModal() {
    document.getElementById('settings-current-pin').value = '';
    document.getElementById('settings-new-pin').value = '';
    document.getElementById('settings-confirm-pin').value = '';
    
    document.getElementById('settings-modal').classList.add('active');
    lucide.createIcons();
}

function closeSettingsModal() {
    document.getElementById('settings-modal').classList.remove('active');
}

function saveNewPin() {
    const currentPinInput = document.getElementById('settings-current-pin').value;
    const newPinInput = document.getElementById('settings-new-pin').value;
    const confirmPinInput = document.getElementById('settings-confirm-pin').value;
    
    const correctPin = getPanitiaPin();
    
    if (currentPinInput !== correctPin) {
        showToast('PIN Saat Ini tidak cocok!', 'x');
        return;
    }
    
    if (newPinInput.length < 4) {
        showToast('PIN baru harus minimal 4 karakter!', 'x');
        return;
    }
    
    if (newPinInput !== confirmPinInput) {
        showToast('Konfirmasi PIN baru tidak cocok!', 'x');
        return;
    }
    
    localStorage.setItem('panitia_pin', newPinInput);
    showToast('PIN Panitia berhasil diubah!', 'check-circle');
    closeSettingsModal();
}

function updateDashboardStats() {
    const s = participantState;
    
    // Safety check if DOM elements exist
    const totalEl = document.getElementById('stat-total-peserta');
    const attEl = document.getElementById('stat-kehadiran');
    const scoreEl = document.getElementById('stat-skor-eval');
    const reportsEl = document.getElementById('stat-laporan');
    
    if (totalEl) totalEl.innerText = s.totalRegistered;
    if (attEl) attEl.innerText = `${s.attendanceRate}%`;
    if (scoreEl) scoreEl.innerText = `${s.avgEvaluation} / 5`;
    if (reportsEl) reportsEl.innerText = s.reportsGenerated;
}

// Initialize Charts inside Dashboard
function initDashboardCharts() {
    // Kehadiran Chart
    const ctxKehadiran = document.getElementById('kehadiranChart');
    if (ctxKehadiran) {
        if (kehadiranChartObj) kehadiranChartObj.destroy();
        
        kehadiranChartObj = new Chart(ctxKehadiran, {
            type: 'bar',
            data: {
                labels: ['Pembukaan', 'Materi 1', 'Praktik 1', 'Materi 2', 'Praktik 2'],
                datasets: [{
                    label: 'Jumlah Kehadiran Peserta',
                    data: [
                        participantState.attendance.pembukaan,
                        participantState.attendance.materi1,
                        participantState.attendance.praktik1,
                        participantState.attendance.materi2,
                        participantState.attendance.praktik2
                    ],
                    backgroundColor: 'rgba(37, 99, 235, 0.8)',
                    borderColor: 'var(--color-secondary)',
                    borderWidth: 1.5,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 135
                    }
                }
            }
        });
    }

    // Evaluasi Chart
    const ctxEvaluasi = document.getElementById('evaluasiChart');
    if (ctxEvaluasi) {
        if (evaluasiChartObj) evaluasiChartObj.destroy();
        
        evaluasiChartObj = new Chart(ctxEvaluasi, {
            type: 'doughnut',
            data: {
                labels: ['Sangat Puas (★5)', 'Puas (★4)', 'Cukup (★3)', 'Kurang (★2)', 'Tidak Puas (★1)'],
                datasets: [{
                    data: [
                        participantState.evaluations.stars5,
                        participantState.evaluations.stars4,
                        participantState.evaluations.stars3,
                        participantState.evaluations.stars2,
                        participantState.evaluations.stars1
                    ],
                    backgroundColor: [
                        '#fbbf24', // Accent gold
                        '#3b82f6', // Secondary blue
                        '#10b981', // Creative green
                        '#64748b', // Grey
                        '#ef4444'  // Red
                    ],
                    borderWidth: 2,
                    borderColor: 'var(--color-bg-light)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: { size: 11 }
                        }
                    }
                }
            }
        });
    }
}

// Render participants list table in Dashboard
function renderDashboardTable() {
    const tbody = document.getElementById('db-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    participantState.participants.forEach((p, idx) => {
        const tr = document.createElement('tr');
        
        const statusClass = p.reportStatus === 'Sudah Dibuat' ? 'badge-success' : 'badge-warning';
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><b>${p.name}</b></td>
            <td>${p.nip}</td>
            <td>${p.school}</td>
            <td>${p.district}</td>
            <td><span class="table-badge ${statusClass}">${p.reportStatus}</span></td>
            <td>
                ${p.reportStatus === 'Sudah Dibuat' 
                    ? `<button onclick="simulateParticipantReportDownload('${p.name}')" class="btn-primary-sm" style="padding: 4px 8px; font-size:0.75rem;"><i data-lucide="download" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:4px;"></i> Unduh</button>`
                    : `<span style="color:var(--color-text-muted); font-size:0.75rem;">Menunggu Form</span>`
                }
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

// Search and filter capabilities for dashboard table
function filterDashboardTable() {
    const searchVal = document.getElementById('table-search').value.toLowerCase();
    const rows = document.querySelectorAll('#participants-table tbody tr');
    
    rows.forEach(row => {
        const name = row.cells[1].innerText.toLowerCase();
        const school = row.cells[3].innerText.toLowerCase();
        const district = row.cells[4].innerText.toLowerCase();
        
        if (name.includes(searchVal) || school.includes(searchVal) || district.includes(searchVal)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Simulation download participant report from admin dashboard
function simulateParticipantReportDownload(participantName) {
    showToast(`Mengekstrak berkas laporan ${participantName}...`, 'file-text');
    setTimeout(() => {
        const safeName = participantName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        showToast(`Mengunduh: Laporan_Kegiatan_${safeName}.pdf`, 'check-circle');
    }, 1500);
}

// ==========================================================================
// TOAST NOTIFICATIONS INFRASTRUCTURE
// ==========================================================================
function showToast(message, iconName = 'check-circle') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    
    if (toast && toastMsg && toastIcon) {
        toastMsg.innerText = message;
        toastIcon.setAttribute('data-lucide', iconName);
        lucide.createIcons();
        
        toast.classList.add('active');
        
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }
}
