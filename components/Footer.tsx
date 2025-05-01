"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 text-sm py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Marka */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">Coodexe</h3>
          <p>Dijital dünyada iz bırakan çözümler sunuyoruz. Modern altyapı, güçlü tasarım ve güvenilir sonuçlar.</p>
        </div>

        {/* Linkler */}
        <div className="flex flex-col space-y-2">
          <Link href="#hero" className="hover:text-white transition-colors">Anasayfa</Link>
          <Link href="#services" className="hover:text-white transition-colors">Hizmetler</Link>
          <Link href="#roadmap" className="hover:text-white transition-colors">Yol Haritası</Link>
          <Link href="#contact" className="hover:text-white transition-colors">İletişim</Link>
        </div>

        {/* Sosyal */}
        <div>
          <p className="mb-3">Bizi Takip Edin</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/coodexe/profilecard/?igsh=MW8ybGVvZGg4dnYxZg==" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1ACH288sba/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Satır */}
      <div className="mt-12 text-center text-xs text-gray-600 border-t border-gray-800 pt-6">
        © 2025 Coodexe. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
