// app/layout.tsx
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coodexe - Web Tasarım & SEO Ajansı",
    description: "Coodexe ile dijital varlığınızı güçlendirin. İzmir merkezli ajansımızla web tasarım ve SEO hizmetleri alın.",
    images: ["https://coodexe.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ScrollProgressBar />
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}