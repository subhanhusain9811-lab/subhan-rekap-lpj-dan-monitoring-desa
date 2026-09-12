# REKAP DESA — MONITORING LPJ TAHUNAN

[![Platform](https://img.shields.io/badge/Platform-Web%20SPA-6b21a8.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-059669.svg)](LICENSE)
[![Year Coverage](https://img.shields.io/badge/Tahun%20Anggaran-2025%20s%2Fd%202031-d97706.svg)](#)
[![Wilayah 2025](https://img.shields.io/badge/Wilayah%202025-Kab.%20Mamuju%2C%20Sulbar-1e293b.svg)](#)
[![Designed for](https://img.shields.io/badge/Konsultan%20Hukum-Minzathu%20%26%20Minzathu%20Law%20Offices-059669.svg)](#)

Aplikasi web modern, cepat, dan responsif untuk monitoring, rekapitulasi, dan pengawasan berkas administrasi LPJ, status pembayaran iuran konsultan hukum desa, kelengkapan PKS, serta pengesahan tanda tangan Kepala Desa secara tahunan.

Aplikasi ini telah disesuaikan secara khusus dengan data awal **50 desa se-Kabupaten Mamuju, Provinsi Sulawesi Barat** untuk Tahun Anggaran 2025, serta menyediakan ruang kosong siap pakai untuk tahun 2026 hingga 2031.

---

## 📑 Daftar Isi
1. [Fitur Utama](#-fitur-utama)
2. [Cakupan Wilayah & Multi-Tahun](#-cakupan-wilayah--multi-tahun)
3. [Struktur Data Lengkap](#-struktur-data-lengkap)
4. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
5. [Panduan Injek / Update Berkas ke Repositori GitHub](#-panduan-injek--update-ke-github)
6. [Panduan Menjalankan Secara Lokal](#-panduan-menjalankan-secara-lokal)
7. [Struktur Berkas Repositori](#-struktur-berkas-repositori)
8. [Lisensi](#-lisensi)

---

## 🚀 Fitur Utama

- **📊 Dashboard Eksekutif Real-time**: 
  - 6 Kartu Statistik: Total Desa, Sudah Bayar, Belum Bayar, Dokumen Lengkap, Belum Lengkap, dan Perlu Tindak Lanjut.
  - Kartu *Progress Tahunan* visual dengan persentase penyelesaian agregat.
  - Insight & Rekomendasi Otomatis (misal: analisis kecamatan dengan dokumen belum tanda tangan terbanyak di Kabupaten Mamuju).
  - Grafik capaian kinerja administrasi (Pembayaran, Dokumen Fisik, dan TTD Kades).

- **📋 Rekap Desa (Pusat Data Lengkap Berkolom Wilayah)**:
  - Kolom lengkap: *No, Desa, Nama Kades, Kecamatan, Kabupaten, Provinsi, Status Bayar, Tanggal Bayar, Nominal, PKS, Kwitansi LBH, Kwitansi LPJ, PKS Desa TTD, LBH Desa TTD, LPJ Desa TTD, Status Keseluruhan, Keterangan, dan Aksi*.
  - Badge visual berstandar warna administrasi:
    - 🟢 `DONE` / `SUDAH BAYAR` / `LENGKAP` / `SELESAI`
    - 🔴 `BELUM` / `BELUM BAYAR` / `BELUM LENGKAP`
    - 🟡 `BELUM TTD` / `PERLU MELENGKAPI DOKUMEN`
    - ⚪ `BELUM DIISI` / `KOSONG`
  - Sorting interaktif pada setiap kolom dan pagination dinamis (15, 25, 50, 100, atau Semua).
  - Mode tampilan fleksibel: **Tabel Horizontal** untuk laptop/desktop atau **Mode Kartu (Card Grid)** untuk tablet dan smartphone.

- **🔍 Filter Wilayah Dinamis & Pencarian Global**:
  - Filter bersarang: **Provinsi**, **Kabupaten**, dan **Kecamatan**.
  - Filter status: Pembayaran, Dokumen, TTD, dan Status Keseluruhan.
  - Live search instan: cari berdasarkan nama desa, nama kepala desa, kecamatan, kabupaten, atau provinsi.

- **🏘️ Rekapitulasi Per Kecamatan (Kabupaten Mamuju)**:
  - Tabel ringkasan kinerja per kecamatan (Tapalang Barat, Tapalang, Mamuju, Simboro, Kalukku, Sampaga, Tommo, Bonehau, Kalumpang, Bala-Balakang) dengan visual progress bar persentase.
  - Klik baris kecamatan untuk langsung memfilter daftar desa di kecamatan tersebut.

- **⚠️ Menu Khusus "Perlu Tindak Lanjut"**:
  - Membedah secara spesifik desa-desa yang memiliki kendala administrasi, tunggakan pembayaran, atau dokumen belum TTD.
  - Klasifikasi prioritas otomatis:
    - 🔴 **Prioritas Tinggi**: Belum bayar atau >= 3 dokumen belum selesai.
    - 🟡 **Prioritas Sedang**: Sudah bayar tetapi masih ada 1-2 dokumen/TTD yang kurang.
    - 🟢 **Prioritas Rendah**: Tinggal catatan verifikasi kecil.

- **📅 Manajemen Multi-Tahun (2025 s/d 2031)**:
  - Database terisolasi per tahun anggaran (data tahun 2025 tidak tercampur dengan 2026 atau tahun lainnya).
  - **Tahun 2025**: Terisi 50 desa aktif Kabupaten Mamuju, Sulawesi Barat.
  - **Tahun 2026 s/d 2031**: Disiapkan dalam kondisi kosong.
  - **Fitur Cerdas Salin Master Desa**: Cukup 1 klik tombol `📥 Salin 50 Desa dari 2025` untuk menduplikasi master desa ke tahun baru dengan status di-reset ke "Belum", tanpa perlu mengetik ulang data 50 desa setiap tahun!
  - Tombol `+ Tahun` untuk menambah tahun di atas 2031 kapan pun dibutuhkan.

- **📥 Import & 📤 Export Data**:
  - Import massal dari berkas **Excel (.xlsx, .xls)** dan **CSV (.csv)** dengan pengenalan otomatis kolom Kabupaten & Provinsi.
  - Export data aktif ke **Excel (.xlsx)** dan **CSV (.csv)** lengkap dengan kolom Kabupaten dan Provinsi.
  - **Mode Cetak Resmi (Print View / PDF)**: Tata letak ramah kertas A4/Landscape dengan kop dinas resmi advokat, tanggal & jam cetak (WITA), serta pembersihan elemen navigasi layar.

- **🕒 Log Riwayat Perubahan (Audit Trail)**:
  - Mencatat kronologi waktu, nama desa, bidang data yang diubah, nilai sebelum, nilai sesudah, dan identitas operator.

- **💾 Penyimpanan Lokal & Keamanan**:
  - Menggunakan browser **HTML5 LocalStorage** (data tetap tersimpan saat peramban ditutup/direfresh).
  - Fitur **Backup JSON** dan **Restore JSON** untuk mengamankan data dan memindahkan data antar-komputer dengan mudah.

---

## 🗺️ Cakupan Wilayah & Multi-Tahun

### Tahun Anggaran 2025 (Aktif)
Secara khusus mencakup **50 Desa di Kabupaten Mamuju, Provinsi Sulawesi Barat**:
* **Kecamatan Tapalang Barat** (6 Desa): Tanete Pao, Dungkait, Ahu, Labuang Rano, Pasabu, Pangasaan.
* **Kecamatan Tapalang** (5 Desa): Galung, Orobatu, Tampalang, Taan, Bela.
* **Kecamatan Mamuju** (4 Desa): Bambu (Kades: Hartono), Karampuang, Tadui, Batu Pannu.
* **Kecamatan Simboro** (5 Desa): Simboro, Botteng, Botteng Utara, Salletto, Sumare.
* **Kecamatan Kalukku** (7 Desa): Beru-beru, Kabuloang, Sondoang, Uhaimate, Keang, Guliling, Belang-belang.
* **Kecamatan Sampaga** (5 Desa): Tanambuah (Kades: Muh. Nasrullah), Bunde, Losso, Salukayu, Tarailu.
* **Kecamatan Tommo** (6 Desa): Kakullasan (Kades: Yosep), Campaloga, Malino, Rantemario, Sandana, Tommo.
* **Kecamatan Bonehau** (5 Desa): Bonehau, Banua Ada, Hinua, Lumika, Mabu.
* **Kecamatan Kalumpang** (5 Desa): Kalumpang, Karama, Karataun, Kondo Bulo, Tumonga.
* **Kecamatan Kepulauan Bala-Balakang** (2 Desa): Bala-Balakang, Bala-Balakang Timur.

### Tahun Anggaran 2026 s/d 2031 (Kosong / Siap Digunakan)
Telah disediakan di menu dropdown tahun. Operator dapat menyalin data 50 desa dari tahun 2025 atau memasukkan kabupaten/desa baru di masa mendatang.

---

## 🌐 Panduan Injek / Update ke GitHub

Jika repositori GitHub Anda sudah dibuat sebelumnya, berikut cara termudah untuk meng-update ("injek") berkas versi terbaru ini:

### Cara 1: Update Langsung Lewat Web GitHub (Paling Mudah, Tanpa Git CLI)
1. Buka repositori Anda di [https://github.com](https://github.com).
2. Klik tombol **Add file** di bagian kanan atas daftar berkas, lalu pilih **Upload files**.
3. Buka folder hasil ekstrak berkas ZIP terbaru di komputer Anda.
4. Pilih dan tarik (*drag and drop*) semua berkas berikut ke layar browser:
   * `index.html`
   * `app.js`
   * `style.css`
   * `rekap_desa_standalone.html`
   * `dataset_desa_2025.json`
   * `README.md`
5. GitHub akan mendeteksi file yang sudah ada dan otomatis menimpanya (*overwrite*) dengan versi terbaru.
6. Pada kolom **Commit changes** di bagian bawah, tulis pesan (contoh: `feat: tambah kolom kabupaten & provinsi, data 2025 kab mamuju sulbar`).
7. Klik tombol hijau **Commit changes**.
8. Selesai! GitHub Pages Anda akan otomatis meng-update web dalam 1–2 menit.

---

### Cara 2: Update Melalui Terminal Git
Jika menggunakan Git CLI di komputer:
```bash
# Masuk ke folder repositori lokal Anda
cd folder-rekap-desa

# Salin/timpa semua berkas baru ke folder ini, lalu jalankan:
git add .
git commit -m "feat: tambah kolom kabupaten dan provinsi, set 2025 kab mamuju"
git push origin main
```

---

## 📁 Struktur Berkas Repositori

```text
rekap-desa-lpj/
├── index.html                  # Entrypoint aplikasi utama (GitHub Pages)
├── style.css                   # Desain UI, palet warna, dan tata letak responsif
├── app.js                      # Mesin logika aplikasi, filter wilayah, & dataset 2025
├── dataset_desa_2025.json      # Dataset 50 desa Kabupaten Mamuju, Sulawesi Barat
├── rekap_desa_standalone.html  # Berkas mandiri all-in-one (bisa dibuka offline tanpa server)
├── README.md                   # Dokumentasi resmi repositori
├── .gitignore                  # Konfigurasi pengabaian berkas sementara
├── LICENSE                     # Lisensi open-source MIT
└── package.json                # Metadata proyek
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Bebas digunakan, dikembangkan, dan disesuaikan untuk tata kelola administrasi desa dan pendampingan hukum pemerintahan daerah.
