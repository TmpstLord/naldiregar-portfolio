import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MasterOfTempest | Raynaldi Irfansya Regar",
  description:
    "Portofolio Full-Stack Web & Game Backend Engineer — Studi kasus arsitektur Laravel, Express.js, Unity DOTS/ECS, dan Godot Engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-200 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
