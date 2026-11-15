import { Project, Experience } from "@/types/portfolio";

export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Visit Suluttenggo Tourism Web Platform",
    slug: "visit-suluttenggo",
    role: "Web Developer Intern",
    timeline: "2025 • PT Media Makasiow",
    description:
      "Mengembangkan portal informasi pariwisata regional menggunakan JavaScript dan EJS untuk rendering halaman dinamis, serta Firebase sebagai basis data cloud.",
    techStack: ["JavaScript", "Node.js", "EJS", "Firebase"],
    githubUrl: "https://github.com/TmpstLord/visit-suluttenggo-web",
    featured: true,
    problem:
      "Portal informasi pariwisata regional membutuhkan penyajian katalog destinasi, akomodasi, dan agenda budaya yang cepat dimuat serta mudah diperbarui secara dinamis tanpa harus mengubah kode tampilan secara manual.",
    solution:
      "Membangun aplikasi web dengan arsitektur server-side templating menggunakan EJS dan JavaScript yang terhubung ke Firebase untuk penyimpanan dan pengelolaan data destinasi secara terstruktur.",
    architectureHighlights: [
      "Strukturisasi koleksi data destinasi, kategori wisata, dan informasi akomodasi di Firebase untuk pembacaan serta pembaruan data secara real-time.",
      "Implementasi komponen tampilan modular menggunakan EJS (Embedded JavaScript) untuk merender halaman katalog dan detail wisata secara dinamis.",
      "Pengelolaan alur CRUD konten dan validasi input berbasis JavaScript untuk menjaga konsistensi data pada portal.",
    ],
    metrics: [
      {
        label: "View Engine",
        value: "EJS",
        note: "Dynamic Server Templating",
      },
      {
        label: "Database",
        value: "Firebase",
        note: "Cloud NoSQL & Real-time Sync",
      },
      {
        label: "Core Stack",
        value: "JavaScript",
        note: "End-to-End Web Logic",
      },
    ],
  },
  {
    id: "2",
    title: "RUSDI - Digital Waste Bank Platform",
    slug: "rusdi-waste-bank",
    role: "Mobile App & Data Flow Developer",
    timeline: "2024 • Abdidaya PPK Ormawa National Finalist",
    description:
      "Aplikasi bank sampah digital berbasis Android yang lolos ke tahap final nasional Abdidaya PPK Ormawa 2024. Dibangun dengan Kodular dan Spreadsheet sebagai pusat pencatatan transaksi.",
    techStack: ["Kodular", "Spreadsheet / Excel", "Block Logic", "Data Flow"],
    githubUrl: "https://github.com/TmpstLord/rusdi-waste-bank",
    featured: true,
    problem:
      "Pencatatan setoran sampah, konversi berat ke saldo nasabah, dan rekapitulasi operasional bank sampah masih berjalan manual di buku catatan sehingga rawan selisih data dan lambat direkap saat pelaporan.",
    solution:
      "Merancang aplikasi mobile Android menggunakan Kodular yang terhubung langsung ke Spreadsheet sebagai basis data terpusat, mengotomatiskan kalkulasi nilai tukar sampah dan rekap saldo tanpa biaya infrastruktur server berat.",
    architectureHighlights: [
      "Perancangan logika blok aplikasi Android di Kodular untuk input penimbangan sampah, kalkulasi harga per kategori secara otomatis, dan pengecekan saldo nasabah.",
      "Strukturisasi skema tabel Spreadsheet (Master Nasabah, Daftar Harga Sampah, dan Log Transaksi) agar mudah diaudit oleh pengurus bank sampah di lapangan.",
      "Alur sinkronisasi baca/tulis data antara aplikasi Kodular dan Spreadsheet untuk rekapitulasi volume sampah terkelola secara langsung.",
    ],
    metrics: [
      {
        label: "Pencapaian",
        value: "National Finalist",
        note: "Abdidaya PPK Ormawa 2024",
      },
      {
        label: "Client App",
        value: "Kodular",
        note: "Android Mobile Interface",
      },
      {
        label: "Database",
        value: "Spreadsheet",
        note: "Zero-Cost Cloud Ledger",
      },
    ],
  },
  {
    id: "3",
    title: "Ocean Hero Performance Benchmark",
    slug: "ocean-hero-benchmark",
    role: "Game Systems & Performance Engineer",
    timeline: "2026 • Undergraduate Thesis Research",
    description:
      "Studi kasus empiris membandingkan performa arsitektur Unity DOTS/ECS melawan MonoBehaviour OOP dalam skenario game 2D, difokuskan pada optimalisasi frame rate dan memori.",
    techStack: ["Unity DOTS", "C#", "ECS Architecture", "Profiling"],
    githubUrl: "https://github.com/TmpstLord/ocean-hero-dots-benchmark",
    featured: true,
    problem:
      "Pada skenario game 2D mobile dengan ratusan hingga ribuan entitas aktif secara bersamaan, pendekatan tradisional MonoBehaviour OOP memicu overhead garbage collection dan penurunan frame rate (FPS drop).",
    solution:
      "Mengimplementasikan ulang sistem inti menggunakan Data-Oriented Technology Stack (Unity DOTS/ECS) dengan tata letak memori kontigu (Archetypes/Chunks) dan melakukan pengujian langsung di perangkat mobile.",
    architectureHighlights: [
      "Transformasi struktur data dari referensi objek OOP menjadi komponen ECS berbasis struct.",
      "Eksekusi logika simulasi entitas secara paralel untuk memaksimalkan pemanfaatan CPU multi-core.",
      "Pengujian profiling langsung di perangkat target (Samsung Galaxy A15) menggunakan Unity Profiler.",
    ],
    metrics: [
      {
        label: "Arsitektur Uji",
        value: "DOTS vs OOP",
        note: "Head-to-Head Benchmark",
      },
      {
        label: "Target Device",
        value: "Mobile Android",
        note: "Real-device USB Profiling",
      },
      {
        label: "Metrik Utama",
        value: "FPS & Memory",
        note: "Frame Time & GC Allocation",
      },
    ],
  },
  {
    id: "4",
    title: "2D Educational Game Systems & Backend (Godot)",
    slug: "godot-game-systems",
    role: "Game Gameplay & Backend Engineer",
    timeline: "2026 • Godot Engine Project",
    description:
      "Perancangan arsitektur backend, mekanik minigame interaktif, serta manajemen state misi multi-region (Solara & Riverfall) menggunakan Godot Engine.",
    techStack: ["Godot Engine", "GDScript", "State Management", "Backend API"],
    githubUrl: "https://github.com/TmpstLord/eco-heroes-godot",
    featured: true,
    problem:
      "Transisi antar-scene misi, sinkronisasi timer HUD saat misi gagal atau selesai, serta pemicu dialog NPC lintas wilayah sering mengalami desinkronisasi state yang merusak alur permainan.",
    solution:
      "Membangun arsitektur Global State Manager terpusat di GDScript untuk melacak progres tiap region secara konsisten, dilengkapi manajemen siklus hidup timer, reset objek interaktif, dan integrasi backend.",
    architectureHighlights: [
      "Sentralisasi flag progres permainan menggunakan Global Autoload Singleton agar status misi tetap sinkron saat berpindah scene.",
      "Pengelolaan siklus hidup Mission Manager, sinkronisasi countdown timer HUD, serta reset state mesin/objek saat misi diulang.",
      "Perancangan logika percabangan dialog NPC dinamis berdasarkan status penyelesaian misi di tiap wilayah.",
    ],
    metrics: [
      { label: "Engine", value: "Godot Engine", note: "2D Modular GDScript" },
      {
        label: "Arsitektur",
        value: "State-Driven",
        note: "Global Singleton & Signals",
      },
      {
        label: "Cakupan",
        value: "Systems & API",
        note: "Minigames & Backend Sync",
      },
    ],
  },
  {
    id: "5",
    title: "Sistem Dashboard Akreditasi Program Studi",
    slug: "accreditation-dashboard",
    role: "Full-Stack Web Developer",
    timeline: "2026 • Sistem Informasi UNSRAT",
    description:
      "Platform manajemen dokumen dan pemantauan kelengkapan data akreditasi (LKPS & LED) Program Studi Sistem Informasi UNSRAT dengan pelacakan progres otomatis dan mode tinjauan asesor.",
    techStack: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/TmpstLord/akreditasi-si-dashboard",
    featured: true,
    problem:
      "Pengelolaan ratusan tabel instrumen LKPS, dokumen pendukung LED, dan pengecekan kelengkapan bukti fisik per kriteria akreditasi membutuhkan sistem terpusat agar tim penyusun dan asesor dapat menelusuri dokumen secara cepat dan terukur.",
    solution:
      "Membangun dashboard web terintegrasi dengan pembangun tabel/kolom dinamis, kalkulasi persentase kelengkapan kriteria secara otomatis berbasis database, pencarian global lintas instrumen, serta pratinjau dokumen PDF langsung di dalam aplikasi.",
    architectureHighlights: [
      "Logika agregasi database untuk menghitung rasio kelengkapan data dan dokumen per kriteria akreditasi secara otomatis dengan indikator status berwarna.",
      "Dynamic column builder dan drag-and-drop row sorting untuk menyesuaikan struktur tabel instrumen LKPS yang bervariasi tanpa mengubah skema inti.",
      "Pencarian global lintas tabel, integrated PDF viewer untuk verifikasi bukti fisik, serta pemisahan hak akses antara tim penyusun dan mode tinjauan asesor.",
    ],
    metrics: [
      {
        label: "Domain Sistem",
        value: "LKPS & LED",
        note: "Manajemen Instrumen Akreditasi",
      },
      {
        label: "Otomasi",
        value: "Auto-Progress",
        note: "Kalkulasi Kelengkapan Kriteria",
      },
      {
        label: "Fitur Utama",
        value: "Dynamic Table",
        note: "PDF Viewer & Assessor Mode",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "2025",
    role: "Web Developer Intern (PKL)",
    organization: "PT Media Makasiow",
    type: "Internship",
    description:
      "Mengembangkan fitur web dinamis menggunakan JavaScript, EJS templating, dan integrasi database Firebase untuk portal informasi pariwisata regional Visit Suluttenggo.",
    highlights: [
      "JavaScript & EJS Templating",
      "Firebase Database Integration",
      "Web Content Management",
    ],
    proofUrl: "/credentials/pkl-media-makasiow.pdf",
    proofLabel: "Lihat surat keterangan PKL",
  },
  {
    id: "exp-2",
    period: "2024",
    role: "National Finalist — Tim RUSDI",
    organization: "Abdidaya PPK Ormawa 2024",
    type: "Competition",
    description:
      "Membangun aplikasi bank sampah digital RUSDI berbasis Kodular & Spreadsheet dan mempresentasikan arsitektur alur datanya di tingkat nasional.",
    highlights: ["Kodular Mobile Logic", "Spreadsheet Data Architecture"],
    proofUrl: "/credentials/finalis-abdidaya-rusdi.jpg",
    proofLabel: "Lihat sertifikat finalis nasional",
  },
  {
    id: "exp-3",
    period: "2024",
    role: "1st Place (Divisi ITDP) & 4th Place (RPL)",
    organization: "LIDM 2024 & Gemastik 2024 (Tingkat Universitas)",
    type: "Competition",
    description:
      "Meraih Juara 1 inovasi teknologi pendidikan lewat aplikasi SiPanca (LIDM) dan Juara 4 rekayasa perangkat lunak lewat proyek SIP5 (Gemastik).",
    highlights: ["Software Engineering", "Educational App Development"],
    proofUrl: "/credentials/juara-lidm-gemastik.jpg",
    proofLabel: "Lihat piagam penghargaan",
  },
  {
    id: "exp-4",
    period: "Certified",
    role: "Junior Web Developer (JWD)",
    organization: "Sertifikasi Kompetensi Nasional (BNSP)",
    type: "Certification",
    description:
      "Tersertifikasi secara nasional dalam standar pengembangan web, struktur data, dan implementasi antarmuka aplikasi.",
    highlights: ["Web Standards", "Clean Code Implementation"],
    proofUrl: "/credentials/sertifikat-bnsp-jwd.pdf",
    proofLabel: "Lihat sertifikat BNSP",
  },
];
