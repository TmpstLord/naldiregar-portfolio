import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth"],
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Raynaldi Irfansya Regar — Software Engineer | Portfolio",
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
      {/* Warna latar dan teks sekarang diatur lewat globals.css */}
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
