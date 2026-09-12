// REKAP DESA — MONITORING LPJ
// Senior Web Application Developer & System Analyst Architecture
// Production JavaScript Module for GitHub Deployment

const DEFAULT_DATA_2025 = [{"id": "desa-2025-01", "no": 1, "desa": "Tanete Pao", "kades": "Basri, S.Pd.", "jabatan": "Definitif", "kecamatan": "Tapalang Barat", "tanggalBayar": "2025-03-12", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250312-0881", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "belum ttd", "keterangan": "Ada yang kurang TTD Kades", "needsVerification": true}, {"id": "desa-2025-02", "no": 2, "desa": "Dungkait", "kades": "H. Rusli", "jabatan": "Definitif", "kecamatan": "Tapalang Barat", "tanggalBayar": "2025-02-24", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250224-0412", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-03", "no": 3, "desa": "Ahu", "kades": "Muhammad Jafar", "jabatan": "Definitif", "kecamatan": "Tapalang Barat", "tanggalBayar": "2025-03-18", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250318-0914", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "done", "keterangan": "Menunggu TTD Kades untuk PKS dan Kwitansi LBH", "needsVerification": true}, {"id": "desa-2025-04", "no": 4, "desa": "Labuang Rano", "kades": "Rustam", "jabatan": "Definitif", "kecamatan": "Tapalang Barat", "tanggalBayar": "2025-03-25", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250325-1033", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "belum ttd", "keterangan": "Kuitansi LPJ dan PKS menunggu stempel basah desa", "needsVerification": true}, {"id": "desa-2025-05", "no": 5, "desa": "Pasabu", "kades": "Syamsuddin, S.E.", "jabatan": "Pj. Kepala Desa", "kecamatan": "Tapalang Barat", "tanggalBayar": "2025-04-02", "nominal": 15000000, "catatanBayar": "Tunai bendahara", "infoTambahanBayar": "Tanda terima kuitansi kas no. 042/TB/2025", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "belum ttd", "keterangan": "Pj. Kades dinas luar, berkas tertahan di kantor desa", "needsVerification": true}, {"id": "desa-2025-06", "no": 6, "desa": "Pangasaan", "kades": "Abdul Rahman", "jabatan": "Definitif", "kecamatan": "Tapalang Barat", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Menunggu pencairan ADD Tahap 1", "pks": "done", "kwitansiLbh": "belum", "kwitansiLpj": "belum", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum", "kwitansiLpjDesaTtd": "belum", "keterangan": "Belum bayar dan dokumen fisik belum ditandatangani", "needsVerification": true}, {"id": "desa-2025-07", "no": 7, "desa": "Bambu", "kades": "Hartono", "jabatan": "Definitif", "kecamatan": "Mamuju", "tanggalBayar": "2025-02-15", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250215-0120", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Dokumen dan LPJ selesai lengkap", "needsVerification": false}, {"id": "desa-2025-08", "no": 8, "desa": "Tadui", "kades": "Saharuddin", "jabatan": "Definitif", "kecamatan": "Mamuju", "tanggalBayar": "2025-02-20", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250220-0315", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap dan terverifikasi", "needsVerification": false}, {"id": "desa-2025-09", "no": 9, "desa": "Batu Pannu", "kades": "Dahlan", "jabatan": "Plt. Kepala Desa", "kecamatan": "Mamuju", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Pergantian Plt. Kades masih transisi administrasi", "pks": "belum", "kwitansiLbh": "belum", "kwitansiLpj": "belum", "pksDesaTtd": "belum", "kwitansiLbhDesaTtd": "belum", "kwitansiLpjDesaTtd": "belum", "keterangan": "Menunggu SK definitif dan pembahasan APBDes", "needsVerification": true}, {"id": "desa-2025-10", "no": 10, "desa": "Tanambuah", "kades": "Muh. Nasrullah", "jabatan": "Definitif", "kecamatan": "Sampaga", "tanggalBayar": "2025-01-28", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250128-0044", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap, rujukan regulasi siap", "needsVerification": false}, {"id": "desa-2025-11", "no": 11, "desa": "Bunde", "kades": "Amiruddin", "jabatan": "Definitif", "kecamatan": "Sampaga", "tanggalBayar": "2025-02-10", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250210-0199", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap tanpa catatan revisi", "needsVerification": false}, {"id": "desa-2025-12", "no": 12, "desa": "Tarailu", "kades": "H. Sahid", "jabatan": "Definitif", "kecamatan": "Sampaga", "tanggalBayar": "2025-03-14", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250314-0842", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "LPJ dan tanda terima selesai", "needsVerification": false}, {"id": "desa-2025-13", "no": 13, "desa": "Losso", "kades": "Marzuki", "jabatan": "Definitif", "kecamatan": "Sampaga", "tanggalBayar": "2025-04-10", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250410-1120", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Semua berkas tervalidasi", "needsVerification": false}, {"id": "desa-2025-14", "no": 14, "desa": "Kakullasan", "kades": "Yosep", "jabatan": "Definitif", "kecamatan": "Tommo", "tanggalBayar": "2025-03-08", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250308-0711", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Berkas lengkap dan sesuai format APBDes", "needsVerification": false}, {"id": "desa-2025-15", "no": 15, "desa": "Campaloga", "kades": "I Nyoman Sukadana", "jabatan": "Definitif", "kecamatan": "Tommo", "tanggalBayar": "2025-03-22", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250322-0988", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Berkas lengkap", "needsVerification": false}, {"id": "desa-2025-16", "no": 16, "desa": "Malino", "kades": "Markus", "jabatan": "Definitif", "kecamatan": "Tommo", "tanggalBayar": "2025-04-05", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250405-1077", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Arsip hardcopy tersimpan di folder LBH", "needsVerification": false}, {"id": "desa-2025-17", "no": 17, "desa": "Rantemario", "kades": "Bambang Irawan", "jabatan": "Pj. Kepala Desa", "kecamatan": "Tommo", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Kendala rekening kas desa belum update spesimen TTD", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "done", "keterangan": "Menunggu TTD Pj Kades baru", "needsVerification": true}, {"id": "desa-2025-18", "no": 18, "desa": "Galung", "kades": "Ma'ruf, S.Sos.", "jabatan": "Definitif", "kecamatan": "Tapalang", "tanggalBayar": "2025-02-18", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250218-0288", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap dan lunas", "needsVerification": false}, {"id": "desa-2025-19", "no": 19, "desa": "Orobatu", "kades": "Masri", "jabatan": "Definitif", "kecamatan": "Tapalang", "tanggalBayar": "2025-03-01", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250301-0512", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Dokumen rampung 100%", "needsVerification": false}, {"id": "desa-2025-20", "no": 20, "desa": "Tampalang", "kades": "H. Baharuddin", "jabatan": "Definitif", "kecamatan": "Tapalang", "tanggalBayar": "2025-03-15", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250315-0855", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-21", "no": 21, "desa": "Taan", "kades": "M. Kasim", "jabatan": "Definitif", "kecamatan": "Tapalang", "tanggalBayar": "2025-03-28", "nominal": 15000000, "catatanBayar": "Tunai bendahara", "infoTambahanBayar": "Tanda terima kuitansi kas no. 035/TB/2025", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "PKS belum ditandatangani Kades", "needsVerification": true}, {"id": "desa-2025-22", "no": 22, "desa": "Simboro", "kades": "Syahrir", "jabatan": "Definitif", "kecamatan": "Simboro", "tanggalBayar": "2025-03-10", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250310-0750", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-23", "no": 23, "desa": "Botteng", "kades": "Dirham", "jabatan": "Definitif", "kecamatan": "Simboro", "tanggalBayar": "2025-02-28", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250228-0498", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Dokumen lengkap dan terarsip", "needsVerification": false}, {"id": "desa-2025-24", "no": 24, "desa": "Salletto", "kades": "M. Yunus", "jabatan": "Definitif", "kecamatan": "Simboro", "tanggalBayar": "2025-04-12", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250412-1145", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "done", "keterangan": "Kuitansi LBH belum ditandatangani", "needsVerification": true}, {"id": "desa-2025-25", "no": 25, "desa": "Kalukku", "kades": "Arman", "jabatan": "Definitif", "kecamatan": "Kalukku", "tanggalBayar": "2025-02-12", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250212-0210", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap", "needsVerification": false}, {"id": "desa-2025-26", "no": 26, "desa": "Beru-beru", "kades": "Asrul", "jabatan": "Definitif", "kecamatan": "Kalukku", "tanggalBayar": "2025-03-02", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250302-0544", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-27", "no": 27, "desa": "Kabuloang", "kades": "Dahlan R.", "jabatan": "Definitif", "kecamatan": "Kalukku", "tanggalBayar": "2025-03-16", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250316-0870", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap", "needsVerification": false}, {"id": "desa-2025-28", "no": 28, "desa": "Sondoang", "kades": "M. Tahir", "jabatan": "Definitif", "kecamatan": "Kalukku", "tanggalBayar": "2025-03-24", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250324-1015", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "done", "keterangan": "TTD Kades tertunda menunggu kepulangan umrah", "needsVerification": true}, {"id": "desa-2025-29", "no": 29, "desa": "Babana", "kades": "M. Arif", "jabatan": "Definitif", "kecamatan": "Budong-Budong", "tanggalBayar": "2025-02-14", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250214-0230", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap dan lunas", "needsVerification": false}, {"id": "desa-2025-30", "no": 30, "desa": "Barakkang", "kades": "Burhanuddin", "jabatan": "Definitif", "kecamatan": "Budong-Budong", "tanggalBayar": "2025-02-26", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250226-0440", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-31", "no": 31, "desa": "Bojo", "kades": "Zulkifli", "jabatan": "Definitif", "kecamatan": "Budong-Budong", "tanggalBayar": "2025-03-09", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250309-0733", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap", "needsVerification": false}, {"id": "desa-2025-32", "no": 32, "desa": "Kire", "kades": "Iskandar", "jabatan": "Definitif", "kecamatan": "Budong-Budong", "tanggalBayar": "2025-03-29", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250329-1050", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "PKS Desa belum di TTD Kades", "needsVerification": true}, {"id": "desa-2025-33", "no": 33, "desa": "Pasapa", "kades": "Bahar", "jabatan": "Definitif", "kecamatan": "Budong-Budong", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Proses pencairan ADD masih di DPMD", "pks": "done", "kwitansiLbh": "belum", "kwitansiLpj": "belum", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "belum", "kwitansiLpjDesaTtd": "belum", "keterangan": "Belum bayar, dokumen kuitansi belum terbit", "needsVerification": true}, {"id": "desa-2025-34", "no": 34, "desa": "Topoyo", "kades": "I Made Sujana", "jabatan": "Definitif", "kecamatan": "Topoyo", "tanggalBayar": "2025-02-16", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250216-0260", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap dan terverifikasi", "needsVerification": false}, {"id": "desa-2025-35", "no": 35, "desa": "Bambamanurung", "kades": "Suryadi", "jabatan": "Definitif", "kecamatan": "Topoyo", "tanggalBayar": "2025-03-04", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250304-0601", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-36", "no": 36, "desa": "Budong-Budong", "kades": "Agus Salim", "jabatan": "Definitif", "kecamatan": "Topoyo", "tanggalBayar": "2025-03-17", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250317-0895", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Dokumen lengkap", "needsVerification": false}, {"id": "desa-2025-37", "no": 37, "desa": "Tabolang", "kades": "Sukirman", "jabatan": "Definitif", "kecamatan": "Topoyo", "tanggalBayar": "2025-03-31", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250331-1066", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "done", "keterangan": "Menunggu tandatangan kepala desa pada kuitansi", "needsVerification": true}, {"id": "desa-2025-38", "no": 38, "desa": "Tobadak", "kades": "Wayan Suwena", "jabatan": "Definitif", "kecamatan": "Tobadak", "tanggalBayar": "2025-02-22", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250222-0380", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap", "needsVerification": false}, {"id": "desa-2025-39", "no": 39, "desa": "Mahahe", "kades": "Sutrisno", "jabatan": "Definitif", "kecamatan": "Tobadak", "tanggalBayar": "2025-03-07", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250307-0690", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-40", "no": 40, "desa": "Sejati", "kades": "Kasmir", "jabatan": "Definitif", "kecamatan": "Tobadak", "tanggalBayar": "2025-03-27", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250327-1044", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap", "needsVerification": false}, {"id": "desa-2025-41", "no": 41, "desa": "Polong Aan", "kades": "Sudirman", "jabatan": "Pj. Kepala Desa", "kecamatan": "Tobadak", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Tahap pengajuan berkas di bank", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "belum ttd", "keterangan": "Pj. Kades baru dilantik, belum TTD dokumen", "needsVerification": true}, {"id": "desa-2025-42", "no": 42, "desa": "Pangale", "kades": "Muh. Tahir", "jabatan": "Definitif", "kecamatan": "Pangale", "tanggalBayar": "2025-02-19", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250219-0305", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Dokumen dan kuitansi lengkap", "needsVerification": false}, {"id": "desa-2025-43", "no": 43, "desa": "Polo Camba", "kades": "Syamsul Alam", "jabatan": "Definitif", "kecamatan": "Pangale", "tanggalBayar": "2025-03-11", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250311-0810", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-44", "no": 44, "desa": "Lamba-lamba", "kades": "Hamzah", "jabatan": "Plt. Kepala Desa", "kecamatan": "Pangale", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Dalam konfirmasi bendahara desa", "pks": "belum ada data", "kwitansiLbh": "belum ada data", "kwitansiLpj": "belum ada data", "pksDesaTtd": "belum", "kwitansiLbhDesaTtd": "belum", "kwitansiLpjDesaTtd": "belum", "keterangan": "Belum ada data dokumen maupun realisasi bayar", "needsVerification": true}, {"id": "desa-2025-45", "no": 45, "desa": "Karossa", "kades": "H. Ismail", "jabatan": "Definitif", "kecamatan": "Karossa", "tanggalBayar": "2025-02-27", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250227-0470", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap dan terverifikasi", "needsVerification": false}, {"id": "desa-2025-46", "no": 46, "desa": "Lara", "kades": "Nur Alam", "jabatan": "Definitif", "kecamatan": "Karossa", "tanggalBayar": "2025-03-13", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250313-0830", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-47", "no": 47, "desa": "Sanjango", "kades": "M. Basir", "jabatan": "Definitif", "kecamatan": "Karossa", "tanggalBayar": "2025-04-06", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250406-1100", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Lengkap", "needsVerification": false}, {"id": "desa-2025-48", "no": 48, "desa": "Benggaulu", "kades": "Junaedi", "jabatan": "Definitif", "kecamatan": "Karossa", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Menunggu pengesahan perubahan APBDes", "pks": "done", "kwitansiLbh": "belum", "kwitansiLpj": "belum", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "belum", "kwitansiLpjDesaTtd": "belum", "keterangan": "Kuitansi belum siap, menunggu transfer dana desa", "needsVerification": true}, {"id": "desa-2025-49", "no": 49, "desa": "Bonehau", "kades": "Kornelius", "jabatan": "Definitif", "kecamatan": "Bonehau", "tanggalBayar": "2025-03-26", "nominal": 15000000, "catatanBayar": "Transfer Bank BPD Sulselbar", "infoTambahanBayar": "TRF-BPD/MJU/20250326-1038", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "done", "kwitansiLbhDesaTtd": "done", "kwitansiLpjDesaTtd": "done", "keterangan": "Selesai ttd dan lpj lengkap", "needsVerification": false}, {"id": "desa-2025-50", "no": 50, "desa": "Hinua", "kades": "Paulus", "jabatan": "Definitif", "kecamatan": "Bonehau", "tanggalBayar": "", "nominal": 0, "catatanBayar": "Belum ada pembayaran", "infoTambahanBayar": "Akses komunikasi terbatas, dijadwalkan ke Mamuju minggu depan", "pks": "done", "kwitansiLbh": "done", "kwitansiLpj": "done", "pksDesaTtd": "belum ttd", "kwitansiLbhDesaTtd": "belum ttd", "kwitansiLpjDesaTtd": "belum ttd", "keterangan": "Menunggu kehadiran Kades di ibukota kabupaten untuk TTD berkas", "needsVerification": true}];

// APPLICATION STATE
let state = {
  activeYear: "2025",
  availableYears: ["2025", "2026", "2027", "2028", "2029", "2030", "2031"],
  activeView: "dashboard",
  tableViewMode: "table", // "table" or "cards"
  searchQuery: "",
  filters: {
    kecamatan: "",
    statusBayar: "",
    statusDokumen: "",
    statusTtd: "",
    statusKeseluruhan: ""
  },
  sort: {
    column: "no",
    asc: true
  },
  pagination: {
    page: 1,
    pageSize: 50
  },
  selectedDesaId: null,
  importParsedData: null,
  auditLogs: []
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  initYearSelector();
  renderAllViews();
  initPrintTimestamp();
});

// LOCAL STORAGE MANAGEMENT
function getStorageKey(year) {
  return `rekap_desa_data_${year}`;
}

function loadStateFromStorage() {
  const savedYears = localStorage.getItem("rekap_desa_years");
  if (savedYears) {
    try {
      state.availableYears = JSON.parse(savedYears);
    } catch(e) {
      console.error(e);
    }
  } else {
    localStorage.setItem("rekap_desa_years", JSON.stringify(state.availableYears));
  }

  // 2025 has default initial sample dataset
  ensureYearDataInitialized("2025", DEFAULT_DATA_2025);

  // 2026 - 2031 start empty if not already set
  ["2026", "2027", "2028", "2029", "2030", "2031"].forEach(y => {
    ensureYearDataInitialized(y, []);
  });

  const savedLogs = localStorage.getItem("rekap_desa_audit_logs");
  if (savedLogs) {
    try {
      state.auditLogs = JSON.parse(savedLogs);
    } catch(e) {
      state.auditLogs = [];
    }
  } else {
    state.auditLogs = [
      {
        timestamp: "2025-09-12 15:30:00",
        desa: "Dungkait",
        field: "Status LPJ Desa TTD",
        oldVal: "BELUM TTD",
        newVal: "DONE",
        operator: "Ahmad Subhan, S.H."
      },
      {
        timestamp: "2025-09-10 10:15:00",
        desa: "Tanete Pao",
        field: "Catatan Pembayaran",
        oldVal: "Menunggu konfirmasi",
        newVal: "Transfer Bank BPD Sulselbar",
        operator: "Ahmad Subhan, S.H."
      }
    ];
    saveAuditLogs();
  }
}

function ensureYearDataInitialized(year, defaultDataset) {
  const key = getStorageKey(year);
  const existing = localStorage.getItem(key);
  if (existing === null) {
    localStorage.setItem(key, JSON.stringify(defaultDataset));
  }
}

function getYearData(year) {
  const key = getStorageKey(year || state.activeYear);
  const dataStr = localStorage.getItem(key);
  if (!dataStr) return [];
  try {
    return JSON.parse(dataStr);
  } catch (e) {
    console.error("Error parsing year data:", e);
    return [];
  }
}

function saveYearData(year, data) {
  const key = getStorageKey(year || state.activeYear);
  localStorage.setItem(key, JSON.stringify(data));
}

function saveAuditLogs() {
  localStorage.setItem("rekap_desa_audit_logs", JSON.stringify(state.auditLogs));
}

function addAuditLog(desa, field, oldVal, newVal) {
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  const timeStr = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  
  const logEntry = {
    timestamp: timeStr,
    desa: desa,
    field: field,
    oldVal: oldVal || "(kosong)",
    newVal: newVal || "(kosong)",
    operator: "Ahmad Subhan, S.H."
  };
  state.auditLogs.unshift(logEntry);
  if (state.auditLogs.length > 500) state.auditLogs.pop();
  saveAuditLogs();
}

// COPY MASTER DESA FROM 2025
function copyMasterDesaFrom2025(targetYear) {
  const baseData = getYearData("2025");
  if (!baseData || baseData.length === 0) {
    alert("Data tahun 2025 kosong, tidak dapat menyalin master desa.");
    return;
  }

  if (confirm(`Apakah Anda yakin ingin menyalin ${baseData.length} master desa dari tahun 2025 ke tahun ${targetYear}?\n\nCatatan: Nama desa, kepala desa, dan kecamatan akan disalin, sementara status pembayaran dan kelengkapan dokumen di-reset ke 'Belum'.`)) {
    const copied = baseData.map((d, i) => ({
      id: `desa-${targetYear}-${String(i+1).padStart(2, "0")}`,
      no: i + 1,
      desa: d.desa,
      kades: d.kades || "",
      jabatan: d.jabatan || "Definitif",
      kecamatan: d.kecamatan,
      statusBayar: "BELUM BAYAR",
      tanggalBayar: "",
      nominal: 0,
      catatanBayar: "",
      infoTambahanBayar: "",
      pks: "belum",
      kwitansiLbh: "belum",
      kwitansiLpj: "belum",
      pksDesaTtd: "belum ttd",
      kwitansiLbhDesaTtd: "belum ttd",
      kwitansiLpjDesaTtd: "belum ttd",
      keterangan: "Disalin dari master 2025 (Siap dimonitor)",
      needsVerification: false
    }));

    saveYearData(targetYear, copied);
    addAuditLog(`Tahun Anggaran ${targetYear}`, "Salin Master Desa", "Kosong", `${copied.length} Desa disalin dari 2025`);
    renderAllViews();
    showToast(`Berhasil menyalin ${copied.length} master desa ke tahun ${targetYear}!`, "success");
  }
}

// BUSINESS LOGIC: AUTO-STATUS CALCULATIONS
function calcStatusBayar(item) {
  if ((item.nominal && Number(item.nominal) > 0) || (item.tanggalBayar && item.tanggalBayar.trim() !== "") || item.statusBayar === "SUDAH BAYAR") {
    return "SUDAH BAYAR";
  }
  return "BELUM BAYAR";
}

function calcStatusDokumen(item) {
  const docFields = ["pks", "kwitansiLbh", "kwitansiLpj", "pksDesaTtd", "kwitansiLbhDesaTtd", "kwitansiLpjDesaTtd"];
  for (const field of docFields) {
    const val = (item[field] || "").toLowerCase().trim();
    if (val !== "done") {
      return "BELUM LENGKAP";
    }
  }
  return "LENGKAP";
}

function calcStatusTTD(item) {
  const ttdFields = ["pksDesaTtd", "kwitansiLbhDesaTtd", "kwitansiLpjDesaTtd"];
  for (const field of ttdFields) {
    const val = (item[field] || "").toLowerCase().trim();
    if (val !== "done") {
      return "BELUM LENGKAP";
    }
  }
  return "LENGKAP";
}

function calcStatusKeseluruhan(item) {
  const bayar = calcStatusBayar(item);
  const doc = calcStatusDokumen(item);

  if (bayar === "SUDAH BAYAR" && doc === "LENGKAP") {
    return "SELESAI";
  } else if (bayar === "SUDAH BAYAR" && doc === "BELUM LENGKAP") {
    return "PERLU MELENGKAPI DOKUMEN";
  } else {
    return "BELUM BAYAR";
  }
}

function calcPrioritas(item) {
  const bayar = calcStatusBayar(item);
  const doc = calcStatusDokumen(item);
  
  if (bayar === "BELUM BAYAR") {
    return "TINGGI";
  }

  const docFields = ["pks", "kwitansiLbh", "kwitansiLpj", "pksDesaTtd", "kwitansiLbhDesaTtd", "kwitansiLpjDesaTtd"];
  let missingCount = 0;
  for (const f of docFields) {
    if ((item[f] || "").toLowerCase().trim() !== "done") missingCount++;
  }

  if (missingCount >= 3) return "TINGGI";
  if (missingCount >= 1) return "SEDANG";
  if (item.needsVerification || (item.keterangan && item.keterangan.trim() !== "")) return "RENDAH";
  return "SELESAI";
}

// AGGREGATE STATISTICS
function computeStatistics(data) {
  const total = data.length;
  let sudahBayar = 0;
  let totalNominal = 0;
  let docLengkap = 0;
  let ttdLengkap = 0;
  let perluTindakLanjut = 0;

  const kecMap = {};

  data.forEach(item => {
    const bayar = calcStatusBayar(item);
    const doc = calcStatusDokumen(item);
    const ttd = calcStatusTTD(item);
    const prioritas = calcPrioritas(item);

    if (bayar === "SUDAH BAYAR") {
      sudahBayar++;
      totalNominal += Number(item.nominal || 0);
    }

    if (doc === "LENGKAP") docLengkap++;
    if (ttd === "LENGKAP") ttdLengkap++;
    if (prioritas !== "SELESAI") perluTindakLanjut++;

    const kec = item.kecamatan || "Lainnya";
    if (!kecMap[kec]) {
      kecMap[kec] = {
        nama: kec,
        total: 0,
        sudahBayar: 0,
        belumBayar: 0,
        docLengkap: 0,
        docBelum: 0,
        ttdBelum: 0
      };
    }
    kecMap[kec].total++;
    if (bayar === "SUDAH BAYAR") kecMap[kec].sudahBayar++;
    else kecMap[kec].belumBayar++;

    if (doc === "LENGKAP") kecMap[kec].docLengkap++;
    else kecMap[kec].docBelum++;

    if (ttd !== "LENGKAP") kecMap[kec].ttdBelum++;
  });

  const belumBayar = total - sudahBayar;
  const docBelum = total - docLengkap;
  const ttdBelum = total - ttdLengkap;
  
  const pctBayar = total > 0 ? Math.round((sudahBayar / total) * 100) : 0;
  const pctDoc = total > 0 ? Math.round((docLengkap / total) * 100) : 0;
  const pctTtd = total > 0 ? Math.round((ttdLengkap / total) * 100) : 0;
  const progressOverall = total > 0 ? Math.round(((sudahBayar * 0.4) + (docLengkap * 0.3) + (ttdLengkap * 0.3)) / total * 100) : 0;

  let topTtdIssueKec = "Tapalang Barat";
  let maxTtdIssueCount = 0;
  for (const k in kecMap) {
    if (kecMap[k].ttdBelum > maxTtdIssueCount) {
      maxTtdIssueCount = kecMap[k].ttdBelum;
      topTtdIssueKec = k;
    }
  }

  return {
    total,
    sudahBayar,
    belumBayar,
    totalNominal,
    docLengkap,
    docBelum,
    ttdLengkap,
    ttdBelum,
    perluTindakLanjut,
    pctBayar,
    pctDoc,
    pctTtd,
    progressOverall,
    kecMap,
    topTtdIssueKec,
    maxTtdIssueCount
  };
}

// UI RENDERERS
function renderAllViews() {
  const data = getYearData(state.activeYear);
  const stats = computeStatistics(data);

  renderDashboard(data, stats);
  renderRekapDesa();
  renderKecamatanTable(stats);
  renderPembayaranTable(data, stats);
  renderDokumenTable(data);
  renderTtdTable(data);
  renderTindakLanjut();
  renderStatistikCharts(stats);
  renderAuditTable();
  populateKecamatanOptions(data);
  updateBadgesAndHeaders(stats);
}

function updateBadgesAndHeaders(stats) {
  const sbTot = document.getElementById("sidebarTotalBadge");
  if (sbTot) sbTot.textContent = stats.total;
  const sbIss = document.getElementById("sidebarIssuesBadge");
  if (sbIss) sbIss.textContent = stats.perluTindakLanjut;
  const hNotif = document.getElementById("headerNotifBadge");
  if (hNotif) hNotif.textContent = stats.perluTindakLanjut;
  document.querySelectorAll(".print-year-target").forEach(el => el.textContent = state.activeYear);
}

function renderDashboard(data, stats) {
  const el = id => document.getElementById(id);
  
  // If year is empty, show empty state prompt
  const alertBanner = el("dashAlertBanner");
  if (stats.total === 0) {
    if (alertBanner) {
      alertBanner.innerHTML = `
        <div class="alert-left">
          <span class="alert-icon">ℹ️</span>
          <div>
            <div class="alert-title">DATA TAHUN ${state.activeYear} MASIH KOSONG</div>
            <div class="alert-desc">Belum ada desa yang terdaftar untuk tahun anggaran ${state.activeYear}. Anda dapat menyalin data master desa dari tahun 2025 atau memasukkan data baru.</div>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-primary btn-sm" onclick="copyMasterDesaFrom2025('${state.activeYear}')">📥 Salin 50 Desa dari 2025</button>
          <button class="btn btn-secondary btn-sm" onclick="openAddDesaModal()">+ Tambah Manual</button>
        </div>
      `;
    }
  } else {
    if (alertBanner) {
      alertBanner.innerHTML = `
        <div class="alert-left">
          <span class="alert-icon">⚠️</span>
          <div>
            <div class="alert-title">PERHATIAN ADMINISTRASI TAHUN ${state.activeYear}</div>
            <div class="alert-desc" id="dashAlertText">${stats.perluTindakLanjut} desa masih memiliki dokumen atau tanda tangan yang belum lengkap.</div>
          </div>
        </div>
        <button class="btn btn-danger btn-sm" onclick="switchView('tindak-lanjut')">Lihat Daftar Tindak Lanjut →</button>
      `;
    }
  }

  if (el("statTotalDesa")) el("statTotalDesa").textContent = stats.total;
  if (el("statSudahBayar")) el("statSudahBayar").textContent = stats.sudahBayar;
  if (el("statNominalBayar")) el("statNominalBayar").textContent = `${formatRupiah(stats.totalNominal)} (${stats.pctBayar}%)`;
  if (el("statBelumBayar")) el("statBelumBayar").textContent = stats.belumBayar;
  if (el("statPctBelumBayar")) el("statPctBelumBayar").textContent = stats.total > 0 ? `${100 - stats.pctBayar}% dari total desa` : "-";
  if (el("statDocLengkap")) el("statDocLengkap").textContent = stats.docLengkap;
  if (el("statPctDocLengkap")) el("statPctDocLengkap").textContent = stats.total > 0 ? `${stats.pctDoc}% selesai seluruhnya` : "-";
  if (el("statDocBelum")) el("statDocBelum").textContent = stats.docBelum;
  if (el("statTindakLanjut")) el("statTindakLanjut").textContent = stats.perluTindakLanjut;

  if (el("heroProgressPct")) el("heroProgressPct").textContent = `${stats.progressOverall}% Selesai`;
  if (el("heroProgressBar")) el("heroProgressBar").style.width = `${stats.progressOverall}%`;
  if (el("heroLunasTxt")) el("heroLunasTxt").textContent = `Pembayaran: ${stats.sudahBayar} / ${stats.total} Desa (${stats.pctBayar}%)`;
  if (el("heroDocTxt")) el("heroDocTxt").textContent = `Dokumen Lengkap: ${stats.docLengkap} / ${stats.total} Desa (${stats.pctDoc}%)`;
  if (el("heroTtdTxt")) el("heroTtdTxt").textContent = `TTD Desa Lengkap: ${stats.ttdLengkap} / ${stats.total} Desa (${stats.pctTtd}%)`;

  if (el("progBayarVal")) el("progBayarVal").textContent = `${stats.pctBayar}%`;
  if (el("progBayarFill")) el("progBayarFill").style.width = `${stats.pctBayar}%`;
  if (el("progDocVal")) el("progDocVal").textContent = `${stats.pctDoc}%`;
  if (el("progDocFill")) el("progDocFill").style.width = `${stats.pctDoc}%`;
  if (el("progTtdVal")) el("progTtdVal").textContent = `${stats.pctTtd}%`;
  if (el("progTtdFill")) el("progTtdFill").style.width = `${stats.pctTtd}%`;
  if (el("progSelesaiVal")) el("progSelesaiVal").textContent = `${stats.pctDoc}%`;
  if (el("progSelesaiFill")) el("progSelesaiFill").style.width = `${stats.pctDoc}%`;

  const insightList = el("dashboardInsightList");
  if (insightList) {
    if (stats.total === 0) {
      insightList.innerHTML = `
        <div class="insight-item type-attention">
          <div class="insight-icon">📋</div>
          <div class="insight-content">
            <h4>TAHUN BARU TERSEDIA</h4>
            <p>Tahun anggaran <b>${state.activeYear}</b> masih kosong. Klik tombol <b>'Salin 50 Desa dari 2025'</b> untuk memulai tahun ini dengan daftar desa lengkap.</p>
          </div>
        </div>
      `;
    } else {
      insightList.innerHTML = `
        <div class="insight-item type-attention">
          <div class="insight-icon">⚠️</div>
          <div class="insight-content">
            <h4>PERHATIAN TERBANYAK</h4>
            <p>Desa dengan dokumen belum TTD terbanyak berada pada <b>Kecamatan ${stats.topTtdIssueKec}</b> (${stats.maxTtdIssueCount} desa belum tuntas ttd).</p>
          </div>
        </div>

        <div class="insight-item type-payment">
          <div class="insight-icon">💳</div>
          <div class="insight-content">
            <h4>PEMBAYARAN</h4>
            <p>Sebanyak <b>${stats.sudahBayar} desa</b> (${stats.pctBayar}%) telah melakukan pembayaran dengan total realisasi <b>${formatRupiah(stats.totalNominal)}</b>.</p>
          </div>
        </div>

        <div class="insight-item type-document">
          <div class="insight-icon">📑</div>
          <div class="insight-content">
            <h4>DOKUMEN & LPJ</h4>
            <p>Masih terdapat <b>${stats.docBelum} desa</b> (${100 - stats.pctDoc}%) dengan dokumen PKS atau kwitansi yang belum lengkap.</p>
          </div>
        </div>
      `;
    }
  }
}

// FILTERING LOGIC
function getFilteredData() {
  const rawData = getYearData(state.activeYear);
  return rawData.filter(item => {
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchDesa = (item.desa || "").toLowerCase().includes(q);
      const matchKades = (item.kades || "").toLowerCase().includes(q);
      const matchKec = (item.kecamatan || "").toLowerCase().includes(q);
      const matchKet = (item.keterangan || "").toLowerCase().includes(q);
      if (!matchDesa && !matchKades && !matchKec && !matchKet) return false;
    }

    if (state.filters.kecamatan && item.kecamatan !== state.filters.kecamatan) return false;
    if (state.filters.statusBayar && calcStatusBayar(item) !== state.filters.statusBayar) return false;
    if (state.filters.statusDokumen && calcStatusDokumen(item) !== state.filters.statusDokumen) return false;
    if (state.filters.statusTtd && calcStatusTTD(item) !== state.filters.statusTtd) return false;
    if (state.filters.statusKeseluruhan && calcStatusKeseluruhan(item) !== state.filters.statusKeseluruhan) return false;

    return true;
  });
}

function renderRekapDesa() {
  const rawData = getYearData(state.activeYear);
  const filtered = getFilteredData();

  filtered.sort((a, b) => {
    let vA = a[state.sort.column];
    let vB = b[state.sort.column];

    if (state.sort.column === "statusBayar") {
      vA = calcStatusBayar(a);
      vB = calcStatusBayar(b);
    } else if (state.sort.column === "statusAll") {
      vA = calcStatusKeseluruhan(a);
      vB = calcStatusKeseluruhan(b);
    }

    if (typeof vA === "string") vA = vA.toLowerCase();
    if (typeof vB === "string") vB = vB.toLowerCase();

    if (vA < vB) return state.sort.asc ? -1 : 1;
    if (vA > vB) return state.sort.asc ? 1 : -1;
    return 0;
  });

  const countDisp = document.getElementById("tableCountDisplay");
  if (countDisp) {
    countDisp.innerHTML = `Menampilkan <b>${filtered.length}</b> dari <b>${rawData.length}</b> desa (Tahun ${state.activeYear})`;
  }

  const pageSize = state.pagination.pageSize;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  if (state.pagination.page > totalPages) state.pagination.page = 1;

  const startIndex = (state.pagination.page - 1) * pageSize;
  const pagedData = filtered.slice(startIndex, startIndex + pageSize);

  const tbody = document.getElementById("mainTableBody");
  if (tbody) {
    if (rawData.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="16" style="text-align:center; padding: 50px 20px; color: var(--navy-slate);">
            <div style="font-size: 36px; margin-bottom: 8px;">📭</div>
            <h4 style="font-size: 16px; font-weight: 800; margin-bottom: 4px;">Data Desa Tahun ${state.activeYear} Masih Kosong</h4>
            <p style="font-size: 12.5px; color: var(--text-muted); max-width: 500px; margin: 0 auto 16px;">
              Belum ada rekaman desa pada tahun anggaran ini. Anda dapat menyalin data master 50 desa dari tahun 2025 secara otomatis dengan status baru yang siap dimonitor.
            </p>
            <div style="display: flex; gap: 10px; justify-content: center;">
              <button class="btn btn-primary" onclick="copyMasterDesaFrom2025('${state.activeYear}')">📥 Salin 50 Desa dari 2025</button>
              <button class="btn btn-secondary" onclick="openAddDesaModal()">+ Tambah Desa Manual</button>
              <button class="btn btn-secondary" onclick="switchView('import')">📥 Import Excel/CSV</button>
            </div>
          </td>
        </tr>
      `;
    } else if (pagedData.length === 0) {
      tbody.innerHTML = `<tr><td colspan="16" style="text-align:center; padding: 40px; color: var(--text-muted);">
        <b>Data desa tidak ditemukan</b><br><span style="font-size: 12px;">Coba sesuaikan kata kunci pencarian atau reset filter.</span>
      </td></tr>`;
    } else {
      tbody.innerHTML = pagedData.map((item, idx) => {
        const realIdx = startIndex + idx + 1;
        const statusBayar = calcStatusBayar(item);
        const statusAll = calcStatusKeseluruhan(item);

        return `
          <tr>
            <td><b>${realIdx}</b></td>
            <td>
              <div style="font-weight: 700; color: var(--navy-slate);">${escapeHtml(item.desa)}</div>
              ${item.needsVerification ? "<span class='badge badge-verification'>Perlu Verifikasi</span>" : ""}
            </td>
            <td>
              <div>${escapeHtml(item.kades || "-")}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${escapeHtml(item.jabatan || "Definitif")}</div>
            </td>
            <td><span class="badge" style="background: #f1f5f9; color: #334155;">${escapeHtml(item.kecamatan)}</span></td>
            <td>${renderBayarBadge(statusBayar)}</td>
            <td>${formatDate(item.tanggalBayar)}</td>
            <td style="font-weight: 600;">${item.nominal ? formatRupiah(item.nominal) : "-"}</td>
            <td>${renderDocBadge(item.pks)}</td>
            <td>${renderDocBadge(item.kwitansiLbh)}</td>
            <td>${renderDocBadge(item.kwitansiLpj)}</td>
            <td>${renderTtdBadge(item.pksDesaTtd)}</td>
            <td>${renderTtdBadge(item.kwitansiLbhDesaTtd)}</td>
            <td>${renderTtdBadge(item.kwitansiLpjDesaTtd)}</td>
            <td>${renderStatusAllBadge(statusAll)}</td>
            <td style="max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(item.keterangan || "")}">
              ${escapeHtml(item.keterangan || "-")}
            </td>
            <td style="text-align: center;">
              <div style="display: flex; gap: 4px; justify-content: center;">
                <button class="btn btn-secondary btn-sm" onclick="openDetailModal('${item.id}')" title="Lihat Detail">👁️</button>
                <button class="btn btn-secondary btn-sm" onclick="openEditDesaModal('${item.id}')" title="Edit Data">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="promptDeleteDesa('${item.id}')" title="Hapus Data">🗑️</button>
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  renderCardsMode(pagedData, rawData.length);
  renderPaginationControls(totalPages);
}

function renderCardsMode(items, rawTotal) {
  const container = document.getElementById("cardsWrapper");
  if (!container) return;

  if (rawTotal === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 40px; text-align: center;">
        <div style="font-size: 36px; margin-bottom: 8px;">📭</div>
        <h4 style="font-size: 16px; font-weight: 800; color: var(--navy-slate);">Data Tahun ${state.activeYear} Masih Kosong</h4>
        <p style="font-size: 12.5px; color: var(--text-muted); margin: 6px 0 16px;">
          Gunakan tombol di bawah untuk menyalin daftar desa dari tahun 2025.
        </p>
        <button class="btn btn-primary" onclick="copyMasterDesaFrom2025('${state.activeYear}')">📥 Salin 50 Desa dari 2025</button>
      </div>
    `;
    return;
  }

  if (items.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Data desa tidak ditemukan.</div>';
    return;
  }

  container.innerHTML = items.map(item => {
    const statusBayar = calcStatusBayar(item);
    const prioritas = calcPrioritas(item);

    return `
      <div class="desa-record-card">
        <div class="dcard-header">
          <div class="dcard-title">
            <h4>${escapeHtml(item.desa)}</h4>
            <p>Kec. ${escapeHtml(item.kecamatan)} • Kades: ${escapeHtml(item.kades || "-")}</p>
          </div>
          <span class="priority-pill priority-${prioritas.toLowerCase()}">${prioritas}</span>
        </div>

        <div class="dcard-row">
          <span>Status Pembayaran:</span>
          <span>${renderBayarBadge(statusBayar)}</span>
        </div>

        <div class="dcard-row">
          <span>Nominal / Tanggal:</span>
          <span><b>${item.nominal ? formatRupiah(item.nominal) : "Rp 0"}</b> (${formatDate(item.tanggalBayar)})</span>
        </div>

        <div class="dcard-docs-grid">
          <div class="dcard-doc-col">
            <span>PKS</span>
            ${renderDocBadge(item.pks)}
          </div>
          <div class="dcard-doc-col">
            <span>Kwt LBH</span>
            ${renderDocBadge(item.kwitansiLbh)}
          </div>
          <div class="dcard-doc-col">
            <span>Kwt LPJ</span>
            ${renderDocBadge(item.kwitansiLpj)}
          </div>
          <div class="dcard-doc-col">
            <span>PKS TTD</span>
            ${renderTtdBadge(item.pksDesaTtd)}
          </div>
          <div class="dcard-doc-col">
            <span>LBH TTD</span>
            ${renderTtdBadge(item.kwitansiLbhDesaTtd)}
          </div>
          <div class="dcard-doc-col">
            <span>LPJ TTD</span>
            ${renderTtdBadge(item.kwitansiLpjDesaTtd)}
          </div>
        </div>

        ${item.keterangan ? `<div style="font-size: 12px; background: #fffbeb; padding: 6px 10px; border-radius: 6px; border-left: 3px solid #f59e0b;">${escapeHtml(item.keterangan)}</div>` : ""}

        <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 4px;">
          <button class="btn btn-secondary btn-sm" onclick="openDetailModal('${item.id}')">Detail</button>
          <button class="btn btn-primary btn-sm" onclick="openEditDesaModal('${item.id}')">Edit</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderPaginationControls(totalPages) {
  const container = document.getElementById("paginationBtns");
  if (!container) return;
  let btns = "";

  btns += `<button class="page-btn" ${state.pagination.page === 1 ? "disabled" : ""} onclick="gotoPage(${state.pagination.page - 1})">«</button>`;

  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || (p >= state.pagination.page - 1 && p <= state.pagination.page + 1)) {
      btns += `<button class="page-btn ${state.pagination.page === p ? "active" : ""}" onclick="gotoPage(${p})">${p}</button>`;
    } else if (p === state.pagination.page - 2 || p === state.pagination.page + 2) {
      btns += "<span style='padding: 0 4px;'>...</span>";
    }
  }

  btns += `<button class="page-btn" ${state.pagination.page === totalPages ? "disabled" : ""} onclick="gotoPage(${state.pagination.page + 1})">»</button>`;
  container.innerHTML = btns;
}

function gotoPage(p) {
  state.pagination.page = p;
  renderRekapDesa();
}

function changePageSize(size) {
  state.pagination.pageSize = Number(size);
  state.pagination.page = 1;
  renderRekapDesa();
}

function setTableViewMode(mode) {
  state.tableViewMode = mode;
  document.getElementById("btnModeTable").classList.toggle("active", mode === "table");
  document.getElementById("btnModeCards").classList.toggle("active", mode === "cards");
  document.getElementById("tableWrapper").style.display = mode === "table" ? "block" : "none";
  document.getElementById("cardsWrapper").style.display = mode === "cards" ? "grid" : "none";
}

// BADGE GENERATORS
function renderBayarBadge(status) {
  if (status === "SUDAH BAYAR") {
    return "<span class='badge badge-done'>🟢 SUDAH BAYAR</span>";
  }
  return "<span class='badge badge-belum'>🔴 BELUM BAYAR</span>";
}

function renderDocBadge(val) {
  const v = (val || "").toLowerCase().trim();
  if (v === "done") return "<span class='badge badge-done'>🟢 DONE</span>";
  if (v === "belum") return "<span class='badge badge-belum'>🔴 BELUM</span>";
  return "<span class='badge badge-kosong'>⚪ BELUM DIISI</span>";
}

function renderTtdBadge(val) {
  const v = (val || "").toLowerCase().trim();
  if (v === "done") return "<span class='badge badge-done'>🟢 DONE</span>";
  if (v === "belum ttd") return "<span class='badge badge-belum-ttd'>🟡 BELUM TTD</span>";
  if (v === "belum") return "<span class='badge badge-belum'>🔴 BELUM</span>";
  return "<span class='badge badge-kosong'>⚪ BELUM DIISI</span>";
}

function renderStatusAllBadge(status) {
  if (status === "SELESAI") {
    return "<span class='badge badge-selesai'>🟢 SELESAI</span>";
  } else if (status === "PERLU MELENGKAPI DOKUMEN") {
    return "<span class='badge badge-perlu-dokumen'>🟡 PERLU DOKUMEN</span>";
  } else {
    return "<span class='badge badge-belum-bayar'>🔴 BELUM BAYAR</span>";
  }
}

// REKAP PER KECAMATAN TABLE
function renderKecamatanTable(stats) {
  const tbody = document.getElementById("kecamatanTableBody");
  if (!tbody) return;
  const kecArray = Object.values(stats.kecMap);

  if (kecArray.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 30px;">Belum ada data kecamatan untuk tahun ${state.activeYear}.</td></tr>`;
    return;
  }

  kecArray.sort((a, b) => b.total - a.total);

  let counter = 1;
  tbody.innerHTML = kecArray.map(kec => {
    const pct = kec.total > 0 ? Math.round((kec.docLengkap / kec.total) * 100) : 0;

    return `
      <tr style="cursor: pointer;" onclick="filterByKecamatanFromTable('${escapeHtml(kec.nama)}')">
        <td><b>${counter++}</b></td>
        <td style="font-weight: 700; color: var(--navy-slate);">${escapeHtml(kec.nama)}</td>
        <td><b>${kec.total}</b></td>
        <td><span class='badge badge-done'>🟢 ${kec.sudahBayar}</span></td>
        <td><span class='badge badge-belum'>🔴 ${kec.belumBayar}</span></td>
        <td><span class='badge badge-done'>🟢 ${kec.docLengkap}</span></td>
        <td><span class="badge ${kec.docBelum > 0 ? "badge-belum-ttd" : "badge-kosong"}">${kec.docBelum}</span></td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="progress-track" style="flex: 1; height: 8px;">
              <div class="progress-fill fill-green" style="width: ${pct}%;"></div>
            </div>
            <span style="font-size: 11px; font-weight: 700; width: 34px;">${pct}%</span>
          </div>
        </td>
        <td style="text-align: center;">
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); filterByKecamatanFromTable('${escapeHtml(kec.nama)}')">
            Lihat Desa →
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function filterByKecamatanFromTable(kecNama) {
  state.filters.kecamatan = kecNama;
  const sel = document.getElementById("filterKecamatan");
  if (sel) sel.value = kecNama;
  switchView("rekap-desa");
  applyFilters();
}

// REKAP PEMBAYARAN TABLE
function renderPembayaranTable(data, stats) {
  const el = id => document.getElementById(id);
  if (el("payRealisasiNominal")) el("payRealisasiNominal").textContent = formatRupiah(stats.totalNominal);
  if (el("payRealisasiCount")) el("payRealisasiCount").textContent = `${stats.sudahBayar} dari ${stats.total} Desa telah membayar`;
  if (el("payTunggakanNominal")) el("payTunggakanNominal").textContent = formatRupiah(stats.belumBayar * 15000000);
  if (el("payTunggakanCount")) el("payTunggakanCount").textContent = `${stats.belumBayar} Desa belum membayar`;

  const tbody = document.getElementById("pembayaranTableBody");
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 30px;">Belum ada data pembayaran untuk tahun ${state.activeYear}.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map((item, idx) => {
    const statusBayar = calcStatusBayar(item);
    return `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-weight: 700;">${escapeHtml(item.desa)}</td>
        <td>${escapeHtml(item.kecamatan)}</td>
        <td>${renderBayarBadge(statusBayar)}</td>
        <td>${formatDate(item.tanggalBayar)}</td>
        <td style="font-weight: 700;">${item.nominal ? formatRupiah(item.nominal) : "-"}</td>
        <td>${escapeHtml(item.catatanBayar || "-")}</td>
        <td style="font-size: 11px; color: var(--text-muted);">${escapeHtml(item.infoTambahanBayar || "-")}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="openEditDesaModal('${item.id}')">Update Bayar</button>
        </td>
      </tr>
    `;
  }).join("");
}

function filterBayarDirect(type) {
  if (type === "ALL") state.filters.statusBayar = "";
  else if (type === "PAID") state.filters.statusBayar = "SUDAH BAYAR";
  else if (type === "UNPAID") state.filters.statusBayar = "BELUM BAYAR";
  
  const sel = document.getElementById("filterBayar");
  if (sel) sel.value = state.filters.statusBayar;
  switchView("rekap-desa");
  applyFilters();
}

// DOKUMEN TABLE
function renderDokumenTable(data) {
  const tbody = document.getElementById("dokumenTableBody");
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 30px;">Belum ada dokumen untuk tahun ${state.activeYear}.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map((item, idx) => {
    const docStatus = calcStatusDokumen(item);
    return `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-weight: 700;">${escapeHtml(item.desa)}</td>
        <td>${escapeHtml(item.kecamatan)}</td>
        <td>${renderDocBadge(item.pks)}</td>
        <td>${renderDocBadge(item.kwitansiLbh)}</td>
        <td>${renderDocBadge(item.kwitansiLpj)}</td>
        <td>
          <span class="badge ${docStatus === "LENGKAP" ? "badge-done" : "badge-belum"}">
            ${docStatus === "LENGKAP" ? "🟢 LENGKAP" : "🔴 BELUM LENGKAP"}
          </span>
        </td>
        <td style="font-size: 12px; color: var(--text-muted);">${escapeHtml(item.keterangan || "-")}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="openDetailModal('${item.id}')">Detail</button>
        </td>
      </tr>
    `;
  }).join("");
}

// TTD TABLE
function renderTtdTable(data) {
  const tbody = document.getElementById("ttdTableBody");
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 30px;">Belum ada data pengesahan untuk tahun ${state.activeYear}.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map((item, idx) => {
    const ttdStatus = calcStatusTTD(item);
    return `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-weight: 700;">${escapeHtml(item.desa)}</td>
        <td>${escapeHtml(item.kades || "-")}</td>
        <td>${escapeHtml(item.kecamatan)}</td>
        <td>${renderTtdBadge(item.pksDesaTtd)}</td>
        <td>${renderTtdBadge(item.kwitansiLbhDesaTtd)}</td>
        <td>${renderTtdBadge(item.kwitansiLpjDesaTtd)}</td>
        <td>
          <span class="badge ${ttdStatus === "LENGKAP" ? "badge-done" : "badge-belum-ttd"}">
            ${ttdStatus === "LENGKAP" ? "🟢 LENGKAP" : "🟡 BELUM LENGKAP"}
          </span>
        </td>
        <td style="font-size: 12px; color: var(--status-red);">${escapeHtml(item.keterangan || "-")}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="openEditDesaModal('${item.id}')">Update TTD</button>
        </td>
      </tr>
    `;
  }).join("");
}

// PERLU TINDAK LANJUT VIEW
function renderTindakLanjut() {
  const data = getYearData(state.activeYear);
  const container = document.getElementById("tindakLanjutContainer");
  if (!container) return;
  const pSel = document.getElementById("filterPrioritySelect");
  const priorityFilter = pSel ? pSel.value : "ALL";

  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 40px; text-align: center;">
        <div style="font-size: 36px; margin-bottom: 8px;">ℹ️</div>
        <h4 style="font-size: 16px; font-weight: 800; color: var(--navy-slate);">Tahun ${state.activeYear} Belum Memiliki Data Desa</h4>
        <p style="font-size: 12.5px; color: var(--text-muted); margin: 6px 0 16px;">
          Silakan salin master desa dari tahun 2025 untuk mulai mengawasi kelengkapan dokumen tahun ${state.activeYear}.
        </p>
        <button class="btn btn-primary" onclick="copyMasterDesaFrom2025('${state.activeYear}')">📥 Salin 50 Desa dari 2025</button>
      </div>
    `;
    return;
  }

  const issuesList = [];

  data.forEach(item => {
    const bayar = calcStatusBayar(item);
    const prioritas = calcPrioritas(item);

    if (prioritas !== "SELESAI") {
      if (priorityFilter !== "ALL" && prioritas !== priorityFilter) return;

      const issues = [];
      if (bayar === "BELUM BAYAR") issues.push("🔴 Belum melakukan pembayaran iuran / tagihan");
      if ((item.pks || "").toLowerCase() !== "done") issues.push("🔴 Dokumen PKS belum lengkap / ada");
      if ((item.kwitansiLbh || "").toLowerCase() !== "done") issues.push("🔴 Kwitansi LBH belum ada");
      if ((item.kwitansiLpj || "").toLowerCase() !== "done") issues.push("🔴 Kwitansi LPJ belum ada");
      if ((item.pksDesaTtd || "").toLowerCase() !== "done") issues.push("🟡 PKS Desa TTD belum ditandatangani Kades");
      if ((item.kwitansiLbhDesaTtd || "").toLowerCase() !== "done") issues.push("🟡 Kwitansi LBH Desa TTD belum ditandatangani Kades");
      if ((item.kwitansiLpjDesaTtd || "").toLowerCase() !== "done") issues.push("🟡 Kwitansi LPJ Desa TTD belum ditandatangani Kades");

      issuesList.push({
        item,
        bayar,
        prioritas,
        issues
      });
    }
  });

  if (issuesList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 40px; text-align: center;">
        <div style="font-size: 38px; margin-bottom: 8px;">🎉</div>
        <h4 style="font-size: 16px; font-weight: 700; color: var(--navy-slate);">Luar Biasa! Tidak Ada Desa yang Perlu Ditindaklanjuti</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Seluruh desa telah memenuhi kewajiban pembayaran dan kelengkapan administrasi LPJ.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = issuesList.map(entry => {
    const item = entry.item;
    return `
      <div class="desa-record-card" style="border-left: 4px solid ${entry.prioritas === "TINGGI" ? "#dc2626" : (entry.prioritas === "SEDANG" ? "#f59e0b" : "#10b981")};">
        <div class="dcard-header">
          <div>
            <h4 style="font-size: 17px; font-weight: 800;">${escapeHtml(item.desa)}</h4>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
              Kecamatan ${escapeHtml(item.kecamatan)} • Kades: ${escapeHtml(item.kades || "-")}
            </p>
          </div>
          <span class="priority-pill priority-${entry.prioritas.toLowerCase()}">Prioritas ${entry.prioritas}</span>
        </div>

        <div style="font-size: 12.5px;">
          <div style="font-weight: 700; color: var(--navy-slate); margin-bottom: 6px;">Status Pembayaran:</div>
          <div>${renderBayarBadge(entry.bayar)} ${item.nominal ? `(Nominal: ${formatRupiah(item.nominal)})` : ""}</div>
        </div>

        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px;">
          <div style="font-size: 11.5px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;">
            Rincian Masalah / Hambatan:
          </div>
          <ul style="list-style: none; padding-left: 0; font-size: 12.5px; line-height: 1.6;">
            ${entry.issues.map(iss => `<li>${iss}</li>`).join("")}
          </ul>
        </div>

        ${item.keterangan ? `
          <div style="font-size: 12.5px; background: #fffbeb; border: 1px solid #fef08a; padding: 8px 12px; border-radius: var(--radius-sm); color: #92400e;">
            <b>Keterangan:</b> "${escapeHtml(item.keterangan)}"
          </div>
        ` : ""}

        <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px;">
          <button class="btn btn-secondary btn-sm" onclick="openDetailModal('${item.id}')">Lihat Berkas</button>
          <button class="btn btn-primary btn-sm" onclick="openEditDesaModal('${item.id}')">Tindak Lanjuti / Perbarui Data</button>
        </div>
      </div>
    `;
  }).join("");
}

// STATISTIK CHARTS
function renderStatistikCharts(stats) {
  const payContainer = document.getElementById("statPayChartContainer");
  if (payContainer) {
    const paidWidth = stats.pctBayar;
    const unpaidWidth = stats.total > 0 ? 100 - stats.pctBayar : 0;

    payContainer.innerHTML = `
      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; margin-bottom: 6px;">
          <span>Sudah Bayar (${stats.sudahBayar} Desa)</span>
          <span style="color: var(--status-green);">${stats.pctBayar}%</span>
        </div>
        <div class="progress-track" style="height: 16px;">
          <div class="progress-fill fill-green" style="width: ${paidWidth}%;"></div>
        </div>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; margin-bottom: 6px;">
          <span>Belum Bayar (${stats.belumBayar} Desa)</span>
          <span style="color: var(--status-red);">${unpaidWidth}%</span>
        </div>
        <div class="progress-track" style="height: 16px;">
          <div class="progress-fill" style="width: ${unpaidWidth}%; background: var(--status-red);"></div>
        </div>
      </div>
    `;
  }

  const docContainer = document.getElementById("statDocChartContainer");
  if (docContainer) {
    docContainer.innerHTML = `
      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; margin-bottom: 6px;">
          <span>Kelengkapan Dokumen Fisik (PKS & Kwitansi)</span>
          <span style="color: var(--primary-purple);">${stats.pctDoc}%</span>
        </div>
        <div class="progress-track" style="height: 16px;">
          <div class="progress-fill fill-purple" style="width: ${stats.pctDoc}%;"></div>
        </div>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; margin-bottom: 6px;">
          <span>Kelengkapan TTD Kepala Desa</span>
          <span style="color: #0284c7;">${stats.pctTtd}%</span>
        </div>
        <div class="progress-track" style="height: 16px;">
          <div class="progress-fill fill-blue" style="width: ${stats.pctTtd}%;"></div>
        </div>
      </div>
    `;
  }

  const kecContainer = document.getElementById("statKecBarChartContainer");
  if (kecContainer) {
    const kecArray = Object.values(stats.kecMap).sort((a, b) => b.total - a.total);

    if (kecArray.length === 0) {
      kecContainer.innerHTML = "<div style='color: var(--text-muted); font-size: 13px; text-align: center; padding: 20px;'>Belum ada data kecamatan untuk tahun ini.</div>";
    } else {
      kecContainer.innerHTML = kecArray.map(kec => {
        const pct = kec.total > 0 ? Math.round((kec.docLengkap / kec.total) * 100) : 0;
        return `
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; font-size: 12.5px; font-weight: 600; margin-bottom: 4px;">
              <span>Kecamatan ${escapeHtml(kec.nama)} (${kec.total} Desa)</span>
              <span>${kec.docLengkap}/${kec.total} Selesai (${pct}%)</span>
            </div>
            <div class="progress-track" style="height: 10px;">
              <div class="progress-fill fill-green" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      }).join("");
    }
  }
}

// AUDIT LOG TABLE
function renderAuditTable() {
  const tbody = document.getElementById("auditTableBody");
  if (!tbody) return;
  if (!state.auditLogs || state.auditLogs.length === 0) {
    tbody.innerHTML = "<tr><td colspan='6' style='text-align: center; color: var(--text-muted); padding: 30px;'>Belum ada catatan log aktivitas.</td></tr>";
    return;
  }

  tbody.innerHTML = state.auditLogs.map(log => `
    <tr>
      <td><span style="font-family: monospace; font-size: 12px;">${escapeHtml(log.timestamp)}</span></td>
      <td style="font-weight: 700;">${escapeHtml(log.desa)}</td>
      <td><span class="badge" style="background: #f1f5f9;">${escapeHtml(log.field)}</span></td>
      <td style="color: var(--status-red); text-decoration: line-through;">${escapeHtml(log.oldVal)}</td>
      <td style="color: var(--status-green); font-weight: 600;">${escapeHtml(log.newVal)}</td>
      <td style="font-size: 12px; color: var(--text-muted);">${escapeHtml(log.operator)}</td>
    </tr>
  `).join("");
}

function clearAuditLogs() {
  if (confirm("Apakah Anda yakin ingin mengosongkan seluruh riwayat log aktivitas?")) {
    state.auditLogs = [];
    saveAuditLogs();
    renderAuditTable();
    showToast("Riwayat perubahan telah dibersihkan.", "warning");
  }
}

// YEAR MANAGEMENT
function initYearSelector() {
  const select = document.getElementById("yearSelector");
  if (select) {
    select.innerHTML = state.availableYears.map(y => `
      <option value="${y}" ${y === state.activeYear ? "selected" : ""}>${y}</option>
    `).join("");
  }

  const stList = document.getElementById("settingsYearsList");
  if (stList) stList.textContent = state.availableYears.join(", ");
}

function changeYear(newYear) {
  state.activeYear = newYear;
  state.pagination.page = 1;
  resetFiltersSilently();
  renderAllViews();
  showToast(`Beralih ke database tahun anggaran ${newYear}`, "success");
}

function openAddYearModal() {
  document.getElementById("modalAddYear").classList.add("active");
}

function closeAddYearModal() {
  document.getElementById("modalAddYear").classList.remove("active");
}

function submitNewYear() {
  const inputYear = document.getElementById("inputNewYear").value.trim();
  if (!inputYear) {
    alert("Silakan masukkan tahun anggaran yang valid.");
    return;
  }

  if (state.availableYears.includes(inputYear)) {
    alert(`Tahun ${inputYear} sudah terdaftar.`);
    return;
  }

  const option = document.querySelector("input[name='newYearOption']:checked").value;
  let newDataset = [];

  if (option === "COPY") {
    const currentData = getYearData("2025");
    newDataset = currentData.map((d, i) => ({
      ...d,
      id: `desa-${inputYear}-${String(i+1).padStart(2, "0")}`,
      no: i + 1,
      tanggalBayar: "",
      nominal: 0,
      catatanBayar: "",
      infoTambahanBayar: "",
      pks: "belum",
      kwitansiLbh: "belum",
      kwitansiLpj: "belum",
      pksDesaTtd: "belum ttd",
      kwitansiLbhDesaTtd: "belum ttd",
      kwitansiLpjDesaTtd: "belum ttd",
      keterangan: "Data disalin dari tahun 2025",
      needsVerification: false
    }));
  }

  state.availableYears.push(inputYear);
  state.availableYears.sort();
  localStorage.setItem("rekap_desa_years", JSON.stringify(state.availableYears));
  saveYearData(inputYear, newDataset);

  addAuditLog(`Tahun Anggaran ${inputYear}`, "Pembuatan Tahun Baru", "-", `Inisialisasi ${newDataset.length} desa`);

  closeAddYearModal();
  initYearSelector();
  changeYear(inputYear);
}

// MODAL DETAIL DESA
function openDetailModal(id) {
  const data = getYearData(state.activeYear);
  const item = data.find(x => x.id === id);
  if (!item) return;

  state.selectedDesaId = id;

  document.getElementById("detailModalDesaName").textContent = item.desa;
  document.getElementById("detailModalSub").textContent = `Kecamatan ${item.kecamatan} • Kades: ${item.kades || "-"}`;

  document.getElementById("dIdentitasDesa").textContent = item.desa;
  document.getElementById("dIdentitasKecamatan").textContent = item.kecamatan;
  document.getElementById("dIdentitasKades").textContent = item.kades || "-";
  document.getElementById("dIdentitasJabatan").textContent = item.jabatan || "Definitif";

  const statusBayar = calcStatusBayar(item);
  document.getElementById("dPayStatusBadge").innerHTML = renderBayarBadge(statusBayar);
  document.getElementById("dPayNominal").textContent = item.nominal ? formatRupiah(item.nominal) : "Rp 0";
  document.getElementById("dPayTanggal").textContent = formatDate(item.tanggalBayar);
  document.getElementById("dPayCatatan").textContent = item.catatanBayar || "-";
  document.getElementById("dPayRef").textContent = item.infoTambahanBayar || "-";

  document.getElementById("dDocPksBadge").innerHTML = renderDocBadge(item.pks);
  document.getElementById("dDocLbhBadge").innerHTML = renderDocBadge(item.kwitansiLbh);
  document.getElementById("dDocLpjBadge").innerHTML = renderDocBadge(item.kwitansiLpj);
  document.getElementById("dDocTtdPksBadge").innerHTML = renderTtdBadge(item.pksDesaTtd);
  document.getElementById("dDocTtdLbhBadge").innerHTML = renderTtdBadge(item.kwitansiLbhDesaTtd);
  document.getElementById("dDocTtdLpjBadge").innerHTML = renderTtdBadge(item.kwitansiLpjDesaTtd);

  document.getElementById("dCatatanKhusus").textContent = item.keterangan || "Tidak ada catatan khusus untuk desa ini.";

  const desaLogs = state.auditLogs.filter(l => (l.desa || "").toLowerCase() === (item.desa || "").toLowerCase());
  const logsContainer = document.getElementById("dDesaAuditLogs");
  if (desaLogs.length > 0) {
    logsContainer.innerHTML = desaLogs.map(l => `
      <div style="padding: 6px 0; border-bottom: 1px dashed var(--border-color);">
        <b>${l.timestamp}</b>: ${l.field} (${l.oldVal} → ${l.newVal})
      </div>
    `).join("");
  } else {
    logsContainer.innerHTML = "Belum ada riwayat perubahan yang tercatat.";
  }

  document.getElementById("btnEditFromDetail").onclick = () => {
    closeDetailModal();
    openEditDesaModal(id);
  };

  switchDetailTab("tab-identitas");
  document.getElementById("modalDetailDesa").classList.add("active");
}

function closeDetailModal() {
  document.getElementById("modalDetailDesa").classList.remove("active");
}

function switchDetailTab(tabId) {
  document.querySelectorAll(".dtab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".dtab-content").forEach(c => c.classList.remove("active"));

  if (window.event && window.event.target && window.event.target.classList) {
    window.event.target.classList.add("active");
  }
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
}

// MODAL FORM CRUD
function openAddDesaModal() {
  document.getElementById("formModalTitle").textContent = "Tambah Data Desa Baru";
  document.getElementById("desaCrudForm").reset();
  document.getElementById("formDesaId").value = "";
  document.getElementById("duplicateWarningBox").style.display = "none";
  document.getElementById("modalFormDesa").classList.add("active");
}

function openEditDesaModal(id) {
  const data = getYearData(state.activeYear);
  const item = data.find(x => x.id === id);
  if (!item) return;

  document.getElementById("formModalTitle").textContent = `Edit Data Desa: ${item.desa}`;
  document.getElementById("formDesaId").value = item.id;
  document.getElementById("duplicateWarningBox").style.display = "none";

  document.getElementById("fDesa").value = item.desa || "";
  document.getElementById("fKecamatan").value = item.kecamatan || "";
  document.getElementById("fKades").value = item.kades || "";
  document.getElementById("fJabatan").value = item.jabatan || "Definitif";

  const statusBayar = calcStatusBayar(item);
  document.getElementById("fStatusBayar").value = statusBayar;
  document.getElementById("fTanggalBayar").value = item.tanggalBayar || "";
  document.getElementById("fNominal").value = item.nominal ? formatRupiahNumberOnly(item.nominal) : "";
  document.getElementById("fCatatanBayar").value = item.catatanBayar || "";
  document.getElementById("fInfoBayar").value = item.infoTambahanBayar || "";

  document.getElementById("fPks").value = (item.pks || "done").toLowerCase();
  document.getElementById("fKwitansiLbh").value = (item.kwitansiLbh || "done").toLowerCase();
  document.getElementById("fKwitansiLpj").value = (item.kwitansiLpj || "done").toLowerCase();

  document.getElementById("fPksTtd").value = (item.pksDesaTtd || "done").toLowerCase();
  document.getElementById("fKwitansiLbhTtd").value = (item.kwitansiLbhDesaTtd || "done").toLowerCase();
  document.getElementById("fKwitansiLpjTtd").value = (item.kwitansiLpjDesaTtd || "done").toLowerCase();

  document.getElementById("fKeterangan").value = item.keterangan || "";
  document.getElementById("fNeedsVerification").checked = !!item.needsVerification;

  document.getElementById("modalFormDesa").classList.add("active");
}

function closeFormModal() {
  document.getElementById("modalFormDesa").classList.remove("active");
}

function checkDuplicate() {
  const desaVal = document.getElementById("fDesa").value.trim().toLowerCase();
  const kecVal = document.getElementById("fKecamatan").value.trim().toLowerCase();
  const editId = document.getElementById("formDesaId").value;

  if (!desaVal || !kecVal) return;

  const data = getYearData(state.activeYear);
  const dup = data.find(x => x.id !== editId && x.desa.toLowerCase() === desaVal && x.kecamatan.toLowerCase() === kecVal);

  const warnBox = document.getElementById("duplicateWarningBox");
  if (dup) {
    warnBox.style.display = "block";
    warnBox.setAttribute("data-dup-id", dup.id);
  } else {
    warnBox.style.display = "none";
  }
}

function viewDuplicateRecord() {
  const dupId = document.getElementById("duplicateWarningBox").getAttribute("data-dup-id");
  if (dupId) {
    closeFormModal();
    openDetailModal(dupId);
  }
}

function updateDuplicateRecord() {
  const dupId = document.getElementById("duplicateWarningBox").getAttribute("data-dup-id");
  if (dupId) {
    openEditDesaModal(dupId);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById("formDesaId").value;
  const desaName = document.getElementById("fDesa").value.trim();
  const kecName = document.getElementById("fKecamatan").value.trim();

  if (!desaName || !kecName) {
    alert("Nama Desa dan Kecamatan wajib diisi!");
    return;
  }

  const data = getYearData(state.activeYear);
  const rawNominal = document.getElementById("fNominal").value.replace(/[^0-9]/g, "");
  const nominal = rawNominal ? Number(rawNominal) : 0;

  const newRecord = {
    id: id || `desa-${Date.now()}`,
    no: id ? (data.find(x => x.id === id)?.no || data.length + 1) : data.length + 1,
    desa: desaName,
    kades: document.getElementById("fKades").value.trim(),
    jabatan: document.getElementById("fJabatan").value,
    kecamatan: kecName,
    statusBayar: document.getElementById("fStatusBayar").value,
    tanggalBayar: document.getElementById("fTanggalBayar").value,
    nominal: nominal,
    catatanBayar: document.getElementById("fCatatanBayar").value.trim(),
    infoTambahanBayar: document.getElementById("fInfoBayar").value.trim(),
    pks: document.getElementById("fPks").value,
    kwitansiLbh: document.getElementById("fKwitansiLbh").value,
    kwitansiLpj: document.getElementById("fKwitansiLpj").value,
    pksDesaTtd: document.getElementById("fPksTtd").value,
    kwitansiLbhDesaTtd: document.getElementById("fKwitansiLbhTtd").value,
    kwitansiLpjDesaTtd: document.getElementById("fKwitansiLpjTtd").value,
    keterangan: document.getElementById("fKeterangan").value.trim(),
    needsVerification: document.getElementById("fNeedsVerification").checked
  };

  if (id) {
    const idx = data.findIndex(x => x.id === id);
    if (idx !== -1) {
      const old = data[idx];
      if (old.desa !== newRecord.desa) addAuditLog(newRecord.desa, "Nama Desa", old.desa, newRecord.desa);
      if (old.nominal !== newRecord.nominal) addAuditLog(newRecord.desa, "Nominal Bayar", formatRupiah(old.nominal), formatRupiah(newRecord.nominal));
      if (old.statusBayar !== newRecord.statusBayar) addAuditLog(newRecord.desa, "Status Bayar", old.statusBayar, newRecord.statusBayar);
      if (old.pksDesaTtd !== newRecord.pksDesaTtd) addAuditLog(newRecord.desa, "PKS Desa TTD", old.pksDesaTtd, newRecord.pksDesaTtd);
      if (old.kwitansiLpjDesaTtd !== newRecord.kwitansiLpjDesaTtd) addAuditLog(newRecord.desa, "Kwitansi LPJ TTD", old.kwitansiLpjDesaTtd, newRecord.kwitansiLpjDesaTtd);

      data[idx] = newRecord;
      showToast(`Data desa ${desaName} berhasil diperbarui.`, "success");
    }
  } else {
    data.push(newRecord);
    addAuditLog(newRecord.desa, "Penambahan Desa", "-", "Desa baru ditambahkan");
    showToast(`Desa baru ${desaName} berhasil ditambahkan.`, "success");
  }

  saveYearData(state.activeYear, data);
  closeFormModal();
  renderAllViews();
}

// DELETE MODAL
function promptDeleteDesa(id) {
  const data = getYearData(state.activeYear);
  const item = data.find(x => x.id === id);
  if (!item) return;

  document.getElementById("delDesaName").textContent = item.desa;
  document.getElementById("delYear").textContent = state.activeYear;

  document.getElementById("btnExecuteDelete").onclick = () => {
    executeDeleteDesa(id);
  };

  document.getElementById("modalConfirmDelete").classList.add("active");
}

function closeDeleteModal() {
  document.getElementById("modalConfirmDelete").classList.remove("active");
}

function executeDeleteDesa(id) {
  let data = getYearData(state.activeYear);
  const item = data.find(x => x.id === id);
  const desaName = item ? item.desa : "Desa";

  data = data.filter(x => x.id !== id);
  data.forEach((d, i) => d.no = i + 1);

  saveYearData(state.activeYear, data);
  addAuditLog(desaName, "Penghapusan Desa", desaName, "Dihapus dari database");

  closeDeleteModal();
  renderAllViews();
  showToast(`Data desa ${desaName} telah dihapus.`, "danger");
}

// FILTERS & SEARCH
function applyFilters() {
  const el = id => document.getElementById(id);
  if (el("filterKecamatan")) state.filters.kecamatan = el("filterKecamatan").value;
  if (el("filterBayar")) state.filters.statusBayar = el("filterBayar").value;
  if (el("filterDokumen")) state.filters.statusDokumen = el("filterDokumen").value;
  if (el("filterTtd")) state.filters.statusTtd = el("filterTtd").value;
  if (el("filterStatusAll")) state.filters.statusKeseluruhan = el("filterStatusAll").value;
  state.pagination.page = 1;

  renderRekapDesa();
}

function resetFilters() {
  resetFiltersSilently();
  renderRekapDesa();
  showToast("Filter telah di-reset ke default.", "success");
}

function resetFiltersSilently() {
  state.filters = {
    kecamatan: "",
    statusBayar: "",
    statusDokumen: "",
    statusTtd: "",
    statusKeseluruhan: ""
  };
  state.searchQuery = "";
  const el = id => document.getElementById(id);
  if (el("filterKecamatan")) el("filterKecamatan").value = "";
  if (el("filterBayar")) el("filterBayar").value = "";
  if (el("filterDokumen")) el("filterDokumen").value = "";
  if (el("filterTtd")) el("filterTtd").value = "";
  if (el("filterStatusAll")) el("filterStatusAll").value = "";
  if (el("globalSearchInput")) el("globalSearchInput").value = "";
}

function handleGlobalSearch(val) {
  state.searchQuery = val.trim();
  state.pagination.page = 1;

  if (state.searchQuery && state.activeView !== "rekap-desa") {
    switchView("rekap-desa");
  }

  renderRekapDesa();
}

function sortTable(column) {
  if (state.sort.column === column) {
    state.sort.asc = !state.sort.asc;
  } else {
    state.sort.column = column;
    state.sort.asc = true;
  }
  renderRekapDesa();
}

function populateKecamatanOptions(data) {
  const setKec = new Set();
  // Include all subdistricts from 2025 as baseline
  const d25 = getYearData("2025");
  d25.forEach(d => { if (d.kecamatan) setKec.add(d.kecamatan); });
  data.forEach(d => { if (d.kecamatan) setKec.add(d.kecamatan); });

  const arr = Array.from(setKec).sort();
  const select = document.getElementById("filterKecamatan");
  if (select) {
    const curVal = select.value;
    select.innerHTML = "<option value=''>Semua Kecamatan</option>" + arr.map(k => `
      <option value="${k}" ${k === curVal ? "selected" : ""}>${k}</option>
    `).join("");
  }

  const dl = document.getElementById("kecamatanList");
  if (dl) {
    dl.innerHTML = arr.map(k => `<option value="${k}">`).join("");
  }
}

// VIEW SWITCHER
function switchView(viewId) {
  state.activeView = viewId;

  document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
  const targetNav = document.querySelector(`.menu-item[onclick*="${viewId}"]`);
  if (targetNav) targetNav.classList.add("active");

  document.querySelectorAll(".app-view").forEach(v => v.classList.remove("active"));
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add("active");

  const titles = {
    "dashboard": ["Dashboard Monitoring LPJ", `Gambaran Menyeluruh Status Administrasi & Pembayaran Desa (${state.activeYear})`],
    "rekap-desa": ["Rekapitulasi Desa", `Tabel Utama Monitoring Kelengkapan & Pembayaran Desa (${state.activeYear})`],
    "kecamatan": ["Rekap Kecamatan", `Agregasi Kinerja Per Wilayah Kecamatan (${state.activeYear})`],
    "pembayaran": ["Pengawasan Pembayaran", `Monitoring Keuangan, Realisasi & Tunggakan Iuran (${state.activeYear})`],
    "dokumen": ["Kelengkapan Dokumen LPJ", `Pemeriksaan Berkas Fisik PKS & Kwitansi LPJ (${state.activeYear})`],
    "ttd": ["Status Tanda Tangan Desa", `Monitoring Tanda Tangan Pengesahan oleh Kepala Desa (${state.activeYear})`],
    "tindak-lanjut": ["Perlu Tindak Lanjut", `Daftar Desa yang Masih Memerlukan Atensi & Aksi Cepat (${state.activeYear})`],
    "statistik": ["Analisis & Grafik Kinerja", `Visualisasi Tren Pembayaran dan Penyelesaian Administrasi (${state.activeYear})`],
    "import": ["Import Data Massal", `Unggah Berkas Excel (.xlsx) atau File CSV (${state.activeYear})`],
    "export": ["Ekspor & Laporan", `Unduh Berkas Excel, CSV, atau Cetak Resmi PDF (${state.activeYear})`],
    "audit": ["Log Riwayat Perubahan", "Kronologi Perubahan Status & Data Desa oleh Operator"],
    "pengaturan": ["Pengaturan Sistem & Cadangan", "Manajemen Tahun Anggaran dan Backup Database"]
  };

  if (titles[viewId]) {
    const titleEl = document.getElementById("headerPageTitle");
    const subEl = document.getElementById("headerPageSubtitle");
    if (titleEl) titleEl.textContent = titles[viewId][0];
    if (subEl) subEl.textContent = titles[viewId][1];
  }

  if (window.innerWidth <= 900) {
    const sb = document.getElementById("appSidebar");
    const bd = document.getElementById("sidebarBackdrop");
    if (sb) sb.classList.remove("open");
    if (bd) bd.classList.remove("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleSidebar() {
  const sb = document.getElementById("appSidebar");
  const bd = document.getElementById("sidebarBackdrop");
  if (!sb) return;
  const isOpen = sb.classList.contains("open");

  if (isOpen) {
    sb.classList.remove("open");
    if (bd) bd.classList.remove("active");
  } else {
    sb.classList.add("open");
    if (bd) bd.classList.add("active");
  }
}

// IMPORT MODULE
function handleFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  const ext = file.name.split(".").pop().toLowerCase();

  const fBadge = document.getElementById("importFileBadge");
  if (fBadge) fBadge.textContent = file.name;

  if (ext === "csv") {
    reader.onload = (evt) => {
      parseCSVAndPreview(evt.target.result);
    };
    reader.readAsText(file);
  } else if (ext === "xlsx" || ext === "xls") {
    reader.onload = (evt) => {
      if (typeof XLSX !== "undefined") {
        try {
          const data = new Uint8Array(evt.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          parseMatrixAndPreview(json);
        } catch(err) {
          alert("Gagal membaca berkas Excel: " + err.message);
        }
      } else {
        alert("Library Excel belum siap. Silakan gunakan format CSV atau periksa koneksi.");
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    alert("Format berkas tidak didukung. Harap pilih file .xlsx atau .csv");
  }
}

function parseCSVAndPreview(csvText) {
  const lines = csvText.split(/\r\n|\n/).map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length < 2) {
    alert("Berkas CSV kosong atau tidak memiliki baris data!");
    return;
  }

  const matrix = lines.map(line => {
    const res = [];
    let curr = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') inQuotes = !inQuotes;
      else if (c === "," && !inQuotes) {
        res.push(curr.trim());
        curr = "";
      } else {
        curr += c;
      }
    }
    res.push(curr.trim());
    return res;
  });

  parseMatrixAndPreview(matrix);
}

function parseMatrixAndPreview(matrix) {
  if (!matrix || matrix.length < 2) return;

  const headers = matrix[0].map(h => String(h || "").trim());
  const rows = matrix.slice(1);

  const colMap = {
    desa: findCol(headers, ["desa", "nama desa"]),
    kades: findCol(headers, ["kades", "nama kades", "kepala desa"]),
    jabatan: findCol(headers, ["jabatan", "status jabatan"]),
    kecamatan: findCol(headers, ["kecamatan", "camat"]),
    statusBayar: findCol(headers, ["status bayar", "bayar"]),
    tanggalBayar: findCol(headers, ["tanggal bayar", "tgl bayar", "tanggal"]),
    nominal: findCol(headers, ["nominal", "catatan pembayaran", "biaya"]),
    pks: findCol(headers, ["pks"]),
    kwitansiLbh: findCol(headers, ["kwitansi lbh", "lbh"]),
    kwitansiLpj: findCol(headers, ["kwitansi lpj", "lpj"]),
    pksDesaTtd: findCol(headers, ["pks desa ttd", "pks ttd"]),
    kwitansiLbhDesaTtd: findCol(headers, ["kwitansi lbh desa ttd", "lbh ttd"]),
    kwitansiLpjDesaTtd: findCol(headers, ["kwitansi lpj desa ttd", "lpj ttd"]),
    keterangan: findCol(headers, ["keterangan", "catatan"])
  };

  const parsedRecords = [];
  rows.forEach((r, idx) => {
    const desa = (colMap.desa !== -1 ? r[colMap.desa] : r[1]) || "";
    if (!desa) return;

    parsedRecords.push({
      id: `desa-imp-${Date.now()}-${idx}`,
      no: idx + 1,
      desa: String(desa).trim(),
      kades: colMap.kades !== -1 ? String(r[colMap.kades] || "").trim() : "",
      jabatan: colMap.jabatan !== -1 ? String(r[colMap.jabatan] || "Definitif").trim() : "Definitif",
      kecamatan: colMap.kecamatan !== -1 ? String(r[colMap.kecamatan] || "Mamuju").trim() : "Mamuju",
      tanggalBayar: colMap.tanggalBayar !== -1 ? String(r[colMap.tanggalBayar] || "").trim() : "",
      nominal: colMap.nominal !== -1 ? parseNominal(r[colMap.nominal]) : 0,
      catatanBayar: colMap.nominal !== -1 ? String(r[colMap.nominal] || "") : "",
      pks: colMap.pks !== -1 ? normalizeStatus(r[colMap.pks]) : "belum",
      kwitansiLbh: colMap.kwitansiLbh !== -1 ? normalizeStatus(r[colMap.kwitansiLbh]) : "belum",
      kwitansiLpj: colMap.kwitansiLpj !== -1 ? normalizeStatus(r[colMap.kwitansiLpj]) : "belum",
      pksDesaTtd: colMap.pksDesaTtd !== -1 ? normalizeStatus(r[colMap.pksDesaTtd]) : "belum ttd",
      kwitansiLbhDesaTtd: colMap.kwitansiLbhDesaTtd !== -1 ? normalizeStatus(r[colMap.kwitansiLbhDesaTtd]) : "belum ttd",
      kwitansiLpjDesaTtd: colMap.kwitansiLpjDesaTtd !== -1 ? normalizeStatus(r[colMap.kwitansiLpjDesaTtd]) : "belum ttd",
      keterangan: colMap.keterangan !== -1 ? String(r[colMap.keterangan] || "") : "",
      needsVerification: false
    });
  });

  state.importParsedData = parsedRecords;

  const prevArea = document.getElementById("importPreviewArea");
  if (prevArea) prevArea.style.display = "block";
  const pCount = document.getElementById("importPreviewCount");
  if (pCount) pCount.textContent = parsedRecords.length;

  const pTable = document.getElementById("importPreviewTable");
  if (pTable) {
    pTable.innerHTML = `
      <thead>
        <tr>
          <th>No</th>
          <th>Desa</th>
          <th>Kecamatan</th>
          <th>Kades</th>
          <th>Nominal</th>
          <th>Status PKS</th>
          <th>Status LPJ</th>
        </tr>
      </thead>
      <tbody>
        ${parsedRecords.slice(0, 10).map((r, i) => `
          <tr>
            <td>${i+1}</td>
            <td><b>${escapeHtml(r.desa)}</b></td>
            <td>${escapeHtml(r.kecamatan)}</td>
            <td>${escapeHtml(r.kades || "-")}</td>
            <td>${formatRupiah(r.nominal)}</td>
            <td>${r.pks}</td>
            <td>${r.kwitansiLpj}</td>
          </tr>
        `).join("")}
      </tbody>
    `;

    if (parsedRecords.length > 10) {
      pTable.innerHTML += `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">... dan ${parsedRecords.length - 10} baris lainnya ...</td></tr>`;
    }
  }
}

function findCol(headers, possibleNames) {
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i].toLowerCase();
    for (const name of possibleNames) {
      if (h.includes(name)) return i;
    }
  }
  return -1;
}

function normalizeStatus(str) {
  const s = String(str || "").toLowerCase().trim();
  if (s === "done" || s === "lengkap" || s === "sudah") return "done";
  if (s.includes("belum ttd")) return "belum ttd";
  if (s.includes("belum")) return "belum";
  return "belum";
}

function parseNominal(val) {
  if (typeof val === "number") return val;
  const clean = String(val || "").replace(/[^0-9]/g, "");
  return clean ? Number(clean) : 0;
}

function cancelImport() {
  state.importParsedData = null;
  const prevArea = document.getElementById("importPreviewArea");
  if (prevArea) prevArea.style.display = "none";
  const fInput = document.getElementById("importFileInput");
  if (fInput) fInput.value = "";
}

function executeImport() {
  if (!state.importParsedData || state.importParsedData.length === 0) return;

  const mode = document.querySelector("input[name='importMode']:checked").value;
  let current = getYearData(state.activeYear);

  if (mode === "APPEND") {
    current = current.concat(state.importParsedData);
  } else {
    state.importParsedData.forEach(newItem => {
      const matchIdx = current.findIndex(x => x.desa.toLowerCase() === newItem.desa.toLowerCase() && x.kecamatan.toLowerCase() === newItem.kecamatan.toLowerCase());
      if (matchIdx !== -1) {
        current[matchIdx] = { ...current[matchIdx], ...newItem, id: current[matchIdx].id };
      } else {
        current.push(newItem);
      }
    });
  }

  current.forEach((d, i) => d.no = i + 1);
  saveYearData(state.activeYear, current);
  addAuditLog(`Import ${state.importParsedData.length} Desa`, "Import Data File", "-", `Mode: ${mode}`);

  showToast(`Berhasil mengimpor ${state.importParsedData.length} data desa ke tahun ${state.activeYear}!`, "success");
  cancelImport();
  renderAllViews();
  switchView("rekap-desa");
}

// EXPORT MODULE (EXCEL, CSV, PRINT)
function exportDataExcel() {
  const data = getFilteredData();
  if (data.length === 0) {
    alert("Tidak ada data desa yang cocok dengan filter untuk diekspor!");
    return;
  }

  const exportRows = data.map((item, idx) => ({
    "No": idx + 1,
    "Nama Desa": item.desa,
    "Nama Kepala Desa": item.kades || "-",
    "Status Jabatan": item.jabatan || "Definitif",
    "Kecamatan": item.kecamatan,
    "Status Bayar": calcStatusBayar(item),
    "Tanggal Bayar": item.tanggalBayar || "-",
    "Nominal (Rp)": item.nominal || 0,
    "Catatan Pembayaran": item.catatanBayar || "-",
    "PKS": item.pks,
    "Kwitansi LBH": item.kwitansiLbh,
    "Kwitansi LPJ": item.kwitansiLpj,
    "PKS Desa TTD": item.pksDesaTtd,
    "Kwitansi LBH Desa TTD": item.kwitansiLbhDesaTtd,
    "Kwitansi LPJ Desa TTD": item.kwitansiLpjDesaTtd,
    "Status Keseluruhan": calcStatusKeseluruhan(item),
    "Keterangan": item.keterangan || "-"
  }));

  if (typeof XLSX !== "undefined") {
    const worksheet = XLSX.utils.json_to_sheet(exportRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Rekap Desa ${state.activeYear}`);
    XLSX.writeFile(workbook, `REKAP_DESA_LPJ_${state.activeYear}.xlsx`);
    showToast("Berkas Excel berhasil diunduh.", "success");
  } else {
    exportDataCSV();
  }
}

function exportDataCSV() {
  const data = getFilteredData();
  if (data.length === 0) return;

  const headers = ["No", "Desa", "Nama Kades", "Jabatan", "Kecamatan", "Status Bayar", "Tanggal Bayar", "Nominal", "Catatan Bayar", "PKS", "Kwitansi LBH", "Kwitansi LPJ", "PKS TTD", "LBH TTD", "LPJ TTD", "Status", "Keterangan"];
  
  const rows = data.map((item, idx) => [
    idx + 1,
    '"' + (item.desa || '').replace(/"/g, '""') + '"',
    '"' + (item.kades || '').replace(/"/g, '""') + '"',
    '"' + (item.jabatan || '').replace(/"/g, '""') + '"',
    '"' + (item.kecamatan || '').replace(/"/g, '""') + '"',
    '"' + calcStatusBayar(item) + '"',
    '"' + (item.tanggalBayar || '') + '"',
    item.nominal || 0,
    '"' + (item.catatanBayar || '').replace(/"/g, '""') + '"',
    '"' + (item.pks || '') + '"',
    '"' + (item.kwitansiLbh || '') + '"',
    '"' + (item.kwitansiLpj || '') + '"',
    '"' + (item.pksDesaTtd || '') + '"',
    '"' + (item.kwitansiLbhDesaTtd || '') + '"',
    '"' + (item.kwitansiLpjDesaTtd || '') + '"',
    '"' + calcStatusKeseluruhan(item) + '"',
    '"' + (item.keterangan || '').replace(/"/g, '""') + '"'
  ]);

  const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `REKAP_DESA_LPJ_${state.activeYear}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Berkas CSV berhasil diunduh.", "success");
}

function printOfficialRecap() {
  initPrintTimestamp();
  window.print();
}

function initPrintTimestamp() {
  const now = new Date();
  const options = { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" };
  const pt = document.getElementById("printTimestamp");
  if (pt) pt.textContent = now.toLocaleDateString("id-ID", options) + " WITA";
}

// BACKUP & RESTORE JSON
function backupDatabaseJSON() {
  const backupObj = {
    backupDate: new Date().toISOString(),
    availableYears: state.availableYears,
    auditLogs: state.auditLogs,
    datasets: {}
  };

  state.availableYears.forEach(y => {
    backupObj.datasets[y] = getYearData(y);
  });

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `BACKUP_REKAP_DESA_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Database berhasil dibackup ke JSON.", "success");
}

function handleRestoreJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const backupObj = JSON.parse(evt.target.result);
      if (backupObj.availableYears && backupObj.datasets) {
        state.availableYears = backupObj.availableYears;
        localStorage.setItem("rekap_desa_years", JSON.stringify(state.availableYears));

        for (const y in backupObj.datasets) {
          saveYearData(y, backupObj.datasets[y]);
        }

        if (backupObj.auditLogs) {
          state.auditLogs = backupObj.auditLogs;
          saveAuditLogs();
        }

        initYearSelector();
        renderAllViews();
        showToast("Database berhasil dipulihkan dari berkas cadangan!", "success");
      } else {
        alert("Format berkas JSON tidak sesuai!");
      }
    } catch(err) {
      alert("Gagal membaca berkas cadangan: " + err.message);
    }
  };
  reader.readAsText(file);
}

function confirmResetSampleData() {
  if (confirm("Perhatian: Tindakan ini akan mengembalikan dataset ke data bawaan awal (50 desa pada tahun 2025 dan mengosongkan tahun lainnya). Lanjutkan?")) {
    saveYearData("2025", DEFAULT_DATA_2025);
    ["2026", "2027", "2028", "2029", "2030", "2031"].forEach(y => saveYearData(y, []));
    state.activeYear = "2025";
    state.availableYears = ["2025", "2026", "2027", "2028", "2029", "2030", "2031"];
    localStorage.setItem("rekap_desa_years", JSON.stringify(state.availableYears));
    renderAllViews();
    showToast("Dataset telah direset ke data sampel 2025.", "warning");
  }
}

// HELPERS & FORMATTERS
function formatRupiah(amount) {
  return "Rp " + Number(amount || 0).toLocaleString("id-ID");
}

function formatRupiahNumberOnly(amount) {
  return Number(amount || 0).toLocaleString("id-ID");
}

function formatRupiahInput(input) {
  let val = input.value.replace(/[^0-9]/g, "");
  if (val) {
    input.value = Number(val).toLocaleString("id-ID");
  } else {
    input.value = "";
  }
}

function formatDate(dateStr) {
  if (!dateStr || dateStr.trim() === "") return "-";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  } catch(e) {
    return dateStr;
  }
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${type === "success" ? "✅" : (type === "danger" ? "❌" : "ℹ️")}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
