import type { Metadata } from "next/metadata";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raynaldi Irfansya Regar — Fullstack & Game Backend Engineer",
  description:
    "Portofolio profesional dan bedah teknis studi kasus pengembangan web dan game.",
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
