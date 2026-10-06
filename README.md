# Kamus Indonesia–Lampung & Aksara Lampung

Aplikasi kamus dan penerjemah digital **Bahasa Indonesia ↔ Bahasa Lampung** dengan dukungan **Aksara Lampung**, tampilan modern responsif, dan kemampuan **Progressive Web App (PWA)**.

**Demo:** https://t-faces.github.io/Translate-Lampung/

## ✨ Fitur Utama

- 🇮🇩 **Indonesia → Lampung** — menerjemahkan kata Bahasa Indonesia ke Bahasa Lampung.
- 🌿 **Lampung → Indonesia** — menerjemahkan Bahasa Lampung ke Bahasa Indonesia.
- 𑤀 **Aksara Lampung** — hasil terjemahan ditampilkan dalam bentuk Aksara Lampung, bukan hanya transliterasi Latin.
- 📖 **Makna terjemahan tetap ditampilkan** — Aksara Lampung disertai kata/arti Bahasa Lampung atau Bahasa Indonesia sesuai arah penerjemahan.
- 🔤 **Transliterasi dua arah** — mendukung konversi Aksara Lampung ↔ bentuk Latin.
- ⌨️ **Input Aksara Lampung** — tersedia bidang khusus untuk memasukkan Aksara Lampung dan menerjemahkannya.
- 📚 **Petunjuk Aksara Lampung** — tersedia referensi karakter Aksara Lampung pada antarmuka aplikasi.
- 📱 **Responsive UI** — antarmuka menyesuaikan desktop, tablet, dan smartphone.
- 🌓 **Mode tampilan modern** — mendukung tampilan antarmuka terang/gelap.
- 📲 **PWA / Offline** — aplikasi dapat dipasang sebagai aplikasi web dan menggunakan cache Service Worker untuk penggunaan offline.
- ⚡ **Local Storage** — data kamus dapat disimpan di browser sehingga aplikasi tetap dapat digunakan ketika data sudah tersedia secara lokal.
- 🎨 **Modern landing/hero UI** — halaman utama memiliki header, hero section, kartu penerjemah, dan tampilan hasil yang lebih modern.
- 🧩 **Hasil dinamis** — hasil terjemahan dibuat secara langsung berdasarkan kata/kalimat yang dimasukkan.
- 📐 **Font Aksara khusus** — menggunakan font `aksara-Lampung-Unila-v2.ttf` untuk merender karakter Aksara Lampung.
- 📱 **Optimasi mobile/tablet** — elemen hasil Aksara menerapkan font Aksara secara langsung agar karakter pemetaan internal tidak tampil sebagai huruf Latin pada perangkat mobile/tablet.

## 🖥️ Tampilan UI

UI terbaru mencakup:

1. **Header aplikasi** dengan identitas Kamus Indonesia–Lampung.
2. **Hero section** dengan pengenalan dukungan Bahasa Lampung dan Aksara Lampung.
3. **Kartu penerjemah** dengan pilihan arah bahasa.
4. **Input Bahasa Indonesia/Lampung** serta input Aksara Lampung ketika diperlukan.
5. **Hasil terjemahan** yang mempertahankan:
   - bentuk **Aksara Lampung**,
   - **kata/transliterasi**,
   - **arti atau makna terjemahan**,
   - dan **dialek** apabila tersedia.
6. **Petunjuk Aksara Lampung** untuk membantu pengguna mengenali karakter.
7. Layout responsif untuk **desktop, tablet, dan smartphone**.

## 🔤 Rendering Aksara Lampung

Aplikasi menggunakan font:

`fonts/aksara-Lampung-Unila-v2.ttf`

Untuk memastikan hasil Aksara tidak berubah menjadi karakter Latin pada perangkat tertentu, aplikasi menerapkan font Aksara melalui:

- CSS `@font-face`
- aturan responsive untuk smartphone/tablet
- JavaScript `FontFace API`
- penerapan font langsung pada elemen hasil terjemahan yang dibuat secara dinamis

Dengan demikian, karakter seperti kode pemetaan internal font tidak dimaksudkan untuk dibaca sebagai Latin; browser harus merendernya menggunakan font Aksara Lampung.

## 🌐 Progressive Web App

Aplikasi menggunakan Service Worker untuk:

- cache aset utama;
- memperbarui cache ketika versi aplikasi berubah;
- mendukung penggunaan kembali aset saat offline;
- mempercepat pemuatan aplikasi;
- menyediakan pengalaman aplikasi web pada perangkat mobile.

Jika setelah pembaruan aplikasi perangkat masih menampilkan versi lama, lakukan **refresh**, tutup aplikasi/halaman, atau bersihkan cache situs agar Service Worker terbaru digunakan.

## 🛠️ Teknologi

- HTML5
- CSS3
- JavaScript
- Bootstrap CSS
- JSON sebagai sumber data kamus
- Service Worker / PWA
- Web Storage / Local Storage
- FontFace API
- PHP/API pada struktur proyek lama
- GitHub Pages untuk deployment demo

## 📁 Struktur Utama

```text
Translate-Lampung/
├── index.html
├── README.md
├── manifest.json
├── sw.js
├── css/
│   ├── bootstrap.min.css
│   └── style.css
├── js/
│   ├── aksaraLampung.js
│   ├── main.js
│   ├── offline.js
│   └── ui-modern.js
├── fonts/
│   └── aksara-Lampung-Unila-v2.ttf
└── dispatcher/
    └── indonesia2lampung.json
```

## 🚀 Installation / Development

1. Clone atau download repository.
2. Jalankan melalui web server lokal.
3. Pastikan folder `fonts/`, `js/`, `css/`, dan `dispatcher/` berada pada lokasi yang benar.
4. Untuk pengujian PWA dan Service Worker, gunakan **HTTPS** atau environment localhost yang didukung browser.
5. Buka aplikasi melalui browser.

Contoh penggunaan dengan XAMPP:

1. Salin repository ke folder `htdocs`.
2. Jalankan Apache.
3. Buka aplikasi melalui `http://localhost/Translate-Lampung/`.
4. Untuk pengujian PWA di perangkat nyata, gunakan deployment HTTPS seperti GitHub Pages.

## 📱 Kompatibilitas

UI dirancang untuk:

- Desktop / laptop
- Tablet
- Smartphone

Rendering Aksara Lampung secara khusus dioptimalkan untuk layar dengan lebar hingga **1024px**, termasuk smartphone dan tablet.

## 📌 Status Pengembangan

Branch `modern-ui` berisi pengembangan UI modern dan responsive yang mencakup:

- modern landing page;
- responsive translator;
- Aksara Lampung pada hasil terjemahan;
- makna/arti tetap ditampilkan;
- dukungan mobile/tablet;
- PWA dan cache;
- peningkatan rendering font Aksara.

## 📄 License

GNU GPLv3

---

Copyright Meizano
