import { Project, Experience } from "@/types/portfolio";

export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Visit Suluttenggo Backend Services",
    slug: "visit-suluttenggo",
    role: "Backend Web Developer Intern",
    timeline: "2024 • PT Media Makasiow",
    description:
      "Merancang dan mengembangkan arsitektur backend untuk portal pariwisata regional, menangani manajemen rute API, dan skema database relasional.",
    techStack: ["PHP", "Laravel", "MySQL", "REST API"],
    featured: true,
    problem:
      "Portal informasi pariwisata regional membutuhkan pengelolaan data destinasi, akomodasi, dan agenda budaya yang terstruktur dengan waktu respons cepat serta pemisahan hak akses pengelola konten.",
    solution:
      "Membangun layanan RESTful API terstandarisasi menggunakan Laravel dengan normalisasi skema database MySQL, validasi request berlapis, dan optimasi query relasional untuk meminimalkan beban server.",
    architectureHighlights: [
      "Perancangan skema relasional MySQL dengan indexing pada kolom pencarian destinasi dan kategori.",
      "Pemisahan layer Controller, Service, dan Request Validation agar kode mudah dipelihara.",
      "Standardisasi format JSON response dan penanganan HTTP status code untuk konsumsi frontend.",
    ],
    metrics: [
      {
        label: "Arsitektur",
        value: "REST API",
        note: "Modular Service Pattern",
      },
      {
        label: "Database",
        value: "MySQL",
        note: "Normalized Relational Schema",
      },
      {
        label: "Fokus Utama",
        value: "Data Integrity",
        note: "Server-side Validation",
      },
    ],
  },
  {
    id: "2",
    title: "RUSDI - Digital Waste Bank Platform",
    slug: "rusdi-waste-bank",
    role: "Full-Stack Developer",
    timeline: "2024 • Abdidaya PPK Ormawa National Finalist",
    description:
      "Sistem bank sampah digital end-to-end yang lolos ke tahap final nasional Abdidaya PPK Ormawa 2024. Menangani manajemen pengguna dan pelacakan transaksi.",
    techStack: ["Node.js", "Express", "Firebase", "MySQL"],
    githubUrl: "https://github.com/TmpstLord",
    featured: true,
    problem:
      "Pencatatan setoran sampah, konversi poin/saldo nasabah, dan rekapitulasi operasional bank sampah masih berjalan manual sehingga rawan selisih data dan sulit dipantau secara real-time.",
    solution:
      "Mengembangkan platform digital terintegrasi yang mencatat transaksi penimbangan sampah, menghitung konversi saldo otomatis, serta menyediakan dashboard pemantauan bagi pengelola dan nasabah.",
    architectureHighlights: [
      "Alur pencatatan transaksi setoran sampah dengan riwayat audit yang transparan bagi nasabah.",
      "Sinkronisasi data pengguna dan autentikasi berbasis peran (nasabah vs. operator bank sampah).",
      "Dashboard rekapitulasi volume sampah terkelola untuk mendukung pelaporan program.",
    ],
    metrics: [
      {
        label: "Pencapaian",
        value: "National Finalist",
        note: "Abdidaya PPK Ormawa 2024",
      },
      {
        label: "Core Flow",
        value: "End-to-End",
        note: "Penimbangan hingga Saldo",
      },
      {
        label: "Backend",
        value: "Express & Cloud",
        note: "Real-time Data Sync",
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
    githubUrl: "https://github.com/TmpstLord",
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
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "2024",
    role: "Backend Web Developer Intern (PKL)",
    organization: "PT Media Makasiow",
    type: "Internship",
    description:
      "Mengembangkan layanan backend dan struktur database untuk portal informasi pariwisata regional Visit Suluttenggo.",
    highlights: [
      "RESTful API Design",
      "Relational Database Modeling",
      "Backend Optimization",
    ],
  },
  {
    id: "exp-2",
    period: "2024",
    role: "National Finalist — Tim RUSDI",
    organization: "Abdidaya PPK Ormawa 2024",
    type: "Competition",
    description:
      "Membangun platform bank sampah digital RUSDI dan mempresentasikan arsitektur sistem di tingkat nasional.",
    highlights: ["Full-Stack Architecture", "Digital Transaction Flow"],
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
  },
];
