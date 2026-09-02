export interface StatItem {
  count: number;
  suffix?: string;
  labelEn: string;
  labelId: string;
  i18nKey: string;
}

export interface DivisionItem {
  id: string;
  code?: string;
  nameEn: string;
  nameId: string;
  taglineEn?: string;
  taglineId?: string;
  accentColor?: string;
  gear?: string;
  role?: string;
  icon: string;
  slotEn: string;
  slotId: string;
  isHot?: boolean;
  descEn: string;
  descId: string;
  coordEn: string;
  coordId: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleId: string;
  captionEn: string;
  captionId: string;
  altEn: string;
  altId: string;
  thumbSrc: string;
  fullSrc: string;
}

export interface EventItem {
  id: string;
  day: string;
  monthEn: string;
  monthId: string;
  titleEn: string;
  titleId: string;
  venueEn: string;
  venueId: string;
  tagEn: string;
  tagId: string;
  isPentasTag?: boolean;
  descEn: string;
  descId: string;
  dateFullEn: string;
  dateFullId: string;
  timeEn: string;
  timeId: string;
  locationEn: string;
  locationId: string;
}

export interface TimelineItem {
  year: string;
  titleEn: string;
  titleId: string;
  descEn: string;
  descId: string;
  delay?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  messageKey: string;
}

export const STATS: StatItem[] = [
  { count: 32, labelEn: "Active members", labelId: "Anggota aktif", i18nKey: "about.stat1" },
  { count: 8, labelEn: "Years running", labelId: "Tahun berjalan", i18nKey: "about.stat2" },
  { count: 40, suffix: "+", labelEn: "Performances", labelId: "Penampilan", i18nKey: "about.stat3" },
  { count: 12, labelEn: "Trophies won", labelId: "Trofi diraih", i18nKey: "about.stat4" },
];

export const DIVISIONS: DivisionItem[] = [
  {
    id: "vokal",
    code: "VOC // 01",
    nameEn: "Vocals",
    nameId: "Vokal",
    taglineEn: "Lead Melody & Stage Command",
    taglineId: "Melodi Utama & Penguasaan Panggung",
    gear: "SHURE SM58 / WIRELESS RIG",
    role: "FRONTLINER & HARMONY",
    icon: "mic",
    slotEn: "1 SLOT",
    slotId: "1 SLOT",
    isHot: true,
    descEn: "Band frontliner — from soft acoustic ballads to piercing stadium rock screams.",
    descId: "Frontliner band — dari pop akustik pelan sampai teriakan rock berenergi tinggi.",
    coordEn: "COORD. SARAH — XII IPA",
    coordId: "KOOR. SARAH — XII IPA",
  },
  {
    id: "gitar",
    code: "GTR // 02",
    nameEn: "Guitar",
    nameId: "Gitar",
    taglineEn: "Harmonic Core & Riff Architecture",
    taglineId: "Fondasi Harmoni & Struktur Riff",
    gear: "FENDER STRAT / MARSHALL AMP",
    role: "LEAD & RHYTHM SECTION",
    icon: "guitar",
    slotEn: "3 SLOTS",
    slotId: "3 SLOT",
    descEn: "Rhythm and lead mastery; two guitarists locking into synchronized riffs and soaring solos.",
    descId: "Ritme dan melodi; dua gitaris yang saling mengisi dengan riff tajam dan solo epik.",
    coordEn: "COORD. DIMAS — XI IPS",
    coordId: "KOOR. DIMAS — XI IPS",
  },
  {
    id: "bass",
    code: "BSS // 03",
    nameEn: "Bass",
    nameId: "Bass",
    taglineEn: "Sub-Frequency & Groove Dynamics",
    taglineId: "Frekuensi Rendah & Dinamika Groove",
    gear: "JAZZ BASS 5-STR / AMPEG RIG",
    role: "LOW-END FREQUENCY GLUE",
    icon: "activity",
    slotEn: "2 SLOTS",
    slotId: "2 SLOT",
    descEn: "Groove foundation — connecting the drums to the harmonic space, getting heads nodding.",
    descId: "Fondasi groove — menghubungkan hentakan drum ke harmoni lagu, penopang getaran ritme.",
    coordEn: "COORD. BAGAS — XI IPA",
    coordId: "KOOR. BAGAS — XI IPA",
  },
  {
    id: "drum",
    code: "DRM // 04",
    nameEn: "Drums",
    nameId: "Drum",
    taglineEn: "Acoustic Engine & Rhythm Driver",
    taglineId: "Mesin Akustik & Penggerak Tempo",
    gear: "TAMA HYPER-DRIVE KIT / ZILDJIAN",
    role: "TEMPO & DYNAMIC IMPACT",
    icon: "drum",
    slotEn: "2 SLOTS",
    slotId: "2 SLOT",
    descEn: "Human metronome; explosive fills, relentless kicks, and the unstoppable heartbeat of every track.",
    descId: "Metronom manusia; pukulan bertenaga, ketukan presisi, dan detak jantung setiap aransemen.",
    coordEn: "COORD. RIO — XII IPA",
    coordId: "KOOR. RIO — XII IPA",
  },
  {
    id: "keyboard",
    code: "KEY // 05",
    nameEn: "Keyboards",
    nameId: "Keyboard",
    taglineEn: "Ambient Layers & Harmonic Textures",
    taglineId: "Lapisan Suasana & Tekstur Harmoni",
    gear: "NORD STAGE 3 / ROLAND SYNTH",
    role: "SOUNDSCAPE & CHORD PAD",
    icon: "piano",
    slotEn: "3 SLOTS",
    slotId: "3 SLOT",
    descEn: "Color and atmosphere — from rich acoustic grand pianos and warm lush pads to dirty analog synths.",
    descId: "Warna dan atmosfer — dari dentingan grand piano, pad hangat, hingga distorsi synthesizer.",
    coordEn: "COORD. AYA — X IPA",
    coordId: "KOOR. AYA — X IPA",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "session-rabu",
    titleEn: "Wednesday Session",
    titleId: "Session Rabu",
    captionEn: "Wednesday Session — Music Studio",
    captionId: "Session Rabu — Studio Musik",
    altEn: "Wednesday Session — Music Studio",
    altId: "Session Rabu — Studio Musik",
    thumbSrc: "../src/assets/images/kegiatan (1).jpeg",
    fullSrc: "../src/assets/images/kegiatan (1).jpeg",
  },
  {
    id: "soundcheck",
    titleEn: "Soundcheck",
    titleId: "Soundcheck",
    captionEn: "Soundcheck Arts Fest 2025",
    captionId: "Soundcheck Pentas Seni 2025",
    altEn: "Soundcheck Arts Fest 2025",
    altId: "Soundcheck Pentas Seni 2025",
    thumbSrc: "https://picsum.photos/seed/tv-soundcheck/600/460.jpg",
    fullSrc: "https://picsum.photos/seed/tv-soundcheck/1200/900.jpg",
  },
  {
    id: "battle-of-bands",
    titleEn: "Battle of Bands",
    titleId: "Battle of Bands",
    captionEn: "Battle of Bands — City Elimination",
    captionId: "Battle of Bands — Eliminasi Kota",
    altEn: "Battle of Bands — City Elimination",
    altId: "Battle of Bands — Eliminasi Kota",
    thumbSrc: "https://picsum.photos/seed/tv-battle/600/620.jpg",
    fullSrc: "https://picsum.photos/seed/tv-battle/1200/900.jpg",
  },
  {
    id: "open-house",
    titleEn: "Open House",
    titleId: "Open House",
    captionEn: "Open House — trying out instruments",
    captionId: "Open House — coba-coba alat",
    altEn: "Open House — trying out instruments",
    altId: "Open House — coba-coba alat",
    thumbSrc: "https://picsum.photos/seed/tv-openhouse/600/520.jpg",
    fullSrc: "https://picsum.photos/seed/tv-openhouse/1200/900.jpg",
  },
  {
    id: "kelas-arrangement",
    titleEn: "Arrangement Class",
    titleId: "Kelas Arrangement",
    captionEn: "Arrangement Class — Thursday afternoon",
    captionId: "Kelas Arrangement — Kamis sore",
    altEn: "Arrangement Class — Thursday afternoon",
    altId: "Kelas Arrangement — Kamis sore",
    thumbSrc: "https://picsum.photos/seed/tv-arrange/600/780.jpg",
    fullSrc: "https://picsum.photos/seed/tv-arrange/1200/900.jpg",
  },
  {
    id: "malam-pameran",
    titleEn: "Exhibition Night",
    titleId: "Malam Pameran",
    captionEn: "Exhibition Night — encore performance",
    captionId: "Malam Pameran — encore",
    altEn: "Exhibition Night — encore performance",
    altId: "Malam Pameran — encore",
    thumbSrc: "https://picsum.photos/seed/tv-encore/600/450.jpg",
    fullSrc: "https://picsum.photos/seed/tv-encore/1200/900.jpg",
  },
  {
    id: "backstage",
    titleEn: "Backstage",
    titleId: "Backstage",
    captionEn: "Backstage before hitting the stage",
    captionId: "Backstage sebelum naik panggung",
    altEn: "Backstage before hitting the stage",
    altId: "Backstage sebelum naik panggung",
    thumbSrc: "https://picsum.photos/seed/tv-backstage/600/640.jpg",
    fullSrc: "https://picsum.photos/seed/tv-backstage/1200/900.jpg",
  },
  {
    id: "kolaborasi-teater",
    titleEn: "Theater Collab",
    titleId: "Kolaborasi Teater",
    captionEn: "Collaboration with Theater Club",
    captionId: "Kolaborasi dengan Ekskul Teater",
    altEn: "Collaboration with Theater Club",
    altId: "Kolaborasi dengan Ekskul Teater",
    thumbSrc: "https://picsum.photos/seed/tv-teater/600/560.jpg",
    fullSrc: "https://picsum.photos/seed/tv-teater/1200/900.jpg",
  },
  {
    id: "recording-day",
    titleEn: "Recording Day",
    titleId: "Recording Day",
    captionEn: "Recording Day — EP 'Between Lessons'",
    captionId: "Recording Day — EP 'Antara Pelajaran'",
    altEn: "Recording Day — EP 'Between Lessons'",
    altId: "Recording Day — EP 'Antara Pelajaran'",
    thumbSrc: "https://picsum.photos/seed/tv-recording/600/480.jpg",
    fullSrc: "https://picsum.photos/seed/tv-recording/1200/900.jpg",
  },
  {
    id: "angkatan-2024",
    titleEn: "Class of 2024",
    titleId: "Angkatan 2024",
    captionEn: "Class of 2024 — band portrait",
    captionId: "Angkatan 2024 — foto kelas",
    altEn: "Class of 2024 — band portrait",
    altId: "Angkatan 2024 — foto kelas",
    thumbSrc: "https://picsum.photos/seed/tv-angkatan/600/700.jpg",
    fullSrc: "https://picsum.photos/seed/tv-angkatan/1200/900.jpg",
  },
];

export const EVENTS: EventItem[] = [
  {
    id: "audisi-baru",
    day: "08",
    monthEn: "FEB",
    monthId: "FEB",
    titleEn: "New Member Audition",
    titleId: "Audisi Anggota Baru",
    venueEn: "Music Studio, Building B",
    venueId: "Studio Musik, Gedung B",
    tagEn: "OPEN",
    tagId: "TERBUKA",
    descEn: "Bring any song you like — sing or play an instrument for 5 minutes. Register via form below or walk in; morning slots are limited.",
    descId: "Bawa satu lagu bebas — nyanyi atau mainkan instrumen, lima menit saja. Daftar lewat formulir di bawah atau datang langsung; slot pagi terbatas.",
    dateFullEn: "SATURDAY, 08 FEB",
    dateFullId: "SABTU, 08 FEB",
    timeEn: "09:00 — 12:00",
    timeId: "09.00 — 12.00",
    locationEn: "BUILDING B STUDIO",
    locationId: "STUDIO GEDUNG B",
  },
  {
    id: "open-house",
    day: "21",
    monthEn: "FEB",
    monthId: "FEB",
    titleEn: "Tradevis Open House",
    titleId: "Open House Tradevis",
    venueEn: "Main Auditorium",
    venueId: "Aula Utama",
    tagEn: "OPEN",
    tagId: "TERBUKA",
    descEn: "Watch full rehearsals, try instruments at division booths, and ask officers anything. Free and open for all classes.",
    descId: "Tonton latihan penuh, coba alat di booth tiap divisi, dan tanya apa saja ke pengurus. Gratis dan terbuka untuk semua kelas.",
    dateFullEn: "FRIDAY, 21 FEB",
    dateFullId: "JUMAT, 21 FEB",
    timeEn: "15:00 — 17:30",
    timeId: "15.00 — 17.30",
    locationEn: "MAIN AUDITORIUM",
    locationId: "AULA UTAMA",
  },
  {
    id: "pensi-semester",
    day: "15",
    monthEn: "MAR",
    monthId: "MAR",
    titleEn: "Semester Arts Fest",
    titleId: "Pentas Seni Semester",
    venueEn: "Main Field",
    venueId: "Lapangan Utama",
    tagEn: "GIG",
    tagId: "PENTAS",
    isPentasTag: true,
    descEn: "45-minute set, eight songs from our new repertoire. First Tradevis alumni generation returns as guest stars.",
    descId: "Set 45 menit, delapan lagu dari repertoar baru. Angkatan pertama Tradevis kembali naik panggung sebagai bintang tamu.",
    dateFullEn: "SATURDAY, 15 MAR",
    dateFullId: "SABTU, 15 MAR",
    timeEn: "18:30 — FINISH",
    timeId: "18.30 — SELESAI",
    locationEn: "MAIN FIELD",
    locationId: "LAPANGAN UTAMA",
  },
  {
    id: "battle-of-bands",
    day: "12",
    monthEn: "APR",
    monthId: "APR",
    titleEn: "City Battle of Bands",
    titleId: "Battle of Bands Kota",
    venueEn: "City Plaza",
    venueId: "Plaza Kota",
    tagEn: "SELECTION",
    tagId: "SELEKSI",
    descEn: "Elimination round with twelve high school bands across the city. Three songs, no backing track, surprise judges.",
    descId: "Eliminasi bersama dua belas band sekolah se-kota. Tiga lagu, tanpa backing track, juri penuh kejutan.",
    dateFullEn: "SATURDAY, 12 APR",
    dateFullId: "SABTU, 12 APR",
    timeEn: "10:00 — 21:00",
    timeId: "10.00 — 21.00",
    locationEn: "CITY PLAZA",
    locationId: "PLAZA KOTA",
  },
  {
    id: "perpisahan-12",
    day: "24",
    monthEn: "MAY",
    monthId: "MEI",
    titleEn: "Grade 12 Farewell",
    titleId: "Perpisahan Kelas 12",
    venueEn: "Main Auditorium",
    venueId: "Aula Utama",
    tagEn: "GIG",
    tagId: "PENTAS",
    isPentasTag: true,
    descEn: "Our tradition: acoustic set, one brand-new unreleased song, and a few (many) tears.",
    descId: "Tradisi kami: set akustik, satu lagu baru yang belum pernah dibawakan, dan sedikit (banyak) air mata.",
    dateFullEn: "SATURDAY, 24 MAY",
    dateFullId: "SABTU, 24 MEI",
    timeEn: "16:00 — 19:00",
    timeId: "16.00 — 19.00",
    locationEn: "MAIN AUDITORIUM",
    locationId: "AULA UTAMA",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2022",
    titleEn: "Five kids, one nurse's room",
    titleId: "Lima anak, satu ruang UKS",
    descEn: "Founded with two borrowed guitars and unapologetic dreams.",
    descId: "Berdiri dengan dua gitar pinjaman dan mimpi yang tidak kenal malu.",
  },
  {
    year: "2023",
    titleEn: "First stage gig",
    titleId: "Panggung pertama",
    descEn: "Arts fest, two songs, shaking hands — the audience applauded anyway.",
    descId: "Pentas seni, dua lagu, tangan gemetar — penonton tetap tepuk tangan.",
    delay: "80ms",
  },
  {
    year: "2024",
    titleEn: "Online practice sessions",
    titleId: "Latihan lewat layar",
    descEn: "Friday virtual sessions; unexpectedly learned arrangement & mixing.",
    descId: "Sesi daring tiap Jumat; tanpa sengaja kami belajar arrangement dan mixing.",
    delay: "60ms",
  },
  {
    year: "2025",
    titleEn: "Our own studio",
    titleId: "Studio sendiri",
    descEn: "Old storage room in Building B renovated into a full music studio.",
    descId: "Ruang bekas gudang di Gedung B dirombak jadi studio musik lengkap.",
    delay: "80ms",
  },
  {
    year: "2026",
    titleEn: "Live EP: \"Between Lessons\"",
    titleId: "EP live: \"Antara Pelajaran\"",
    descEn: "Five tracks recorded live in studio — one track was take one.",
    descId: "Lima lagu direkam satu take di studio — salah satu lagu bahkan take pertama.",
    delay: "60ms",
  },
  {
    year: "2026",
    titleEn: "32 members, 5 divisions",
    titleId: "32 anggota, 5 divisi",
    descEn: "Plus regular collaborations with theater & dance clubs. Just getting started.",
    descId: "Plus kolaborasi rutin dengan ekskul teater dan tari. Baru mulai.",
    delay: "80ms",
  },
];

export const MARQUEE_ITEMS = [
  { textEn: "TRADEVIS BAND", textId: "TRADEVIS BAND", isHollow: true },
  { textEn: "REHEARSAL TUE & THU - 15:45", textId: "LATIHAN SELASA & KAMIS — 15.45", isHollow: false },
  { textEn: "SOUNDPROOF ROOM", textId: "RUANG KEDAP SUARA", isHollow: false },
  { textEn: "OPEN AUDITION", textId: "AUDISI TERBUKA", isHollow: false },
  { textEn: "EST. 2022", textId: "SEJAK 2022", isHollow: false },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/tradevis.band",
    messageKey: "foot.social_msg",
  },
  {
    name: "YouTube",
    icon: "youtube",
    href: "https://www.youtube.com/@TradevisBand",
    messageKey: "foot.social_msg",
  },
  {
    name: "Email",
    icon: "mail",
    href: "mailto:halo@tradevis.sch.id",
    messageKey: "",
  },
];
