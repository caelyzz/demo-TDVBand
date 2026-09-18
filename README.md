# 🎸 Tradevis Band — Official Landing Page

![Astro](https://img.shields.io/badge/Astro-7.2.9-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Enabled-8A2BE2?style=for-the-badge)
![3D Model Viewer](https://img.shields.io/badge/3D_Model_Viewer-GLB-green?style=for-the-badge)

Website resmi dan landing page interaktif untuk **Tradevis Band**, ekstrakurikuler musik di lingkungan sekolah (SMKN 8 Jakarta / SMA Tradevis) yang berdiri sejak tahun 2022. 

Website ini dirancang dengan estetika visual retro-modern yang dinamis, dilengkapi pengalaman audio interaktif, model instrumen 3D, sistem dua bahasa (Bilingual), serta formulir pendaftaran anggota baru.

---

## 🌟 Fitur Utama

- 🔊 **Web Audio Synthesizer & Realtime Visualizer**:
  - Tombol *"Play Our Sound"* di bagian Hero yang memainkan melodi dan progresi akor synth secara prosedural langsung via **Web Audio API** native (tanpa file audio eksternal).
  - Animasi visualizer bar equalizer 52-bar yang merespons frekuensi audio secara langsung.
- 🥁 **Showcase Instrumen 3D Interaktif**:
  - Setiap divisi musik dilengkapi model 3D (`.glb`) realistis yang dirender menggunakan Google `<model-viewer>`.
  - Pengguna dapat memutar, memperbesar/memperkecil, dan melihat detail instrumen secara 360 derajat.
- 🌐 **Dukungan Multi-Bahasa (Bilingual i18n)**:
  - Toggle bahasa instan antara **Bahasa Indonesia (ID)** dan **English (EN)** tanpa reload halaman.
  - Seluruh teks, label navigasi, spesifikasi divisi, detail agenda, dan notifikasi mendukung lokalisasi penuh.
- 🖼️ **Galeri Foto & Lightbox Modal**:
  - Showcase momen latihan studio, soundcheck panggung, hingga battle of bands.
  - Dilengkapi tampilan modal Lightbox interaktif dengan navigasi keyboard (`Esc`, `ArrowLeft`, `ArrowRight`).
- 📅 **Agenda Kegiatan & Pengingat (Toast Notifications)**:
  - Jadwal audisi terbuka, open house, pentas seni semester, dan festival musik mendatang.
  - Fitur *"Ingatkan Saya"* dengan sistem feedback notifikasi Toast yang elegan.
- 📝 **Formulir Pendaftaran Anggota Baru**:
  - Form registrasi calon anggota per divisi (Vokal, Gitar, Bass, Drum, Keyboard).
  - Dilengkapi validasi form, animasi piringan hitam (vinyl) berputar, dan efek ledakan **Confetti** saat berhasil mendaftar.
- 🎨 **Pengalaman UI/UX Eksklusif**:
  - Kustom kursor dengan efek trailing dot dan hover magnetic.
  - Horizontal pinned scroll section pada bagian Divisi.
  - Indikator progres scroll halaman dan tombol pintasan *"Scroll to Top"*.
  - Preloader bertema gelombang suara studio saat halaman pertama kali dibuka.

---

## 📑 Struktur Halaman & Bagian

1. **Hero Section**: Judul tipografi besar bergaya distorsi *"TRADEVIS BAND"*, pemutar audio synth, equalizer interaktif, floating musical doodles, dan background artistik.
2. **Marquee Ticker**: Teks berjalan berisi pengumuman jadwal latihan dan status audisi terbuka.
3. **About (Tentang Kami)**: Perjalanan band dari ruang UKS tahun 2022 hingga studio permanen di Gedung B, kartu polaroid dokumentasi, serta counter statistik (32 anggota aktif, 8 tahun cerita, 40+ panggung, 12 trofi).
4. **Divisions (Divisi Instrumen)**:
   - **Vokal (VOC // 01)** — Frontliner & harmoni nada.
   - **Gitar (GTR // 02)** — Riff ritmis & solo melodis.
   - **Bass (BSS // 03)** — Frekuensi rendah & penopang groove.
   - **Drum (DRM // 04)** — Detak ritme & dinamika tempo.
   - **Keyboard (KEY // 05)** — Lapisan synthesizer, piano, & atmosfer suara.
5. **Gallery (Galeri)**: Dokumentasi visual kegiatan studio, rekaman EP *"Antara Pelajaran"*, dan aksi panggung.
6. **Agenda (Jadwal & Event)**: Kalender event mendatang, audisi terbuka, dan panggung pensi semester.
7. **Timeline (Perjalanan)**: Kilas balik tonggak sejarah Tradevis Band sejak awal pembentukan hingga sekarang.
8. **Join Us (Pendaftaran)**: Formulir registrasi bagi siswa yang ingin bergabung ke keluarga besar Tradevis Band.
9. **Footer**: Informasi jadwal latihan rutin (Selasa & Kamis, 15.45 – 17.00 WIB) di Studio Musik Gedung B, tautan sosial media, dan hak cipta.

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|---|---|
| **Framework** | [Astro v7](https://astro.build/) |
| **CSS Framework** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Bahasa Pemrograman** | [TypeScript](https://www.typescriptlang.org/) / JavaScript |
| **3D Rendering** | [Google Model Viewer](https://modelviewer.dev/) (`.glb` 3D Assets) |
| **Audio Engine** | Web Audio API (Native Browser Oscillator & Gain Synthesis) |
| **Icons** | [Lucide Icons](https://lucide.dev/) |
| **Tipografi** | *Syne*, *Space Grotesk*, dan *Space Mono* (via Google Fonts) |

---

## 📁 Struktur Direktori Proyek

```text
landing-page/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── 3d/                  # File 3D instrumen (.glb)
│   │   │   ├── electric_guitar_dragons_v1.2.glb
│   │   │   ├── microphone.glb
│   │   │   ├── percussion_bass_guitar.glb
│   │   │   ├── standard_drum_set.glb
│   │   │   └── yamaha_keyboard.glb
│   │   ├── images/              # Dokumentasi foto kegiatan band
│   │   ├── hero-bgb.jpg         # Ilustrasi latar belakang hero
│   │   └── logo.svg
│   ├── components/
│   │   ├── common/              # Komponen bersama (Navbar, Footer, MobileMenu)
│   │   ├── sections/            # Bagian-bagian halaman landing page
│   │   │   ├── Hero.astro
│   │   │   ├── Marquee.astro
│   │   │   ├── About.astro
│   │   │   ├── Divisions.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── Agenda.astro
│   │   │   ├── Timeline.astro
│   │   │   └── Join.astro
│   │   └── ui/                  # Komponen utilitas & efek antarmuka
│   │       ├── ConfettiCanvas.astro
│   │       ├── CustomCursor.astro
│   │       ├── Lightbox.astro
│   │       ├── Loader.astro
│   │       ├── ScrollProgress.astro
│   │       └── ToastContainer.astro
│   ├── data/
│   │   ├── bandData.ts          # Data terpusat (divisi, event, galeri, statistik)
│   │   └── translations.ts      # Kamus lokalisasi bilingual (ID / EN)
│   ├── layouts/
│   │   └── MainLayout.astro     # Layout utama halaman
│   ├── pages/
│   │   └── index.astro          # Halaman utama (entry point)
│   ├── scripts/
│   │   ├── audio-synth.ts       # Synthesizer audio & visualizer bar
│   │   ├── i18n.ts              # Logika pergantian bahasa client-side
│   │   └── main-interactions.ts # Event listener (cursor, lightbox, modal, scroll)
│   └── styles/
│       └── global.css           # Styling global & token tema Tailwind CSS v4
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Menjalankan Proyek

### Prasyarat
- **Node.js**: Versi `v22.12.0` atau yang lebih baru.
- **npm**: Bawaan dari instalasi Node.js.

### 1. Instalasi Dependensi
Pastikan kamu berada di dalam direktori `landing-page`, lalu jalankan:
```bash
npm install
```

### 2. Menjalankan Server Pengembangan (Local Development)
Untuk menjalankan server lokal dengan fitur hot-reload:
```bash
npm run dev
```
Buka browser dan akses alamat default:
```text
http://localhost:4321
```

> **Tips:** Kamu juga bisa menjalankan server di background dengan perintah:
> ```bash
> npx astro dev --background
> ```

### 3. Build untuk Produksi
Untuk mengompilasi dan mengoptimasi website ke dalam folder `./dist/`:
```bash
npm run build
```

### 4. Preview Hasil Build
Untuk melihat hasil build produksi secara lokal sebelum melakukan deployment:
```bash
npm run preview
```

---

## ⚙️ Kustomisasi Konten & Data

Seluruh konten dinamis dikelola secara terpusat agar mudah diperbarui tanpa perlu mengedit komponen Astro secara langsung:

- **Data Band & Divisi**: Buka [`src/data/bandData.ts`](file:///c:/Project-Web/tdv-band%20-%20Copy/landing-page/src/data/bandData.ts) untuk mengubah statistik anggota, nama divisi, koordinator, slot terbuka, foto galeri, timeline riwayat, serta jadwal agenda.
- **Terjemahan Bahasa**: Buka [`src/data/translations.ts`](file:///c:/Project-Web/tdv-band%20-%20Copy/landing-page/src/data/translations.ts) untuk menyesuaikan teks dalam Bahasa Indonesia dan Bahasa Inggris.
- **Aset 3D & Gambar**: Letakkan file `.glb` baru atau foto kegiatan di folder [`src/assets/`](file:///c:/Project-Web/tdv-band%20-%20Copy/landing-page/src/assets/).

---

## 📍 Informasi & Kontak Ekstrakurikuler

- **Tempat Latihan**: Studio Musik (Ruang Kedap Suara), Gedung B, SMKN 8 Jakarta
- **Jadwal Rutin**: Setiap Selasa & Kamis, Pukul 15:45 – 17:00 WIB
- **Email**: [halo@tradevis.sch.id](mailto:halo@tradevis.sch.id)
- **Instagram**: [@tradevis.band](https://www.instagram.com/tradevis.band)
- **YouTube**: [@TradevisBand](https://www.youtube.com/@TradevisBand)

---

*Dibuat dengan distorsi, reverb, dan tiga cangkir kopi oleh tim Tradevis Band.*
