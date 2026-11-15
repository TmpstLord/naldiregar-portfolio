import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Inspector from "@/components/inspector";
import StatusBar from "@/components/StatusBar";

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
  title: "Raynaldi Irfansya Regar - software engineer | Portfolio",
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
      <body
        className={`${display.variable} ${body.variable} antialiased pb-8 print:pb-0`}
      >
        <Navbar />
        {children}
        <Footer />
        <Inspector />
        <StatusBar />
      </body>
    </html>
  );
}
