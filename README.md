# REKAP DESA — MONITORING LPJ TAHUNAN

[![Platform](https://img.shields.io/badge/Platform-Web%20SPA-6b21a8.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-059669.svg)](LICENSE)
[![Year Coverage](https://img.shields.io/badge/Tahun%20Anggaran-2025%20s%2Fd%202031-d97706.svg)](#)
[![Designed for](https://img.shields.io/badge/Kantor%20Hukum-Minzathu%20%26%20Minzathu%20Law%20Offices-1e293b.svg)](#)

Aplikasi web modern, cepat, dan responsif untuk monitoring, rekapitulasi, dan pengawasan berkas administrasi LPJ, status pembayaran iuran konsultan hukum desa, kelengkapan PKS, serta pengesahan tanda tangan Kepala Desa secara tahunan.

---

## 📑 Daftar Isi
1. [Fitur Utama](#-fitur-utama)
2. [Tangkapan Layar & Desain Antarmuka](#-desain-antarmuka)
3. [Struktur Data & Multi-Tahun](#-struktur-data--multi-tahun)
4. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
5. [Panduan Menjalankan Secara Lokal](#-panduan-menjalankan-secara-lokal)
6. [Panduan Lengkap Upload ke GitHub & Hosting Gratis di GitHub Pages](#-panduan-upload-ke-github--github-pages)
7. [Struktur Berkas Repository](#-struktur-berkas-repository)
8. [Lisensi & Kontak](#-lisensi)

---

## 🚀 Fitur Utama

- **📊 Dashboard Eksekutif Real-time**: 
  - 6 Kartu Statistik: Total Desa, Sudah Bayar, Belum Bayar, Dokumen Lengkap, Belum Lengkap, dan Perlu Tindak Lanjut.
  - Kartu Progress Tahunan visual dengan persentase penyelesaian agregat.
  - Insight & Rekomendasi Otomatis (misal: analisis kecamatan dengan dokumen belum tanda tangan terbanyak).
  - Grafik capaian kinerja administrasi (Pembayaran, Dokumen Fisik, dan TTD Kades).

- **📋 Rekap Desa (Pusat Data 15 Kolom)**:
  - Kolom lengkap: *No, Desa, Nama Kades, Kecamatan, Status Bayar, Tanggal Bayar, Nominal, PKS, Kwitansi LBH, Kwitansi LPJ, PKS Desa TTD, LBH Desa TTD, LPJ Desa TTD, Status Keseluruhan, Keterangan, dan Aksi*.
  - Badge visual berstandar warna administrasi:
    - 🟢 `DONE` / `SUDAH BAYAR` / `LENGKAP` / `SELESAI`
    - 🔴 `BELUM` / `BELUM BAYAR` / `BELUM LENGKAP`
    - 🟡 `BELUM TTD` / `PERLU MELENGKAPI DOKUMEN`
    - ⚪ `BELUM DIISI` / `KOSONG`
  - Sorting interaktif pada header kolom dan pagination dinamis (15, 25, 50, 100, atau Semua).
  - Mode tampilan fleksibel: **Tabel Horizontal** untuk laptop/desktop atau **Mode Kartu (Card Grid)** untuk tablet dan smartphone.

- **🔍 Pencarian & Filter Multi-Dimensi**:
  - Live search instan: cari berdasarkan nama desa, nama kepala desa, atau kecamatan.
  - Filter real-time berdasarkan: Kecamatan, Status Pembayaran, Status Dokumen, Status TTD, dan Status Keseluruhan.

- **🏘️ Rekapitulasi Per Kecamatan**:
  - Tabel ringkasan kinerja per wilayah dengan visual progress bar persentase.
  - Klik baris kecamatan untuk langsung memfilter daftar desa di kecamatan tersebut.

- **⚠️ Menu Khusus "Perlu Tindak Lanjut"**:
  - Membedah secara spesifik desa-desa yang memiliki kendala administrasi, tunggakan pembayaran, atau dokumen belum TTD.
  - Klasifikasi prioritas otomatis:
    - 🔴 **Prioritas Tinggi**: Belum bayar atau >= 3 dokumen belum selesai.
    - 🟡 **Prioritas Sedang**: Sudah bayar tetapi masih ada 1-2 dokumen/TTD yang kurang.
    - 🟢 **Prioritas Rendah**: Tinggal catatan verifikasi kecil.

- **📅 Manajemen Multi-Tahun (2025 s/d 2031)**:
  - Database terisolasi per tahun anggaran (data tahun 2025 tidak tercampur dengan 2026 atau tahun lainnya).
  - Tahun 2025 memuat 50 desa aktif (wilayah Kab. Mamuju & Mamuju Tengah).
  - Tahun 2026 s/d 2031 disiapkan dalam kondisi kosong.
  - **Fitur Cerdas Salin Master Desa**: Cukup 1 klik tombol `📥 Salin 50 Desa dari 2025` untuk menduplikasi master desa ke tahun baru dengan status di-reset ke "Belum", tanpa perlu mengetik ulang data 50 desa setiap tahun!
  - Tombol `+ Tahun` untuk menambah tahun di atas 2031 kapan pun dibutuhkan.

- **📥 Import & 📤 Export Data**:
  - Import massal dari berkas **Excel (.xlsx, .xls)** dan **CSV (.csv)** dilengkapi pratinjau data (*preview*) dan opsi *Merge/Update* atau *Append*.
  - Export data aktif ke **Excel (.xlsx)** dan **CSV (.csv)** sesuai filter yang sedang aktif.
  - **Mode Cetak Resmi (Print View / PDF)**: Tata letak ramah kertas A4/Landscape dengan kop dinas resmi advokat, tanggal & jam cetak (WITA), serta pembersihan elemen navigasi layar.

- **🕒 Log Riwayat Perubahan (Audit Trail)**:
  - Mencatat kronologi waktu, nama desa, bidang data yang diubah, nilai sebelum, nilai sesudah, dan identitas operator.

- **💾 Penyimpanan Lokal & Keamanan**:
  - Menggunakan browser **HTML5 LocalStorage** (data tetap tersimpan saat peramban ditutup/direfresh).
  - Fitur **Backup JSON** dan **Restore JSON** untuk mengamankan data dan memindahkan data antar-komputer dengan mudah.

---

## 🎨 Desain Antarmuka

Aplikasi dibangun dengan prinsip **Clean + Modern + Government Administration + Friendly Dashboard**:
- **Putih (#ffffff)**: Warna dasar yang bersih dan nyaman di mata.
- **Ungu (#6b21a8, #7e22ce)**: Identitas profesional utama.
- **Navy (#0f172a, #1e293b)**: Navigasi dan kontras informasi.
- **Hijau (#059669)**: Status selesai, lunas, dan lengkap.
- **Merah (#dc2626)**: Status masalah, tunggakan, dan berkas belum lengkap.
- **Emas / Amber (#d97706)**: Status peringatan dan tanda tangan belum lengkap.

---

## 🛠️ Teknologi yang Digunakan

1. **HTML5**: Semantik standar web modern.
2. **CSS3**: Desain responsif berbasis CSS Grid & Flexbox, CSS Variables, dan `@media print`.
3. **Vanilla JavaScript (ES6+)**: Performa tinggi tanpa dependensi framework yang berat.
4. **SheetJS (XLSX)**: Pemrosesan berkas Excel untuk impor dan ekspor data spreadsheet secara instan.
5. **HTML5 LocalStorage API**: Penyimpanan data di sisi klien yang aman dan cepat.

---

## 💻 Panduan Menjalankan Secara Lokal

Aplikasi ini dapat langsung dijalankan di komputer tanpa perlu menginstal backend atau database yang rumit:

### Opsi 1: Buka Langsung di Browser
1. Unduh berkas repository ini (atau clone).
2. Klik dua kali (*double click*) pada berkas `index.html`.
3. Aplikasi akan langsung terbuka dan siap digunakan di Google Chrome, Microsoft Edge, Safari, atau Firefox.

### Opsi 2: Menggunakan Server Lokal Ringan (Opsional)
Jika Anda memiliki Python terinstal:
```bash
python3 -m http.server 8080
```
Buka peramban di `http://localhost:8080`.

---

## 🌐 Panduan Upload ke GitHub & GitHub Pages

Ikuti langkah-langkah berikut untuk menaruh aplikasi di GitHub dan menjadikannya web online gratis:

### Langkah 1: Buat Repository Baru di GitHub
1. Masuk ke akun Anda di [https://github.com](https://github.com).
2. Klik tombol **"+"** di pojok kanan atas, lalu pilih **New repository**.
3. Masukkan nama repository, misalnya: `rekap-desa-lpj`.
4. Pilih opsi **Public** (wajib Public agar fitur GitHub Pages gratis dapat diakses).
5. Kosongkan centang *Add a README file* (karena berkas README sudah kita sediakan).
6. Klik tombol hijau **Create repository**.

---

### Langkah 2: Upload Berkas ke GitHub

#### Cara A: Upload Langsung Lewat Web Browser (Paling Mudah)
1. Pada halaman repository baru yang masih kosong, klik tautan bertuliskan:
   `uploading an existing file`
2. Buka folder aplikasi di komputer Anda, lalu **drag and drop** (tarik dan lepaskan) semua berkas:
   - `index.html`
   - `style.css`
   - `app.js`
   - `README.md`
   - `.gitignore`
   - `LICENSE`
   - `package.json`
   - `dataset_desa_2025.json`
3. Pada kotak isian di bawah (*Commit changes*), tulis pesan: `Initial commit: Aplikasi Rekap Desa Monitoring LPJ`.
4. Klik tombol hijau **Commit changes**. Tunggu beberapa detik sampai proses upload selesai.

#### Cara B: Menggunakan Git Terminal / Command Prompt
Jika komputer Anda sudah terpasang Git:
```bash
git init
git add .
git commit -m "feat: Aplikasi Rekap Desa Monitoring LPJ 2025-2031"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/rekap-desa-lpj.git
git push -u origin main
```
*(Ganti `USERNAME-ANDA` dengan nama pengguna GitHub Anda)*.

---

### Langkah 3: Aktifkan GitHub Pages (Agar Web Online Live)
1. Masuk ke halaman repository Anda di GitHub.
2. Klik tab **Settings** (ikon gerigi di bilah navigasi atas repository).
3. Di menu sidebar sebelah kiri, klik menu **Pages**.
4. Pada bagian **Build and deployment**:
   - Source: pilih **Deploy from a branch**.
   - Branch: pilih **main**.
   - Folder: pilih **/ (root)**.
5. Klik tombol **Save**.
6. Tunggu sekitar 1–2 menit, kemudian refresh halaman tersebut.
7. Anda akan melihat kotak hijau bertuliskan:
   > **Your site is live at `https://USERNAME-ANDA.github.io/rekap-desa-lpj/`**
8. Klik tautan tersebut, dan aplikasi **REKAP DESA — MONITORING LPJ** kini sudah online dan bisa diakses oleh siapa saja dari HP, tablet, maupun laptop!

---

## 📁 Struktur Berkas Repository

```text
rekap-desa-lpj/
├── index.html              # Entrypoint aplikasi utama (GitHub Pages)
├── style.css               # Desain UI, palet warna, dan aturan responsive
├── app.js                  # Logika aplikasi, state multi-tahun, dan engine status
├── dataset_desa_2025.json  # Data awal 50 desa Kab. Mamuju & Mamuju Tengah (2025)
├── README.md               # Dokumentasi resmi aplikasi
├── .gitignore              # Konfigurasi pengabaian berkas sementara
├── LICENSE                 # Lisensi open-source MIT
└── package.json            # Metadata proyek
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Bebas digunakan, dikembangkan, dan disesuaikan untuk tata kelola administrasi desa dan pendampingan hukum pemerintahan daerah.
