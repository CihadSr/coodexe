import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coodexe - Web Tasarım & SEO Ajansı",
  description: "Coodexe ile dijital varlığınızı güçlendirin. Web tasarım, SEO ve yazılım desteğiyle öne çıkın.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Coodexe - Web Tasarım & SEO Ajansı",
    description: "Coodexe ile dijital varlığınızı güçlendirin. Web tasarım ve SEO hizmetleri alın.",
    url: "https://coodexe.com",
    siteName: "Coodexe",
    images: [
      {
        url: "https://coodexe.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coodexe SEO ve Web Tasarım",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white`}>
        <Navbar />
        <ScrollProgressBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
