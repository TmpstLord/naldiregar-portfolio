import { Project } from "@/types/portfolio";

export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Visit Suluttenggo Backend Services",
    slug: "visit-suluttenggo",
    description:
      "Merancang dan mengembangkan arsitektur backend untuk portal pariwisata regional, menangani manajemen rute API, dan skema database relasional.",
    techStack: ["PHP", "Laravel", "MySQL", "REST API"],
    featured: true,
  },
  {
    id: "2",
    title: "RUSDI - Digital Waste Bank Platform",
    slug: "rusdi-waste-bank",
    description:
      "Sistem bank sampah digital end-to-end yang berhasil lolos ke tahap final nasional Abdidaya PPK Ormawa 2024. Menangani manajemen pengguna dan pelacakan transaksi.",
    techStack: ["Node.js", "Express", "Firebase", "MongoDB"], // Sesuaikan stack jika berbeda
    githubUrl: "https://github.com/NaldiRegar/rusdi", // Ganti jika ada repo publik
    featured: true,
  },
  {
    id: "3",
    title: "Ocean Hero Performance Benchmark",
    slug: "ocean-hero-benchmark",
    description:
      "Studi kasus empiris membandingkan performa arsitektur Unity DOTS/ECS melawan MonoBehaviour OOP dalam skenario game 2D, difokuskan pada optimalisasi frame rate dan penggunaan memori.",
    techStack: [
      "Unity DOTS",
      "C#",
      "ECS Architecture",
      "Performance Profiling",
    ],
    featured: true,
  },
];
