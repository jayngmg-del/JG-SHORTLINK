/* ==========================================================
   KATALOG LINK  —  EDIT FILE INI SAJA
   Setiap PAKET punya alamat sendiri, jadi paket lama tidak ikut berubah:
     domainkamu.com/?k=promo-1   -> paket "promo-1"
     domainkamu.com/?k=promo-2   -> paket "promo-2"
     domainkamu.com/             -> paket "bawaan"

   CARA UPDATE BERKALA:
   1. JANGAN ubah paket lama.
   2. Salin satu blok paket paling bawah, tempel di bawahnya,
      ganti nama paket (mis. "promo-3") dan isi link barunya.
   3. Commit. Alamat baru: domainkamu.com/?k=promo-3
   4. (Opsional) ganti "bawaan" agar alamat utama menuju paket terbaru.
   Daftar semua alamat otomatis ada di halaman /katalog.html
   ========================================================== */
window.SITE_CONFIG = {
  // Paket yang dibuka kalau alamat tanpa ?k=...  (ganti ke paket terbaru kalau mau)
  bawaan: "promo-1",

  // Pengaturan umum (bisa ditimpa di dalam paket)
  detikVerifikasi: 5,      // lama hitung mundur verifikasi (detik)
  tujuanTabSama: false,    // true = link tujuan buka di tab yang sama
  judul: "Verifikasi Akses",
  subjudul: "Selesaikan semua langkah di bawah untuk membuka link tujuan.",

  paket: {

    "promo-1": {
      catatan: "Paket pertama",            // hanya untuk catatanmu, tampil di katalog.html
      langkah: [
        { id: "lewati1", label: "LEWATI LINK 1", url: "https://sfl.gl/VJ47D", ikon: "link" },
        { id: "lewati2", label: "LEWATI LINK 2", url: "https://sfl.gl/TdV5RAyD", ikon: "link" },
        { id: "lewati3", label: "LEWATI LINK 3", url: "https://sfl.gl/gM4O3J", ikon: "link" },
        { id: "lewati4", label: "LEWATI LINK 4", url: "https://sfl.gl/UlnsAE", ikon: "link" },
        { id: "lewati5", label: "LEWATI LINK 5", url: "https://sfl.gl/rXRPXjd", ikon: "link" },
        { id: "wa",      label: "SALURAN WHATSAPP", url: "https://whatsapp.com/channel/0029VbDeqcw4o7qMIU4J6L3h", ikon: "wa" },
        { id: "saluran2",label: "SALURAN 2", url: "https://whatsapp.com/channel/0029Vb96TCfDp2Q5IFA4eD1R", ikon: "chat" }
      ],
      tujuan: { label: "LINK TUJUAN", url: "https://sfl.gl/Z2Xo" }
    }

    // CONTOH paket berikutnya: hapus tanda // di depan tiap baris, ganti link, jangan lupa koma setelah "}" paket di atas
    // ,"promo-2": {
    //   catatan: "Paket kedua",
    //   langkah: [
    //     { id: "lewati1", label: "LEWATI LINK 1", url: "https://...", ikon: "link" },
    //     ... (salin 7 baris langkah dari promo-1)
    //   ],
    //   tujuan: { label: "LINK TUJUAN", url: "https://..." }
    // }
  }
};
