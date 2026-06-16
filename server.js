const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // support large base64 signatures
app.use(express.static(path.join(__dirname)));

// File storage paths
const DATA_DIR = path.join(__dirname, 'data');
const PRESENCE_FILE = path.join(DATA_DIR, 'presence.json');
const LOGS_FILE = path.join(DATA_DIR, 'logs.json');
const REPORTS_FILE = path.join(DATA_DIR, 'reports.json');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');

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

// Helpers to read/write JSON files safely
function readJSON(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
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
    
    // Check if client passed a debug date override via header
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

// API Routes

// 1. GET Server Time
app.get('/api/time', (req, res) => {
    const debugDate = req.headers['x-debug-date'] || req.query.testDate;
    const jkt = getJakartaDateTime(debugDate);
    res.json({
        datetime: jkt.isoString,
        date: jkt.dateString,
        time: jkt.timeString,
        timestamp: jkt.timestamp
    });
});

// 2. GET Presence Records
app.get('/api/presence', (req, res) => {
    const presence = readJSON(PRESENCE_FILE);
    res.json(presence);
});

// 3. POST Submit Presence
app.post('/api/presence', (req, res) => {
    const debugDate = req.headers['x-debug-date'] || req.body.testDate;
    const jkt = getJakartaDateTime(debugDate);
    const dateStr = jkt.dateString;

    let activeDay = "";
    let activeDayLabel = "";
    let hariPelatihan = "";
    let tanggalPelatihan = "";

    // Validation dates: June 17, 2026 (Hari 1), June 18, 2026 (Hari 2)
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

    // Load current records
    const presenceList = readJSON(PRESENCE_FILE);

    // Check for duplicate presence
    const isDuplicate = presenceList.some(p => p.participantId === parseInt(participantId) && p.day === activeDayLabel);
    if (isDuplicate) {
        return res.status(400).json({ error: "Anda sudah melakukan presensi untuk hari pelatihan ini." });
    }

    // Create presence record
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

    // Log this action
    writeServerLog(`Peserta [${newRecord.name}] melakukan presensi ${newRecord.day} secara mandiri.`);

    res.status(201).json(newRecord);
});

// 4. PUT Update Presence (Admin Action)
app.put('/api/presence/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { email, phone, day, status } = req.body;

    const presenceList = readJSON(PRESENCE_FILE);
    const recordIndex = presenceList.findIndex(p => p.id === id);

    if (recordIndex === -1) {
        return res.status(404).json({ error: "Data presensi tidak ditemukan." });
    }

    const record = presenceList[recordIndex];
    const oldStatus = record.status;
    const oldDay = record.day;

    // Extract Hari and Tanggal Pelatihan from the new day string
    let newHari = "Hari 1";
    let newTgl = "17 Juni 2026";
    if (day.includes("Hari 2")) {
        newHari = "Hari 2";
        newTgl = "18 Juni 2026";
    }

    // Update fields
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
});

// 5. DELETE Presence (Admin Action)
app.delete('/api/presence/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const presenceList = readJSON(PRESENCE_FILE);
    const record = presenceList.find(p => p.id === id);

    if (!record) {
        return res.status(404).json({ error: "Data presensi tidak ditemukan." });
    }

    const filteredList = presenceList.filter(p => p.id !== id);
    writeJSON(PRESENCE_FILE, filteredList);

    writeServerLog(`Admin menghapus data presensi milik [${record.name}] untuk ${record.day.split(':')[0]}.`);

    res.json({ success: true });
});

// 6. GET Admin Logs
app.get('/api/logs', (req, res) => {
    const logs = readJSON(LOGS_FILE);
    res.json(logs);
});

// 7. POST Clear Admin Logs
app.post('/api/logs/clear', (req, res) => {
    writeJSON(LOGS_FILE, []);
    res.json({ success: true });
});

// 8. GET Reports
app.get('/api/reports', (req, res) => {
    const reports = readJSON(REPORTS_FILE);
    res.json(reports);
});

// 9. POST Save/Update Report
app.post('/api/reports', (req, res) => {
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
});

// 10. GET Testimonials
app.get('/api/testimonials', (req, res) => {
    const testimonials = readJSON(TESTIMONIALS_FILE);
    res.json(testimonials);
});

// 11. POST Submit Testimonial
app.post('/api/testimonials', (req, res) => {
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
});

// 12. POST Reset Reports & Testimonials
app.post('/api/reports/reset', (req, res) => {
    const { mode, name, adminName } = req.body;
    
    // Backup data before writing in case of failure (transaction/rollback mock-up)
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
            
            // Filter testimonials
            testimonials = testimonials.filter(t => t.name.toLowerCase() !== name.toLowerCase());
            
            if (!writeJSON(REPORTS_FILE, reports) || !writeJSON(TESTIMONIALS_FILE, testimonials)) {
                throw new Error("Failed to write to JSON databases.");
            }
            
            writeServerLog(`Admin [${adminName || 'Panitia'}] mereset data uji coba milik [${name}]. Dihapus: ${deletedCount} draf laporan.`);
        } else if (mode === 'all') {
            deletedCount = reports.length;
            
            // Empty reports database
            reports = [];
            
            // Filter testimonials, keeping only the mock ones
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
        // Rollback databases
        writeJSON(REPORTS_FILE, backupReports);
        writeJSON(TESTIMONIALS_FILE, backupTestimonials);
        res.status(500).json({ error: "Gagal mereset data uji coba (transaksi dibatalkan)." });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server Matematika Gembira presensi berjalan di http://localhost:${PORT}`);
});
