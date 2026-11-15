"use client";

import { useState } from "react";
import {
  Cpu,
  Database,
  Layers,
  Smartphone,
  Server,
  ArrowRight,
} from "lucide-react";

type NodeDetail = {
  id: string;
  tag: string;
  title: string;
  tech: string;
  detail: string;
};

type DiagramConfig = {
  code: string;
  caption: string;
  nodes: NodeDetail[];
};

const DIAGRAMS: Record<string, DiagramConfig> = {
  "visit-suluttenggo": {
    code: "ARCH-01 // SSR & CLOUD NOSQL PIPELINE",
    caption:
      "Alur permintaan halaman dari browser, perutean logika JavaScript/Node.js, rendering template EJS di server, hingga sinkronisasi koleksi destinasi di Firebase.",
    nodes: [
      {
        id: "client",
        tag: "01. CLIENT",
        title: "Browser Pengunjung & Admin",
        tech: "HTML5 • Responsive UI",
        detail:
          "Mengirimkan HTTP GET untuk katalog wisata maupun request POST/PUT saat admin memperbarui data destinasi, akomodasi, dan agenda budaya.",
      },
      {
        id: "server",
        tag: "02. APP LAYER",
        title: "Node.js Router & Controller",
        tech: "JavaScript • Input Validation",
        detail:
          "Menangani parameter filter kategori wisata, memvalidasi payload form sebelum ditulis ke database, dan meneruskan objek data ke view engine.",
      },
      {
        id: "ejs",
        tag: "03. VIEW ENGINE",
        title: "EJS Server-Side Templating",
        tech: "Embedded JavaScript (.ejs)",
        detail:
          "Merender partial header, kartu destinasi, dan halaman detail secara dinamis di sisi server sehingga halaman langsung siap tampil tanpa loading kosong.",
      },
      {
        id: "firebase",
        tag: "04. CLOUD DB",
        title: "Firebase Database",
        tech: "NoSQL Collections • Real-time",
        detail:
          "Menyimpan dokumen terstruktur untuk koleksi destinasi, kategori wilayah Suluttenggo, fasilitas penginapan, dan metadata gambar.",
      },
    ],
  },

  "rusdi-waste-bank": {
    code: "ARCH-02 // LOW-CODE MOBILE & CLOUD LEDGER",
    caption:
      "Arsitektur pencatatan transaksi bank sampah dari aplikasi Android Kodular menuju tabel relasional Spreadsheet tanpa biaya infrastruktur server.",
    nodes: [
      {
        id: "kodular",
        tag: "01. MOBILE APP",
        title: "Aplikasi Android RUSDI",
        tech: "Kodular • Block Logic",
        detail:
          "Antarmuka terpisah untuk Operator (input jenis & berat sampah) dan Nasabah (cek saldo rupiah serta riwayat penyetoran secara langsung).",
      },
      {
        id: "logic",
        tag: "02. CALC ENGINE",
        title: "Konversi Berat & Validasi",
        tech: "HTTP Web Component",
        detail:
          "Mengalikan berat timbangan (kg) dengan tarif kategori sampah aktif, membentuk payload transaksi, dan mengirimkannya lewat request HTTP.",
      },
      {
        id: "sheet",
        tag: "03. DATA LEDGER",
        title: "Spreadsheet Multi-Sheet",
        tech: "Cloud Spreadsheet / Excel",
        detail:
          "Terbagi menjadi 3 tabel utama: Master_Nasabah (ID & saldo), Harga_Sampah (tarif per kg), dan Log_Transaksi sebagai jejak audit pengurus.",
      },
      {
        id: "report",
        tag: "04. MONITORING",
        title: "Rekap Volume & Audit",
        tech: "Automated Formula Sync",
        detail:
          "Formula agregasi otomatis menghitung total tonase sampah terkelola dan perputaran saldo nasabah untuk kebutuhan pelaporan program.",
      },
    ],
  },

  "ocean-hero-benchmark": {
    code: "ARCH-03 // MEMORY LAYOUT & CPU EXECUTION COMPARISON",
    caption:
      "Perbandingan tata letak memori dan eksekusi thread antara pendekatan tradisional MonoBehaviour OOP melawan Unity DOTS/ECS pada perangkat Android.",
    nodes: [
      {
        id: "oop",
        tag: "BASELINE // OOP",
        title: "MonoBehaviour Reference Heap",
        tech: "Class Objects • Main Thread",
        detail:
          "Setiap entitas sampah & biota dialokasikan terpencar di managed heap. Iterasi Update() memicu CPU cache miss dan lonjakan Garbage Collection (GC).",
      },
      {
        id: "ecs",
        tag: "OPTIMIZED // DOTS",
        title: "ECS Archetypes & 16KB Chunks",
        tech: "IComponentData Structs",
        detail:
          "Data posisi, kecepatan, dan status entitas disimpan rapat (contiguous) dalam blok memori 16KB tanpa overhead referensi objek.",
      },
      {
        id: "jobs",
        tag: "PARALLELISM",
        title: "C# Job System & Burst Compiler",
        tech: "Multi-Core Worker Threads",
        detail:
          "Simulasi pergerakan dan deteksi tumbukan ratusan entitas dijalankan paralel di seluruh core CPU dengan instruksi SIMD terkompilasi.",
      },
      {
        id: "profiler",
        tag: "EMPIRICAL TEST",
        title: "Android USB Hardware Profiling",
        tech: "Samsung Galaxy A15 • Unity Profiler",
        detail:
          "Pengukuran langsung frame time (ms), kestabilan FPS, dan alokasi memori GC pada skenario kepadatan entitas bertingkat.",
      },
    ],
  },

  "godot-game-systems": {
    code: "ARCH-04 // STATE-DRIVEN MULTI-REGION ARCHITECTURE",
    caption:
      "Sentralisasi status progres permainan melalui Global Autoload Singleton untuk menjaga konsistensi misi, timer HUD, dan dialog NPC lintas scene.",
    nodes: [
      {
        id: "global",
        tag: "01. SINGLETON",
        title: "Global State Manager",
        tech: "Autoload GDScript • Flags",
        detail:
          "Menyimpan state persisten lintas scene seperti status penyelesaian misi Solara dan flag Global.aquawheel_activated di wilayah Riverfall.",
      },
      {
        id: "mission",
        tag: "02. MISSION LOOP",
        title: "Solara Mission & HUD Timer",
        tech: "Signals • Lifecycle Reset",
        detail:
          "Mengatur countdown timer HUD, menangani kondisi _on_time_up() dan fail_mission(), serta mereset ulang state mesin (machine.gd) saat retry.",
      },
      {
        id: "npc",
        tag: "03. WORLD STATE",
        title: "Riverfall & Dynamic NPC",
        tech: "Conditional Dialogue Tree",
        detail:
          "Mengevaluasi flag global saat pemain berinteraksi dengan NPC sehingga dialog otomatis beralih dari misi awal ke dialog penyelesaian.",
      },
      {
        id: "api",
        tag: "04. BACKEND SYNC",
        title: "Game Telemetry & Progress API",
        tech: "HTTPRequest • JSON Payload",
        detail:
          "Mengirimkan skor minigame edukasi dan status pencapaian pemain ke layanan backend untuk pencatatan progres.",
      },
    ],
  },

  "accreditation-dashboard": {
    code: "ARCH-05 // DYNAMIC LKPS/LED & PROGRESS ENGINE",
    caption:
      "Arsitektur pengelolaan instrumen akreditasi Program Studi Sistem Informasi dengan pembangun tabel dinamis, agregasi progres otomatis, dan mode asesor.",
    nodes: [
      {
        id: "roles",
        tag: "01. ACCESS CONTROL",
        title: "Tim Penyusun & Mode Asesor",
        tech: "Laravel Auth & Role Guard",
        detail:
          "Memisahkan hak akses input/edit data borang bagi tim penyusun dengan tampilan baca-saja (read-only) yang ringkas saat visitasi asesor.",
      },
      {
        id: "builder",
        tag: "02. DYNAMIC TABLE",
        title: "Column Builder & Row Sorting",
        tech: "JSON Schema • Drag & Drop",
        detail:
          "Memungkinkan penyesuaian struktur kolom tabel LKPS yang bervariasi serta pengurutan ulang baris instrumen tanpa migrasi skema berulang.",
      },
      {
        id: "progress",
        tag: "03. AUTO-PROGRESS",
        title: "Database Completeness Engine",
        tech: "MySQL Aggregation Queries",
        detail:
          "Menghitung rasio sel terisi dan bukti dokumen terunggah pada setiap kriteria LKPS/LED secara otomatis ke dalam progress bar berindikator warna.",
      },
      {
        id: "viewer",
        tag: "04. VERIFICATION",
        title: "Global Search & PDF Viewer",
        tech: "Cross-Table Query • Inline PDF",
        detail:
          "Pencarian instan lintas instrumen akreditasi yang terhubung langsung ke pratinjau dokumen bukti fisik PDF di dalam layar yang sama.",
      },
    ],
  },
};

export default function ArchitectureDiagram({ slug }: { slug: string }) {
  const config = DIAGRAMS[slug];
  const [selectedId, setSelectedId] = useState<string>(
    config?.nodes[0]?.id ?? "",
  );

  if (!config) return null;

  const activeNode =
    config.nodes.find((n) => n.id === selectedId) || config.nodes[0];

  return (
    <div className="mt-10 border border-[var(--line)] bg-[var(--deck)]/65">
      {/* Top Blueprint Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] bg-[var(--deck)] px-5 py-3 font-mono text-xs">
        <span className="text-[var(--bolt)]">{config.code}</span>
        <span className="text-[var(--rain)]">
          Klik komponen untuk inspeksi teknis
        </span>
      </div>

      {/* Visual Diagram Canvas */}
      <div className="p-5 sm:p-7">
        {slug === "ocean-hero-benchmark" ? (
          /* Layout khusus perbandingan Head-to-Head DOTS vs OOP */
          <div className="grid gap-4 md:grid-cols-2">
            {config.nodes.map((node, index) => {
              const isSelected = node.id === activeNode.id;
              const isOop = node.id === "oop";
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  className={`cursor-pointer border p-4 text-left transition-all ${
                    isSelected
                      ? "border-[var(--bolt)] bg-[var(--squall)]"
                      : "border-[var(--line)] bg-[var(--squall)]/50 hover:border-[var(--rain)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                    <span
                      className={
                        isOop ? "text-[#ff9d8a]" : "text-[var(--bolt)]"
                      }
                    >
                      {node.tag}
                    </span>
                    <span className="text-[var(--rain)]">0{index + 1}</span>
                  </div>
                  <p className="mt-2 font-mono text-sm font-semibold text-[var(--bone)]">
                    {node.title}
                  </p>
                  <p className="mt-1 font-mono text-xs text-[var(--rain)]">
                    {node.tech}
                  </p>
                </button>
              );
            })}
          </div>
        ) : (
          /* Layout Pipeline 4-Tahap terhubung */
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {config.nodes.map((node, idx) => {
              const isSelected = node.id === activeNode.id;
              return (
                <div key={node.id} className="relative flex items-stretch">
                  <button
                    type="button"
                    onClick={() => setSelectedId(node.id)}
                    className={`flex w-full cursor-pointer flex-col justify-between border p-4 text-left transition-all ${
                      isSelected
                        ? "border-[var(--bolt)] bg-[var(--squall)] shadow-[0_0_0_1px_var(--bolt)]"
                        : "border-[var(--line)] bg-[var(--squall)]/55 hover:border-[var(--rain)]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                        <span
                          className={
                            isSelected
                              ? "text-[var(--bolt)]"
                              : "text-[var(--rain)]"
                          }
                        >
                          {node.tag}
                        </span>
                        {idx === 0 && (
                          <Smartphone className="h-3.5 w-3.5 text-[var(--rain)]" />
                        )}
                        {idx === 1 && (
                          <Cpu className="h-3.5 w-3.5 text-[var(--rain)]" />
                        )}
                        {idx === 2 && (
                          <Database className="h-3.5 w-3.5 text-[var(--rain)]" />
                        )}
                        {idx === 3 && (
                          <Server className="h-3.5 w-3.5 text-[var(--rain)]" />
                        )}
                      </div>
                      <p className="mt-2.5 font-mono text-sm font-semibold leading-snug text-[var(--bone)]">
                        {node.title}
                      </p>
                    </div>
                    <p className="mt-3 border-t border-[var(--line)]/60 pt-2 font-mono text-[11px] text-[var(--rain)]">
                      {node.tech}
                    </p>
                  </button>

                  {idx < config.nodes.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="my-auto hidden h-4 w-4 shrink-0 text-[var(--bolt)]/70 lg:-mr-2.5 lg:ml-0.5 lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Active Node Inspector Panel */}
        <div className="mt-5 border-l-2 border-[var(--bolt)] bg-[var(--squall)]/85 px-4 py-3.5">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <Layers className="h-3.5 w-3.5 text-[var(--bolt)]" />
            <span className="font-semibold text-[var(--bone)]">
              {activeNode.title}
            </span>
            <span className="text-[var(--rain)]">— {activeNode.tech}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-[var(--bone)]/85">
            {activeNode.detail}
          </p>
        </div>

        <p className="mt-4 text-xs leading-5 text-[var(--rain)]">
          {config.caption}
        </p>
      </div>
    </div>
  );
}
