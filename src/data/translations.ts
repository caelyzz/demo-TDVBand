export type Language = 'en' | 'id';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const TRANSLATIONS: TranslationDictionary = {
  // Preloader
  'loader.sub': {
    en: 'LOADING SOUND…',
    id: 'MEMUAT SUARA…',
  },

  // Navbar
  'nav.tentang': { en: 'About', id: 'Tentang' },
  'nav.divisi': { en: 'Divisions', id: 'Divisi' },
  'nav.galeri': { en: 'Gallery', id: 'Galeri' },
  'nav.agenda': { en: 'Agenda', id: 'Agenda' },
  'nav.perjalanan': { en: 'Timeline', id: 'Perjalanan' },
  'nav.gabung': { en: 'Join Us', id: 'Gabung' },
  'nav.gabung_cta': { en: 'Join Now', id: 'Gabung Sekarang' },

  // Mobile Menu
  'mobile.note': {
    en: 'WED & FRI — 15:30 · BUILDING B STUDIO',
    id: 'RABU & JUMAT — 15.30 · STUDIO GEDUNG B',
  },

  // Hero Section
  'hero.eyebrow': {
    en: 'MUSIC EXTRACURRICULAR — VOCATIONAL HIGH SCHOOL 8 JAKARTA',
    id: 'EKSTRAKURIKULER MUSIK — SMKN 8 JAKARTA',
  },
  'hero.sub': {
    en: 'We are regular kids who fell in love with <em>loud sounds</em>. From the nurse\'s office in 2022 to our own studio in Building B — and stage performances almost every semester.',
    id: 'Kami anak-anak biasa yang jatuh cinta pada <em>suara keras</em>. Dari ruang UKS tahun 2022 ke studio sendiri di Gedung B — dan panggung hampir setiap semester.',
  },
  'hero.meta': {
    en: '32 MEMBERS — 5 DIVISIONS — 40+ GIGS',
    id: '32 ANGGOTA — 5 DIVISI — 40+ PANGGUNG',
  },
  'hero.play': { en: 'Play Our Sound', id: 'Mainkan Suara Kami' },
  'hero.pause': { en: 'Stop Sound', id: 'Hentikan' },
  'hero.explore': { en: 'Explore Divisions', id: 'Jelajahi Divisi' },
  'hero.scroll': { en: 'SCROLL', id: 'GULIR' },

  // About Section
  'about.eyebrow': { en: '01 — ABOUT US', id: '01 — TENTANG KAMI' },
  'about.title': {
    en: 'From the nurse\'s office to city stages.',
    id: 'Dari ruang UKS ke panggung kota.',
  },
  'about.p1': {
    en: 'Tradevis Band was born in 2022 from five kids with no place to practice. Today we are 32 members, with our <em>own studio</em> in Building B, performing almost every semester — from school arts fests to inter-school battle of bands.',
    id: 'Tradevis Band lahir tahun 2022 dari lima anak yang tidak punya tempat latihan. Sekarang kami 32 orang, punya <em>studio sendiri</em> di Gedung B, dan tampil hampir setiap semester — dari pentas seni sekolah sampai battle of bands antar sekolah.',
  },
  'about.p2': {
    en: 'We are more than just a band. We are a space to learn, fail, and get loud together. Science students learning audio mixing, arts students finding their voice, and the quietest kid turns out to be a killer drummer. Everyone starts from zero — including us.',
    id: 'Kami bukan sekadar band. Kami ruang untuk belajar, gagal, dan kencang bersama. Ada anak IPA yang belajar mixing, anak IPS yang akhirnya berani bernyanyi, dan anak paling pendiam yang diam-diam jago drum. Semua mulai dari nol — termasuk kami.',
  },
  'about.btn': { en: 'Why Join Us', id: 'Kenapa bergabung' },
  'about.polo1': { en: 'Studio — Wed afternoon', id: 'Studio — Rabu sore' },
  'about.polo2': { en: 'Arts Fest 2025', id: 'Pentas Seni 2025' },
  'about.polo3': { en: 'Recording EP', id: 'Recording EP' },
  'about.stat1': { en: 'Active members', id: 'Anggota aktif' },
  'about.stat2': { en: 'Years running', id: 'Tahun berjalan' },
  'about.stat3': { en: 'Performances', id: 'Penampilan' },
  'about.stat4': { en: 'Trophies won', id: 'Trofi diraih' },

  // Divisions Section
  'divisions.eyebrow': { en: '02 — DIVISIONS', id: '02 — DIVISI' },
  'divisions.title': { en: 'Choose your weapon.', id: 'Pilih senjatamu.' },
  'divisions.drag_hint': { en: 'DRAG TO EXPLORE', id: 'SERET UNTUK JELAJAHI' },

  // Gallery Section
  'gallery.eyebrow': { en: '03 — GALLERY', id: '03 — GALERI' },
  'gallery.title': {
    en: 'Proof that we actually practice.',
    id: 'Bukti bahwa kami benar-benar latihan.',
  },
  'gallery.sub': {
    en: 'Trace of our studio sessions and stage performances — click any photo to enlarge.',
    id: 'Jejak sesi studio dan panggung — klik foto untuk memperbesar.',
  },

  // Agenda Section
  'agenda.eyebrow': { en: '04 — AGENDA', id: '04 — AGENDA' },
  'agenda.title': { en: 'Upcoming gigs & events.', id: 'Yang akan datang.' },
  'agenda.remind_btn': { en: 'Remind me', id: 'Ingatkan saya' },
  'agenda.toast_msg': {
    en: 'Reminder saved — see you at "{event}".',
    id: 'Pengingat tersimpan — sampai jumpa di "{event}".',
  },

  // Timeline Section
  'timeline.eyebrow': { en: '05 — TIMELINE', id: '05 — PERJALANAN' },
  'timeline.title': {
    en: 'Eight years of distortion.',
    id: 'Delapan tahun distorsi.',
  },

  // Join Section
  'join.eyebrow': { en: '06 — JOIN US', id: '06 — GABUNG' },
  'join.title': { en: 'The stage needs you.', id: 'Panggung butuh kamu.' },
  'join.sub': {
    en: 'This form isn\'t an audition — just a way for us to get to know you first. Registration closes one day before auditions.',
    id: 'Formulir ini bukan seleksi — cuma cara kami mengenalimu dulu. Pendaftaran ditutup sehari sebelum audisi.',
  },
  'join.check1': {
    en: 'No advanced skills needed — just bring your passion.',
    id: 'Tidak perlu mahir — niat saja dulu.',
  },
  'join.check2': {
    en: 'Chill audition: 5 minutes, one song of your choice.',
    id: 'Audisi santai: lima menit, satu lagu bebas.',
  },
  'join.check3': {
    en: 'Practice Wed & Fri, 15:30, Building B Studio.',
    id: 'Latihan Rabu & Jumat, 15.30, Studio Gedung B.',
  },
  'join.check4': {
    en: 'Instruments provided by school; feel free to bring your own.',
    id: 'Alat disediakan sekolah; boleh bawa punya sendiri.',
  },
  'join.vinyl_lbl': {
    en: 'SIDE A — "BETWEEN LESSONS" · LIVE SESSION · 33⅓ RPM',
    id: 'SIDE A — "ANTARA PELAJARAN" · LIVE SESSION · 33⅓ RPM',
  },
  'join.label_nama': { en: 'Full Name', id: 'Nama lengkap' },
  'join.placeholder_nama': { en: 'e.g. Nadia Prameswari', id: 'mis. Nadia Prameswari' },
  'join.label_kelas': { en: 'Class', id: 'Kelas' },
  'join.placeholder_kelas': { en: 'e.g. X Science 2', id: 'mis. X IPA 2' },
  'join.label_divisi': { en: 'Preferred Division', id: 'Divisi pilihan' },
  'join.label_cerita': {
    en: 'Short Story / Background (optional)',
    id: 'Ceritakan singkat (opsional)',
  },
  'join.placeholder_cerita': {
    en: 'Favorite song? Played before? Anything on your mind, type away.',
    id: 'Lagu favorit? Sudah pernah main? Apa pun itu, tulis saja.',
  },
  'join.submit_btn': { en: 'Submit Application', id: 'Kirim Pendaftaran' },
  'join.note': {
    en: 'Prefer face-to-face? Visit us at the studio during Tuesday sessions.',
    id: 'Lebih suka tatap muka? Datang langsung ke studio saat sesi Selasa.',
  },
  'join.err_empty': {
    en: 'Please enter your name and class — the stage needs your identity.',
    id: 'Isi nama dan kelas dulu — panggung butuh identitasmu.',
  },
  'join.success_toast': {
    en: 'Thank you, {name}! Application received — check the studio bulletin board for updates.',
    id: 'Terima kasih, {name}! Pendaftaran masuk — pantau pengumuman di studio musik.',
  },

  // Footer
  'foot.lead': {
    en: 'Vocational High School 8 Jakarta Music Extracurricular — since 2022.',
    id: 'Ekstrakurikuler musik SMA Tradevis — sejak 2022.',
  },
  'foot.location': {
    en: 'Music Studio, Soundproof Room',
    id: 'Studio Musik, Ruang Kedap Suara',
  },
  'foot.time': {
    en: 'Tue & Thu · 15:45 — 17:00',
    id: 'Selasa & Kamis · 15.45 — 17.00',
  },
  'foot.copy': {
    en: '© 2026 Tradevis Band | made with distortion, reverb, and three cups of coffee.',
    id: '© 2026 Tradevis Band | dibuat dengan distorsi, reverb, dan tiga gelas kopi.',
  },
  'foot.social_msg': {
    en: 'Our official channels are being prepared. meanwhile, check the studio bulletin board.',
    id: 'Kanal resmi kami masih disiapkan. sementara, pantau mading studio musik.',
  },

  // Lightbox
  'lightbox.aria': { en: 'Photo gallery modal', id: 'Galeri foto' },
  'lightbox.close': { en: 'Close', id: 'Tutup' },
  'lightbox.prev': { en: 'Previous photo', id: 'Foto sebelumnya' },
  'lightbox.next': { en: 'Next photo', id: 'Foto berikutnya' },
};
