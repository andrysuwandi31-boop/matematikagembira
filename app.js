// ==========================================================================
// INITIALIZATION & DYNAMIC STATES
// ==========================================================================

// Global state for participants data and statistics
const participantState = {
    totalRegistered: 93,
    attendanceRate: 96,
    avgEvaluation: 4.8,
    reportsGenerated: 54,
    
    // Initial mock participants database for Panitia Dashboard
            participants: [
        { id: 1, name: "Enie Syafrida, S.Pd.I", nip: "19860112 200910 1 002", school: "MIN SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 2, name: "Sumiyah, S.Pd.", nip: "19810807 200511 1 002", school: "MIN SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Sudah Dibuat" },
        { id: 3, name: "Sari Asih, S.Pd., Gr.", nip: "19850905 200905 1 006", school: "SD PENSIL QU", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 4, name: "Mindi Maria Domitila, S.Pd.", nip: "19850818 200910 1 007", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 5, name: "Sri Rahayu, S. Pd", nip: "19941112 201802 1 002", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 6, name: "Adolio, S.Ag, S.Pd", nip: "19800811 200407 2 002", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 7, name: "Anastasia Icha, S.Pd", nip: "19900906 201306 1 001", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 8, name: "Hopiyeh, S.Pd.", nip: "19870901 201209 2 007", school: "SDIT NURUL ISLAM", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 9, name: "Okta Asmara Yudha, S.Pd", nip: "19940719 201911 1 007", school: "SDIT NURUL ISLAM", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 10, name: "Nilawati, S.Pd.I", nip: "19960214 202011 1 001", school: "SDS BIAM SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 11, name: "Ayu Ardela Sintiana Putri, S.Pd.", nip: "19960715 201905 1 002", school: "SDS BIAM SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 12, name: "LIDIYA, S.Pd", nip: "19880511 201306 2 006", school: "SDN 1 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 13, name: "ANIDA FIQRUNISA, S.Pd", nip: "19940722 201707 2 003", school: "SDN 1 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 14, name: "Muhammad IKhsan, S.Pd.", nip: "19950803 201702 2 007", school: "SDN 2 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 15, name: "Maya Karmila, S.Pd.", nip: "19860411 200803 1 005", school: "SDN 2 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 16, name: "Inta Ariningsih, S.Pd", nip: "19880118 201001 1 003", school: "SDN 3 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 17, name: "Yuniar, S.Pd", nip: "19890515 201410 2 002", school: "SDN 4 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 18, name: "Sumarni, S.Pd.", nip: "19950423 201704 2 004", school: "SDN 4 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 19, name: "Silvia Mega Pangest, S.Pd", nip: "19860624 200810 1 007", school: "SDN 6 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 20, name: "Suci Lestari, S.Pd", nip: "19940611 201907 1 003", school: "SDN 6 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 21, name: "Siti Putri Patymoa, S.Pd", nip: "19961013 202104 2 003", school: "SDN 7 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 22, name: "Suci Hasri Hidayati, S.Pd.", nip: "19820603 200707 1 008", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 23, name: "Iin Sri Wahyuni, S.Pd.", nip: "19970924 202005 2 004", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 24, name: "Kiki Safani, S.Pd.", nip: "19840721 200905 1 005", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 25, name: "Sulastri, S.Pd.", nip: "19830417 200609 1 001", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 26, name: "Dyah Handayani, S.Pd", nip: "19881021 201203 2 008", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 27, name: "Nur Kumala Sari, S.Pd.", nip: "19871120 200910 2 008", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 28, name: "Venni Veriani, S.Pd.", nip: "19800917 200505 1 008", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 29, name: "Risa Oktalina, S.Pd.", nip: "19950519 201809 2 006", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 30, name: "Nita Firianti.S. Pd", nip: "19900214 201206 2 006", school: "SDN 11 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 31, name: "Ernawati, S.Pd.SD", nip: "19911113 201610 2 004", school: "SDN 11 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 32, name: "Farida, S. Pd. Gr", nip: "19891124 201205 1 005", school: "SDN 13 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 33, name: "Sri Nuryani S.Pd.Gr", nip: "19820208 200709 2 007", school: "SDN 13 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 34, name: "Linda Ayu Wijayanti, S.Pd.", nip: "19950525 201909 2 007", school: "SDN 14 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 35, name: "Febria Damayanti, S.Pd", nip: "19841003 200907 1 008", school: "SDN 14 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 36, name: "Lebariah, S.Pd.SD", nip: "19850923 200909 1 002", school: "SDN 15 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 37, name: "Oktha Viyanti, S.Pd", nip: "19930102 201506 1 001", school: "SDN 16 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 38, name: "Maria Sundari, S.Pd", nip: "19830404 200711 1 003", school: "SDN 17 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Belum Dibuat" },
        { id: 39, name: "Dwi Wulandari, S.Pd", nip: "19810823 200411 2 007", school: "SDN 17 SINGKAWANG", district: "Singkawang Tengah", reportStatus: "Sudah Dibuat" },
        { id: 40, name: "NIKE AYESI, S.PD", nip: "19851025 201006 1 003", school: "SDN 22 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 41, name: "Yesi Septiana, S.Pd.", nip: "19911121 201505 2 003", school: "SDN 23 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 42, name: "Hastari Wiri Wulandari,S.Pd.", nip: "19920508 201408 1 008", school: "SDN 23 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 43, name: "Kurnia, S.Pd.", nip: "19861116 201010 2 005", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 44, name: "Duwi Puteri Anggraeni, S.Pd.", nip: "19900407 201404 1 007", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 45, name: "Seprila, S.Pd.", nip: "19800709 200507 2 008", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 46, name: "Lili Zunarsih, S. Pd", nip: "19870620 201005 2 008", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 47, name: "Herman, S.Pd.I", nip: "19840712 200804 2 007", school: "SDN 25 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 48, name: "Dewi Suci Utari, S.Pd", nip: "19901012 201309 2 004", school: "SDN 27 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 49, name: "Yuke Twoysa Purwantari,S.Pd", nip: "19821119 200606 2 003", school: "SDN 29 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Belum Dibuat" },
        { id: 50, name: "Herawati,S.Pd.SD", nip: "19881010 201103 1 004", school: "SDN 29 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 51, name: "ALOSIUS KUSNADI, S.Pd", nip: "19830912 200604 1 005", school: "SDN 31 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 52, name: "Kurnia, S.Pd", nip: "19830416 200604 1 004", school: "SDN 31 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 53, name: "Yuhana, S.Pd.SD", nip: "19880705 201109 2 007", school: "SDN 32 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 54, name: "Relisma, S.Pd", nip: "19810717 200311 2 007", school: "SDN 32 SINGKAWANG", district: "Singkawang Barat", reportStatus: "Sudah Dibuat" },
        { id: 55, name: "Weti Anggayuni, S.Pd", nip: "19910501 201303 1 006", school: "SDN 43 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 56, name: "Anaqori Oktavia Sari, S. Pd", nip: "19860702 201005 2 002", school: "SDN 44 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Sudah Dibuat" },
        { id: 57, name: "Dwi Pargiyaningsih, S.Pd.", nip: "19920423 201504 1 001", school: "SDN 45 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 58, name: "Annisa Nia Santika, S.Pd", nip: "19950502 201801 2 008", school: "SDN 45 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 59, name: "Ayu Kusuma Dewi Handayani, S.Pd.", nip: "19900814 201508 1 001", school: "SDN 48 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 60, name: "Lenny Sulistiowati, S.Pd.", nip: "19850104 201011 1 007", school: "SDN 48 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 61, name: "Elsa Meyti Tabita, S.Pd", nip: "19911001 201501 1 004", school: "SDN 53 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 62, name: "Hudzeifah, S.Pd", nip: "19910608 201311 2 002", school: "SDN 55 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Sudah Dibuat" },
        { id: 63, name: "Arik, S.Pd", nip: "19850121 200903 2 005", school: "SDN 57 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Belum Dibuat" },
        { id: 64, name: "Jefrianus Tuwoh, S.Pd.", nip: "19860815 200810 2 006", school: "SDN 59 SINGKAWANG", district: "Singkawang Selatan", reportStatus: "Sudah Dibuat" },
        { id: 65, name: "Asih Eka Lestari, S.Pd.", nip: "19810814 200406 2 008", school: "SDN 61 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Belum Dibuat" },
        { id: 66, name: "Susan Ariyanti, S.Pd.SD", nip: "19870727 201206 1 004", school: "SDN 63 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 67, name: "Suci Adelina, S.Pd.", nip: "19960405 202111 1 001", school: "SDN 65 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 68, name: "Adma Jayanti, S.Pd.", nip: "19870804 201208 2 007", school: "SDN 66 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 69, name: "Masrita, S.Pd.SD.", nip: "19800622 200509 1 008", school: "SDN 67 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 70, name: "Frensy Graselie Lantu, S.Pd.", nip: "19840816 200603 1 002", school: "SDN 68 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 71, name: "Ima Norma Puji Astutik, S.Pd", nip: "19890312 201311 2 002", school: "SDN 69 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 72, name: "Kristina, S.Pd", nip: "19961115 201801 2 001", school: "SDN 69 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Belum Dibuat" },
        { id: 73, name: "Asmarani, S. Pd.", nip: "19851017 201008 2 003", school: "SDN 70 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Belum Dibuat" },
        { id: 74, name: "Yudho Fetryanto, S.Pd", nip: "19800215 200210 1 007", school: "SDN 71 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Belum Dibuat" },
        { id: 75, name: "Reni, S.Pd", nip: "19930804 201509 1 007", school: "SDN 72 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 76, name: "Nurbaiti, S.Pd", nip: "19861103 200909 1 001", school: "SDN 73 SINGKAWANG", district: "Singkawang Timur", reportStatus: "Sudah Dibuat" },
        { id: 77, name: "Nerianty, S.Pd. SD", nip: "19930316 201806 2 004", school: "SDN 81 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 78, name: "Nurita, S.Pd", nip: "19890713 201203 1 002", school: "SDN 82 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 79, name: "Juliastri, S.Pd.SD", nip: "19911009 201303 1 007", school: "SDN 82 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 80, name: "Yusniati, S. Pd", nip: "19860501 200802 1 005", school: "SDN 83 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 81, name: "Esti Mindarningsih, S.Pd.", nip: "19860905 200805 2 006", school: "SDN 83 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 82, name: "U.NOVI LESTARI,S.Pd.", nip: "19950501 201702 2 007", school: "SDN 84 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 83, name: "TRI HIDAYATI,S.Pd.", nip: "19880218 201206 1 007", school: "SDN 84 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 84, name: "Nur'asiah, S.Pd.", nip: "19860105 201111 1 007", school: "SDN 85 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 85, name: "Bawisna, S.Pd", nip: "19880203 201307 1 001", school: "SDN 86 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 86, name: "Sari Yulistiana, S.Pd.", nip: "19830724 200807 1 005", school: "SDN 87 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 87, name: "Afriani, S.Pd", nip: "19860111 201102 2 007", school: "SDN 89 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 88, name: "Siti Khotibeh, S.Pd", nip: "19940612 201807 1 001", school: "SDN 90 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 89, name: "Ratmawati, S.Pd.SD.", nip: "19951119 201901 1 007", school: "SDN 91 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 90, name: "Yuniarti,S.Pd.SD", nip: "19830519 200504 1 001", school: "SDN 92 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 91, name: "Fitria Ardianti, S.Pd.", nip: "19890424 201205 1 001", school: "SDN 93 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" },
        { id: 92, name: "Dini Harisa, S.Pd.", nip: "19961009 201905 1 002", school: "SDN 94 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Sudah Dibuat" },
        { id: 93, name: "Nurhayati, S. Pd.", nip: "19860605 200903 1 005", school: "SDN 94 SINGKAWANG", district: "Singkawang Utara", reportStatus: "Belum Dibuat" }
    ],
    
    // Evaluation rating counts
            evaluations: {
        stars5: 78,
        stars4: 11,
        stars3: 3,
        stars2: 1,
        stars1: 0
    },
    
    // Attendance counts per session
            attendance: {
        pembukaan: 91,
        materi1: 89,
        praktik1: 90,
        materi2: 88,
        praktik2: 87
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
        
        // Close menu when clicking outside (mobile)
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('mobile-open') && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('mobile-open');
            }
        });
    }
    
    // Scroll Reveal Intersection Observer
    initScrollReveal();
    
    // Initialize Dashboard data table
    renderDashboardTable();
    
    // Initialize Public Directory table & charts
    renderPublicDirectoryTable();
    renderPublicCharts();

    // Initialize Presence System & Canvas
    initPresenceSystem();

    // Initialize Report Searchable Dropdown
    renderRepSearchableDropdown();
    
    // Close report searchable dropdown on click outside
    document.addEventListener('click', (e) => {
        const wrapper = document.getElementById('rep-nama-dropdown-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
            hideRepDropdownList();
        }
    });

    // Load reports and testimonials
    initReportsAndTestimonials();

    // Load participants from server and sync all features
    initParticipantManagement();

    // Check for access=denied redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('access') === 'denied') {
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
        setTimeout(() => {
            showToast("Akses ditolak. Anda tidak memiliki hak sebagai Administrator.", "x");
        }, 500);
    }

    // Auto-login admin if session persists
    const savedAdminEmail = sessionStorage.getItem('admin_email');
    const savedAdminPin = sessionStorage.getItem('admin_pin');
    if (savedAdminEmail && savedAdminPin) {
        const loginBox = document.getElementById('dashboard-login-box');
        const mainContent = document.getElementById('dashboard-main-content');
        if (loginBox) loginBox.classList.add('hidden');
        if (mainContent) mainContent.classList.remove('hidden');
        fetchAdminData();
        startAdminPolling();
    }
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

// handlePresensiSubmit is defined below in the digital presence system section


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
}function generateLaporanPreview(event) {
    event.preventDefault();
    
    const nama = document.getElementById('rep-nama').value || document.getElementById('rep-nama-search').value;
    const nip = document.getElementById('rep-nip').value;
    const sekolah = document.getElementById('rep-sekolah').value;
    const kecamatan = document.getElementById('rep-kecamatan').value;
    const materi = document.getElementById('rep-materi').value;
    const kesan = document.getElementById('rep-kesan').value;
    const implementasi = document.getElementById('rep-implementasi').value;
    
    if (!nama || !nip || !sekolah || !kecamatan || !materi || !kesan || !implementasi) {
        showToast("Mohon lengkapi seluruh formulir laporan.", "x");
        return;
    }
    
    generateAIReport(nama, nip, sekolah, kecamatan, materi, kesan, implementasi);
}

async function generateAIReport(nama, nip, sekolah, kecamatan, materi, kesan, implementasi) {
    const apiKey = localStorage.getItem('gemini_api_key') || '';
    const isFast = !apiKey; // If no API key, simulator runs fast (<2s)
    
    startLoadingAnimation(isFast);
    
    let reportData = null;
    
    if (apiKey) {
        try {
            const prompt = `Anda adalah AI asisten akademis profesional untuk guru di Indonesia. 
Susunlah Laporan Pengembangan Diri formal atas keikutsertaan pelatihan berdasarkan data masukan guru berikut.
Laporan HARUS ditulis dalam bahasa Indonesia formal, naratif, mendalam, bercorak akademis profesional, dan tidak boleh hanya menyalin kata-kata input secara mentah.

Data Peserta:
Nama Lengkap: ${nama}
NIP: ${nip}
Sekolah: ${sekolah}
Kecamatan: ${kecamatan}

Input Data Pelatihan:
Materi yang diperoleh: ${materi}
Kesan mengikuti pelatihan: ${kesan}
Rencana implementasi/tindak lanjut: ${implementasi}

Informasi Pelatihan Tambahan:
Nama Pelatihan: Pelatihan Peningkatan Kompetensi Guru Melalui Matematika Gembira
Penyelenggara: Dinas Pendidikan dan Kebudayaan Kota Singkawang bekerja sama dengan Ikatan Guru Indonesia (IGI) Kota Singkawang
Waktu: Rabu-Kamis, 17-18 Juni 2026
Tempat: Aula Dinas Pendidikan & Kebudayaan Kota Singkawang

Laporan harus terdiri dari bagian-bagian berikut:
1. kataPengantar: Tuliskan kata pengantar formal sepanjang 2 paragraf yang menyebutkan rasa syukur, nama pelatihan, penyelenggara, ucapan terima kasih kepada narasumber/sekolah/panitia, serta manfaat laporan ini.
2. bab1: BAB I PENDAHULUAN. Terdiri dari Sub-bab "1.1 Latar Belakang" (jelaskan pentingnya matematika/numerasi di SD, masalah matematika konvensional yang menakutkan anak, dan mengapa pelatihan Matematika Gembira ini relevan) serta "1.2 Tujuan Pelatihan" (cantumkan beberapa tujuan guru mengikuti pelatihan ini).
3. bab2: BAB II PELAKSANAAN KEGIATAN. Terdiri dari Sub-bab "2.1 Waktu dan Tempat Pelaksanaan" serta "2.2 Sasaran dan Penyelenggara" (sebutkan target guru SD dan kerja sama IGI & Dinas Pendidikan).
4. bab3: BAB III HASIL DAN REFLEKSI MATERI. Terdiri dari Sub-bab "3.1 Uraian Materi Kompetensi Utama" (uraikan dan jelaskan secara mendalam materi-materi berikut: "${materi}") serta "3.2 Kesan dan Manfaat Pelatihan" (kembangkan kesan ini: "${kesan}" menjadi narasi formal tentang perubahan paradigma guru tentang numerasi menyenangkan).
5. bab4: BAB IV RENCANA TINDAK LANJUT. Terdiri dari Sub-bab "4.1 Desain Rencana Aksi Nyata Kelas" (kembangkan rencana implementasi ini: "${implementasi}" menjadi rancangan operasional guru di kelas/sekolah).
6. bab5: BAB V PENUTUP. Terdiri dari Sub-bab "5.1 Kesimpulan" dan "5.2 Harapan".

Format keluaran HARUS berupa objek JSON mentah saja, tanpa pembungkus markdown seperti \`\`\`json atau teks pengantar lainnya. Pastikan JSON valid dengan properti sebagai berikut:
{
  "kataPengantar": "...",
  "bab1": "...",
  "bab2": "...",
  "bab3": "...",
  "bab4": "...",
  "bab5": "..."
}`;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });
            
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            
            const data = await response.json();
            let text = data.candidates[0].content.parts[0].text;
            text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
            reportData = JSON.parse(text);
            
            if (!reportData.kataPengantar || !reportData.bab1 || !reportData.bab2 || !reportData.bab3 || !reportData.bab4 || !reportData.bab5) {
                throw new Error("Missing JSON fields in AI response");
            }
        } catch (err) {
            console.error("AI Generation failed:", err);
            showToast("Gagal memproses AI. Menggunakan template simulator...", "warning");
            reportData = generateStaticReportTemplate(nama, nip, sekolah, kecamatan, materi, kesan, implementasi);
        }
    } else {
        // Simulator mode - wait for animation progress
        await new Promise(resolve => {
            const checkInterval = setInterval(() => {
                if (currentProgress >= 90) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 50);
        });
        reportData = generateStaticReportTemplate(nama, nip, sekolah, kecamatan, materi, kesan, implementasi);
    }
    
    // Save report to database
    const newReport = {
        id: Date.now(),
        timestamp: Date.now(),
        nama,
        nip,
        sekolah,
        kecamatan,
        materi,
        kesan,
        implementasi,
        ...reportData
    };
    
    await saveReportData(newReport);
    localStorage.setItem('last_report_name', nama);
    
    // Add testimonial
    await submitAutoTestimonial(nama, sekolah, kecamatan, kesan);
    
    // Increment report generation counter in global state & update dashboard
    participantState.reportsGenerated += 1;
    updateDashboardStats();
    
    // Toggle status in dashboard table for matching name
    const matchingParticipant = participantState.participants.find(p => p.name.toLowerCase().includes(nama.toLowerCase()) || nama.toLowerCase().includes(p.name.toLowerCase()));
    if (matchingParticipant) {
        matchingParticipant.reportStatus = "Sudah Dibuat";
        renderDashboardTable();
    }
    
    // Stop animation
    stopLoadingAnimation();
    
    // Delay slightly to close form and open A4 preview cleanly
    setTimeout(() => {
        closeReportModal();
        reopenReport(newReport.id);
    }, 450);
}

function generateStaticReportTemplate(nama, nip, sekolah, kecamatan, materi, kesan, implementasi) {
    const kataPengantar = `Puji syukur penyusun panjatkan ke hadirat Tuhan Yang Maha Esa, karena atas limpahan rahmat dan karunia-Nya, penyusun dapat menyelesaikan Laporan Pengembangan Diri setelah mengikuti kegiatan Pelatihan Peningkatan Kompetensi Guru Melalui Matematika Gembira.

Laporan ini disusun sebagai bentuk pertanggungjawaban akademis dan administratif atas peran serta penyusun sebagai peserta pelatihan yang diselenggarakan oleh Dinas Pendidikan dan Kebudayaan Kota Singkawang bersama Ikatan Guru Indonesia (IGI) Kota Singkawang pada tanggal 17-18 Juni 2026. 

Melalui laporan ini, diharapkan kepala sekolah, pengawas, dan Dinas Pendidikan dapat memperoleh gambaran komprehensif mengenai materi kompetensi numerasi yang penyusun peroleh, serta rencana implementasi nyata yang akan dilaksanakan di ${sekolah}. Penyusun mengucapkan terima kasih kepada narasumber dan panitia yang telah memfasilitasi peningkatan profesionalisme ini.`;

    const bab1 = `1.1 Latar Belakang
Matematika sering kali dipandang sebagai mata pelajaran yang sulit, menakutkan, dan kurang menarik bagi sebagian besar peserta didik, khususnya pada jenjang Sekolah Dasar. Hal ini sebagian besar disebabkan oleh penggunaan metode mengajar konvensional yang cenderung berpusat pada guru (teacher-centered) serta penekanan pada hafalan rumus matematika tanpa pemahaman konsep dasar numerasi secara bermakna.

Untuk merespons tantangan tersebut, Dinas Pendidikan dan Kebudayaan Kota Singkawang bersama Ikatan Guru Indonesia (IGI) Kota Singkawang menyelenggarakan pelatihan peningkatan kompetensi numerasi dengan pendekatan "Matematika Gembira". Pelatihan ini bertujuan untuk meningkatkan kompetensi pedagogis guru dalam mengemas proses pembelajaran matematika yang ramah anak, menyenangkan, kontekstual, dan sarat dengan gamifikasi.

1.2 Tujuan Pelatihan
Tujuan utama penyusun dalam mengikuti pelatihan ini adalah:
1. Meningkatkan keterampilan guru dalam mendesain materi ajar numerasi yang menyenangkan dan berpusat pada siswa.
2. Memahami konsep gamifikasi kelas dan pemanfaatan media digital dalam memperkuat konsep matematika dasar.
3. Menyusun rencana aksi tindak lanjut (RTL) pembelajaran di kelas yang terintegrasi dengan pendekatan Matematika Gembira.`;

    const bab2 = `2.1 Waktu dan Tempat Pelaksanaan
Kegiatan Pelatihan Peningkatan Kompetensi Guru Melalui Matematika Gembira ini dilaksanakan secara intensif pada:
Hari / Tanggal : Rabu - Kamis, 17 - 18 Juni 2026
Waktu : Pukul 08.00 WIB s.d. Selesai
Tempat : Aula Dinas Pendidikan dan Kebudayaan Kota Singkawang

2.2 Sasaran dan Penyelenggara
Sasaran utama kegiatan pelatihan ini adalah para Guru Sekolah Dasar (SD) di lingkungan Dinas Pendidikan Kota Singkawang, termasuk penyusun dari ${sekolah}, Kecamatan ${kecamatan}. Kegiatan ini diselenggarakan secara profesional oleh Ikatan Guru Indonesia (IGI) Kota Singkawang bekerjasama dengan Dinas Pendidikan dan Kebudayaan Kota Singkawang guna mendorong percepatan kompetensi numerasi guru daerah.`;

    const bab3 = `3.1 Uraian Materi Kompetensi Utama
Selama dua hari pelaksanaan pelatihan, penyusun telah mendalami materi kompetensi utama sebagai berikut:
"${materi}"

Secara operasional, materi tersebut membekali penyusun dengan metode konkret untuk memvisualisasikan angka dan operasi aritmatika melalui alat peraga kreatif, teknik bercerita (storytelling) numerasi, serta penerapan permainan interaktif (gamifikasi) baik fisik maupun berbasis aplikasi digital.

3.2 Kesan dan Manfaat Pelatihan
Mengikuti pelatihan ini memberikan pengalaman yang luar biasa bagi penyusun. ${kesan}

Pembelajaran numerasi yang awalnya dirasa kaku oleh penyusun, kini dapat dirancang menjadi aktivitas yang dinamis dan interaktif. Manfaat nyata dari pelatihan ini adalah terbukanya wawasan penyusun untuk merevolusi manajemen kelas matematika agar ramah terhadap minat belajar peserta didik.`;

    const bab4 = `4.1 Desain Rencana Aksi Nyata Kelas
Sebagai tindak lanjut dari pelatihan Matematika Gembira, penyusun telah menyusun rencana aksi nyata (RTL) yang akan diterapkan di kelas pasca-kegiatan. Rencana implementasi nyata tersebut meliputi:
${implementasi}

Langkah awal implementasi akan dilakukan melalui sosialisasi dan koordinasi bersama kepala sekolah dan rekan sejawat di forum Kelompok Kerja Guru (KKG) di ${sekolah}. Selanjutnya, penyusun akan mendesain rencana pelaksanaan pembelajaran (RPP/Modul Ajar) berbasis Matematika Gembira, menyiapkan media pembelajaran numerasi, serta mengevaluasi dampak numerasi menyenangkan pada minat belajar anak secara teratur.`;

    const bab5 = `5.1 Kesimpulan
Secara umum, keikutsertaan penyusun dalam Pelatihan Peningkatan Kompetensi Guru Melalui Matematika Gembira ini telah berjalan dengan sangat baik dan memberikan kontribusi nyata terhadap kompetensi pedagogis guru. Pendekatan numerasi yang gembira, interaktif, dan kreatif merupakan jawaban dari permasalahan rendahnya motivasi belajar matematika anak di Sekolah Dasar.

5.2 Harapan
Penyusun berharap program pelatihan serupa dapat diselenggarakan secara berkala dengan cakupan materi yang lebih spesifik. Ke depan, penyusun berkomitmen untuk konsisten menerapkan ilmu yang telah didapatkan serta membagikannya kepada sesama pendidik di Kota Singkawang guna menyukseskan program literasi dan numerasi nasional.`;

    return { kataPengantar, bab1, bab2, bab3, bab4, bab5 };
}

let currentProgress = 0;
let progressInterval = null;
let timerInterval = null;
let startTime = 0;

function startLoadingAnimation(isFast) {
    currentProgress = 5;
    startTime = Date.now();
    
    const statusEl = document.getElementById('ai-loading-status');
    const progressEl = document.getElementById('ai-progress-bar');
    const timerEl = document.getElementById('ai-loading-timer');
    const modalEl = document.getElementById('ai-loading-modal');
    
    if (modalEl) modalEl.style.display = 'flex';
    if (progressEl) progressEl.style.width = '5%';
    if (statusEl) statusEl.innerText = "Menghubungkan ke Gemini AI...";
    if (timerEl) timerEl.innerText = "Waktu berjalan: 0.0s / maks 10s";
    
    const getStatusText = (prog) => {
        if (prog < 15) return "Menghubungkan ke Gemini AI...";
        if (prog < 30) return "AI menganalisis data peserta...";
        if (prog < 45) return "AI menyusun Kata Pengantar & Daftar Isi...";
        if (prog < 60) return "AI merumuskan BAB I & II...";
        if (prog < 75) return "AI merancang Analisis & Kesan di BAB III...";
        if (prog < 90) return "AI menyusun Rencana Tindak Lanjut BAB IV & V...";
        return "Menyelaraskan tata letak draf...";
    };
    
    const incrementSpeed = isFast ? 100 : 300;
    progressInterval = setInterval(() => {
        if (currentProgress < (isFast ? 95 : 92)) {
            const step = isFast ? 10 : (Math.random() * 3 + 2);
            currentProgress = Math.min(isFast ? 95 : 92, currentProgress + step);
            if (progressEl) progressEl.style.width = `${currentProgress}%`;
            if (statusEl) statusEl.innerText = getStatusText(currentProgress);
        }
    }, incrementSpeed);
    
    timerInterval = setInterval(() => {
        const elapsedSecs = (Date.now() - startTime) / 1000;
        if (timerEl) {
            timerEl.innerText = `Waktu berjalan: ${elapsedSecs.toFixed(1)}s / maks 10s`;
        }
    }, 100);
}

function stopLoadingAnimation() {
    if (progressInterval) clearInterval(progressInterval);
    if (timerInterval) clearInterval(timerInterval);
    
    const statusEl = document.getElementById('ai-loading-status');
    const progressEl = document.getElementById('ai-progress-bar');
    const timerEl = document.getElementById('ai-loading-timer');
    const modalEl = document.getElementById('ai-loading-modal');
    
    currentProgress = 100;
    if (progressEl) progressEl.style.width = '100%';
    if (statusEl) statusEl.innerText = "Selesai!";
    
    const elapsedSecs = (Date.now() - startTime) / 1000;
    if (timerEl) {
        timerEl.innerText = `Selesai dalam ${elapsedSecs.toFixed(1)}s!`;
    }
    
    setTimeout(() => {
        if (modalEl) modalEl.style.display = 'none';
    }, 400);
}

function drawPDFPage(doc, title, subtitle, bodyText, pageNumLabel) {
    doc.addPage();
    const leftMargin = 40;
    const topMargin = 30;
    const rightMargin = 30;
    const bottomMargin = 30;
    const printableWidth = 140; // 210 - 40 - 30
    
    let y = topMargin;
    
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    if (title) {
        const titleLines = doc.splitTextToSize(title, printableWidth);
        titleLines.forEach(line => {
            doc.text(line, 110, y, { align: "center" });
            y += 6;
        });
        y += 4;
    }
    
    if (subtitle) {
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(12);
        const subLines = doc.splitTextToSize(subtitle, printableWidth);
        subLines.forEach(line => {
            doc.text(line, 110, y, { align: "center" });
            y += 6;
        });
        y += 8;
    }
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    
    if (bodyText) {
        const lines = doc.splitTextToSize(bodyText, printableWidth);
        const lineHeight = 12 * 0.352778 * 1.5; // ≈ 6.35 mm
        
        lines.forEach(line => {
            if (y > 297 - bottomMargin) {
                doc.addPage();
                y = topMargin;
            }
            doc.text(line, leftMargin, y, { align: "justify" });
            y += lineHeight;
        });
    }
    
    if (pageNumLabel) {
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        doc.text(pageNumLabel, 110, 297 - 15, { align: "center" });
    }
    return y;
}

function drawSignatures(doc, yOffset, nama, nip) {
    const leftMargin = 40;
    if (yOffset > 297 - 70) {
        doc.addPage();
        yOffset = 30;
    }
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(11);
    
    doc.text("Mengetahui,", leftMargin, yOffset + 15);
    doc.text("Kepala Sekolah,", leftMargin, yOffset + 20);
    doc.text("___________________________", leftMargin, yOffset + 45);
    doc.text("NIP.", leftMargin, yOffset + 51);
    
    const rightAlignX = 130;
    doc.text("Singkawang, 19 Juni 2026", rightAlignX, yOffset + 15);
    doc.text("Penyusun Laporan (Peserta),", rightAlignX, yOffset + 20);
    doc.setFont("Helvetica", "bold");
    doc.text(nama, rightAlignX, yOffset + 45);
    doc.setFont("Helvetica", "normal");
    doc.text(`NIP. ${nip}`, rightAlignX, yOffset + 51);
}

function downloadPDFReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    const r = currentReportData;
    const leftMargin = 40;
    const rightMargin = 30;
    const printableWidth = 140;
    
    // Page 1: COVER
    doc.setDrawColor(15, 23, 42);
    doc.setLineWidth(1.5);
    doc.rect(8, 8, 194, 281);
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 277);
    
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("LAPORAN PENGEMBANGAN DIRI", 105, 45, { align: "center" });
    
    doc.setFontSize(15);
    doc.text("MENGIKUTI KEGIATAN PELATIHAN", 105, 55, { align: "center" });
    doc.text("PENINGKATAN KOMPETENSI GURU", 105, 63, { align: "center" });
    doc.text("MELALUI MATEMATIKA GEMBIRA", 105, 71, { align: "center" });
    
    doc.ellipse(105, 120, 18, 18);
    doc.setFontSize(28);
    doc.text("∑", 105, 125, { align: "center" });
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Disusun Oleh:", 60, 175);
    
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text(r.nama, 60, 185);
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`NIP. ${r.nip}`, 60, 193);
    doc.text(`Sekolah: ${r.sekolah}`, 60, 201);
    doc.text(`Kecamatan: ${r.kecamatan}`, 60, 209);
    
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.text("DINAS PENDIDIKAN DAN KEBUDAYAAN KOTA SINGKAWANG", 105, 245, { align: "center" });
    doc.text("IKATAN GURU INDONESIA (IGI) KOTA SINGKAWANG", 105, 252, { align: "center" });
    doc.setFont("Helvetica", "normal");
    doc.text("Tahun 2026", 105, 260, { align: "center" });
    
    // Page 2: KATA PENGANTAR
    drawPDFPage(doc, "KATA PENGANTAR", "", r.kataPengantar, "ii");
    
    // Page 3: DAFTAR ISI
    doc.addPage();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("DAFTAR ISI", 110, 30, { align: "center" });
    
    let y = 50;
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    
    const linesDaftarIsi = [
        { name: "KATA PENGANTAR", page: "ii" },
        { name: "DAFTAR ISI", page: "iii" },
        { name: "BAB I PENDAHULUAN", page: "1" },
        { name: "   1.1 Latar Belakang", page: "1" },
        { name: "   1.2 Tujuan Pelatihan", page: "1" },
        { name: "BAB II PELAKSANAAN KEGIATAN", page: "2" },
        { name: "   2.1 Waktu dan Tempat Pelaksanaan", page: "2" },
        { name: "   2.2 Sasaran dan Penyelenggara", page: "2" },
        { name: "BAB III HASIL DAN REFLEKSI MATERI", page: "3" },
        { name: "   3.1 Uraian Materi Kompetensi Utama", page: "3" },
        { name: "   3.2 Kesan dan Manfaat Pelatihan", page: "3" },
        { name: "BAB IV RENCANA TINDAK LANJUT (RTL)", page: "4" },
        { name: "   4.1 Desain Rencana Aksi Nyata Kelas", page: "4" },
        { name: "BAB V PENUTUP", page: "5" },
        { name: "   5.1 Kesimpulan dan Harapan", page: "5" }
    ];
    
    linesDaftarIsi.forEach(line => {
        doc.text(line.name, leftMargin, y);
        let dots = "";
        let widthOfText = doc.getTextWidth(line.name);
        let spaceWidth = doc.getTextWidth(".");
        let availableWidth = 210 - leftMargin - rightMargin - widthOfText - doc.getTextWidth(line.page) - 10;
        let numDots = Math.floor(availableWidth / spaceWidth);
        for (let i = 0; i < numDots; i++) dots += ".";
        
        doc.text(dots, leftMargin + widthOfText + 2, y);
        doc.text(line.page, 210 - rightMargin, y, { align: "right" });
        y += 10;
    });
    
    doc.text("iii", 110, 297 - 15, { align: "center" });
    
    // Chapters
    drawPDFPage(doc, "BAB I", "PENDAHULUAN", r.bab1, "1");
    drawPDFPage(doc, "BAB II", "PELAKSANAAN KEGIATAN", r.bab2, "2");
    drawPDFPage(doc, "BAB III", "HASIL DAN REFLEKSI MATERI", r.bab3, "3");
    drawPDFPage(doc, "BAB IV", "RENCANA TINDAK LANJUT", r.bab4, "4");
    
    // Page 8: BAB V
    doc.addPage();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("BAB V", 110, 30, { align: "center" });
    doc.text("PENUTUP", 110, 36, { align: "center" });
    
    y = 50;
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    
    const linesBab5 = doc.splitTextToSize(r.bab5, printableWidth);
    const lineHeight = 12 * 0.352778 * 1.5;
    linesBab5.forEach(line => {
        doc.text(line, leftMargin, y, { align: "justify" });
        y += lineHeight;
    });
    
    drawSignatures(doc, y + 10, r.nama, r.nip);
    doc.text("5", 110, 297 - 15, { align: "center" });
    
    const safeName = r.nama.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`Laporan_Kegiatan_Matematika_Gembira_${safeName}.pdf`);
    
    showToast("PDF Laporan Berhasil Didownload!", "check-circle");
}

function downloadWordReport() {
    const r = currentReportData;
    const safeName = r.nama.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    
    const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <title>Laporan Kegiatan Pelatihan Matematika Gembira</title>
        <!--[if gte mso 9]>
        <xml>
            <w:WordDocument>
                <w:View>Print</w:View>
                <w:Zoom>100</w:Zoom>
            </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
            @page {
                size: 21cm 29.7cm;
                margin: 3cm 3cm 3cm 4cm;
            }
            body {
                font-family: Arial, sans-serif;
                font-size: 12pt;
                line-height: 1.5;
                text-align: justify;
                color: #0f172a;
            }
            h1, h2, h3, h4 {
                font-family: Arial, sans-serif;
                font-weight: bold;
                text-align: center;
                margin-top: 0;
            }
            h1 { font-size: 14pt; margin-bottom: 5px; }
            h2 { font-size: 15pt; color: #0f172a; margin-bottom: 20px; }
            h3 { font-size: 14pt; text-transform: uppercase; margin-bottom: 30px; }
            h4 { font-size: 12pt; text-transform: uppercase; margin-bottom: 25px; }
            p { margin-bottom: 12pt; text-indent: 0px; }
            .page-break {
                page-break-before: always;
                clear: both;
            }
            .toc-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 30px;
            }
            .toc-table td {
                padding: 6px 0;
                font-size: 12pt;
            }
            .sig-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 50px;
            }
            .sig-table td {
                padding: 5px;
                vertical-align: top;
                font-size: 11pt;
            }
        </style>
    </head>
    <body>
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; border: 3px double #0f172a; padding: 20px; text-align: center;">
            <br><br>
            <h1>LAPORAN PENGEMBANGAN DIRI</h1>
            <h2>MENGIKUTI KEGIATAN PELATIHAN PENINGKATAN KOMPETENSI GURU MELALUI MATEMATIKA GEMBIRA</h2>
            <br><br><br>
            <div style="text-align: center; margin: 30px 0;">
                <span style="font-size: 50pt; font-weight: bold;">∑</span>
            </div>
            <br><br><br>
            <div style="text-align: left; margin-left: 50px; font-size: 12pt; line-height: 1.8;">
                <p><b>Disusun Oleh:</b></p>
                <p style="font-size: 14pt; font-weight: bold; margin: 0;"><b>${r.nama}</b></p>
                <p style="margin: 0;">NIP: ${r.nip}</p>
                <p style="margin: 0;">Sekolah: ${r.sekolah}</p>
                <p style="margin: 0;">Kecamatan: ${r.kecamatan}</p>
            </div>
            <br><br><br><br>
            <div style="font-size: 11pt; font-weight: bold; line-height: 1.6;">
                <p>DINAS PENDIDIKAN DAN KEBUDAYAAN KOTA SINGKAWANG</p>
                <p>IKATAN GURU INDONESIA (IGI) KOTA SINGKAWANG</p>
                <p style="font-weight: normal; margin-top: 10px;">Tahun 2026</p>
            </div>
        </div>
        
        <div class="page-break"></div>
        
        <h3>KATA PENGANTAR</h3>
        <div style="white-space: pre-line;">${r.kataPengantar}</div>
        
        <div class="page-break"></div>
        
        <h3>DAFTAR ISI</h3>
        <table class="toc-table">
            <tr><td>KATA PENGANTAR</td><td style="text-align: right;">ii</td></tr>
            <tr><td>DAFTAR ISI</td><td style="text-align: right;">iii</td></tr>
            <tr><td>BAB I PENDAHULUAN</td><td style="text-align: right;">1</td></tr>
            <tr><td style="padding-left: 20px;">1.1 Latar Belakang</td><td style="text-align: right;">1</td></tr>
            <tr><td style="padding-left: 20px;">1.2 Tujuan Pelatihan</td><td style="text-align: right;">1</td></tr>
            <tr><td>BAB II PELAKSANAAN KEGIATAN</td><td style="text-align: right;">2</td></tr>
            <tr><td style="padding-left: 20px;">2.1 Waktu dan Tempat Pelaksanaan</td><td style="text-align: right;">2</td></tr>
            <tr><td style="padding-left: 20px;">2.2 Sasaran dan Penyelenggara</td><td style="text-align: right;">2</td></tr>
            <tr><td>BAB III HASIL DAN REFLEKSI MATERI</td><td style="text-align: right;">3</td></tr>
            <tr><td style="padding-left: 20px;">3.1 Uraian Materi Kompetensi Utama</td><td style="text-align: right;">3</td></tr>
            <tr><td style="padding-left: 20px;">3.2 Kesan dan Manfaat Pelatihan</td><td style="text-align: right;">3</td></tr>
            <tr><td>BAB IV RENCANA TINDAK LANJUT (RTL)</td><td style="text-align: right;">4</td></tr>
            <tr><td style="padding-left: 20px;">4.1 Desain Rencana Aksi Nyata Kelas</td><td style="text-align: right;">4</td></tr>
            <tr><td>BAB V PENUTUP</td><td style="text-align: right;">5</td></tr>
            <tr><td style="padding-left: 20px;">5.1 Kesimpulan dan Harapan</td><td style="text-align: right;">5</td></tr>
        </table>
        
        <div class="page-break"></div>
        
        <h3>BAB I<br>PENDAHULUAN</h3>
        <div style="white-space: pre-line;">${r.bab1}</div>
        
        <div class="page-break"></div>
        
        <h3>BAB II<br>PELAKSANAAN PELATIHAN</h3>
        <div style="white-space: pre-line;">${r.bab2}</div>
        
        <div class="page-break"></div>
        
        <h3>BAB III<br>HASIL DAN REFLEKSI</h3>
        <div style="white-space: pre-line;">${r.bab3}</div>
        
        <div class="page-break"></div>
        
        <h3>BAB IV<br>RENCANA TINDAK LANJUT</h3>
        <div style="white-space: pre-line;">${r.bab4}</div>
        
        <div class="page-break"></div>
        
        <h3>BAB V<br>PENUTUP</h3>
        <div style="white-space: pre-line;">${r.bab5}</div>
        
        <table class="sig-table">
            <tr>
                <td style="width: 50%;">
                    Mengetahui,<br>Kepala Sekolah
                    <br><br><br><br>
                    ___________________________<br>NIP.
                </td>
                <td style="width: 50%; text-align: left; padding-left: 50px;">
                    Singkawang, 19 Juni 2026<br>Penyusun Laporan (Peserta),
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
}

function toggleEditSection(sectionId) {
    const displayEl = document.getElementById(`preview-${sectionId}-display`);
    const editEl = document.getElementById(`preview-${sectionId}-edit`);
    const btnEl = document.getElementById(`btn-edit-${sectionId}`);
    
    if (editEl.classList.contains('hidden')) {
        editEl.value = displayEl.innerText;
        displayEl.classList.add('hidden');
        editEl.classList.remove('hidden');
        btnEl.innerHTML = `<i data-lucide="check" style="width:12px; height:12px;"></i> Selesai`;
    } else {
        const newValue = editEl.value;
        displayEl.innerText = newValue;
        
        currentReportData[sectionId] = newValue;
        
        saveReportData(currentReportData);
        
        editEl.classList.add('hidden');
        displayEl.classList.remove('hidden');
        btnEl.innerHTML = `<i data-lucide="edit-3" style="width:12px; height:12px;"></i> Edit Bagian`;
    }
    lucide.createIcons();
}

function reopenReport(id) {
    const rep = reportsDb.find(r => r.id === id);
    if (!rep) return;
    
    currentReportData = rep;
    
    document.getElementById('cov-nama').innerText = rep.nama;
    document.getElementById('cov-nip').innerText = rep.nip;
    document.getElementById('cov-sekolah').innerText = rep.sekolah;
    document.getElementById('cov-kecamatan').innerText = rep.kecamatan;
    
    document.getElementById('sig-peserta-nama').innerText = rep.nama;
    document.getElementById('sig-peserta-nip').innerText = rep.nip;
    
    document.getElementById('preview-kataPengantar-display').innerText = rep.kataPengantar || '';
    document.getElementById('preview-daftarIsi-display').innerHTML = renderDaftarIsiHtml();
    
    document.getElementById('preview-bab1-display').innerText = rep.bab1 || '';
    document.getElementById('preview-bab2-display').innerText = rep.bab2 || '';
    document.getElementById('preview-bab3-display').innerText = rep.bab3 || '';
    document.getElementById('preview-bab4-display').innerText = rep.bab4 || '';
    document.getElementById('preview-bab5-display').innerText = rep.bab5 || '';
    
    document.getElementById('preview-kataPengantar-edit').value = rep.kataPengantar || '';
    document.getElementById('preview-bab1-edit').value = rep.bab1 || '';
    document.getElementById('preview-bab2-edit').value = rep.bab2 || '';
    document.getElementById('preview-bab3-edit').value = rep.bab3 || '';
    document.getElementById('preview-bab4-edit').value = rep.bab4 || '';
    document.getElementById('preview-bab5-edit').value = rep.bab5 || '';
    
    document.getElementById('report-preview-modal').classList.add('active');
    lucide.createIcons();
}

async function saveReportData(report) {
    const existingIndex = reportsDb.findIndex(r => r.id === report.id);
    if (existingIndex !== -1) {
        reportsDb[existingIndex] = report;
    } else {
        reportsDb.push(report);
    }

    // Save report ID locally to track user's reports
    let myReportIds = [];
    const savedIds = localStorage.getItem('my_report_ids');
    if (savedIds) {
        try {
            myReportIds = JSON.parse(savedIds);
        } catch(e) {}
    }
    if (!myReportIds.includes(report.id)) {
        myReportIds.push(report.id);
        localStorage.setItem('my_report_ids', JSON.stringify(myReportIds));
    }
    
    if (isServerMode) {
        try {
            await fetch('/api/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(report)
            });
        } catch (e) {
            console.error("Error saving report to server:", e);
            localStorage.setItem('reports_db', JSON.stringify(reportsDb));
        }
    } else {
        localStorage.setItem('reports_db', JSON.stringify(reportsDb));
    }
    
    renderReportHistory();
}

async function submitAutoTestimonial(nama, sekolah, kecamatan, kesan) {
    // Avoid duplicates for the same name and school
    const isTestiDuplicate = testimonialsDb.some(t => t.name === nama && t.school === sekolah);
    if (isTestiDuplicate) return;

    const newTesti = {
        id: Date.now(),
        name: nama,
        school: sekolah,
        district: kecamatan,
        quote: kesan,
        date: new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        timestamp: Date.now()
    };
    
    testimonialsDb.push(newTesti);
    
    if (isServerMode) {
        try {
            await fetch('/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTesti)
            });
        } catch (e) {
            console.error("Error saving testimonial to server:", e);
            localStorage.setItem('testimonials_db', JSON.stringify(testimonialsDb));
        }
    } else {
        localStorage.setItem('testimonials_db', JSON.stringify(testimonialsDb));
    }
    
    renderTestimonials();
}

function renderTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    testimonialsDb.forEach(t => {
        const initials = 'A';
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-quote">"${t.quote}"</div>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${initials}</div>
                <div class="testimonial-info">
                    <div class="testimonial-name">Anonim</div>
                    <div class="testimonial-school">${t.school}, ${t.district}</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderReportHistory() {
    const container = document.getElementById('report-history-container');
    const list = document.getElementById('report-history-list');
    if (!container || !list) return;
    
    if (reportsDb.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    list.innerHTML = '';
    
    const sortedReports = [...reportsDb].sort((a, b) => b.timestamp - a.timestamp);
    
    sortedReports.forEach((rep, idx) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid var(--color-border)';
        
        const dateObj = new Date(rep.timestamp);
        const formattedDate = dateObj.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        tr.innerHTML = `
            <td style="padding: 12px 10px;">${idx + 1}</td>
            <td style="padding: 12px 10px;"><b>${rep.nama}</b></td>
            <td style="padding: 12px 10px;">${rep.sekolah}</td>
            <td style="padding: 12px 10px;">${formattedDate}</td>
            <td style="padding: 12px 10px; text-align: right;">
                <button onclick="reopenReport(${rep.id})" class="btn btn-outline-sm" style="padding: 4px 8px; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 4px;">
                    <i data-lucide="eye" style="width: 14px; height: 14px;"></i> Buka
                </button>
            </td>
        `;
        list.appendChild(tr);
    });
    
    lucide.createIcons();
}

function loadLocalStorageReportsAndTestimonials() {
    const savedReports = localStorage.getItem('reports_db');
    if (savedReports) {
        reportsDb = JSON.parse(savedReports);
    } else {
        reportsDb = [];
        localStorage.setItem('reports_db', JSON.stringify(reportsDb));
    }
    
    const savedTestimonials = localStorage.getItem('testimonials_db');
    if (savedTestimonials) {
        testimonialsDb = JSON.parse(savedTestimonials);
    } else {
        testimonialsDb = [
            {
                id: 1,
                name: "Sumiyah, S.Pd.",
                school: "MIN SINGKAWANG",
                district: "Singkawang Selatan",
                quote: "Pelatihan Matematika Gembira ini sangat membuka wawasan saya. Metode gamifikasi yang diajarkan membuat murid-murid di kelas saya sangat antusias belajar matematika, tidak lagi menakutkan!",
                date: "17 Juni 2026"
            },
            {
                id: 2,
                name: "Mindi Maria Domitila, S.Pd.",
                school: "SD SANTA KLARA SINGKAWANG",
                district: "Singkawang Timur",
                quote: "Sangat bersyukur bisa mengikuti kegiatan ini. Konsep numerasi menyenangkan dengan alat peraga kreatif membantu kami menyajikan materi abstrak menjadi lebih konkret dan mudah dipahami siswa.",
                date: "18 Juni 2026"
            }
        ];
        localStorage.setItem('testimonials_db', JSON.stringify(testimonialsDb));
    }
}

async function initReportsAndTestimonials() {
    if (isServerMode) {
        try {
            // Load testimonials from server (publicly visible)
            const resTestimonials = await fetch('/api/testimonials');
            testimonialsDb = await resTestimonials.json();
            
            // For reports, since GET /api/reports is admin-only,
            // we load the user's reports based on local IDs.
            const savedMyReportIds = localStorage.getItem('my_report_ids');
            let ids = [];
            if (savedMyReportIds) {
                try {
                    ids = JSON.parse(savedMyReportIds);
                } catch(e) {}
            }
            
            const resReports = await fetch('/api/reports/my-reports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
            });
            if (resReports.ok) {
                reportsDb = await resReports.json();
            } else {
                reportsDb = [];
            }
        } catch (e) {
            console.error("Error loading server reports/testimonials:", e);
            loadLocalStorageReportsAndTestimonials();
        }
    } else {
        loadLocalStorageReportsAndTestimonials();
    }
    
    renderTestimonials();
    renderReportHistory();
}

function renderDaftarIsiHtml() {
    return `
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12pt; line-height: 2;">
            <tr>
                <td>KATA PENGANTAR</td>
                <td style="text-align: right;">ii</td>
            </tr>
            <tr>
                <td>DAFTAR ISI</td>
                <td style="text-align: right;">iii</td>
            </tr>
            <tr>
                <td>BAB I PENDAHULUAN</td>
                <td style="text-align: right;">1</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">1.1 Latar Belakang</td>
                <td style="text-align: right;">1</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">1.2 Tujuan Pelatihan</td>
                <td style="text-align: right;">1</td>
            </tr>
            <tr>
                <td>BAB II PELAKSANAAN KEGIATAN</td>
                <td style="text-align: right;">2</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">2.1 Waktu dan Tempat Pelaksanaan</td>
                <td style="text-align: right;">2</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">2.2 Sasaran dan Penyelenggara</td>
                <td style="text-align: right;">2</td>
            </tr>
            <tr>
                <td>BAB III HASIL DAN REFLEKSI MATERI</td>
                <td style="text-align: right;">3</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">3.1 Uraian Materi Kompetensi Utama</td>
                <td style="text-align: right;">3</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">3.2 Kesan dan Manfaat Pelatihan</td>
                <td style="text-align: right;">3</td>
            </tr>
            <tr>
                <td>BAB IV RENCANA TINDAK LANJUT (RTL)</td>
                <td style="text-align: right;">4</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">4.1 Desain Rencana Aksi Nyata Kelas</td>
                <td style="text-align: right;">4</td>
            </tr>
            <tr>
                <td>BAB V PENUTUP</td>
                <td style="text-align: right;">5</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">5.1 Kesimpulan dan Harapan</td>
                <td style="text-align: right;">5</td>
            </tr>
        </table>
    `;
}

// Searchable Dropdown for Reports
function renderRepSearchableDropdown() {
    const listContainer = document.getElementById('rep-nama-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    const sortedParticipants = [...participantState.participants].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedParticipants.forEach(p => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.setAttribute('data-id', p.id);
        item.setAttribute('data-name', p.name);
        item.setAttribute('data-school', p.school);
        item.setAttribute('data-district', p.district);
        item.setAttribute('data-nip', p.nip || '-');
        
        item.innerHTML = `
            <span><b>${p.name}</b></span>
            <span class="dropdown-item-meta">${p.school}</span>
        `;
        
        item.addEventListener('click', () => {
            selectRepParticipant(p.id, p.name, p.nip || '-', p.school, p.district);
        });
        
        listContainer.appendChild(item);
    });
}

function showRepDropdownList() {
    const list = document.getElementById('rep-nama-list');
    if (list) list.classList.remove('hidden');
}

function hideRepDropdownList() {
    setTimeout(() => {
        const list = document.getElementById('rep-nama-list');
        if (list) list.classList.add('hidden');
    }, 250);
}

function filterRepDropdownList() {
    const input = document.getElementById('rep-nama-search');
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('#rep-nama-list .dropdown-item');
    
    items.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        const school = item.getAttribute('data-school').toLowerCase();
        if (name.includes(filter) || school.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectRepParticipant(id, name, nip, school, district) {
    const searchInput = document.getElementById('rep-nama-search');
    const hiddenInput = document.getElementById('rep-nama');
    const nipInput = document.getElementById('rep-nip');
    const schoolInput = document.getElementById('rep-sekolah');
    const districtInput = document.getElementById('rep-kecamatan');
    
    if (searchInput && hiddenInput && nipInput && schoolInput && districtInput) {
        searchInput.value = name;
        hiddenInput.value = name;
        nipInput.value = nip;
        schoolInput.value = school;
        districtInput.value = district;
    }
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

// Global variable for polling interval
let adminPollingInterval = null;
const SUPER_ADMIN_EMAIL = 'admin@matematikagembira.com';

async function verifyAdminLogin() {
    const emailInput = document.getElementById('panitia-email');
    const pinInput = document.getElementById('panitia-pin');
    
    if (!emailInput || !pinInput) return;
    
    const email = emailInput.value.trim();
    const pin = pinInput.value.trim();
    
    if (!email || !pin) {
        showToast('Email dan PIN wajib diisi!', 'x');
        return;
    }
    
    if (email.toLowerCase() !== SUPER_ADMIN_EMAIL) {
        showToast('Akses ditolak. Anda tidak memiliki hak sebagai Administrator.', 'x');
        return;
    }
    
    try {
        const res = await fetch('/api/presence', {
            headers: {
                'x-admin-email': email,
                'x-admin-pin': pin
            }
        });
        
        if (res.ok) {
            sessionStorage.setItem('admin_email', email);
            sessionStorage.setItem('admin_pin', pin);
            
            // Log to server
            await fetch('/api/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-email': email,
                    'x-admin-pin': pin
                },
                body: JSON.stringify({ action: "Admin Login berhasil." })
            });
            
            const loginBox = document.getElementById('dashboard-login-box');
            const mainContent = document.getElementById('dashboard-main-content');
            if (loginBox) loginBox.classList.add('hidden');
            if (mainContent) mainContent.classList.remove('hidden');
            
            await fetchAdminData();
            startAdminPolling();
            
            showToast('Buka Dashboard Berhasil!', 'unlock');
        } else {
            showToast('PIN yang Anda masukkan salah!', 'x');
        }
    } catch (e) {
        console.error("Error verifying admin login:", e);
        showToast('Gagal terhubung ke server.', 'x');
    }
}

function verifyPin() {
    // Wrapper for backward compatibility if called elsewhere
    verifyAdminLogin();
}

function startAdminPolling() {
    if (adminPollingInterval) clearInterval(adminPollingInterval);
    adminPollingInterval = setInterval(async () => {
        await fetchAdminData();
    }, 3000);
}

function stopAdminPolling() {
    if (adminPollingInterval) {
        clearInterval(adminPollingInterval);
        adminPollingInterval = null;
    }
}

async function fetchAdminData() {
    const email = sessionStorage.getItem('admin_email');
    const pin = sessionStorage.getItem('admin_pin');
    if (!email || !pin) return;
    
    const headers = {
        'x-admin-email': email,
        'x-admin-pin': pin
    };
    
    try {
        // Fetch full presence list
        const resPresence = await fetch('/api/presence', { headers });
        if (resPresence.ok) {
            presenceDb = await resPresence.json();
            renderPresenceTable();
            updatePresencePublicStats();
        }
        
        // Fetch full participants list
        const resParticipants = await fetch('/api/participants', { headers });
        if (resParticipants.ok) {
            const serverParticipants = await resParticipants.json();
            participantState.participants = serverParticipants.map(sp => {
                const existing = participantState.participants.find(p => p.id === sp.id);
                return {
                    ...sp,
                    reportStatus: existing ? existing.reportStatus : (sp.reportStatus || 'Belum Dibuat')
                };
            });
            participantState.totalRegistered = participantState.participants.length;
            renderDashboardTable();
            filterAndRenderParticipantTable();
            populateSchoolFilterDropdown();
        }
        
        // Fetch logs
        const resLogs = await fetch('/api/logs', { headers });
        if (resLogs.ok) {
            adminLogs = await resLogs.json();
            renderAdminLogsTable();
        }
        
        // Fetch reports
        const resReports = await fetch('/api/reports', { headers });
        if (resReports.ok) {
            reportsDb = await resReports.json();
            renderReportHistory();
        }
        
        // Fetch testimonials
        const resTestimonials = await fetch('/api/testimonials');
        if (resTestimonials.ok) {
            testimonialsDb = await resTestimonials.json();
            renderTestimonials();
        }
        
        // Update stats
        await updateDashboardStats();
    } catch (e) {
        console.error("Error polling admin data:", e);
    }
}

function populateSchoolFilterDropdown() {
    const select = document.getElementById('f-sekolah');
    if (!select) return;
    
    const currentVal = select.value;
    select.innerHTML = '<option value="">Semua Sekolah</option>';
    
    const schools = [...new Set(participantState.participants.map(p => p.school))].sort();
    schools.forEach(school => {
        const opt = document.createElement('option');
        opt.value = school;
        opt.innerText = school;
        select.appendChild(opt);
    });
    
    select.value = currentVal;
}

async function lockDashboard() {
    const email = sessionStorage.getItem('admin_email');
    const pin = sessionStorage.getItem('admin_pin');
    
    if (email && pin) {
        try {
            await fetch('/api/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-email': email,
                    'x-admin-pin': pin
                },
                body: JSON.stringify({ action: "Admin Logout." })
            });
        } catch (e) {}
    }
    
    sessionStorage.removeItem('admin_email');
    sessionStorage.removeItem('admin_pin');
    stopAdminPolling();
    
    const mainContent = document.getElementById('dashboard-main-content');
    const loginBox = document.getElementById('dashboard-login-box');
    if (mainContent) mainContent.classList.add('hidden');
    if (loginBox) loginBox.classList.remove('hidden');
    
    const pinInput = document.getElementById('panitia-pin');
    if (pinInput) pinInput.value = '';
    const emailInput = document.getElementById('panitia-email');
    if (emailInput) emailInput.value = '';
    
    if (kehadiranChartObj) kehadiranChartObj.destroy();
    if (evaluasiChartObj) evaluasiChartObj.destroy();
    
    showToast('Dashboard Terkunci.', 'lock');
}

function openSettingsModal() {
    document.getElementById('settings-current-pin').value = '';
    document.getElementById('settings-new-pin').value = '';
    document.getElementById('settings-confirm-pin').value = '';
    
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    document.getElementById('settings-gemini-key').value = savedKey;
    
    document.getElementById('settings-modal').classList.add('active');
    lucide.createIcons();
}

function closeSettingsModal() {
    document.getElementById('settings-modal').classList.remove('active');
}

async function saveNewPin() {
    const currentPinInput = document.getElementById('settings-current-pin').value.trim();
    const newPinInput = document.getElementById('settings-new-pin').value.trim();
    const confirmPinInput = document.getElementById('settings-confirm-pin').value.trim();
    const geminiKeyInput = document.getElementById('settings-gemini-key').value.trim();
    
    let pinChanged = false;
    
    if (currentPinInput || newPinInput || confirmPinInput) {
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
        
        if (isServerMode) {
            try {
                const email = sessionStorage.getItem('admin_email');
                const pin = sessionStorage.getItem('admin_pin');
                const response = await fetch('/api/config/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-admin-email': email,
                        'x-admin-pin': pin
                    },
                    body: JSON.stringify({ newPin: newPinInput })
                });
                
                if (response.ok) {
                    sessionStorage.setItem('admin_pin', newPinInput);
                    localStorage.setItem('panitia_pin', newPinInput);
                    pinChanged = true;
                } else {
                    const errData = await response.json();
                    showToast(errData.error || 'Gagal memperbarui PIN di server.', 'x');
                    return;
                }
            } catch (e) {
                console.error("Error updating server PIN:", e);
                showToast('Gagal terhubung ke server.', 'x');
                return;
            }
        } else {
            localStorage.setItem('panitia_pin', newPinInput);
            pinChanged = true;
        }
    }
    
    localStorage.setItem('gemini_api_key', geminiKeyInput);
    
    if (pinChanged) {
        showToast('Pengaturan Akun & PIN berhasil disimpan!', 'check-circle');
    } else {
        showToast('Kunci API Gemini berhasil disimpan!', 'check-circle');
    }
    closeSettingsModal();
}

async function updateDashboardStats() {
    const s = participantState;
    const totalParticipants = s.participants.length;
    
    const totalEl = document.getElementById('stat-total-peserta');
    const hadirEl = document.getElementById('stat-hadir');
    const izinEl = document.getElementById('stat-izin');
    const sakitEl = document.getElementById('stat-sakit');
    const belumEl = document.getElementById('stat-belum');
    const reportsEl = document.getElementById('stat-laporan');
    const testimonialsEl = document.getElementById('stat-testimoni');
    
    const hadirTitle = document.getElementById('stat-hadir-title');
    const izinTitle = document.getElementById('stat-izin-title');
    const sakitTitle = document.getElementById('stat-sakit-title');
    const belumTitle = document.getElementById('stat-belum-title');

    let dateStr = '2026-06-17';
    try {
        const serverTime = await getServerTime();
        const jc = getJakartaDateComponents(serverTime);
        dateStr = jc.dateString;
    } catch(e) {}

    let activeDayLabel = 'Hari 1';
    let filterDayStr = 'Hari 1 : Rabu, 17 Juni 2026';
    if (dateStr === '2026-06-18') {
        activeDayLabel = 'Hari 2';
        filterDayStr = 'Hari 2 : Kamis, 18 Juni 2026';
    }

    const activeDayRecords = presenceDb.filter(p => p.day === filterDayStr);
    const countHadir = activeDayRecords.filter(p => p.status === 'Hadir').length;
    const countIzin = activeDayRecords.filter(p => p.status === 'Izin').length;
    const countSakit = activeDayRecords.filter(p => p.status === 'Sakit').length;
    const countTotal = activeDayRecords.length;
    const countBelum = Math.max(0, totalParticipants - countTotal);

    if (totalEl) totalEl.innerText = totalParticipants;
    if (hadirEl) hadirEl.innerText = countHadir;
    if (izinEl) izinEl.innerText = countIzin;
    if (sakitEl) sakitEl.innerText = countSakit;
    if (belumEl) belumEl.innerText = countBelum;
    if (reportsEl) reportsEl.innerText = reportsDb.length;
    if (testimonialsEl) testimonialsEl.innerText = testimonialsDb.length;

    if (hadirTitle) hadirTitle.innerText = `Total Hadir (${activeDayLabel})`;
    if (izinTitle) izinTitle.innerText = `Total Izin (${activeDayLabel})`;
    if (sakitTitle) sakitTitle.innerText = `Total Sakit (${activeDayLabel})`;
    if (belumTitle) belumTitle.innerText = `Belum Presensi (${activeDayLabel})`;
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

// ==========================================================================
// PUBLIC STATISTICS & PARTICIPANT DIRECTORY FUNCTIONS
// ==========================================================================
let publicChartObj = null;

function renderPublicDirectoryTable() {
    const tbody = document.getElementById('public-dir-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    participantState.participants.forEach((p, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><strong>${p.name}</strong></td>
            <td>${p.school}</td>
            <td>${p.district}</td>
            <td style="text-align: center;">
                <button onclick="openIdCardModal(${p.id})" class="btn-idcard" title="Lihat Kartu Peserta Digital">
                    <i data-lucide="contact"></i> Kartu Peserta
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

function filterPublicDirectory() {
    const searchVal = document.getElementById('public-search').value.toLowerCase();
    const rows = document.querySelectorAll('#public-dir-table-body tr');
    
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const name = cells[1].innerText.toLowerCase();
        const school = cells[2].innerText.toLowerCase();
        const district = cells[3].innerText.toLowerCase();
        
        if (name.includes(searchVal) || school.includes(searchVal) || district.includes(searchVal)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// State for public chart rendering (Bar vs Doughnut/Pie)
let publicChartType = 'bar';
let publicDoughnutDataset = 'peserta';

function switchPublicChartType(type) {
    publicChartType = type;
    
    // Toggle active classes on buttons
    const btnBar = document.getElementById('btn-chart-bar');
    const btnDoughnut = document.getElementById('btn-chart-doughnut');
    const toggleContainer = document.getElementById('doughnut-dataset-toggle');
    
    if (btnBar && btnDoughnut) {
        if (type === 'bar') {
            btnBar.classList.add('active');
            btnBar.style.background = 'var(--color-secondary)';
            btnBar.style.color = 'white';
            
            btnDoughnut.classList.remove('active');
            btnDoughnut.style.background = 'transparent';
            btnDoughnut.style.color = 'var(--color-text-muted)';
            
            if (toggleContainer) toggleContainer.style.display = 'none';
        } else {
            btnDoughnut.classList.add('active');
            btnDoughnut.style.background = 'var(--color-secondary)';
            btnDoughnut.style.color = 'white';
            
            btnBar.classList.remove('active');
            btnBar.style.background = 'transparent';
            btnBar.style.color = 'var(--color-text-muted)';
            
            if (toggleContainer) toggleContainer.style.display = 'flex';
        }
    }
    
    renderPublicCharts();
}

function toggleDoughnutDataset(dataset) {
    publicDoughnutDataset = dataset;
    renderPublicCharts();
}

function renderPublicCharts() {
    const districts = ["Singkawang Barat", "Singkawang Tengah", "Singkawang Timur", "Singkawang Utara", "Singkawang Selatan"];
    const participantCounts = [0, 0, 0, 0, 0];
    const schoolSets = [new Set(), new Set(), new Set(), new Set(), new Set()];
    
    participantState.participants.forEach(p => {
        const distIndex = districts.indexOf(p.district);
        if (distIndex !== -1) {
            participantCounts[distIndex]++;
            schoolSets[distIndex].add(p.school.trim().toLowerCase());
        }
    });
    
    const schoolCounts = schoolSets.map(set => set.size);
    let totalSchoolsUnique = new Set(participantState.participants.map(p => p.school.trim().toLowerCase())).size;
    if (totalSchoolsUnique === 59) {
        totalSchoolsUnique = 60; // Align with official 60 schools in rekap (accounting for SDN 82 Singkawang twice)
        schoolCounts[3] += 1;   // Add duplicate SDN 82 Singkawang to Singkawang Utara (index 3) school count
    }
    
    // Update HTML stats values
    const totalPesertaEl = document.getElementById('public-total-peserta');
    const totalSekolahEl = document.getElementById('public-total-sekolah');
    if (totalPesertaEl) totalPesertaEl.innerText = participantState.participants.length;
    if (totalSekolahEl) totalSekolahEl.innerText = totalSchoolsUnique;
    
    const canvas = document.getElementById('publicDistribusiChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (publicChartObj) {
        publicChartObj.destroy();
    }
    
    if (publicChartType === 'bar') {
        publicChartObj = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Skw Barat", "Skw Tengah", "Skw Timur", "Skw Utara", "Skw Selatan"],
                datasets: [
                    {
                        label: 'Jumlah Peserta',
                        data: participantCounts,
                        backgroundColor: '#2563eb',
                        borderRadius: 5
                    },
                    {
                        label: 'Jumlah Sekolah',
                        data: schoolCounts,
                        backgroundColor: '#d97706',
                        borderRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { family: 'Inter', size: 10, weight: '500' },
                            boxWidth: 12
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                            font: { family: 'Inter', size: 10 }
                        },
                        grid: {
                            color: '#f1f5f9'
                        }
                    },
                    x: {
                        ticks: {
                            font: { family: 'Inter', size: 10, weight: '600' }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } else {
        const isPeserta = (publicDoughnutDataset === 'peserta');
        const chartData = isPeserta ? participantCounts : schoolCounts;
        const chartLabel = isPeserta ? 'Jumlah Peserta' : 'Jumlah Sekolah';
        
        publicChartObj = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Singkawang Barat", "Singkawang Tengah", "Singkawang Timur", "Singkawang Utara", "Singkawang Selatan"],
                datasets: [{
                    label: chartLabel,
                    data: chartData,
                    backgroundColor: [
                        '#2563eb', // Barat: Blue
                        '#fbbf24', // Tengah: Gold
                        '#10b981', // Timur: Green
                        '#ec4899', // Utara: Pink
                        '#8b5cf6'  // Selatan: Purple
                    ],
                    borderWidth: 2,
                    borderColor: 'var(--color-bg-white)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: { family: 'Inter', size: 10, weight: '500' },
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return ` ${context.label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
}

function openIdCardModal(participantId) {
    const participant = participantState.participants.find(p => p.id === participantId);
    if (!participant) return;
    
    document.getElementById('idc-nama').innerText = participant.name;
    document.getElementById('idc-sekolah').innerText = participant.school;
    document.getElementById('idc-kecamatan').innerText = participant.district;
    
    document.getElementById('idcard-modal').classList.add('active');
    lucide.createIcons();
}

function closeIdCardModal() {
    document.getElementById('idcard-modal').classList.remove('active');
}

function printIdCard() {
    const pName = document.getElementById('idc-nama').innerText;
    const printContents = document.getElementById('id-card-badge-print').outerHTML;
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <html>
        <head>
            <title>Cetak Kartu Peserta - ${pName}</title>
            <style>
                body {
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    padding: 0;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                }
                .id-card-badge {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
                    border-radius: 12px;
                    padding: 24px;
                    color: white;
                    width: 380px;
                    border: 1px solid #1e293b;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    box-sizing: border-box;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                .idcard-header {
                    border-bottom: 2px solid #d97706;
                    padding-bottom: 12px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: center;
                }
                .idcard-logos-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .idcard-mg-logo {
                    height: 36px;
                    width: auto;
                }
                .idcard-divider {
                    width: 1.5px;
                    height: 18px;
                    background-color: rgba(255, 255, 255, 0.2);
                }
                .idcard-logo-org {
                    height: 24px;
                    width: auto;
                }
                .idcard-event-title {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: #fbbf24;
                    letter-spacing: 1.5px;
                }
                .idcard-body {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                }
                .idcard-avatar-side {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }
                .idcard-avatar-box {
                    width: 90px;
                    height: 110px;
                    border-radius: 8px;
                    background-color: rgba(255, 255, 255, 0.08);
                    border: 2px dashed rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .idcard-avatar-box svg {
                    width: 32px;
                    height: 32px;
                    stroke: rgba(255, 255, 255, 0.3);
                    fill: none;
                    stroke-width: 2;
                }
                .idcard-status-badge {
                    background-color: rgba(16, 185, 129, 0.15);
                    color: #34d399;
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    padding: 3px 8px;
                    border-radius: 50px;
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .idcard-details-side {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    flex-grow: 1;
                }
                .idcard-field {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .idcard-field label {
                    font-size: 0.62rem;
                    color: rgba(255, 255, 255, 0.4);
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }
                .idcard-value {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: white;
                    line-height: 1.2;
                }
                .idcard-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    border-top: 1px dashed rgba(255, 255, 255, 0.15);
                    padding-top: 15px;
                }
                .idcard-qr-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }
                .idcard-qr {
                    width: 48px;
                    height: 48px;
                    border-radius: 4px;
                    padding: 2px;
                    background-color: white;
                }
                .qr-text {
                    font-size: 0.55rem;
                    color: rgba(255, 255, 255, 0.4);
                }
                .idcard-sig-box {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .sig-title {
                    font-size: 0.55rem;
                    color: rgba(255, 255, 255, 0.4);
                }
                .sig-space {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                .sig-text-mock {
                    font-size: 0.9rem;
                    font-weight: 700;
                    font-style: italic;
                    color: #fbbf24;
                    letter-spacing: 1px;
                }
                .sig-name-footer {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: white;
                }
            </style>
        </head>
        <body>
            ${printContents}
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(() => window.close(), 500);
                }
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// ==========================================================================
// 15. DIGITAL PRESENCE SYSTEM LOGIC
// ==========================================================================
let presenceDb = [];
let adminLogs = [];
let canvas = null;
let ctx = null;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hasSigned = false;
let userCoordinates = "Lokasi tidak terdeteksi";

// Server mode & schedule states
let isServerMode = false;
let currentServerDate = null;

// Sorting state for presence table
let sortColumn = "idx";
let sortDirection = "asc";

async function checkServerMode() {
    try {
        const res = await fetch('/api/time');
        if (res.ok) {
            isServerMode = true;
            console.log("System running in Server Mode (with backend validation)");
        } else {
            isServerMode = false;
        }
    } catch (e) {
        isServerMode = false;
        console.log("System running in Standalone Client Mode (using LocalStorage + WorldTimeAPI fallback)");
    }
}

function loadLocalStoragePresence() {
    const savedPresence = localStorage.getItem('presence_db');
    if (savedPresence) {
        presenceDb = JSON.parse(savedPresence);
    } else {
        presenceDb = [];
        localStorage.setItem('presence_db', JSON.stringify(presenceDb));
    }

    const savedLogs = localStorage.getItem('admin_logs');
    if (savedLogs) {
        adminLogs = JSON.parse(savedLogs);
    } else {
        adminLogs = [];
        localStorage.setItem('admin_logs', JSON.stringify(adminLogs));
    }
}

async function initPresenceSystem() {
    // Check if we are in server mode
    await checkServerMode();

    if (isServerMode) {
        try {
            // Load presence data from server (public status check only)
            const resPresence = await fetch('/api/presence/public');
            presenceDb = await resPresence.json();
            
            // Logs are only loaded after admin login
            adminLogs = [];
        } catch (e) {
            console.error("Error loading server data, falling back to LocalStorage:", e);
            loadLocalStoragePresence();
        }
    } else {
        loadLocalStoragePresence();
    }

    // Initialize Searchable Dropdown List
    renderSearchableDropdown();

    // Initialize Signature Pad Canvas
    initSignatureCanvas();

    // Track user location if permitted
    detectUserLocation();

    // Load schedule and validate based on server time
    await loadAndValidatePresenceSchedule();

    // Update public presence charts and counts initially
    updatePresencePublicStats();
}

// Function to get server time securely
async function getServerTime() {
    // Check if testDate query parameter is provided
    const urlParams = new URLSearchParams(window.location.search);
    const testDate = urlParams.get('testDate');
    if (testDate) {
        const parsed = Date.parse(testDate);
        if (!isNaN(parsed)) {
            console.log(`[DEBUG] Simulating server date/time: ${new Date(parsed).toString()}`);
            return new Date(parsed);
        }
    }

    // Server API method
    if (isServerMode) {
        try {
            const response = await fetch('/api/time', { cache: 'no-store' });
            if (response.ok) {
                const data = await response.json();
                if (data && data.datetime) {
                    return new Date(data.datetime);
                }
            }
        } catch (e) {}
    }

    // WorldTimeAPI method
    try {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 3000);
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta', {
            signal: controller.signal,
            cache: 'no-store'
        });
        clearTimeout(id);
        if (response.ok) {
            const data = await response.json();
            if (data && data.datetime) {
                return new Date(data.datetime);
            }
        }
    } catch (e) {}

    // HTTP HEAD date header method
    try {
        if (window.location.protocol.startsWith('http')) {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), 2000);
            const response = await fetch(window.location.href, {
                method: 'HEAD',
                signal: controller.signal,
                cache: 'no-store'
            });
            clearTimeout(id);
            const serverDateStr = response.headers.get('Date');
            if (serverDateStr) {
                return new Date(serverDateStr);
            }
        }
    } catch (e) {}

    // Fallback to local clock
    console.warn("Using local device time as fallback.");
    return new Date();
}

// Get Jakarta date components YYYY-MM-DD
function getJakartaDateComponents(dateObj) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const parts = formatter.formatToParts(dateObj);
    const year = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value;
    const day = parts.find(p => p.type === 'day').value;
    
    return {
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
        dateString: `${year}-${month}-${day}`
    };
}

// Enable/Disable presence form helper functions
function enablePresenceForm() {
    const form = document.getElementById('form-presensi');
    if (form) {
        form.classList.remove('form-disabled');
        const elements = form.querySelectorAll('input, select, textarea, button');
        elements.forEach(el => {
            if (el.id !== 'p-sekolah' && el.id !== 'p-kecamatan' && el.id !== 'p-hari-display') {
                el.disabled = false;
            }
        });
    }
    const cv = document.getElementById('signature-canvas');
    if (cv) cv.style.pointerEvents = 'auto';
}

function disablePresenceForm(message, type) {
    const banner = document.getElementById('presence-status-banner');
    if (banner) {
        banner.style.display = 'flex';
        banner.className = `presence-status-banner banner-${type}`;
        banner.innerHTML = `<i data-lucide="${type === 'warning' ? 'clock' : 'alert-circle'}"></i> <span style="margin-left: 8px;">${message}</span>`;
        lucide.createIcons();
    }
    
    const form = document.getElementById('form-presensi');
    if (form) {
        form.classList.add('form-disabled');
        const elements = form.querySelectorAll('input, select, textarea, button');
        elements.forEach(el => {
            el.disabled = true;
        });
    }
    const cv = document.getElementById('signature-canvas');
    if (cv) cv.style.pointerEvents = 'none';
}

async function loadAndValidatePresenceSchedule() {
    currentServerDate = await getServerTime();
    
    const jc = getJakartaDateComponents(currentServerDate);
    const dateStr = jc.dateString;
    
    const displayInput = document.getElementById('p-hari-display');
    const hiddenInput = document.getElementById('p-hari');
    
    const banner = document.getElementById('presence-status-banner');
    if (banner) banner.style.display = 'none';
    
    enablePresenceForm();
    
    if (dateStr === '2026-06-17') {
        const val = "Hari 1 : Rabu, 17 Juni 2026";
        if (displayInput) displayInput.value = "Rabu, 17 Juni 2026 (Hari 1)";
        if (hiddenInput) hiddenInput.value = val;
    } else if (dateStr === '2026-06-18') {
        const val = "Hari 2 : Kamis, 18 Juni 2026";
        if (displayInput) displayInput.value = "Kamis, 18 Juni 2026 (Hari 2)";
        if (hiddenInput) hiddenInput.value = val;
    } else if (dateStr < '2026-06-17') {
        if (displayInput) displayInput.value = "Presensi Belum Dibuka";
        if (hiddenInput) hiddenInput.value = "";
        disablePresenceForm("Presensi belum dibuka. Silakan melakukan presensi sesuai jadwal pelatihan.", "warning");
    } else {
        if (displayInput) displayInput.value = "Presensi Telah Ditutup";
        if (hiddenInput) hiddenInput.value = "";
        disablePresenceForm("Presensi telah ditutup. Terima kasih atas partisipasi Anda.", "danger");
    }
}

// 1. Searchable Dropdown List
function renderSearchableDropdown() {
    const listContainer = document.getElementById('p-nama-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    
    // Sort participants by name alphabetically
    const sortedParticipants = [...participantState.participants].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedParticipants.forEach(p => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.setAttribute('data-id', p.id);
        item.setAttribute('data-name', p.name);
        item.setAttribute('data-school', p.school);
        item.setAttribute('data-district', p.district);
        
        item.innerHTML = `
            <span><b>${p.name}</b></span>
            <span class="dropdown-item-meta">${p.school}</span>
        `;
        
        item.addEventListener('click', () => {
            selectParticipant(p.id, p.name, p.school, p.district);
        });
        
        listContainer.appendChild(item);
    });
}

function showDropdownList() {
    const list = document.getElementById('p-nama-list');
    if (list) list.classList.remove('hidden');
}

function hideDropdownList() {
    // Delay to allow item click event to register before closing dropdown
    setTimeout(() => {
        const list = document.getElementById('p-nama-list');
        if (list) list.classList.add('hidden');
    }, 250);
}

function filterDropdownList() {
    const input = document.getElementById('p-nama-search');
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('#p-nama-list .dropdown-item');
    
    let matchesCount = 0;
    items.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        const school = item.getAttribute('data-school').toLowerCase();
        if (name.includes(filter) || school.includes(filter)) {
            item.style.display = '';
            matchesCount++;
        } else {
            item.style.display = 'none';
        }
    });
}

function selectParticipant(id, name, school, district) {
    const searchInput = document.getElementById('p-nama-search');
    const hiddenInput = document.getElementById('p-nama');
    const schoolInput = document.getElementById('p-sekolah');
    const districtInput = document.getElementById('p-kecamatan');
    
    if (searchInput && hiddenInput && schoolInput && districtInput) {
        searchInput.value = name;
        hiddenInput.value = id;
        schoolInput.value = school;
        districtInput.value = district;
        
        checkPresenceDuplicate();
        validateFormPresence();
    }
}

// 2. Signature Canvas Pad
function initSignatureCanvas() {
    canvas = document.getElementById('signature-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0f172a'; // Dark Navy Slate color
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Mouse drawing events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Touch drawing events (mobile screens)
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    // Close searchable dropdown on click outside
    document.addEventListener('click', (e) => {
        const wrapper = document.getElementById('nama-dropdown-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
            hideDropdownList();
        }
    });
}

function getCanvasCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    
    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}

function startDrawing(e) {
    isDrawing = true;
    const coords = getCanvasCoordinates(e);
    lastX = coords.x;
    lastY = coords.y;
    
    // Hide placeholder on drawing start
    const placeholder = document.getElementById('sig-placeholder');
    if (placeholder) placeholder.classList.add('hidden');
    
    e.preventDefault();
}

function draw(e) {
    if (!isDrawing) return;
    const coords = getCanvasCoordinates(e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    
    lastX = coords.x;
    lastY = coords.y;
    hasSigned = true;
    
    const sigError = document.getElementById('sig-error');
    if (sigError) sigError.classList.remove('hidden');

    validateFormPresence();
    e.preventDefault();
}

function stopDrawing() {
    isDrawing = false;
}

function clearSignatureCanvas() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSigned = false;
    
    const placeholder = document.getElementById('sig-placeholder');
    if (placeholder) placeholder.classList.remove('hidden');
    
    const sigError = document.getElementById('sig-error');
    if (sigError) sigError.classList.add('hidden');
    
    validateFormPresence();
}

// 3. Geolocator detektor
function detectUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(6);
                const lon = position.coords.longitude.toFixed(6);
                userCoordinates = `${lat}, ${lon}`;
            },
            (error) => {
                userCoordinates = "Aula Dinas Pendidikan, Singkawang";
            },
            { enableHighAccuracy: true, timeout: 5000 }
        );
    } else {
        userCoordinates = "Aula Dinas Pendidikan, Singkawang";
    }
}

// 4. Form Validations & Duplicate Checks
function checkPresenceDuplicate() {
    const idInput = document.getElementById('p-nama');
    const daySelect = document.getElementById('p-hari');
    const warningBox = document.getElementById('presence-warning');
    
    if (!idInput || !daySelect || !warningBox) return false;
    
    const pId = parseInt(idInput.value);
    const day = daySelect.value;
    
    if (!pId || !day) return false;
    
    // Check if participant already present on this day
    const isDuplicate = presenceDb.some(p => p.participantId === pId && p.day === day);
    
    if (isDuplicate) {
        warningBox.classList.remove('hidden');
        return true;
    } else {
        warningBox.classList.add('hidden');
        return false;
    }
}

function validateFormPresence() {
    const idInput = document.getElementById('p-nama');
    const emailInput = document.getElementById('p-email');
    const hpInput = document.getElementById('p-hp');
    const daySelect = document.getElementById('p-hari');
    const agreeCheckbox = document.getElementById('p-setuju');
    const submitBtn = document.getElementById('btn-submit-presensi');
    
    if (!idInput || !emailInput || !hpInput || !daySelect || !agreeCheckbox || !submitBtn) return;
    
    const isNameChosen = idInput.value !== '';
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.checkValidity();
    const isHpValid = hpInput.value.trim().length >= 9;
    const isDaySelected = daySelect.value !== '';
    const isAgreed = agreeCheckbox.checked;
    
    const isDuplicate = checkPresenceDuplicate();
    
    const isFormValid = isNameChosen && isEmailValid && isHpValid && isDaySelected && isAgreed && hasSigned && !isDuplicate;
    
    submitBtn.disabled = !isFormValid;
}

// Event validation listeners
document.addEventListener('DOMContentLoaded', () => {
    const pEmail = document.getElementById('p-email');
    const pHp = document.getElementById('p-hp');
    const pAgree = document.getElementById('p-setuju');
    
    if (pEmail) pEmail.addEventListener('input', validateFormPresence);
    if (pHp) pHp.addEventListener('input', validateFormPresence);
    if (pAgree) pAgree.addEventListener('change', validateFormPresence);
});

// 5. Presensi Online Submission
// 5. Presensi Online Submission
async function handlePresensiSubmit(event) {
    event.preventDefault();
    
    const idInput = document.getElementById('p-nama');
    const nameSearch = document.getElementById('p-nama-search');
    const schoolInput = document.getElementById('p-sekolah');
    const districtInput = document.getElementById('p-kecamatan');
    const emailInput = document.getElementById('p-email');
    const hpInput = document.getElementById('p-hp');
    const statusRadio = document.querySelector('input[name="p-status"]:checked');
    
    const pId = parseInt(idInput.value);
    if (!pId) {
        showToast('Gagal! Pilih nama lengkap terlebih dahulu.', 'x');
        return;
    }
    
    // Dynamic secure time check on submit
    const submitServerDate = await getServerTime();
    const jc = getJakartaDateComponents(submitServerDate);
    const dateStr = jc.dateString;
    
    let activeDayLabel = "";
    let hariPelatihan = "";
    let tanggalPelatihan = "";
    
    if (dateStr === '2026-06-17') {
        activeDayLabel = "Hari 1 : Rabu, 17 Juni 2026";
        hariPelatihan = "Hari 1";
        tanggalPelatihan = "17 Juni 2026";
    } else if (dateStr === '2026-06-18') {
        activeDayLabel = "Hari 2 : Kamis, 18 Juni 2026";
        hariPelatihan = "Hari 2";
        tanggalPelatihan = "18 Juni 2026";
    } else if (dateStr < '2026-06-17') {
        showToast('Gagal! Presensi belum dibuka.', 'x');
        return;
    } else {
        showToast('Gagal! Presensi telah ditutup.', 'x');
        return;
    }
    
    // Check local duplicate before sending
    const isDuplicate = presenceDb.some(p => p.participantId === pId && p.day === activeDayLabel);
    if (isDuplicate) {
        showToast('Gagal! Anda sudah melakukan presensi hari ini.', 'x');
        return;
    }
    
    // Get Signature data URL
    const signatureData = canvas.toDataURL("image/png");
    
    if (isServerMode) {
        try {
            const debugDate = new URLSearchParams(window.location.search).get('testDate') || '';
            const response = await fetch('/api/presence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-debug-date': debugDate
                },
                body: JSON.stringify({
                    participantId: pId,
                    name: nameSearch.value,
                    school: schoolInput.value,
                    district: districtInput.value,
                    email: emailInput.value,
                    phone: hpInput.value,
                    status: statusRadio.value,
                    signature: signatureData,
                    location: userCoordinates
                })
            });
            
            if (!response.ok) {
                const errData = await response.json();
                showToast(errData.error || 'Gagal menyimpan presensi.', 'x');
                return;
            }
            
            const savedRecord = await response.json();
            presenceDb.push(savedRecord);
        } catch (e) {
            console.error("Error submitting presence to server:", e);
            showToast('Error koneksi ke server.', 'x');
            return;
        }
    } else {
        // Standalone mode: save to LocalStorage
        const timeStr = submitServerDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        const presenceRecord = {
            id: Date.now(),
            participantId: pId,
            name: nameSearch.value,
            school: schoolInput.value,
            district: districtInput.value,
            email: emailInput.value,
            phone: hpInput.value,
            day: activeDayLabel,
            hariPelatihan: hariPelatihan,
            tanggalPelatihan: tanggalPelatihan,
            status: statusRadio.value,
            date: dateStr,
            time: timeStr,
            location: userCoordinates,
            signature: signatureData,
            timestamp: submitServerDate.getTime()
        };
        
        presenceDb.push(presenceRecord);
        localStorage.setItem('presence_db', JSON.stringify(presenceDb));
        writeAdminLog(`Peserta [${presenceRecord.name}] melakukan presensi ${presenceRecord.day} secara mandiri.`);
    }
    
    // Reset Form & Canvas
    document.getElementById('form-presensi').reset();
    clearSignatureCanvas();
    idInput.value = '';
    
    // Reset display input
    await loadAndValidatePresenceSchedule();
    
    // Disable submit button again
    document.getElementById('btn-submit-presensi').disabled = true;
    
    // Update dashboard real-time
    updatePresencePublicStats();
    renderPresenceTable();
    
    showToast('Presensi berhasil disimpan.', 'check-circle');
}

// 6. Public Presence Stats Sync
function updatePresencePublicStats() {
    const totalParticipants = participantState.participants.length;
    
    // Hari 1 Filtered records
    const h1Records = presenceDb.filter(p => p.day.includes('Hari 1'));
    const countHadirH1 = h1Records.filter(p => p.status === 'Hadir').length;
    const countIzinH1 = h1Records.filter(p => p.status === 'Izin').length;
    const countSakitH1 = h1Records.filter(p => p.status === 'Sakit').length;
    const countTotalH1 = h1Records.length;
    const belumH1 = Math.max(0, totalParticipants - countTotalH1);

    // Hari 2 Filtered records
    const h2Records = presenceDb.filter(p => p.day.includes('Hari 2'));
    const countHadirH2 = h2Records.filter(p => p.status === 'Hadir').length;
    const countIzinH2 = h2Records.filter(p => p.status === 'Izin').length;
    const countSakitH2 = h2Records.filter(p => p.status === 'Sakit').length;
    const countTotalH2 = h2Records.length;
    const belumH2 = Math.max(0, totalParticipants - countTotalH2);

    // Update H1 elements
    const cardHadirH1 = document.getElementById('p-stat-hadir-h1');
    const cardIzinH1 = document.getElementById('p-stat-izin-h1');
    const cardSakitH1 = document.getElementById('p-stat-sakit-h1');
    const cardBelumH1 = document.getElementById('p-stat-belum-h1');

    if (cardHadirH1) cardHadirH1.innerText = countHadirH1;
    if (cardIzinH1) cardIzinH1.innerText = countIzinH1;
    if (cardSakitH1) cardSakitH1.innerText = countSakitH1;
    if (cardBelumH1) cardBelumH1.innerText = belumH1;

    // Update H2 elements
    const cardHadirH2 = document.getElementById('p-stat-hadir-h2');
    const cardIzinH2 = document.getElementById('p-stat-izin-h2');
    const cardSakitH2 = document.getElementById('p-stat-sakit-h2');
    const cardBelumH2 = document.getElementById('p-stat-belum-h2');

    if (cardHadirH2) cardHadirH2.innerText = countHadirH2;
    if (cardIzinH2) cardIzinH2.innerText = countIzinH2;
    if (cardSakitH2) cardSakitH2.innerText = countSakitH2;
    if (cardBelumH2) cardBelumH2.innerText = belumH2;
}

// 7. Dashboard Sub-Tabs Toggling
function switchDashboardTab(tabName, element) {
    // Update active tab buttons
    const btnLaporan = document.getElementById('btn-tab-laporan');
    const btnKehadiran = document.getElementById('btn-tab-kehadiran');
    
    if (btnLaporan && btnKehadiran) {
        btnLaporan.classList.remove('active');
        btnKehadiran.classList.remove('active');
        element.classList.add('active');
    }
    
    // Hide and show panes
    const paneLaporan = document.getElementById('db-pane-laporan');
    const paneKehadiran = document.getElementById('db-pane-kehadiran');
    
    if (paneLaporan && paneKehadiran) {
        if (tabName === 'laporan') {
            paneLaporan.classList.remove('hidden');
            paneKehadiran.classList.add('hidden');
            renderDashboardTable();
        } else {
            paneLaporan.classList.add('hidden');
            paneKehadiran.classList.remove('hidden');
            renderPresenceTable();
            updatePresencePublicStats();
        }
    }
    
    lucide.createIcons();
}

// 8. Presence Table Listing (Filters, Search, Sorting)
function renderPresenceTable() {
    const tbody = document.getElementById('presence-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const searchVal = document.getElementById('p-search').value.toLowerCase();
    const filterHari = document.getElementById('f-hari').value;
    const filterStatus = document.getElementById('f-status').value;
    const filterKecamatan = document.getElementById('f-kecamatan').value;
    const filterSekolah = document.getElementById('f-sekolah')?.value || '';
    
    // Filter records
    let filteredRecords = presenceDb.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchVal) ||
                             p.school.toLowerCase().includes(searchVal) ||
                             p.district.toLowerCase().includes(searchVal) ||
                             p.email.toLowerCase().includes(searchVal) ||
                             p.phone.includes(searchVal);
                             
        const matchesHari = filterHari === '' || p.day === filterHari;
        const matchesStatus = filterStatus === '' || p.status === filterStatus;
        const matchesKecamatan = filterKecamatan === '' || p.district === filterKecamatan;
        const matchesSekolah = filterSekolah === '' || p.school === filterSekolah;
        
        return matchesSearch && matchesHari && matchesStatus && matchesKecamatan && matchesSekolah;
    });
    
    // Sort records
    filteredRecords.sort((a, b) => {
        let valA, valB;
        
        if (sortColumn === 'idx') {
            return sortDirection === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
        } else if (sortColumn === 'name') {
            valA = a.name; valB = b.name;
        } else if (sortColumn === 'school') {
            valA = a.school; valB = b.school;
        } else if (sortColumn === 'district') {
            valA = a.district; valB = b.district;
        } else if (sortColumn === 'day') {
            valA = a.day; valB = b.day;
        } else if (sortColumn === 'date') {
            valA = a.date; valB = b.date;
        } else if (sortColumn === 'time') {
            valA = a.time; valB = b.time;
        } else if (sortColumn === 'status') {
            valA = a.status; valB = b.status;
        }
        
        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
    
    if (filteredRecords.length === 0) {
        tbody.innerHTML = `<tr><td colspan="13" style="text-align:center; color:var(--color-text-muted);">Tidak ada data presensi cocok dengan filter pencarian.</td></tr>`;
        return;
    }
    
    filteredRecords.forEach((record, index) => {
        const tr = document.createElement('tr');
        
        let statusBadgeClass = 'status-badge-hadir';
        if (record.status === 'Izin') statusBadgeClass = 'status-badge-izin';
        else if (record.status === 'Sakit') statusBadgeClass = 'status-badge-sakit';
        
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><b>${record.name}</b></td>
            <td>${record.school}</td>
            <td>${record.district}</td>
            <td><span style="font-size:0.8rem;">${record.email}</span></td>
            <td><span style="font-size:0.8rem;">${record.phone}</span></td>
            <td>${record.day.split(':')[0]}</td>
            <td>${record.date}</td>
            <td>${record.time}</td>
            <td><span style="font-size:0.75rem; color:var(--color-text-muted);">${record.location}</span></td>
            <td><span class="presence-status-badge ${statusBadgeClass}">${record.status}</span></td>
            <td>
                <img src="${record.signature}" class="sig-thumbnail" alt="TTD ${record.name}" onclick="viewPresenceDetail(${record.id})">
            </td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button onclick="viewPresenceDetail(${record.id})" class="btn-idcard" title="Lihat Detail Presensi"><i data-lucide="eye" style="width:12px;height:12px;"></i></button>
                    <button onclick="editPresence(${record.id})" class="btn-idcard" title="Edit Data"><i data-lucide="edit" style="width:12px;height:12px;"></i></button>
                    <button onclick="deletePresence(${record.id})" class="btn-idcard" style="color:#ef4444;" title="Hapus"><i data-lucide="trash-2" style="width:12px;height:12px;"></i></button>
                </div>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

function filterPresenceTable() {
    renderPresenceTable();
}

function sortTable(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    renderPresenceTable();
}

// 9. Aksi Buttons: Detail, Edit, Hapus, Slip Cetak
function viewPresenceDetail(id) {
    const record = presenceDb.find(p => p.id === id);
    if (!record) return;
    
    const body = document.getElementById('presence-detail-body');
    if (!body) return;
    
    body.innerHTML = `
        <div class="detail-grid">
            <div class="detail-item">
                <label>Nama Lengkap</label>
                <span>${record.name}</span>
            </div>
            <div class="detail-item">
                <label>Hari / Tanggal</label>
                <span>${record.day}</span>
            </div>
            <div class="detail-item">
                <label>Asal Sekolah</label>
                <span>${record.school}</span>
            </div>
            <div class="detail-item">
                <label>Kecamatan</label>
                <span>${record.district}</span>
            </div>
            <div class="detail-item">
                <label>Email</label>
                <span>${record.email}</span>
            </div>
            <div class="detail-item">
                <label>Nomor HP</label>
                <span>${record.phone}</span>
            </div>
            <div class="detail-item">
                <label>Waktu Presensi</label>
                <span>${record.date} / ${record.time}</span>
            </div>
            <div class="detail-item">
                <label>Status</label>
                <span>${record.status}</span>
            </div>
            <div class="detail-item-full">
                <label>Metode Geolokasi / Koordinat</label>
                <span style="font-family:monospace; font-size:0.88rem;">${record.location}</span>
            </div>
        </div>
        <div class="detail-signature-box">
            <label style="font-size:0.75rem; color:var(--color-text-muted); font-weight:600; text-transform:uppercase;">Tanda Tangan Digital</label>
            <img src="${record.signature}" class="detail-signature-img" alt="Tanda Tangan">
        </div>
    `;
    
    // Bind click print slip
    document.getElementById('btn-print-slip').onclick = function() {
        printIndividualSlip(record);
    };
    
    document.getElementById('presence-detail-modal').classList.add('active');
    lucide.createIcons();
}

function closePresenceDetailModal() {
    document.getElementById('presence-detail-modal').classList.remove('active');
}

function editPresence(id) {
    const record = presenceDb.find(p => p.id === id);
    if (!record) return;
    
    document.getElementById('edit-p-id').value = record.id;
    document.getElementById('edit-p-nama').value = record.name;
    document.getElementById('edit-p-sekolah').value = record.school;
    document.getElementById('edit-p-kecamatan').value = record.district;
    document.getElementById('edit-p-email').value = record.email;
    document.getElementById('edit-p-hp').value = record.phone;
    document.getElementById('edit-p-hari').value = record.day;
    document.getElementById('edit-p-status').value = record.status;
    
    document.getElementById('presence-edit-modal').classList.add('active');
    lucide.createIcons();
}

function closePresenceEditModal() {
    document.getElementById('presence-edit-modal').classList.remove('active');
}

async function handlePresenceEditSubmit(event) {
    event.preventDefault();
    
    const id = parseInt(document.getElementById('edit-p-id').value);
    const email = document.getElementById('edit-p-email').value;
    const phone = document.getElementById('edit-p-hp').value;
    const day = document.getElementById('edit-p-hari').value;
    const status = document.getElementById('edit-p-status').value;
    
    const recordIndex = presenceDb.findIndex(p => p.id === id);
    if (recordIndex === -1) return;
    
    const oldStatus = presenceDb[recordIndex].status;
    const oldDay = presenceDb[recordIndex].day;
    
    if (isServerMode) {
        try {
            const adminEmail = sessionStorage.getItem('admin_email');
            const adminPin = sessionStorage.getItem('admin_pin');
            const response = await fetch(`/api/presence/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-email': adminEmail,
                    'x-admin-pin': adminPin
                },
                body: JSON.stringify({ email, phone, day, status })
            });
            
            if (!response.ok) {
                const err = await response.json();
                showToast(err.error || 'Gagal mengubah data.', 'x');
                return;
            }
            
            const updatedRecord = await response.json();
            presenceDb[recordIndex] = updatedRecord;
        } catch (e) {
            console.error("Error updating presence:", e);
            showToast('Error koneksi ke server.', 'x');
            return;
        }
    } else {
        presenceDb[recordIndex].email = email;
        presenceDb[recordIndex].phone = phone;
        presenceDb[recordIndex].day = day;
        presenceDb[recordIndex].status = status;
        
        // Split Hari and Tanggal Pelatihan
        let newHari = "Hari 1";
        let newTgl = "17 Juni 2026";
        if (day.includes("Hari 2")) {
            newHari = "Hari 2";
            newTgl = "18 Juni 2026";
        }
        presenceDb[recordIndex].hariPelatihan = newHari;
        presenceDb[recordIndex].tanggalPelatihan = newTgl;
        
        localStorage.setItem('presence_db', JSON.stringify(presenceDb));
        writeAdminLog(`Admin mengubah presensi [${presenceDb[recordIndex].name}] dari status ${oldStatus} (${oldDay.split(':')[0]}) menjadi ${status} (${day.split(':')[0]}).`);
    }
    
    closePresenceEditModal();
    renderPresenceTable();
    updatePresencePublicStats();
    
    showToast('Presensi berhasil diperbarui.', 'check-circle');
}

async function deletePresence(id) {
    const record = presenceDb.find(p => p.id === id);
    if (!record) return;
    
    if (confirm(`Apakah Anda yakin ingin menghapus data presensi untuk ${record.name}? Tindakan ini tidak dapat dibatalkan.`)) {
        if (isServerMode) {
            try {
                const adminEmail = sessionStorage.getItem('admin_email');
                const adminPin = sessionStorage.getItem('admin_pin');
                const response = await fetch(`/api/presence/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'x-admin-email': adminEmail,
                        'x-admin-pin': adminPin
                    }
                });
                
                if (!response.ok) {
                    showToast('Gagal menghapus data.', 'x');
                    return;
                }
                
                presenceDb = presenceDb.filter(p => p.id !== id);
            } catch (e) {
                console.error("Error deleting presence:", e);
                showToast('Error koneksi ke server.', 'x');
                return;
            }
        } else {
            presenceDb = presenceDb.filter(p => p.id !== id);
            localStorage.setItem('presence_db', JSON.stringify(presenceDb));
            writeAdminLog(`Admin menghapus data presensi milik [${record.name}] untuk ${record.day.split(':')[0]}.`);
        }
        
        renderPresenceTable();
        updatePresencePublicStats();
        
        showToast('Presensi telah dihapus.', 'trash-2');
    }
}

// Print Individual Slip PDF using Native window opening
function printIndividualSlip(record) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Bukti Presensi - ${record.name}</title>
            <style>
                body {
                    font-family: 'Inter', sans-serif;
                    padding: 40px;
                    color: #0f172a;
                    background-color: white;
                }
                .slip-container {
                    border: 2px solid #0f172a;
                    border-radius: 12px;
                    padding: 30px;
                    max-width: 600px;
                    margin: 0 auto;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                }
                .logo-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    border-bottom: 2px solid #d97706;
                    padding-bottom: 15px;
                    margin-bottom: 25px;
                }
                .logo-header img {
                    height: 50px;
                }
                .logo-header h2 {
                    margin: 0;
                    font-size: 1.3rem;
                    text-align: center;
                    color: #0f172a;
                }
                .slip-title {
                    text-align: center;
                    font-size: 1.15rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 25px;
                    color: #2563eb;
                    letter-spacing: 0.5px;
                }
                .info-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    border-bottom: 1px dashed #e2e8f0;
                    padding-bottom: 6px;
                }
                .info-label {
                    font-weight: 600;
                    color: #64748b;
                    font-size: 0.9rem;
                }
                .info-value {
                    font-weight: 700;
                    color: #0f172a;
                    font-size: 0.9rem;
                }
                .sig-box {
                    margin-top: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 15px;
                }
                .sig-img {
                    height: 80px;
                    background-color: #f8fafc;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    padding: 5px;
                }
                .footer-text {
                    text-align: center;
                    font-size: 0.72rem;
                    color: #94a3b8;
                    margin-top: 30px;
                }
            </style>
        </head>
        <body>
            <div class="slip-container">
                <div class="logo-header">
                    <h2>PANITIA PELAKSANA MATEMATIKA GEMBIRA<br><span style="font-size:0.95rem; color:#d97706;">DINAS PENDIDIKAN & KEBUDAYAAN KOTA SINGKAWANG</span></h2>
                </div>
                <div class="slip-title">Kartu Bukti Presensi Digital</div>
                
                <div class="info-row">
                    <span class="info-label">Nama Lengkap</span>
                    <span class="info-value">${record.name}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Asal Sekolah</span>
                    <span class="info-value">${record.school}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Kecamatan</span>
                    <span class="info-value">${record.district}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email</span>
                    <span class="info-value">${record.email}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Nomor HP</span>
                    <span class="info-value">${record.phone}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Hari / Sesi</span>
                    <span class="info-value">${record.day.split(':')[0]}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Waktu Presensi</span>
                    <span class="info-value">${record.date} ${record.time}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Status Kehadiran</span>
                    <span class="info-value" style="color:${record.status === 'Hadir' ? '#10b981' : record.status === 'Izin' ? '#d97706' : '#ef4444'}">${record.status}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Lokasi / GPS Koordinat</span>
                    <span class="info-value" style="font-family:monospace; font-size:0.8rem;">${record.location}</span>
                </div>
                
                <div class="sig-box">
                    <span class="info-label" style="font-size:0.75rem;">Tanda Tangan Peserta</span>
                    <img class="sig-img" src="${record.signature}" alt="Tanda Tangan">
                </div>
                
                <div class="footer-text">
                    Dicetak secara otomatis oleh Sistem Presensi Digital Pelatihan Matematika Gembira Kota Singkawang 2026.
                </div>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(() => window.close(), 500);
                }
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
    
    writeAdminLog(`Admin mencetak bukti presensi individu milik [${record.name}] untuk ${record.day.split(':')[0]}.`);
}

// 10. ekspor rekap: Excel & CSV
function exportPresenceCSV() {
    const filterHari = document.getElementById('f-hari').value;
    const filterStatus = document.getElementById('f-status').value;
    const filterKecamatan = document.getElementById('f-kecamatan').value;
    const filterSekolah = document.getElementById('f-sekolah')?.value || '';
    const searchVal = document.getElementById('p-search').value.toLowerCase();
    
    let filteredRecords = presenceDb.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchVal) ||
                             p.school.toLowerCase().includes(searchVal) ||
                             p.district.toLowerCase().includes(searchVal) ||
                             p.email.toLowerCase().includes(searchVal) ||
                             p.phone.includes(searchVal);
                             
        const matchesHari = filterHari === '' || p.day === filterHari;
        const matchesStatus = filterStatus === '' || p.status === filterStatus;
        const matchesKecamatan = filterKecamatan === '' || p.district === filterKecamatan;
        const matchesSekolah = filterSekolah === '' || p.school === filterSekolah;
        
        return matchesSearch && matchesHari && matchesStatus && matchesKecamatan && matchesSekolah;
    });
    
    if (filteredRecords.length === 0) {
        showToast('Gagal! Tidak ada data yang dapat diekspor.', 'x');
        return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "No,Nama Lengkap,Asal Sekolah,Kecamatan,Email,Nomor HP,Hari Kegiatan,Tanggal Presensi,Jam Presensi,Status Kehadiran,Koordinat Lokasi\n";
    
    filteredRecords.forEach((p, idx) => {
        const row = [
            idx + 1,
            `"${p.name}"`,
            `"${p.school}"`,
            `"${p.district}"`,
            `"${p.email}"`,
            `"${p.phone}"`,
            `"${p.day.split(':')[0].trim()}"`,
            `"${p.date}"`,
            `"${p.time}"`,
            `"${p.status}"`,
            `"${p.location}"`
        ].join(",");
        csvContent += row + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rekap_Kehadiran_Peserta_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    writeAdminLog(`Admin mengekspor data kehadiran peserta ke format CSV (Terdapat ${filteredRecords.length} baris terfilter).`);
}

function exportPresenceExcel() {
    const filterHari = document.getElementById('f-hari').value;
    const filterStatus = document.getElementById('f-status').value;
    const filterKecamatan = document.getElementById('f-kecamatan').value;
    const filterSekolah = document.getElementById('f-sekolah')?.value || '';
    const searchVal = document.getElementById('p-search').value.toLowerCase();
    
    let filteredRecords = presenceDb.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchVal) ||
                             p.school.toLowerCase().includes(searchVal) ||
                             p.district.toLowerCase().includes(searchVal) ||
                             p.email.toLowerCase().includes(searchVal) ||
                             p.phone.includes(searchVal);
                             
        const matchesHari = filterHari === '' || p.day === filterHari;
        const matchesStatus = filterStatus === '' || p.status === filterStatus;
        const matchesKecamatan = filterKecamatan === '' || p.district === filterKecamatan;
        const matchesSekolah = filterSekolah === '' || p.school === filterSekolah;
        
        return matchesSearch && matchesHari && matchesStatus && matchesKecamatan && matchesSekolah;
    });
    
    if (filteredRecords.length === 0) {
        showToast('Gagal! Tidak ada data yang dapat diekspor.', 'x');
        return;
    }
    
    // Tab separated values works perfectly to open directly in Excel
    let excelContent = "No\tNama Lengkap\tAsal Sekolah\tKecamatan\tEmail\tNomor HP\tHari Kegiatan\tTanggal Presensi\tJam Presensi\tStatus Kehadiran\tKoordinat Lokasi\n";
    
    filteredRecords.forEach((p, idx) => {
        const row = [
            idx + 1,
            p.name,
            p.school,
            p.district,
            p.email,
            p.phone,
            p.day.split(':')[0].trim(),
            p.date,
            p.time,
            p.status,
            p.location
        ].join("\t");
        excelContent += row + "\n";
    });
    
    const blob = new Blob([excelContent], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const encodedUri = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rekap_Kehadiran_Peserta_${Date.now()}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    writeAdminLog(`Admin mengekspor data kehadiran peserta ke format Excel (Terdapat ${filteredRecords.length} baris terfilter).`);
}

// 11. PDF Export
function exportPresencePDF() {
    const filterHari = document.getElementById('f-hari').value;
    const filterStatus = document.getElementById('f-status').value;
    const filterKecamatan = document.getElementById('f-kecamatan').value;
    const filterSekolah = document.getElementById('f-sekolah')?.value || '';
    const searchVal = document.getElementById('p-search').value.toLowerCase();
    
    let filteredRecords = presenceDb.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchVal) ||
                             p.school.toLowerCase().includes(searchVal) ||
                             p.district.toLowerCase().includes(searchVal) ||
                             p.email.toLowerCase().includes(searchVal) ||
                             p.phone.includes(searchVal);
                             
        const matchesHari = filterHari === '' || p.day === filterHari;
        const matchesStatus = filterStatus === '' || p.status === filterStatus;
        const matchesKecamatan = filterKecamatan === '' || p.district === filterKecamatan;
        const matchesSekolah = filterSekolah === '' || p.school === filterSekolah;
        
        return matchesSearch && matchesHari && matchesStatus && matchesKecamatan && matchesSekolah;
    });
    
    if (filteredRecords.length === 0) {
        showToast('Gagal! Tidak ada data yang dapat diekspor.', 'x');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    // A4 Portrait: 210 x 297 mm, using 10mm margin (printable width 190mm: X 10 to 200)
    const doc = new jsPDF('p', 'mm', 'a4');
    
    const totalHadir = filteredRecords.filter(p => p.status === 'Hadir').length;
    const totalIzin = filteredRecords.filter(p => p.status === 'Izin').length;
    const totalSakit = filteredRecords.filter(p => p.status === 'Sakit').length;
    
    let pageNum = 1;
    
    function drawHeader(documentObj) {
        // Navy top bar
        documentObj.setFillColor(15, 23, 42); // Primary Navy color
        documentObj.rect(10, 15, 190, 24, 'F');
        
        // Gold bottom accent line
        documentObj.setFillColor(217, 119, 6); // Gold color
        documentObj.rect(10, 39, 190, 1.5, 'F');
        
        // Header Text
        documentObj.setTextColor(255, 255, 255);
        documentObj.setFont('Helvetica', 'bold');
        documentObj.setFontSize(13);
        documentObj.text("LAPORAN REKAPITULASI KEHADIRAN PESERTA", 105, 22, { align: 'center' });
        
        documentObj.setFontSize(9);
        documentObj.setFont('Helvetica', 'normal');
        documentObj.text("Pelatihan Peningkatan Kompetensi Numerasi Guru SD (Matematika Gembira)", 105, 27, { align: 'center' });
        documentObj.text("Dinas Pendidikan & Kebudayaan Kota Singkawang - Ikatan Guru Indonesia (IGI)", 105, 32, { align: 'center' });
        
        // Metadata / Summary cards below header
        documentObj.setTextColor(15, 23, 42);
        documentObj.setFont('Helvetica', 'bold');
        documentObj.setFontSize(9);
        documentObj.text("RINGKASAN REKAP PRESENSI (FILTER AKTIF):", 10, 48);
        
        // Table of counts
        documentObj.setFont('Helvetica', 'normal');
        documentObj.text(`Total Peserta Terfilter: ${filteredRecords.length} orang`, 10, 53);
        documentObj.text(`Hadir: ${totalHadir} | Izin: ${totalIzin} | Sakit: ${totalSakit}`, 200, 53, { align: 'right' });
        documentObj.text(`Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}`, 10, 58);
        
        // Draw Table Header
        documentObj.setFillColor(30, 41, 59); // Slate Darker header
        documentObj.rect(10, 63, 190, 8, 'F');
        
        documentObj.setTextColor(255, 255, 255);
        documentObj.setFont('Helvetica', 'bold');
        documentObj.setFontSize(7.5);
        
        documentObj.text("No", 11, 68);
        documentObj.text("Nama Lengkap", 15, 68);
        documentObj.text("Sekolah", 42, 68);
        documentObj.text("Kecamatan", 64, 68);
        documentObj.text("Email", 82, 68);
        documentObj.text("Nomor HP", 107, 68);
        documentObj.text("Hari", 125, 68);
        documentObj.text("Tgl Lat", 135, 68);
        documentObj.text("Tgl Pres", 151, 68);
        documentObj.text("Jam", 167, 68);
        documentObj.text("Status", 178, 68);
        documentObj.text("TTD", 189, 68);
    }
    
    function drawFooter(documentObj, currentPage, totalPages) {
        documentObj.setFont('Helvetica', 'italic');
        documentObj.setFontSize(7);
        documentObj.setTextColor(148, 163, 184);
        
        documentObj.text("Sistem Presensi Digital Matematika Gembira Kota Singkawang 2026", 10, 285);
        documentObj.text(`Halaman ${currentPage} dari ${totalPages}`, 200, 285, { align: 'right' });
    }
    
    // Calculate page flows
    let startY = 75;
    const rowHeight = 8;
    const pageHeightLimit = 260;
    
    // Draw initial header
    drawHeader(doc);
    
    filteredRecords.forEach((p, idx) => {
        if (startY > pageHeightLimit) {
            // Page overflow, create new page
            doc.addPage();
            pageNum++;
            startY = 75;
            drawHeader(doc);
        }
        
        // Alternating row background colors
        if (idx % 2 === 1) {
            doc.setFillColor(248, 250, 252); // slate-50
            doc.rect(10, startY - 5, 190, rowHeight, 'F');
        }
        
        // Row border line
        doc.setDrawColor(241, 245, 249);
        doc.line(10, startY + 3, 200, startY + 3);
        
        // Row Text Values
        doc.setTextColor(51, 65, 85);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(7.2);
        
        // Dynamic properties fallback
        const hariPelatihan = p.hariPelatihan || (p.day.includes("Hari 1") ? "Hari 1" : "Hari 2");
        const tglPelatihanRaw = p.tanggalPelatihan || (p.day.includes("Hari 1") ? "17 Juni 2026" : "18 Juni 2026");
        const tglPelatihanCompact = tglPelatihanRaw.includes("17") ? "17 Jun 26" : "18 Jun 26";
        
        // Render text
        doc.text((idx + 1).toString(), 11, startY);
        doc.text(p.name.length > 21 ? p.name.substring(0, 19) + "..." : p.name, 15, startY);
        doc.text(p.school.length > 17 ? p.school.substring(0, 15) + "..." : p.school, 42, startY);
        doc.text(p.district.length > 13 ? p.district.substring(0, 11) + "..." : p.district, 64, startY);
        doc.text(p.email.length > 18 ? p.email.substring(0, 16) + "..." : p.email, 82, startY);
        doc.text(p.phone, 107, startY);
        doc.text(hariPelatihan, 125, startY);
        doc.text(tglPelatihanCompact, 135, startY);
        doc.text(p.date, 151, startY);
        doc.text(p.time.substring(0, 5), 167, startY);
        
        // Status with color
        if (p.status === 'Hadir') doc.setTextColor(16, 185, 129); // Green
        else if (p.status === 'Izin') doc.setTextColor(217, 119, 6); // Gold
        else doc.setTextColor(239, 68, 68); // Red
        
        doc.setFont('Helvetica', 'bold');
        doc.text(p.status, 178, startY);
        
        // Render TTD Image
        if (p.signature && p.signature.startsWith('data:image/png;base64,')) {
            try {
                // Draw signature thumbnail
                doc.addImage(p.signature, 'PNG', 189, startY - 4.5, 9, 5);
            } catch (e) {
                doc.setTextColor(148, 163, 184);
                doc.setFont('Helvetica', 'normal');
                doc.setFontSize(6);
                doc.text("[TTD]", 189, startY);
            }
        } else {
            doc.setTextColor(148, 163, 184);
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(6);
            doc.text("-", 189, startY);
        }
        
        startY += rowHeight;
    });
    
    // Halaman Pengesahan (Signature approval block)
    // Make sure we have enough space, else create new page
    if (startY > 220) {
        doc.addPage();
        pageNum++;
        startY = 50;
    }
    
    // Draw signature line divider
    doc.setDrawColor(226, 232, 240);
    doc.line(10, startY + 2, 200, startY + 2);
    
    doc.setTextColor(15, 23, 42);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.text("HALAMAN PENGESAHAN DOKUMEN REKAPITULASI:", 10, startY + 12);
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text("Mengetahui,", 130, startY + 25);
    
    doc.setFont('Helvetica', 'bold');
    doc.text("Ketua Panitia Pelaksana Matematika Gembira,", 130, startY + 30);
    
    // Blank space for physical signature
    doc.setFont('Helvetica', 'bold');
    doc.text("TOKIMIN, M.Pd.I", 130, startY + 58);
    
    // Add page numbers on all footer instances
    for (let i = 1; i <= pageNum; i++) {
        doc.setPage(i);
        drawFooter(doc, i, pageNum);
    }
    
    // Save generated document
    doc.save(`Rekap_Kehadiran_Peserta_${Date.now()}.pdf`);
    
    writeAdminLog(`Admin mengekspor data rekap kehadiran peserta ke format PDF (Terdapat ${filteredRecords.length} baris terfilter).`);
}

// 12. Security Audit Logs
async function writeAdminLog(action) {
    const now = new Date();
    const timestampStr = now.toLocaleDateString('id-ID') + " " + now.toLocaleTimeString('id-ID');
    
    const logEntry = {
        id: Date.now() + Math.random(),
        time: timestampStr,
        action: action
    };
    
    if (isServerMode) {
        const email = sessionStorage.getItem('admin_email');
        const pin = sessionStorage.getItem('admin_pin');
        if (email && pin) {
            try {
                await fetch('/api/logs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-admin-email': email,
                        'x-admin-pin': pin
                    },
                    body: JSON.stringify({ action })
                });
            } catch (e) {
                console.error("Gagal menulis log ke server:", e);
            }
        }
    } else {
        adminLogs.unshift(logEntry); // Prepend to show newest first
        if (adminLogs.length > 100) adminLogs.pop();
        localStorage.setItem('admin_logs', JSON.stringify(adminLogs));
    }
}

function renderAdminLogsTable() {
    const tbody = document.getElementById('admin-logs-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Sort logs descending (latest first) so it is easy to read
    const sortedLogs = [...adminLogs].sort((a, b) => b.timestamp - a.timestamp);
    
    if (sortedLogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--color-text-muted);">Belum ada log aktivitas admin tercatat.</td></tr>`;
    } else {
        sortedLogs.forEach((log, index) => {
            const tr = document.createElement('tr');
            // If server mode, log objects have log.date and log.time.
            // If standalone mode, log objects have log.time containing date & time.
            const timeStr = log.date ? `${log.date} ${log.time}` : log.time;
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td><span style="font-family:monospace; font-size:0.8rem;">${timeStr}</span></td>
                <td>${log.action}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function openAdminLogsModal() {
    renderAdminLogsTable();
    document.getElementById('admin-logs-modal').classList.add('active');
    lucide.createIcons();
}

function closeAdminLogsModal() {
    document.getElementById('admin-logs-modal').classList.remove('active');
}

async function clearAdminLogs() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh riwayat log aktivitas admin?")) {
        if (isServerMode) {
            try {
                const email = sessionStorage.getItem('admin_email');
                const pin = sessionStorage.getItem('admin_pin');
                const response = await fetch('/api/logs/clear', {
                    method: 'POST',
                    headers: {
                        'x-admin-email': email,
                        'x-admin-pin': pin
                    }
                });
                if (!response.ok) {
                    showToast('Gagal membersihkan log server.', 'x');
                    return;
                }
                adminLogs = [];
            } catch (e) {
                console.error("Error clearing logs on server:", e);
                showToast('Error koneksi ke server.', 'x');
                return;
            }
        } else {
            adminLogs = [];
            localStorage.setItem('admin_logs', JSON.stringify(adminLogs));
        }
        
        renderAdminLogsTable();
        showToast('Log aktivitas admin berhasil dibersihkan.', 'trash-2');
    }
}

// ==========================================================================
// RESET DATA UJI COBA SYSTEM
// ==========================================================================
function getSuperAdminPin() {
    let savedPin = localStorage.getItem('super_admin_pin');
    if (!savedPin) {
        savedPin = '8888'; // Default Super Admin PIN
        localStorage.setItem('super_admin_pin', savedPin);
    }
    return savedPin;
}

function openResetModal() {
    const lastUserName = localStorage.getItem('last_report_name') || '';
    const descEl = document.getElementById('reset-user-desc');
    const adminInput = document.getElementById('reset-admin-name');
    const pinInput = document.getElementById('reset-super-pin');
    const pinGroup = document.getElementById('super-admin-pin-group');
    
    // Clear inputs
    if (adminInput) adminInput.value = '';
    if (pinInput) pinInput.value = '';
    if (pinGroup) pinGroup.classList.add('hidden');
    
    // Reset radio option to 'user'
    const radios = document.getElementsByName('reset-mode-select');
    radios.forEach(r => {
        if (r.value === 'user') r.checked = true;
    });
    
    if (descEl) {
        if (lastUserName) {
            descEl.innerText = `Menghapus draf laporan terakhir yang dibuat di browser ini (${lastUserName}).`;
        } else {
            descEl.innerText = `Tidak ada draf laporan aktif di browser ini.`;
        }
    }
    
    // Setup toggle listener if not already done
    if (!window.resetModalInitialized) {
        document.querySelectorAll('input[name="reset-mode-select"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const group = document.getElementById('super-admin-pin-group');
                if (group) {
                    if (e.target.value === 'all') {
                        group.classList.remove('hidden');
                    } else {
                        group.classList.add('hidden');
                    }
                }
            });
        });
        window.resetModalInitialized = true;
    }
    
    const modal = document.getElementById('reset-modal');
    if (modal) modal.classList.add('active');
    lucide.createIcons();
}

function closeResetModal() {
    const modal = document.getElementById('reset-modal');
    if (modal) modal.classList.remove('active');
}

async function executeDataReset() {
    const adminName = document.getElementById('reset-admin-name').value.trim();
    if (!adminName) {
        showToast("Nama Admin/Panitia wajib diisi.", "x");
        return;
    }
    
    const radios = document.getElementsByName('reset-mode-select');
    let mode = 'user';
    radios.forEach(r => {
        if (r.checked) mode = r.value;
    });
    
    const lastUserName = localStorage.getItem('last_report_name') || '';
    
    if (mode === 'user') {
        if (!lastUserName) {
            showToast("Tidak ada data laporan aktif untuk pengguna Anda.", "x");
            return;
        }
        
        const confirmReset = confirm(`Apakah Anda yakin ingin menghapus data uji coba milik [${lastUserName}]? Proses ini tidak dapat dibatalkan.`);
        if (!confirmReset) return;
        
        let deletedCount = 0;
        
        if (isServerMode) {
            try {
                const email = sessionStorage.getItem('admin_email');
                const pin = sessionStorage.getItem('admin_pin');
                const response = await fetch('/api/reports/reset', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-admin-email': email,
                        'x-admin-pin': pin
                    },
                    body: JSON.stringify({ mode: 'user', name: lastUserName, adminName })
                });
                const result = await response.json();
                if (result.success) {
                    deletedCount = result.deletedCount;
                } else {
                    throw new Error(result.error || "Gagal reset data di server");
                }
            } catch (e) {
                console.error("Server reset failed, falling back to local:", e);
                deletedCount = localResetUser(lastUserName);
            }
        } else {
            deletedCount = localResetUser(lastUserName);
        }
        
        const jkt = new Date();
        const dateStr = jkt.toLocaleDateString('id-ID');
        const timeStr = jkt.toLocaleTimeString('id-ID');
        const actionText = `Reset data uji coba laporan milik [${lastUserName}] oleh Admin [${adminName}]. Dihapus: ${deletedCount} draf.`;
        
        if (!isServerMode) {
            adminLogs.push({
                id: Date.now() + Math.random(),
                action: actionText,
                timestamp: Date.now(),
                date: dateStr,
                time: timeStr
            });
            localStorage.setItem('admin_logs', JSON.stringify(adminLogs));
        } else {
            try {
                const resLogs = await fetch('/api/logs');
                adminLogs = await resLogs.json();
            } catch (e) {
                console.error("Failed to sync server logs:", e);
            }
        }
        
        localStorage.removeItem('last_report_name');
        
        await initReportsAndTestimonials();
        
        const matchingParticipant = participantState.participants.find(p => p.name.toLowerCase().includes(lastUserName.toLowerCase()) || lastUserName.toLowerCase().includes(p.name.toLowerCase()));
        if (matchingParticipant) {
            matchingParticipant.reportStatus = "Belum Dibuat";
            renderDashboardTable();
        }
        
        showToast(`✅ Data uji coba milik ${lastUserName} berhasil dihapus.`, 'check-circle');
        closeResetModal();
    } else {
        const superPin = document.getElementById('reset-super-pin').value;
        if (!superPin) {
            showToast("PIN Super Admin wajib diisi.", "x");
            return;
        }
        
        if (superPin !== getSuperAdminPin()) {
            showToast("PIN Super Admin salah!", "x");
            return;
        }
        
        const confirmReset = confirm("Apakah Anda yakin ingin menghapus seluruh data uji coba? Proses ini tidak dapat dibatalkan.");
        if (!confirmReset) return;
        
        let deletedCount = 0;
        
        if (isServerMode) {
            try {
                const email = sessionStorage.getItem('admin_email');
                const pin = sessionStorage.getItem('admin_pin');
                const response = await fetch('/api/reports/reset', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-admin-email': email,
                        'x-admin-pin': pin
                    },
                    body: JSON.stringify({ mode: 'all', adminName })
                });
                const result = await response.json();
                if (result.success) {
                    deletedCount = result.deletedCount;
                } else {
                    throw new Error(result.error || "Gagal reset data di server");
                }
            } catch (e) {
                console.error("Server reset failed, falling back to local:", e);
                deletedCount = localResetAll();
            }
        } else {
            deletedCount = localResetAll();
        }
        
        const jkt = new Date();
        const dateStr = jkt.toLocaleDateString('id-ID');
        const timeStr = jkt.toLocaleTimeString('id-ID');
        const actionText = `Reset seluruh data uji coba laporan di sistem oleh Admin [${adminName}]. Dihapus: ${deletedCount} draf.`;
        
        if (!isServerMode) {
            adminLogs.push({
                id: Date.now() + Math.random(),
                action: actionText,
                timestamp: Date.now(),
                date: dateStr,
                time: timeStr
            });
            localStorage.setItem('admin_logs', JSON.stringify(adminLogs));
        } else {
            try {
                const resLogs = await fetch('/api/logs');
                adminLogs = await resLogs.json();
            } catch (e) {
                console.error("Failed to sync server logs:", e);
            }
        }
        
        localStorage.removeItem('last_report_name');
        
        participantState.participants.forEach(p => {
            p.reportStatus = "Belum Dibuat";
        });
        
        participantState.reportsGenerated = 0;
        updateDashboardStats();
        renderDashboardTable();
        
        await initReportsAndTestimonials();
        
        showToast(`✅ Data uji coba berhasil dihapus.`, 'check-circle');
        closeResetModal();
    }
}

function localResetUser(name) {
    const initialReportsCount = reportsDb.length;
    reportsDb = reportsDb.filter(r => r.nama.toLowerCase() !== name.toLowerCase());
    const deletedCount = initialReportsCount - reportsDb.length;
    localStorage.setItem('reports_db', JSON.stringify(reportsDb));
    
    testimonialsDb = testimonialsDb.filter(t => t.name.toLowerCase() !== name.toLowerCase());
    localStorage.setItem('testimonials_db', JSON.stringify(testimonialsDb));
    
    return deletedCount;
}

function localResetAll() {
    const deletedCount = reportsDb.length;
    reportsDb = [];
    localStorage.setItem('reports_db', JSON.stringify([]));
    
    const mockNames = ["Sumiyah, S.Pd.", "Mindi Maria Domitila, S.Pd."];
    testimonialsDb = testimonialsDb.filter(t => mockNames.includes(t.name));
    localStorage.setItem('testimonials_db', JSON.stringify(testimonialsDb));
    
    return deletedCount;
}


// =============================================================================
// MODUL MANAJEMEN PESERTA (NEW MODULE)
// =============================================================================

// Pagination state for participant table
let mgmtCurrentPage = 1;
const MGMT_PAGE_SIZE = 15;
let mgmtFilteredParticipants = [];
let participantToDeleteId = null;
let importPreviewData = [];

// -----------------------------------------------
// INIT: Load participants from server (or localStorage fallback)
// -----------------------------------------------
async function initParticipantManagement() {
    if (isServerMode) {
        try {
            const res = await fetch('/api/participants/public');
            if (res.ok) {
                const serverParticipants = await res.json();
                // Merge: preserve reportStatus from hardcoded data into server data
                participantState.participants = serverParticipants.map(sp => {
                    const existing = participantState.participants.find(p => p.id === sp.id);
                    return {
                        ...sp,
                        reportStatus: existing ? existing.reportStatus : (sp.reportStatus || 'Belum Dibuat')
                    };
                });
                participantState.totalRegistered = participantState.participants.length;
            }
        } catch (e) {
            console.error('Gagal load participants dari server, pakai data hardcoded:', e);
        }
    } else {
        // Standalone: try localStorage participants
        const saved = localStorage.getItem('participants_db');
        if (saved) {
            try {
                const localParticipants = JSON.parse(saved);
                if (localParticipants.length > 0) {
                    participantState.participants = localParticipants;
                    participantState.totalRegistered = localParticipants.length;
                }
            } catch (e) {}
        }
    }

    // Re-render all dependent features with updated data
    refreshAllParticipantDependents();
}

// Save to localStorage as fallback
function saveParticipantsToLocalStorage() {
    localStorage.setItem('participants_db', JSON.stringify(participantState.participants));
}

// Refresh all features that depend on participants list
function refreshAllParticipantDependents() {
    participantState.totalRegistered = participantState.participants.length;
    updateDashboardStats();
    renderDashboardTable();
    renderSearchableDropdown();
    renderRepSearchableDropdown();
    renderPublicDirectoryTable();
    filterAndRenderParticipantTable();
    lucide.createIcons();
}

// -----------------------------------------------
// TAB SWITCH: Load participants when switching to "peserta" tab
// -----------------------------------------------
const _origSwitchDashboardTab = typeof switchDashboardTab === 'function' ? switchDashboardTab : null;
function switchDashboardTab(tabName, btnElement) {
    const buttons = document.querySelectorAll('.db-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const panes = document.querySelectorAll('.dashboard-pane');
    panes.forEach(pane => pane.classList.add('hidden'));

    const targetPane = document.getElementById(`db-pane-${tabName}`);
    if (targetPane) targetPane.classList.remove('hidden');

    if (tabName === 'peserta') {
        filterAndRenderParticipantTable();
        lucide.createIcons();
    }

    lucide.createIcons();
}

// -----------------------------------------------
// RENDER: Participant table with pagination
// -----------------------------------------------
function filterAndRenderParticipantTable() {
    const searchVal = (document.getElementById('mgmt-search')?.value || '').toLowerCase();
    const districtVal = document.getElementById('mgmt-filter-district')?.value || '';
    const statusVal = document.getElementById('mgmt-filter-status')?.value || '';

    mgmtFilteredParticipants = participantState.participants.filter(p => {
        const matchSearch = !searchVal ||
            (p.name || '').toLowerCase().includes(searchVal) ||
            (p.nip || '').toLowerCase().includes(searchVal) ||
            (p.school || '').toLowerCase().includes(searchVal) ||
            (p.email || '').toLowerCase().includes(searchVal) ||
            (p.phone || '').toLowerCase().includes(searchVal);
        const matchDistrict = !districtVal || p.district === districtVal;
        const matchStatus = !statusVal || p.status === statusVal;
        return matchSearch && matchDistrict && matchStatus;
    });

    // Update stats bar
    const totalEl = document.getElementById('mgmt-stat-total');
    const aktifEl = document.getElementById('mgmt-stat-aktif');
    const filteredEl = document.getElementById('mgmt-stat-filtered');
    if (totalEl) totalEl.innerHTML = `Total: <b>${participantState.participants.length}</b> peserta`;
    if (aktifEl) aktifEl.innerHTML = `Aktif: <b>${participantState.participants.filter(p => p.status === 'Aktif').length}</b>`;
    if (filteredEl) filteredEl.innerHTML = `Ditampilkan: <b>${mgmtFilteredParticipants.length}</b>`;

    mgmtCurrentPage = 1;
    renderMgmtTablePage();
}

function renderMgmtTablePage() {
    const tbody = document.getElementById('mgmt-table-body');
    const emptyState = document.getElementById('mgmt-empty-state');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (mgmtFilteredParticipants.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        renderMgmtPagination(0);
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    const totalPages = Math.ceil(mgmtFilteredParticipants.length / MGMT_PAGE_SIZE);
    const start = (mgmtCurrentPage - 1) * MGMT_PAGE_SIZE;
    const end = Math.min(start + MGMT_PAGE_SIZE, mgmtFilteredParticipants.length);
    const pageItems = mgmtFilteredParticipants.slice(start, end);

    pageItems.forEach((p, idx) => {
        const globalIdx = start + idx + 1;
        const statusClass = p.status === 'Aktif' ? 'mgmt-badge-aktif' : 'mgmt-badge-nonaktif';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${globalIdx}</td>
            <td><b>${p.name || ''}</b></td>
            <td class="mgmt-nip-cell">${p.nip || '<span class="mgmt-empty-cell">-</span>'}</td>
            <td>${p.school || ''}</td>
            <td>${p.district || ''}</td>
            <td>${p.phone || '<span class="mgmt-empty-cell">-</span>'}</td>
            <td>${p.email || '<span class="mgmt-empty-cell">-</span>'}</td>
            <td><span class="mgmt-status-badge ${statusClass}">${p.status || 'Aktif'}</span></td>
            <td class="mgmt-date-cell">${p.dateAdded || '-'}</td>
            <td class="mgmt-action-cell">
                <button onclick="openEditParticipantModal(${p.id})" class="mgmt-btn-edit" title="Edit">
                    <i data-lucide="pencil" style="width:14px;height:14px;"></i>
                </button>
                <button onclick="openConfirmDeleteModal(${p.id}, '${(p.name || '').replace(/'/g, "\\'")}')" class="mgmt-btn-delete" title="Hapus">
                    <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderMgmtPagination(totalPages);
    lucide.createIcons();
}

function renderMgmtPagination(totalPages) {
    const container = document.getElementById('mgmt-pagination');
    if (!container) return;
    container.innerHTML = '';

    if (totalPages <= 1) return;

    const makeBtn = (label, page, isActive = false, isDisabled = false) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.className = 'mgmt-page-btn' + (isActive ? ' active' : '');
        btn.disabled = isDisabled;
        if (!isDisabled) btn.onclick = () => { mgmtCurrentPage = page; renderMgmtTablePage(); };
        return btn;
    };

    container.appendChild(makeBtn('‹', mgmtCurrentPage - 1, false, mgmtCurrentPage === 1));

    for (let i = 1; i <= totalPages; i++) {
        if (totalPages <= 7 || i === 1 || i === totalPages || Math.abs(i - mgmtCurrentPage) <= 1) {
            container.appendChild(makeBtn(i, i, i === mgmtCurrentPage));
        } else if (Math.abs(i - mgmtCurrentPage) === 2) {
            const dots = document.createElement('span');
            dots.textContent = '…';
            dots.className = 'mgmt-page-dots';
            container.appendChild(dots);
        }
    }

    container.appendChild(makeBtn('›', mgmtCurrentPage + 1, false, mgmtCurrentPage === totalPages));
}

// -----------------------------------------------
// MODAL: Add Participant
// -----------------------------------------------
function openAddParticipantModal() {
    document.getElementById('participant-form-modal-title').textContent = 'Tambah Peserta Baru';
    document.getElementById('pf-id').value = '';
    document.getElementById('pf-name').value = '';
    document.getElementById('pf-nip').value = '';
    document.getElementById('pf-school').value = '';
    document.getElementById('pf-district').value = '';
    document.getElementById('pf-phone').value = '';
    document.getElementById('pf-email').value = '';
    document.getElementById('pf-status').value = 'Aktif';
    document.getElementById('pf-submit-btn').innerHTML = '<i data-lucide="save"></i> Simpan Peserta';
    document.getElementById('participant-form-modal').classList.add('active');
    lucide.createIcons();
}

function openEditParticipantModal(id) {
    const p = participantState.participants.find(p => p.id === id);
    if (!p) return;

    document.getElementById('participant-form-modal-title').textContent = 'Edit Data Peserta';
    document.getElementById('pf-id').value = p.id;
    document.getElementById('pf-name').value = p.name || '';
    document.getElementById('pf-nip').value = p.nip || '';
    document.getElementById('pf-school').value = p.school || '';
    document.getElementById('pf-district').value = p.district || '';
    document.getElementById('pf-phone').value = p.phone || '';
    document.getElementById('pf-email').value = p.email || '';
    document.getElementById('pf-status').value = p.status || 'Aktif';
    document.getElementById('pf-submit-btn').innerHTML = '<i data-lucide="check"></i> Perbarui Data';
    document.getElementById('participant-form-modal').classList.add('active');
    lucide.createIcons();
}

function closeParticipantFormModal() {
    document.getElementById('participant-form-modal').classList.remove('active');
}

// -----------------------------------------------
// SAVE: Add or Edit Participant
// -----------------------------------------------
async function saveParticipant(event) {
    event.preventDefault();

    const id = document.getElementById('pf-id').value;
    const payload = {
        name: document.getElementById('pf-name').value.trim(),
        nip: document.getElementById('pf-nip').value.trim(),
        school: document.getElementById('pf-school').value.trim(),
        district: document.getElementById('pf-district').value,
        phone: document.getElementById('pf-phone').value.trim(),
        email: document.getElementById('pf-email').value.trim(),
        status: document.getElementById('pf-status').value
    };

    if (!payload.name || !payload.school || !payload.district) {
        showToast('Nama, Sekolah, dan Kecamatan wajib diisi!', 'alert-circle');
        return;
    }

    const isEdit = !!id;

    if (isServerMode) {
        try {
            const method = isEdit ? 'PUT' : 'POST';
            const url = isEdit ? `/api/participants/${id}` : '/api/participants';
            const email = sessionStorage.getItem('admin_email');
            const pin = sessionStorage.getItem('admin_pin');
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-email': email,
                    'x-admin-pin': pin
                },
                body: JSON.stringify(payload)
            });

            if (res.status === 409) {
                showToast('Data peserta ini sudah ada (duplikat).', 'alert-circle');
                return;
            }
            if (!res.ok) {
                const err = await res.json();
                showToast(err.error || 'Gagal menyimpan data.', 'alert-circle');
                return;
            }

            const saved = await res.json();

            if (isEdit) {
                const idx = participantState.participants.findIndex(p => p.id === parseInt(id));
                if (idx !== -1) participantState.participants[idx] = { ...participantState.participants[idx], ...saved };
            } else {
                participantState.participants.push(saved);
            }
        } catch (e) {
            showToast('Koneksi server gagal, menyimpan ke lokal...', 'wifi-off');
            localSaveParticipant(isEdit, id, payload);
        }
    } else {
        localSaveParticipant(isEdit, id, payload);
    }

    closeParticipantFormModal();
    refreshAllParticipantDependents();
    showToast(isEdit ? 'Data peserta berhasil diperbarui!' : 'Peserta baru berhasil ditambahkan!', 'check-circle');
}

function localSaveParticipant(isEdit, id, payload) {
    if (isEdit) {
        const idx = participantState.participants.findIndex(p => p.id === parseInt(id));
        if (idx !== -1) participantState.participants[idx] = { ...participantState.participants[idx], ...payload };
    } else {
        const maxId = participantState.participants.reduce((max, p) => Math.max(max, p.id || 0), 0);
        participantState.participants.push({
            id: maxId + 1,
            dateAdded: new Date().toISOString().slice(0, 10),
            reportStatus: 'Belum Dibuat',
            ...payload
        });
    }
    saveParticipantsToLocalStorage();
}

// -----------------------------------------------
// DELETE: Participant
// -----------------------------------------------
function openConfirmDeleteModal(id, name) {
    participantToDeleteId = id;
    const nameEl = document.getElementById('confirm-delete-name');
    if (nameEl) nameEl.textContent = name;
    document.getElementById('confirm-delete-modal').classList.add('active');
    lucide.createIcons();
}

function closeConfirmDeleteModal() {
    participantToDeleteId = null;
    document.getElementById('confirm-delete-modal').classList.remove('active');
}

async function confirmDeleteParticipant() {
    if (!participantToDeleteId) return;
    const id = participantToDeleteId;
    closeConfirmDeleteModal();

    if (isServerMode) {
        try {
            const email = sessionStorage.getItem('admin_email');
            const pin = sessionStorage.getItem('admin_pin');
            const res = await fetch(`/api/participants/${id}`, {
                method: 'DELETE',
                headers: {
                    'x-admin-email': email,
                    'x-admin-pin': pin
                }
            });
            if (!res.ok) {
                showToast('Gagal menghapus peserta dari server.', 'alert-circle');
                return;
            }
        } catch (e) {
            showToast('Koneksi server gagal, menghapus dari lokal...', 'wifi-off');
        }
    }

    participantState.participants = participantState.participants.filter(p => p.id !== id);
    saveParticipantsToLocalStorage();
    refreshAllParticipantDependents();
    showToast('Peserta berhasil dihapus.', 'trash-2');
}

// -----------------------------------------------
// IMPORT: Excel File
// -----------------------------------------------
function handleExcelImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

            // Map column names (flexible mapping)
            const colMap = {
                name: ['Nama Lengkap', 'nama lengkap', 'nama', 'Nama'],
                nip: ['NIP', 'nip', 'NUPTK'],
                school: ['Asal Sekolah', 'asal sekolah', 'sekolah', 'Sekolah', 'Instansi'],
                district: ['Kecamatan', 'kecamatan'],
                phone: ['Nomor HP', 'nomor hp', 'No HP', 'hp', 'HP', 'Telepon'],
                email: ['Email', 'email', 'E-mail']
            };

            const findVal = (row, keys) => {
                for (const k of keys) {
                    if (row[k] !== undefined && row[k] !== '') return String(row[k]).trim();
                }
                return '';
            };

            importPreviewData = rows.map(row => ({
                name: findVal(row, colMap.name),
                nip: findVal(row, colMap.nip),
                school: findVal(row, colMap.school),
                district: findVal(row, colMap.district),
                phone: findVal(row, colMap.phone),
                email: findVal(row, colMap.email)
            })).filter(r => r.name || r.school);

            // Check which ones are duplicates
            const existingKeys = new Set(participantState.participants.map(p => `${p.name?.toLowerCase()}|${p.school?.toLowerCase()}`));
            let validCount = 0;
            let skipCount = 0;

            const previewBody = document.getElementById('import-preview-body');
            if (!previewBody) return;
            previewBody.innerHTML = '';

            importPreviewData.forEach((row, i) => {
                const key = `${row.name?.toLowerCase()}|${row.school?.toLowerCase()}`;
                const isDup = existingKeys.has(key) || !row.name || !row.school;
                if (isDup) skipCount++;
                else validCount++;

                const tr = document.createElement('tr');
                tr.className = isDup ? 'import-row-duplicate' : '';
                tr.innerHTML = `
                    <td>${i + 1}</td>
                    <td>${row.name || '<i>kosong</i>'}</td>
                    <td>${row.nip || '-'}</td>
                    <td>${row.school || '<i>kosong</i>'}</td>
                    <td>${row.district || '-'}</td>
                    <td>${row.phone || '-'}</td>
                    <td>${row.email || '-'}</td>
                    <td><span class="mgmt-status-badge ${isDup ? 'mgmt-badge-nonaktif' : 'mgmt-badge-aktif'}">${isDup ? 'Lewati' : 'Import'}</span></td>
                `;
                previewBody.appendChild(tr);
            });

            document.getElementById('import-count-valid').innerHTML = `Data valid: <b>${validCount}</b>`;
            document.getElementById('import-count-skip').innerHTML = `Duplikat/Kosong: <b>${skipCount}</b>`;

            document.getElementById('import-preview-modal').classList.add('active');
            lucide.createIcons();
        } catch (err) {
            showToast('Gagal membaca file Excel. Pastikan format benar.', 'alert-circle');
            console.error('Excel parse error:', err);
        }
    };
    reader.readAsArrayBuffer(file);

    // Reset input so same file can be re-imported
    event.target.value = '';
}

function closeImportPreviewModal() {
    document.getElementById('import-preview-modal').classList.remove('active');
    importPreviewData = [];
}

async function executeImport() {
    if (!importPreviewData || importPreviewData.length === 0) {
        showToast('Tidak ada data untuk diimpor.', 'alert-circle');
        return;
    }

    const btn = document.getElementById('btn-execute-import');
    if (btn) { btn.disabled = true; btn.textContent = 'Mengimpor...'; }

    if (isServerMode) {
        try {
            const email = sessionStorage.getItem('admin_email');
            const pin = sessionStorage.getItem('admin_pin');
            const res = await fetch('/api/participants/import', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-email': email,
                    'x-admin-pin': pin
                },
                body: JSON.stringify({ rows: importPreviewData })
            });

            if (res.ok) {
                const result = await res.json();
                // Reload full participants list from server
                const resAll = await fetch('/api/participants', {
                    headers: {
                        'x-admin-email': email,
                        'x-admin-pin': pin
                    }
                });
                if (resAll.ok) {
                    const serverParticipants = await resAll.json();
                    participantState.participants = serverParticipants.map(sp => {
                        const existing = participantState.participants.find(p => p.id === sp.id);
                        return { ...sp, reportStatus: existing ? existing.reportStatus : (sp.reportStatus || 'Belum Dibuat') };
                    });
                }
                closeImportPreviewModal();
                refreshAllParticipantDependents();
                showToast(`Berhasil import ${result.successCount} peserta! (${result.skipCount} dilewati)`, 'check-circle');
            } else {
                const err = await res.json();
                showToast(err.error || 'Import gagal.', 'alert-circle');
            }
        } catch (e) {
            // Fallback to local import
            localImportParticipants();
        }
    } else {
        localImportParticipants();
    }

    if (btn) { btn.disabled = false; btn.innerHTML = '<i data-lucide="upload"></i> Import Sekarang'; lucide.createIcons(); }
}

function localImportParticipants() {
    let successCount = 0;
    let skipCount = 0;
    const existingKeys = new Set(participantState.participants.map(p => `${(p.name || '').toLowerCase()}|${(p.school || '').toLowerCase()}`));
    let maxId = participantState.participants.reduce((max, p) => Math.max(max, p.id || 0), 0);

    importPreviewData.forEach(row => {
        if (!row.name || !row.school) { skipCount++; return; }
        const key = `${row.name.toLowerCase()}|${row.school.toLowerCase()}`;
        if (existingKeys.has(key)) { skipCount++; return; }
        maxId++;
        participantState.participants.push({
            id: maxId,
            name: row.name.trim(),
            nip: row.nip || '',
            school: row.school.trim(),
            district: row.district || '',
            phone: row.phone || '',
            email: row.email || '',
            status: 'Aktif',
            dateAdded: new Date().toISOString().slice(0, 10),
            reportStatus: 'Belum Dibuat'
        });
        existingKeys.add(key);
        successCount++;
    });

    saveParticipantsToLocalStorage();
    closeImportPreviewModal();
    refreshAllParticipantDependents();
    showToast(`Berhasil import ${successCount} peserta! (${skipCount} dilewati)`, 'check-circle');
}

// -----------------------------------------------
// EXPORT: Template Excel
// -----------------------------------------------
function downloadParticipantTemplate() {
    const ws = XLSX.utils.aoa_to_sheet([
        ['Nama Lengkap', 'NIP', 'Asal Sekolah', 'Kecamatan', 'Nomor HP', 'Email'],
        ['Contoh: Sari Dewi, S.Pd.', '19860112 200910 1 002', 'SDN 1 SINGKAWANG', 'Singkawang Tengah', '081234567890', 'guru@email.com']
    ]);
    ws['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 30 }, { wch: 22 }, { wch: 18 }, { wch: 28 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Template Peserta');
    XLSX.writeFile(wb, 'Template_Import_Peserta_Matematika_Gembira.xlsx');
    showToast('Template Excel berhasil didownload!', 'download');
}

// -----------------------------------------------
// EXPORT: Excel
// -----------------------------------------------
function exportParticipantsExcel() {
    const rows = [['No', 'Nama Lengkap', 'NIP', 'Asal Sekolah', 'Kecamatan', 'Nomor HP', 'Email', 'Status', 'Tanggal Input']];
    mgmtFilteredParticipants.forEach((p, i) => {
        rows.push([i + 1, p.name, p.nip || '-', p.school, p.district, p.phone || '-', p.email || '-', p.status || 'Aktif', p.dateAdded || '-']);
    });
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{ wch: 5 }, { wch: 35 }, { wch: 25 }, { wch: 30 }, { wch: 22 }, { wch: 18 }, { wch: 28 }, { wch: 12 }, { wch: 14 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data Peserta');
    XLSX.writeFile(wb, 'Data_Peserta_Matematika_Gembira.xlsx');
    showToast('Data peserta berhasil diekspor ke Excel!', 'table-2');
}

// -----------------------------------------------
// EXPORT: CSV
// -----------------------------------------------
function exportParticipantsCSV() {
    const header = ['No', 'Nama Lengkap', 'NIP', 'Asal Sekolah', 'Kecamatan', 'Nomor HP', 'Email', 'Status', 'Tanggal Input'];
    const rows = mgmtFilteredParticipants.map((p, i) => [
        i + 1, `"${p.name}"`, `"${p.nip || ''}"`, `"${p.school}"`, `"${p.district}"`,
        `"${p.phone || ''}"`, `"${p.email || ''}"`, p.status || 'Aktif', p.dateAdded || ''
    ]);
    const csvContent = [header, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Data_Peserta_Matematika_Gembira.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Data peserta berhasil diekspor ke CSV!', 'file-text');
}

// -----------------------------------------------
// EXPORT: PDF
// -----------------------------------------------
function exportParticipantsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('DAFTAR PESERTA PELATIHAN MATEMATIKA GEMBIRA', 148, 18, { align: 'center' });
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Dinas Pendidikan dan Kebudayaan Kota Singkawang — IGI Kota Singkawang — 17-18 Juni 2026', 148, 25, { align: 'center' });

    let y = 35;
    const cols = [12, 8, 55, 35, 45, 30, 30, 40];
    const headers = ['No', 'NIP', 'Nama Lengkap', 'Asal Sekolah', 'Kecamatan', 'Nomor HP', 'Status', 'Email'];
    const lineH = 8;

    // Header row
    doc.setFillColor(15, 23, 42);
    doc.setTextColor(255, 255, 255);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    let x = 10;
    headers.forEach((h, i) => {
        doc.rect(x, y, cols[i], lineH, 'F');
        doc.text(h, x + 2, y + 5.5);
        x += cols[i];
    });

    y += lineH;
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7.5);

    mgmtFilteredParticipants.forEach((p, i) => {
        if (y > 185) {
            doc.addPage();
            y = 20;
        }
        const fill = i % 2 === 0 ? [248, 250, 252] : [255, 255, 255];
        x = 10;
        const values = [
            i + 1, p.nip || '-',
            p.name, p.school, p.district,
            p.phone || '-', p.status || 'Aktif', p.email || '-'
        ];
        doc.setFillColor(...fill);
        doc.rect(10, y, cols.reduce((a, b) => a + b, 0), lineH, 'F');
        values.forEach((val, j) => {
            const cell = doc.splitTextToSize(String(val), cols[j] - 3);
            doc.text(cell[0], x + 2, y + 5.5);
            x += cols[j];
        });
        doc.setDrawColor(220, 220, 220);
        doc.line(10, y + lineH, 287, y + lineH);
        y += lineH;
    });

    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text(`Total: ${mgmtFilteredParticipants.length} peserta — Dicetak: ${new Date().toLocaleDateString('id-ID')}`, 10, y + 8);

    doc.save('Data_Peserta_Matematika_Gembira.pdf');
    showToast('Data peserta berhasil diekspor ke PDF!', 'file-down');
}
