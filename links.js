/* ==========================================================
   KATALOG LINK  —  EDIT FILE INI SAJA UNTUK MENGGANTI LINK
   Setelah web online (GitHub Pages / Netlify / Vercel):
   buka repository -> klik file links.js -> ikon pensil (Edit)
   -> ganti isi "url" -> Commit. Selesai, web otomatis update.
   ========================================================== */
window.SITE_CONFIG = {
  judul: "Verifikasi Akses",
  subjudul: "Selesaikan semua langkah di bawah untuk membuka link tujuan.",

  // Lama (detik) hitung mundur verifikasi setelah tombol diklik
  detikVerifikasi: 5,

  // Buka link tujuan di tab yang sama? (true = tab sama, false = tab baru)
  tujuanTabSama: false,

  // 7 langkah verifikasi (urutan tampil sesuai urutan di sini)
  // ganti "url" dan boleh ganti "label"
  langkah: [
    { id: "lewati1", label: "LEWATI LINK 1", url: "https://sfl.gl/VJ47D /link-1", ikon: "link" },
    { id: "lewati2", label: "LEWATI LINK 2", url: "https://sfl.gl/TdV5RAyD /link-2", ikon: "link" },
    { id: "lewati3", label: "LEWATI LINK 3", url: "https://sfl.gl/gM4O3J /link-3", ikon: "link" },
    { id: "lewati4", label: "LEWATI LINK 4", url: "https://sfl.gl/UlnsAE /link-4", ikon: "link" },
    { id: "lewati5", label: "LEWATI LINK 5", url: "https://sfl.gl/rXRPXjd /link-5", ikon: "link" },
    { id: "wa",      label: "SALURAN WHATSAPP", url: "https://whatsapp.com/channel/0029VbDeqcw4o7qMIU4J6L3h /GANTI_KODE_SALURAN", ikon: "wa" },
    { id: "saluran2",label: "SALURAN 2", url: "https://whatsapp.com/channel/0029Vb96TCfDp2Q5IFA4eD1R /saluran-2", ikon: "chat" }
  ],

  // Link tujuan: terbuka setelah ke-7 langkah di atas terverifikasi
  tujuan: { label: "LINK TUJUAN", url: "https://sfl.gl/Z2Xo /tujuan" }
};
