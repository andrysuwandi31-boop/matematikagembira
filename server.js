const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// File storage paths
const DATA_DIR = path.join(__dirname, 'data');
const PRESENCE_FILE = path.join(DATA_DIR, 'presence.json');
const LOGS_FILE = path.join(DATA_DIR, 'logs.json');
const REPORTS_FILE = path.join(DATA_DIR, 'reports.json');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');
const PARTICIPANTS_FILE = path.join(DATA_DIR, 'participants.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json');

// Initialize directory and data files
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}
if (!fs.existsSync(PRESENCE_FILE)) {
    fs.writeFileSync(PRESENCE_FILE, JSON.stringify([]));
}
if (!fs.existsSync(LOGS_FILE)) {
    fs.writeFileSync(LOGS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(REPORTS_FILE)) {
    fs.writeFileSync(REPORTS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(TESTIMONIALS_FILE)) {
    fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(CONFIG_FILE)) {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify({
        adminEmail: "admin@matematikagembira.com",
        adminPin: "1234"
    }, null, 2));
}

// Initialize participants.json with the existing 93 participants if not yet created
if (!fs.existsSync(PARTICIPANTS_FILE)) {
    const initialParticipants = [
        { id: 1, name: "Enie Syafrida, S.Pd.I", nip: "19860112 200910 1 002", school: "MIN SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 2, name: "Sumiyah, S.Pd.", nip: "19810807 200511 1 002", school: "MIN SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 3, name: "Sari Asih, S.Pd., Gr.", nip: "19850905 200905 1 006", school: "SD PENSIL QU", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 4, name: "Mindi Maria Domitila, S.Pd.", nip: "19850818 200910 1 007", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 5, name: "Sri Rahayu, S. Pd", nip: "19941112 201802 1 002", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 6, name: "Adolio, S.Ag, S.Pd", nip: "19800811 200407 2 002", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 7, name: "Anastasia Icha, S.Pd", nip: "19900906 201306 1 001", school: "SD SANTA KLARA SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 8, name: "Hopiyeh, S.Pd.", nip: "19870901 201209 2 007", school: "SDIT NURUL ISLAM", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 9, name: "Okta Asmara Yudha, S.Pd", nip: "19940719 201911 1 007", school: "SDIT NURUL ISLAM", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 10, name: "Nilawati, S.Pd.I", nip: "19960214 202011 1 001", school: "SDS BIAM SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 11, name: "Ayu Ardela Sintiana Putri, S.Pd.", nip: "19960715 201905 1 002", school: "SDS BIAM SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 12, name: "LIDIYA, S.Pd", nip: "19880511 201306 2 006", school: "SDN 1 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 13, name: "ANIDA FIQRUNISA, S.Pd", nip: "19940722 201707 2 003", school: "SDN 1 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 14, name: "Muhammad IKhsan, S.Pd.", nip: "19950803 201702 2 007", school: "SDN 2 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 15, name: "Maya Karmila, S.Pd.", nip: "19860411 200803 1 005", school: "SDN 2 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 16, name: "Inta Ariningsih, S.Pd", nip: "19880118 201001 1 003", school: "SDN 3 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 17, name: "Yuniar, S.Pd", nip: "19890515 201410 2 002", school: "SDN 4 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 18, name: "Sumarni, S.Pd.", nip: "19950423 201704 2 004", school: "SDN 4 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 19, name: "Silvia Mega Pangest, S.Pd", nip: "19860624 200810 1 007", school: "SDN 6 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 20, name: "Suci Lestari, S.Pd", nip: "19940611 201907 1 003", school: "SDN 6 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 21, name: "Siti Putri Patymoa, S.Pd", nip: "19961013 202104 2 003", school: "SDN 7 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 22, name: "Suci Hasri Hidayati, S.Pd.", nip: "19820603 200707 1 008", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 23, name: "Iin Sri Wahyuni, S.Pd.", nip: "19970924 202005 2 004", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 24, name: "Kiki Safani, S.Pd.", nip: "19840721 200905 1 005", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 25, name: "Sulastri, S.Pd.", nip: "19830417 200609 1 001", school: "SDN 8 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 26, name: "Dyah Handayani, S.Pd", nip: "19881021 201203 2 008", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 27, name: "Nur Kumala Sari, S.Pd.", nip: "19871120 200910 2 008", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 28, name: "Venni Veriani, S.Pd.", nip: "19800917 200505 1 008", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 29, name: "Risa Oktalina, S.Pd.", nip: "19950519 201809 2 006", school: "SDN 10 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 30, name: "Nita Firianti.S. Pd", nip: "19900214 201206 2 006", school: "SDN 11 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 31, name: "Ernawati, S.Pd.SD", nip: "19911113 201610 2 004", school: "SDN 11 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 32, name: "Farida, S. Pd. Gr", nip: "19891124 201205 1 005", school: "SDN 13 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 33, name: "Sri Nuryani S.Pd.Gr", nip: "19820208 200709 2 007", school: "SDN 13 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 34, name: "Linda Ayu Wijayanti, S.Pd.", nip: "19950525 201909 2 007", school: "SDN 14 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 35, name: "Febria Damayanti, S.Pd", nip: "19841003 200907 1 008", school: "SDN 14 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 36, name: "Lebariah, S.Pd.SD", nip: "19850923 200909 1 002", school: "SDN 15 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 37, name: "Oktha Viyanti, S.Pd", nip: "19930102 201506 1 001", school: "SDN 16 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 38, name: "Maria Sundari, S.Pd", nip: "19830404 200711 1 003", school: "SDN 17 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 39, name: "Dwi Wulandari, S.Pd", nip: "19810823 200411 2 007", school: "SDN 17 SINGKAWANG", district: "Singkawang Tengah", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 40, name: "NIKE AYESI, S.PD", nip: "19851025 201006 1 003", school: "SDN 22 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 41, name: "Yesi Septiana, S.Pd.", nip: "19911121 201505 2 003", school: "SDN 23 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 42, name: "Hastari Wiri Wulandari,S.Pd.", nip: "19920508 201408 1 008", school: "SDN 23 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 43, name: "Kurnia, S.Pd.", nip: "19861116 201010 2 005", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 44, name: "Duwi Puteri Anggraeni, S.Pd.", nip: "19900407 201404 1 007", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 45, name: "Seprila, S.Pd.", nip: "19800709 200507 2 008", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 46, name: "Lili Zunarsih, S. Pd", nip: "19870620 201005 2 008", school: "SDN 24 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 47, name: "Herman, S.Pd.I", nip: "19840712 200804 2 007", school: "SDN 25 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 48, name: "Dewi Suci Utari, S.Pd", nip: "19901012 201309 2 004", school: "SDN 27 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 49, name: "Yuke Twoysa Purwantari,S.Pd", nip: "19821119 200606 2 003", school: "SDN 29 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 50, name: "Herawati,S.Pd.SD", nip: "19881010 201103 1 004", school: "SDN 29 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 51, name: "ALOSIUS KUSNADI, S.Pd", nip: "19830912 200604 1 005", school: "SDN 31 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 52, name: "Kurnia, S.Pd", nip: "19830416 200604 1 004", school: "SDN 31 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 53, name: "Yuhana, S.Pd.SD", nip: "19880705 201109 2 007", school: "SDN 32 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 54, name: "Relisma, S.Pd", nip: "19810717 200311 2 007", school: "SDN 32 SINGKAWANG", district: "Singkawang Barat", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 55, name: "Weti Anggayuni, S.Pd", nip: "19910501 201303 1 006", school: "SDN 43 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 56, name: "Anaqori Oktavia Sari, S. Pd", nip: "19860702 201005 2 002", school: "SDN 44 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 57, name: "Dwi Pargiyaningsih, S.Pd.", nip: "19920423 201504 1 001", school: "SDN 45 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 58, name: "Annisa Nia Santika, S.Pd", nip: "19950502 201801 2 008", school: "SDN 45 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 59, name: "Ayu Kusuma Dewi Handayani, S.Pd.", nip: "19900814 201508 1 001", school: "SDN 48 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 60, name: "Lenny Sulistiowati, S.Pd.", nip: "19850104 201011 1 007", school: "SDN 48 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 61, name: "Elsa Meyti Tabita, S.Pd", nip: "19911001 201501 1 004", school: "SDN 53 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 62, name: "Hudzeifah, S.Pd", nip: "19910608 201311 2 002", school: "SDN 55 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 63, name: "Arik, S.Pd", nip: "19850121 200903 2 005", school: "SDN 57 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 64, name: "Jefrianus Tuwoh, S.Pd.", nip: "19860815 200810 2 006", school: "SDN 59 SINGKAWANG", district: "Singkawang Selatan", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 65, name: "Asih Eka Lestari, S.Pd.", nip: "19810814 200406 2 008", school: "SDN 61 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 66, name: "Susan Ariyanti, S.Pd.SD", nip: "19870727 201206 1 004", school: "SDN 63 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 67, name: "Suci Adelina, S.Pd.", nip: "19960405 202111 1 001", school: "SDN 65 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 68, name: "Adma Jayanti, S.Pd.", nip: "19870804 201208 2 007", school: "SDN 66 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 69, name: "Masrita, S.Pd.SD.", nip: "19800622 200509 1 008", school: "SDN 67 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 70, name: "Frensy Graselie Lantu, S.Pd.", nip: "19840816 200603 1 002", school: "SDN 68 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 71, name: "Ima Norma Puji Astutik, S.Pd", nip: "19890312 201311 2 002", school: "SDN 69 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 72, name: "Kristina, S.Pd", nip: "19961115 201801 2 001", school: "SDN 69 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 73, name: "Asmarani, S. Pd.", nip: "19851017 201008 2 003", school: "SDN 70 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 74, name: "Yudho Fetryanto, S.Pd", nip: "19800215 200210 1 007", school: "SDN 71 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 75, name: "Reni, S.Pd", nip: "19930804 201509 1 007", school: "SDN 72 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 76, name: "Nurbaiti, S.Pd", nip: "19861103 200909 1 001", school: "SDN 73 SINGKAWANG", district: "Singkawang Timur", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 77, name: "Nerianty, S.Pd. SD", nip: "19930316 201806 2 004", school: "SDN 81 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 78, name: "Nurita, S.Pd", nip: "19890713 201203 1 002", school: "SDN 82 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 79, name: "Juliastri, S.Pd.SD", nip: "19911009 201303 1 007", school: "SDN 82 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 80, name: "Yusniati, S. Pd", nip: "19860501 200802 1 005", school: "SDN 83 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 81, name: "Esti Mindarningsih, S.Pd.", nip: "19860905 200805 2 006", school: "SDN 83 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 82, name: "U.NOVI LESTARI,S.Pd.", nip: "19950501 201702 2 007", school: "SDN 84 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 83, name: "TRI HIDAYATI,S.Pd.", nip: "19880218 201206 1 007", school: "SDN 84 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 84, name: "Nur'asiah, S.Pd.", nip: "19860105 201111 1 007", school: "SDN 85 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 85, name: "Bawisna, S.Pd", nip: "19880203 201307 1 001", school: "SDN 86 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 86, name: "Sari Yulistiana, S.Pd.", nip: "19830724 200807 1 005", school: "SDN 87 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 87, name: "Afriani, S.Pd", nip: "19860111 201102 2 007", school: "SDN 89 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 88, name: "Siti Khotibeh, S.Pd", nip: "19940612 201807 1 001", school: "SDN 90 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 89, name: "Ratmawati, S.Pd.SD.", nip: "19951119 201901 1 007", school: "SDN 91 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 90, name: "Yuniarti,S.Pd.SD", nip: "19830519 200504 1 001", school: "SDN 92 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 91, name: "Fitria Ardianti, S.Pd.", nip: "19890424 201205 1 001", school: "SDN 93 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 92, name: "Dini Harisa, S.Pd.", nip: "19961009 201905 1 002", school: "SDN 94 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" },
        { id: 93, name: "Nurhayati, S. Pd.", nip: "19860605 200903 1 005", school: "SDN 94 SINGKAWANG", district: "Singkawang Utara", phone: "", email: "", status: "Aktif", dateAdded: "2026-06-17" }
    ];
    fs.writeFileSync(PARTICIPANTS_FILE, JSON.stringify(initialParticipants, null, 2));
    console.log('Initialized participants.json with 93 existing participants.');
}

// Helpers to read/write JSON files safely
function readJSON(filePath) {
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        if (data.charCodeAt(0) === 0xFEFF) {
            data = data.slice(1);
        }
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e);
        return [];
    }
}

function writeJSON(filePath, obj) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), 'utf8');
        return true;
    } catch (e) {
        console.error(`Error writing ${filePath}:`, e);
        return false;
    }
}

// Get Jakarta Date Components
function getJakartaDateTime(debugDateStr) {
    let now = new Date();
    
    // Check if client passed a debug date override via header or query
    if (debugDateStr) {
        const parsed = Date.parse(debugDateStr);
        if (!isNaN(parsed)) {
            now = new Date(parsed);
        }
    }

    const formatterDate = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const formatterTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const dateParts = formatterDate.formatToParts(now);
    const timeParts = formatterTime.formatToParts(now);

    const year = dateParts.find(p => p.type === 'year').value;
    const month = dateParts.find(p => p.type === 'month').value;
    const day = dateParts.find(p => p.type === 'day').value;

    const hour = timeParts.find(p => p.type === 'hour').value;
    const minute = timeParts.find(p => p.type === 'minute').value;
    const second = timeParts.find(p => p.type === 'second').value;

    const dateStr = `${year}-${month}-${day}`; // YYYY-MM-DD
    const timeStr = `${hour}:${minute}:${second}`; // HH:MM:SS

    // Construct Jakarta timezone offset string (WIB is GMT+7)
    const isoStr = `${dateStr}T${timeStr}.000+07:00`;

    return {
        dateString: dateStr,
        timeString: timeStr,
        isoString: isoStr,
        timestamp: now.getTime()
    };
}

// Write Admin Log to file
function writeServerLog(action) {
    const logs = readJSON(LOGS_FILE);
    const jkt = getJakartaDateTime();
    logs.push({
        id: Date.now() + Math.random(),
        action: action,
        timestamp: jkt.timestamp,
        date: jkt.dateString,
        time: jkt.timeString
    });
    writeJSON(LOGS_FILE, logs);
}

// Check if request is authenticated as admin
function isAdmin(req) {
    const adminEmail = req.headers['x-admin-email'];
    const adminPin = req.headers['x-admin-pin'];
    
    if (!adminEmail || !adminPin) {
        return false;
    }
    
    try {
        const config = readJSON(CONFIG_FILE);
        const expectedEmail = config.adminEmail || "admin@matematikagembira.com";
        const expectedPin = config.adminPin || "1234";
        
        return adminEmail.toLowerCase().trim() === expectedEmail.toLowerCase().trim() &&
               adminPin.trim() === expectedPin.trim();
    } catch (e) {
        return false;
    }
}

// List of public API endpoints
const PUBLIC_API_ENDPOINTS = [
    { path: '/api/time', method: 'GET' },
    { path: '/api/presence', method: 'POST' },
    { path: '/api/presence/public', method: 'GET' },
    { path: '/api/reports', method: 'POST' },
    { path: '/api/reports/my-reports', method: 'POST' },
    { path: '/api/testimonials', method: 'GET' },
    { path: '/api/testimonials', method: 'POST' },
    { path: '/api/participants/public', method: 'GET' }
];

// Static files mime types mapping
const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Function to serve static files
function serveStaticFile(filePath, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            const ext = path.extname(filePath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

// Native HTTP Server Creation
const server = http.createServer((req, res) => {
    // Log incoming requests for debugging
    console.log(`[REQUEST] ${req.method} ${req.url}`);

    // 1. CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Debug-Date, x-debug-date, x-admin-email, x-admin-pin, X-Admin-Email, X-Admin-Pin');

    // 2. Preflight handling
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // 3. Parse URL and parameters
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname;
    const queryParams = Object.fromEntries(parsedUrl.searchParams);

    // 4. Serves Static Files
    if (!pathname.startsWith('/api/')) {
        if (pathname === '/dashboard-admin') {
            res.writeHead(302, { 'Location': '/?access=denied' });
            res.end();
            return;
        }
        let reqFile = pathname === '/' ? '/index.html' : pathname;
        // Decode URI for paths with spaces or special characters
        try {
            reqFile = decodeURIComponent(reqFile);
        } catch (e) {}
        
        const filePath = path.join(__dirname, reqFile);
        const normalizedPath = path.normalize(filePath);
        
        // Security check
        if (!normalizedPath.startsWith(__dirname)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('403 Forbidden');
            return;
        }

        serveStaticFile(normalizedPath, res);
        return;
    }

    // 5. Setup JSON body parsing and route handling for API
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
            req.body = body ? JSON.parse(body) : {};
        } catch (e) {
            req.body = {};
        }

        // Response helpers
        res.json = (data, statusCode = 200) => {
            res.writeHead(statusCode, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        };
        res.status = (code) => {
            return {
                json: (data) => res.json(data, code)
            };
        };

        const method = req.method;

        // Check if API endpoint requires admin privileges
        const isPublicApi = PUBLIC_API_ENDPOINTS.some(endpoint => {
            return pathname === endpoint.path && method === endpoint.method;
        });

        if (pathname.startsWith('/api/') && !isPublicApi) {
            if (!isAdmin(req)) {
                return res.status(403).json({ error: "Akses ditolak. Anda tidak memiliki hak sebagai Administrator." });
            }
        }

        // API Route Handlers
        if (pathname === '/api/time' && method === 'GET') {
            const debugDate = req.headers['x-debug-date'] || queryParams.testDate;
            const jkt = getJakartaDateTime(debugDate);
            res.json({
                datetime: jkt.isoString,
                date: jkt.dateString,
                time: jkt.timeString,
                timestamp: jkt.timestamp
            });
        }
        else if (pathname === '/api/presence' && method === 'GET') {
            const presence = readJSON(PRESENCE_FILE);
            res.json(presence);
        }
        else if (pathname === '/api/presence' && method === 'POST') {
            const debugDate = req.headers['x-debug-date'] || req.body.testDate;
            const jkt = getJakartaDateTime(debugDate);
            const dateStr = jkt.dateString;

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
                return res.status(400).json({ error: "Presensi belum dibuka. Silakan melakukan presensi sesuai jadwal pelatihan." });
            } else {
                return res.status(400).json({ error: "Presensi telah ditutup. Terima kasih atas partisipasi Anda." });
            }

            const { participantId, name, school, district, email, phone, status, signature } = req.body;

            if (!participantId || !name || !school || !district || !email || !phone || !status || !signature) {
                return res.status(400).json({ error: "Seluruh kolom data wajib diisi." });
            }

            const presenceList = readJSON(PRESENCE_FILE);
            const isDuplicate = presenceList.some(p => p.participantId === parseInt(participantId) && p.day === activeDayLabel);
            if (isDuplicate) {
                return res.status(400).json({ error: "Anda sudah melakukan presensi untuk hari pelatihan ini." });
            }

            const newRecord = {
                id: Date.now(),
                participantId: parseInt(participantId),
                name: name,
                school: school,
                district: district,
                email: email,
                phone: phone,
                day: activeDayLabel,
                hariPelatihan: hariPelatihan,
                tanggalPelatihan: tanggalPelatihan,
                status: status,
                date: dateStr,
                time: jkt.timeString,
                location: req.body.location || "Lokasi tidak terdeteksi",
                signature: signature,
                timestamp: jkt.timestamp
            };

            presenceList.push(newRecord);
            writeJSON(PRESENCE_FILE, presenceList);
            writeServerLog(`Peserta [${newRecord.name}] melakukan presensi ${newRecord.day} secara mandiri.`);

            res.status(201).json(newRecord);
        }
        else if (pathname.startsWith('/api/presence/') && method === 'PUT') {
            const id = parseInt(pathname.substring(14));
            const { email, phone, day, status } = req.body;

            const presenceList = readJSON(PRESENCE_FILE);
            const recordIndex = presenceList.findIndex(p => p.id === id);

            if (recordIndex === -1) {
                return res.status(404).json({ error: "Data presensi tidak ditemukan." });
            }

            const record = presenceList[recordIndex];
            const oldStatus = record.status;
            const oldDay = record.day;

            let newHari = "Hari 1";
            let newTgl = "17 Juni 2026";
            if (day.includes("Hari 2")) {
                newHari = "Hari 2";
                newTgl = "18 Juni 2026";
            }

            record.email = email;
            record.phone = phone;
            record.day = day;
            record.hariPelatihan = newHari;
            record.tanggalPelatihan = newTgl;
            record.status = status;

            presenceList[recordIndex] = record;
            writeJSON(PRESENCE_FILE, presenceList);
            writeServerLog(`Admin mengubah data presensi milik [${record.name}] (${oldDay} -> ${day}, ${oldStatus} -> ${status}).`);

            res.json(record);
        }
        else if (pathname.startsWith('/api/presence/') && method === 'DELETE') {
            const id = parseInt(pathname.substring(14));

            const presenceList = readJSON(PRESENCE_FILE);
            const record = presenceList.find(p => p.id === id);

            if (!record) {
                return res.status(404).json({ error: "Data presensi tidak ditemukan." });
            }

            const filteredList = presenceList.filter(p => p.id !== id);
            writeJSON(PRESENCE_FILE, filteredList);
            writeServerLog(`Admin menghapus data presensi milik [${record.name}] untuk ${record.day.split(':')[0]}.`);

            res.json({ success: true });
        }
        else if (pathname === '/api/logs' && method === 'GET') {
            const logs = readJSON(LOGS_FILE);
            res.json(logs);
        }
        else if (pathname === '/api/logs/clear' && method === 'POST') {
            writeJSON(LOGS_FILE, []);
            res.json({ success: true });
        }
        else if (pathname === '/api/reports' && method === 'GET') {
            const reports = readJSON(REPORTS_FILE);
            res.json(reports);
        }
        else if (pathname === '/api/reports' && method === 'POST') {
            const reports = readJSON(REPORTS_FILE);
            const newReport = req.body;
            if (!newReport.id) {
                newReport.id = Date.now();
            }
            if (!newReport.timestamp) {
                newReport.timestamp = Date.now();
            }
            const existingIndex = reports.findIndex(r => r.id === newReport.id);
            if (existingIndex !== -1) {
                reports[existingIndex] = newReport;
            } else {
                reports.push(newReport);
            }
            writeJSON(REPORTS_FILE, reports);
            res.status(201).json(newReport);
        }
        else if (pathname === '/api/testimonials' && method === 'GET') {
            const testimonials = readJSON(TESTIMONIALS_FILE);
            res.json(testimonials);
        }
        else if (pathname === '/api/testimonials' && method === 'POST') {
            const testimonials = readJSON(TESTIMONIALS_FILE);
            const newTestimonial = req.body;
            if (!newTestimonial.id) {
                newTestimonial.id = Date.now();
            }
            if (!newTestimonial.timestamp) {
                newTestimonial.timestamp = Date.now();
            }
            testimonials.push(newTestimonial);
            writeJSON(TESTIMONIALS_FILE, testimonials);
            res.status(201).json(newTestimonial);
        }
        else if (pathname === '/api/reports/reset' && method === 'POST') {
            const { mode, name, adminName } = req.body;
            const backupReports = readJSON(REPORTS_FILE);
            const backupTestimonials = readJSON(TESTIMONIALS_FILE);
            
            let reports = [...backupReports];
            let testimonials = [...backupTestimonials];
            let deletedCount = 0;
            
            try {
                if (mode === 'user') {
                    if (!name) {
                        return res.status(400).json({ error: "Nama peserta wajib disertakan." });
                    }
                    
                    const initialReportsCount = reports.length;
                    reports = reports.filter(r => r.nama.toLowerCase() !== name.toLowerCase());
                    deletedCount = initialReportsCount - reports.length;
                    testimonials = testimonials.filter(t => t.name.toLowerCase() !== name.toLowerCase());
                    
                    if (!writeJSON(REPORTS_FILE, reports) || !writeJSON(TESTIMONIALS_FILE, testimonials)) {
                        throw new Error("Failed to write to JSON databases.");
                    }
                    
                    writeServerLog(`Admin [${adminName || 'Panitia'}] mereset data uji coba milik [${name}]. Dihapus: ${deletedCount} draf laporan.`);
                } else if (mode === 'all') {
                    deletedCount = reports.length;
                    reports = [];
                    const mockNames = ["Sumiyah, S.Pd.", "Mindi Maria Domitila, S.Pd."];
                    testimonials = testimonials.filter(t => mockNames.includes(t.name));
                    
                    if (!writeJSON(REPORTS_FILE, reports) || !writeJSON(TESTIMONIALS_FILE, testimonials)) {
                        throw new Error("Failed to write to JSON databases.");
                    }
                    
                    writeServerLog(`Admin [${adminName || 'Panitia'}] mereset seluruh data uji coba laporan. Dihapus: ${deletedCount} draf laporan.`);
                } else {
                    return res.status(400).json({ error: "Mode reset tidak valid." });
                }
                
                res.json({ success: true, deletedCount });
            } catch (e) {
                console.error("Reset operation failed, rolling back:", e);
                writeJSON(REPORTS_FILE, backupReports);
                writeJSON(TESTIMONIALS_FILE, backupTestimonials);
                res.status(500).json({ error: "Gagal mereset data uji coba (transaksi dibatalkan)." });
            }
        }
        else if (pathname === '/api/participants' && method === 'GET') {
            const participants = readJSON(PARTICIPANTS_FILE);
            res.json(participants);
        }
        else if (pathname === '/api/participants' && method === 'POST') {
            const { name, nip, school, district, phone, email, status } = req.body;

            if (!name || !school || !district) {
                return res.status(400).json({ error: 'Nama Lengkap, Asal Sekolah, dan Kecamatan wajib diisi.' });
            }

            const participants = readJSON(PARTICIPANTS_FILE);
            
            // Check for Name + School duplicate
            const isNameSchoolDuplicate = participants.some(
                p => p.name.toLowerCase().trim() === name.toLowerCase().trim() &&
                     p.school.toLowerCase().trim() === school.toLowerCase().trim()
            );
            // Check for Email duplicate (if email is provided)
            const isEmailDuplicate = email && email.trim() !== '' && participants.some(
                p => p.email && p.email.toLowerCase().trim() === email.toLowerCase().trim()
            );

            if (isNameSchoolDuplicate || isEmailDuplicate) {
                return res.status(409).json({ error: 'Peserta sudah terdaftar dalam sistem.' });
            }

            const jkt = getJakartaDateTime();
            const maxId = participants.reduce((max, p) => Math.max(max, p.id || 0), 0);

            const newParticipant = {
                id: maxId + 1,
                name: name.trim(),
                nip: (nip || '').trim(),
                school: school.trim(),
                district: district.trim(),
                phone: (phone || '').trim(),
                email: (email || '').trim(),
                status: status || 'Aktif',
                dateAdded: jkt.dateString,
                reportStatus: 'Belum Dibuat'
            };

            participants.push(newParticipant);
            writeJSON(PARTICIPANTS_FILE, participants);
            writeServerLog(`Admin menambahkan peserta baru: [${newParticipant.name}] dari ${newParticipant.school}.`);

            res.status(201).json(newParticipant);
        }
        else if (pathname.startsWith('/api/participants/') && method === 'PUT') {
            const id = parseInt(pathname.substring(18));
            const { name, nip, school, district, phone, email, status } = req.body;

            if (!name || !school || !district) {
                return res.status(400).json({ error: 'Nama Lengkap, Asal Sekolah, dan Kecamatan wajib diisi.' });
            }

            const participants = readJSON(PARTICIPANTS_FILE);
            const idx = participants.findIndex(p => p.id === id);

            if (idx === -1) {
                return res.status(404).json({ error: 'Peserta tidak ditemukan.' });
            }

            // Check for Name + School duplicate (excluding current participant)
            const isNameSchoolDuplicate = participants.some(
                p => p.id !== id &&
                     p.name.toLowerCase().trim() === name.toLowerCase().trim() &&
                     p.school.toLowerCase().trim() === school.toLowerCase().trim()
            );
            // Check for Email duplicate (excluding current participant)
            const isEmailDuplicate = email && email.trim() !== '' && participants.some(
                p => p.id !== id &&
                     p.email && p.email.toLowerCase().trim() === email.toLowerCase().trim()
            );

            if (isNameSchoolDuplicate || isEmailDuplicate) {
                return res.status(409).json({ error: 'Peserta sudah terdaftar dalam sistem.' });
            }

            const oldName = participants[idx].name;
            const oldSchool = participants[idx].school;

            participants[idx] = {
                ...participants[idx],
                name: name.trim(),
                nip: (nip || '').trim(),
                school: school.trim(),
                district: district.trim(),
                phone: (phone || '').trim(),
                email: (email || '').trim(),
                status: status || participants[idx].status
            };

            writeJSON(PARTICIPANTS_FILE, participants);

            // Cascade updates to presence.json
            let presence = readJSON(PRESENCE_FILE);
            let presenceUpdated = false;
            presence.forEach(p => {
                if (p.participantId === id) {
                    p.name = name.trim();
                    p.school = school.trim();
                    p.district = district.trim();
                    p.email = (email || '').trim();
                    p.phone = (phone || '').trim();
                    presenceUpdated = true;
                }
            });
            if (presenceUpdated) {
                writeJSON(PRESENCE_FILE, presence);
            }

            // Cascade updates to reports.json
            let reports = readJSON(REPORTS_FILE);
            let reportsUpdated = false;
            reports.forEach(r => {
                if (r.participantId === id || (r.nama.toLowerCase().trim() === oldName.toLowerCase().trim() && r.sekolah.toLowerCase().trim() === oldSchool.toLowerCase().trim())) {
                    r.participantId = id;
                    r.nama = name.trim();
                    r.nip = (nip || '').trim();
                    r.sekolah = school.trim();
                    r.kecamatan = district.trim();
                    reportsUpdated = true;
                }
            });
            if (reportsUpdated) {
                writeJSON(REPORTS_FILE, reports);
            }

            // Cascade updates to testimonials.json
            let testimonials = readJSON(TESTIMONIALS_FILE);
            let testimonialsUpdated = false;
            testimonials.forEach(t => {
                if (t.participantId === id || (t.name.toLowerCase().trim() === oldName.toLowerCase().trim() && t.school.toLowerCase().trim() === oldSchool.toLowerCase().trim())) {
                    t.participantId = id;
                    t.name = name.trim();
                    t.school = school.trim();
                    t.district = district.trim();
                    testimonialsUpdated = true;
                }
            });
            if (testimonialsUpdated) {
                writeJSON(TESTIMONIALS_FILE, testimonials);
            }

            writeServerLog(`Admin mengedit data peserta: [${oldName}] → [${name.trim()}] dari ${school.trim()} (Dan memperbarui rekap terkait).`);

            res.json(participants[idx]);
        }
        else if (pathname.startsWith('/api/participants/') && method === 'DELETE') {
            const id = parseInt(pathname.substring(18));

            const participants = readJSON(PARTICIPANTS_FILE);
            const recordIdx = participants.findIndex(p => p.id === id);

            if (recordIdx === -1) {
                return res.status(404).json({ error: 'Peserta tidak ditemukan.' });
            }

            const record = participants[recordIdx];
            
            // Check if participant has history in presence or reports
            const presence = readJSON(PRESENCE_FILE);
            const reports = readJSON(REPORTS_FILE);
            
            const hasPresence = presence.some(p => p.participantId === id);
            const hasReports = reports.some(r => r.participantId === id || (r.nama.toLowerCase().trim() === record.name.toLowerCase().trim() && r.sekolah.toLowerCase().trim() === record.school.toLowerCase().trim()));
            
            if (hasPresence || hasReports) {
                // Soft delete: change status to Nonaktif
                participants[recordIdx].status = 'Nonaktif';
                writeJSON(PARTICIPANTS_FILE, participants);
                writeServerLog(`Admin menonaktifkan peserta (memiliki histori): [${record.name}] dari ${record.school}.`);
                res.json({ success: true, mode: 'soft-deleted' });
            } else {
                // Hard delete: remove entirely
                const filtered = participants.filter(p => p.id !== id);
                writeJSON(PARTICIPANTS_FILE, filtered);
                writeServerLog(`Admin menghapus peserta secara permanen (tanpa histori): [${record.name}] dari ${record.school}.`);
                res.json({ success: true, mode: 'hard-deleted' });
            }
        }
        else if (pathname === '/api/participants/import' && method === 'POST') {
            const { rows } = req.body;

            if (!Array.isArray(rows) || rows.length === 0) {
                return res.status(400).json({ error: 'Tidak ada data untuk diimpor.' });
            }

            const participants = readJSON(PARTICIPANTS_FILE);
            const jkt = getJakartaDateTime();
            let maxId = participants.reduce((max, p) => Math.max(max, p.id || 0), 0);

            let successCount = 0;
            let skipCount = 0;
            const skippedNames = [];

            let presence = readJSON(PRESENCE_FILE);
            let reports = readJSON(REPORTS_FILE);
            let testimonials = readJSON(TESTIMONIALS_FILE);

            let presenceUpdated = false;
            let reportsUpdated = false;
            let testimonialsUpdated = false;

            rows.forEach(row => {
                if (!row.name || !row.school || !row.district) {
                    skipCount++;
                    skippedNames.push((row.name || '(tanpa nama)') + ' (Data tidak lengkap)');
                    return;
                }

                const name = row.name.trim();
                const school = row.school.trim();
                const district = row.district.trim();
                const nip = (row.nip || '').trim();
                const phone = (row.phone || '').trim();
                const email = (row.email || '').trim();

                // Check for duplicate Name + School
                const existingIdx = participants.findIndex(
                    p => p.name.toLowerCase().trim() === name.toLowerCase().trim() &&
                         p.school.toLowerCase().trim() === school.toLowerCase().trim()
                );

                if (existingIdx !== -1) {
                    // Update existing participant details (Upsert)
                    const oldParticipant = participants[existingIdx];
                    const id = oldParticipant.id;

                    participants[existingIdx] = {
                        ...oldParticipant,
                        name: name,
                        school: school,
                        district: district,
                        nip: nip || oldParticipant.nip,
                        phone: phone || oldParticipant.phone,
                        email: email || oldParticipant.email,
                        status: 'Aktif' // Reactivate if was Nonaktif
                    };

                    // Cascade updates to presence.json
                    presence.forEach(p => {
                        if (p.participantId === id) {
                            p.name = name;
                            p.school = school;
                            p.district = district;
                            p.email = email || p.email;
                            p.phone = phone || p.phone;
                            presenceUpdated = true;
                        }
                    });

                    // Cascade updates to reports.json
                    reports.forEach(r => {
                        if (r.participantId === id || (r.nama.toLowerCase().trim() === oldParticipant.name.toLowerCase().trim() && r.sekolah.toLowerCase().trim() === oldParticipant.school.toLowerCase().trim())) {
                            r.participantId = id;
                            r.nama = name;
                            r.nip = nip || r.nip;
                            r.sekolah = school;
                            r.kecamatan = district;
                            reportsUpdated = true;
                        }
                    });

                    // Cascade updates to testimonials.json
                    testimonials.forEach(t => {
                        if (t.participantId === id || (t.name.toLowerCase().trim() === oldParticipant.name.toLowerCase().trim() && t.school.toLowerCase().trim() === oldParticipant.school.toLowerCase().trim())) {
                            t.participantId = id;
                            t.name = name;
                            t.school = school;
                            t.district = district;
                            testimonialsUpdated = true;
                        }
                    });

                    successCount++;
                } else {
                    // Check for duplicate Email among all active/inactive participants
                    const isEmailDuplicate = email && email !== '' && participants.some(
                        p => p.email && p.email.toLowerCase().trim() === email.toLowerCase().trim()
                    );
                    if (isEmailDuplicate) {
                        skipCount++;
                        skippedNames.push(name + ' (Email Duplikat)');
                        return;
                    }

                    maxId++;
                    participants.push({
                        id: maxId,
                        name: name,
                        nip: nip,
                        school: school,
                        district: district,
                        phone: phone,
                        email: email,
                        status: 'Aktif',
                        dateAdded: jkt.dateString,
                        reportStatus: 'Belum Dibuat'
                    });
                    successCount++;
                }
            });

            writeJSON(PARTICIPANTS_FILE, participants);
            
            if (presenceUpdated) writeJSON(PRESENCE_FILE, presence);
            if (reportsUpdated) writeJSON(REPORTS_FILE, reports);
            if (testimonialsUpdated) writeJSON(TESTIMONIALS_FILE, testimonials);

            writeServerLog(`Admin mengimpor/upsert ${successCount} data peserta (${skipCount} dilewati).`);

            res.status(201).json({
                success: true,
                successCount,
                skipCount,
                skippedNames,
                total: participants.length
            });
        }
        else if (pathname === '/api/presence/public' && method === 'GET') {
            const presence = readJSON(PRESENCE_FILE);
            const publicPresence = presence.map(p => ({
                participantId: p.participantId,
                day: p.day,
                status: p.status
            }));
            res.json(publicPresence);
        }
        else if (pathname === '/api/reports/my-reports' && method === 'POST') {
            const { ids } = req.body;
            if (!Array.isArray(ids)) {
                return res.status(400).json({ error: "Format ID laporan tidak valid." });
            }
            const reports = readJSON(REPORTS_FILE);
            const myReports = reports.filter(r => ids.includes(Number(r.id)) || ids.includes(String(r.id)));
            res.json(myReports);
        }
        else if (pathname === '/api/participants/public' && method === 'GET') {
            const participants = readJSON(PARTICIPANTS_FILE);
            const publicData = participants.map(p => ({
                id: p.id,
                name: p.name,
                school: p.school,
                district: p.district,
                reportStatus: p.reportStatus || 'Belum Dibuat'
            }));
            res.json(publicData);
        }
        else if (pathname === '/api/logs' && method === 'POST') {
            const { action } = req.body;
            if (!action) {
                return res.status(400).json({ error: "Aksi log wajib diisi." });
            }
            writeServerLog(action);
            res.json({ success: true });
        }
        else if (pathname === '/api/config/update' && method === 'POST') {
            const { newPin } = req.body;
            if (!newPin || newPin.length < 4) {
                return res.status(400).json({ error: "PIN baru minimal 4 karakter." });
            }
            const config = readJSON(CONFIG_FILE);
            config.adminPin = newPin;
            writeJSON(CONFIG_FILE, config);
            writeServerLog(`Admin mengubah PIN keamanan.`);
            res.json({ success: true });
        }
        else {
            res.status(404).json({ error: "Endpoint tidak ditemukan." });
        }
    });
});

// Start Server
server.listen(PORT, () => {
    console.log(`Server Matematika Gembira presensi berjalan di http://localhost:${PORT}`);
});
