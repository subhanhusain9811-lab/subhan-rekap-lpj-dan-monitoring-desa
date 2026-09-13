# REKAP DESA — MONITORING LPJ TAHUNAN (CLOUD GITHUB EDITION)

[![Platform](https://img.shields.io/badge/Platform-Web%20SPA-6b21a8.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-059669.svg)](LICENSE)
[![Year Coverage](https://img.shields.io/badge/Tahun%20Anggaran-2025%20s%2Fd%202031-d97706.svg)](#)
[![Wilayah 2025](https://img.shields.io/badge/Wilayah%202025-Kab.%20Mamuju%2C%20Sulbar-1e293b.svg)](#)
[![Cloud Storage](https://img.shields.io/badge/Cloud%20Database-GitHub%20API%20%2B%20Token-2563eb.svg)](#)
[![PDF Support](https://img.shields.io/badge/PDF-Upload%20%26%20Download-dc2626.svg)](#)
[![Designed for](https://img.shields.io/badge/Konsultan%20Hukum-Minzathu%20%26%20Minzathu%20Law%20Offices-059669.svg)](#)

Aplikasi web modern, cepat, dan responsif untuk monitoring, rekapitulasi, dan pengawasan berkas administrasi LPJ, status pembayaran iuran konsultan hukum desa, kelengkapan PKS, serta pengesahan tanda tangan Kepala Desa secara tahunan.

Aplikasi ini kini dilengkapi dengan **Sinkronisasi Cloud GitHub API** (menggunakan Personal Access Token) dan **Fitur Unggah/Unduh Dokumen PDF Fisik**, sehingga basis data dan berkas LPJ dapat diakses, diedit, dan disinkronkan secara mulus dari **HP (Android / iPhone), Tablet, maupun Laptop/Komputer** di mana pun Anda berada.

Data awal mencakup **50 desa se-Kabupaten Mamuju, Provinsi Sulawesi Barat** untuk Tahun Anggaran 2025, serta menyediakan ruang kosong siap pakai untuk tahun 2026 hingga 2031.

---

## 📑 Daftar Isi
1. [Fitur Baru: Cloud Sync & Dokumen PDF](#-fitur-baru-cloud-sync--dokumen-pdf)
2. [Fitur Utama Aplikasi](#-fitur-utama-aplikasi)
3. [Cakupan Wilayah Kabupaten Mamuju (2025)](#-cakupan-wilayah-kabupaten-mamuju-2025)
4. [Panduan Membuat GitHub Personal Access Token (PAT)](#-panduan-membuat-github-token-pat)
5. [Panduan Menghubungkan Aplikasi di HP, Tablet, & Laptop](#-panduan-menghubungkan-di-hp-tablet--laptop)
6. [Panduan Injek / Update Berkas ke Repositori GitHub](#-panduan-injek--update-ke-github)
7. [Struktur Berkas Repositori](#-struktur-berkas-repositori)
8. [Lisensi](#-lisensi)

---

## 🚀 Fitur Baru: Cloud Sync & Dokumen PDF

### 1. ☁️ Sinkronisasi Cloud Otomatis via GitHub API
- **Akses Multi-Device**: Data yang diinput di laptop akan otomatis tersimpan ke repositori GitHub `subhanhusain9811-lab/subhan-rekap-lpj-dan-monitoring-desa`. Saat membuka website di HP atau tablet, data langsung tersinkronkan secara real-time.
- **Keamanan Token (PAT)**: Token disimpan secara lokal di memori peramban masing-masing perangkat, sehingga aman dan tidak bocor ke publik.
- **Dua Arah (Pull & Push)**:
  - *Tarik Data (Pull)*: Memuat perubahan terbaru dari GitHub ke perangkat Anda.
  - *Unggah Data (Push)*: Menyimpan perubahan lokal langsung ke GitHub sebagai komit resmi.

### 2. 📄 Unggah & Unduh Dokumen PDF Fisik
- **Lampiran PDF untuk 6 Dokumen Pokok**:
  1. Perjanjian Kerja Sama (PKS)
  2. Kwitansi LBH
  3. Kwitansi LPJ
  4. PKS Desa TTD (Lembar pengesahan tanda tangan)
  5. Kwitansi LBH Desa TTD
  6. Kwitansi LPJ Desa TTD
- **Penyimpanan Berkas ke GitHub**: Setiap kali Anda mengunggah berkas PDF (maks. 15 MB), berkas otomatis di-commit ke folder `dokumen/{tahun}/{nama_desa}/` di repositori GitHub Anda.
- **Unduh & Pratinjau Instan**: Tombol **👁️ Lihat PDF** dan **📥 Unduh** tersedia langsung di modal detail desa serta tabel utama (ikon 📄).

---

## 📊 Fitur Utama Aplikasi

- **Dashboard Eksekutif Real-time**: 6 Kartu Statistik, Progress Tahunan visual, Insight & Rekomendasi Otomatis (analisis kecamatan dengan dokumen belum tanda tangan terbanyak di Kabupaten Mamuju), dan grafik kinerja administrasi.
- **Rekap Desa (Pusat Data Lengkap)**: Kolom *No, Desa, Nama Kades, Kecamatan, Kabupaten, Provinsi, Status Bayar, Tanggal Bayar, Nominal, PKS, Kwitansi LBH, Kwitansi LPJ, PKS Desa TTD, LBH Desa TTD, LPJ Desa TTD, Status Keseluruhan, Keterangan, dan Aksi*.
- **Filter Wilayah Dinamis**: Filter bersarang **Provinsi**, **Kabupaten**, dan **Kecamatan**.
- **Menu "Perlu Tindak Lanjut"**: Mengurai poin masalah desa dengan klasifikasi prioritas otomatis (🔴 Tinggi, 🟡 Sedang, 🟢 Rendah).
- **Manajemen Multi-Tahun (2025 s/d 2031)**:
  - Tahun 2025 terisi 50 desa Kabupaten Mamuju.
  - Tahun 2026 s/d 2031 disiapkan kosong dengan tombol **`📥 Salin 50 Desa dari 2025`** untuk menduplikasi master desa ke tahun baru dalam 1 klik.
- **Import & Export**: Ekspor ke Excel (.xlsx) dan CSV (.csv) mengikuti filter aktif. Mode cetak ramah kertas landscape (Print View / PDF).
- **Log Riwayat Perubahan (Audit Trail)**: Kronologi pencatatan setiap perubahan data desa.

---

## 🗺️ Cakupan Wilayah Kabupaten Mamuju (2025)

Tahun Anggaran 2025 mencakup **50 Desa di Kabupaten Mamuju, Provinsi Sulawesi Barat**:
* **Tapalang Barat** (6 Desa): Tanete Pao, Dungkait, Ahu, Labuang Rano, Pasabu, Pangasaan.
* **Tapalang** (5 Desa): Galung, Orobatu, Tampalang, Taan, Bela.
* **Mamuju** (4 Desa): Bambu (Kades: Hartono), Karampuang, Tadui, Batu Pannu.
* **Simboro** (5 Desa): Simboro, Botteng, Botteng Utara, Salletto, Sumare.
* **Kalukku** (7 Desa): Beru-beru, Kabuloang, Sondoang, Uhaimate, Keang, Guliling, Belang-belang.
* **Sampaga** (5 Desa): Tanambuah (Kades: Muh. Nasrullah), Bunde, Losso, Salukayu, Tarailu.
* **Tommo** (6 Desa): Kakullasan (Kades: Yosep), Campaloga, Malino, Rantemario, Sandana, Tommo.
* **Bonehau** (5 Desa): Bonehau, Banua Ada, Hinua, Lumika, Mabu.
* **Kalumpang** (5 Desa): Kalumpang, Karama, Karataun, Kondo Bulo, Tumonga.
* **Kepulauan Bala-Balakang** (2 Desa): Bala-Balakang, Bala-Balakang Timur.

---

## 🔑 Panduan Membuat GitHub Token (PAT)

Untuk mengizinkan web menyimpan data dan mengunggah PDF ke repositori GitHub Anda:

1. Buka peramban di laptop atau HP, lalu kunjungi: [https://github.com/settings/tokens](https://github.com/settings/tokens).
2. Klik tombol **Generate new token** lalu pilih **Generate new token (classic)**.
3. Pada kolom **Note**, beri nama pengingat, misalnya: `Token Rekap Desa HP Laptop`.
4. Pada kolom **Expiration**, pilih `No expiration` (atau 90 hari sesuai selera).
5. Pada daftar hak akses (*scopes*), beri tanda centang pada kotak:
   - **`[✓] repo`** (Full control of private/public repositories).
6. Gulir ke bawah dan klik tombol hijau **Generate token**.
7. Salin kode token yang muncul (berawalan `ghp_...`). *Simpan kode ini di catatan pribadi Anda karena hanya ditampilkan satu kali oleh GitHub.*

---

## 📱 Panduan Menghubungkan di HP, Tablet, & Laptop

1. Buka website aplikasi Anda di HP, tablet, atau browser laptop:
   `https://subhanhusain9811-lab.github.io/subhan-rekap-lpj-dan-monitoring-desa/`
2. Buka menu **⚙️ Pengaturan & Sinkronisasi GitHub** di sidebar (atau klik tombol status GitHub di pojok kanan atas header).
3. Masukkan Token GitHub Anda pada kolom **GitHub Personal Access Token (PAT)**.
4. Klik tombol **🔗 Simpan & Tes Koneksi**.
5. Sistem akan menampilkan status: `🟢 Terhubung ke GitHub (subhanhusain9811-lab/subhan-rekap-lpj-dan-monitoring-desa)`.
6. Klik tombol **⬇️ Tarik Data Terbaru dari GitHub**.
7. Sekarang, setiap perubahan data atau unggahan berkas PDF yang Anda lakukan di HP atau laptop akan otomatis tersimpan ke repositori GitHub dan dapat dilihat di semua perangkat Anda!

---

## 🌐 Panduan Injek / Update ke GitHub

Berikut cara memperbarui repositori GitHub Anda dengan kode versi terbaru ini:

### Melalui Web Browser GitHub (Tanpa Terminal / Git CLI)
1. Buka repositori Anda: [https://github.com/subhanhusain9811-lab/subhan-rekap-lpj-dan-monitoring-desa](https://github.com/subhanhusain9811-lab/subhan-rekap-lpj-dan-monitoring-desa).
2. Klik menu **Add file** -> **Upload files**.
3. Ekstrak berkas ZIP yang telah diunduh di komputer Anda.
4. Tarik (*drag & drop*) seluruh berkas berikut ke area upload GitHub:
   * `index.html`
   * `app.js`
   * `style.css`
   * `rekap_desa_standalone.html`
   * `dataset_desa_2025.json`
   * `README.md`
5. Pada kolom *Commit changes* di bawah, tulis pesan: `feat: integrasi cloud github sync & upload download dokumen pdf`.
6. Klik tombol hijau **Commit changes**.
7. Tunggu 1 menit, lalu refresh website GitHub Pages Anda.

---

## 📁 Struktur Berkas Repositori

```text
subhan-rekap-lpj-dan-monitoring-desa/
├── index.html                  # Halaman web utama (GitHub Pages)
├── style.css                   # Desain UI, palet warna, dan aturan responsive
├── app.js                      # Mesin logika aplikasi, sinkronisasi GitHub API, & modul PDF
├── dataset_desa_2025.json      # Dataset 50 desa Kabupaten Mamuju, Sulawesi Barat
├── rekap_desa_standalone.html  # Berkas mandiri all-in-one (bisa dibuka offline tanpa server)
├── README.md                   # Dokumentasi resmi repositori
├── .gitignore                  # Konfigurasi pengabaian berkas sementara
├── LICENSE                     # Lisensi open-source MIT
└── package.json                # Metadata proyek
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Hak Cipta (c) 2026 Ahmad Subhan Suaib, S.H. - Minzathu & Minzathu Law Offices.
