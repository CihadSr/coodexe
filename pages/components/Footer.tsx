"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-sm px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Marka Bilgisi */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">Coodexe</h3>
          <p>
            Dijital dünyada iz bırakan çözümler sunuyoruz. Modern altyapı,
            güçlü tasarım ve güvenilir sonuçlar.
          </p>
        </div>

        {/* Sayfa Linkleri */}
        <nav className="flex flex-col gap-2">
          <FooterLink href="#hero" label="Anasayfa" />
          <FooterLink href="#services" label="Hizmetler" />
          <FooterLink href="#roadmap" label="Yol Haritası" />
          <FooterLink href="#contact" label="İletişim" />
        </nav>

        {/* Sosyal Medya */}
        <div>
          <p className="mb-3">Bizi Takip Edin</p>
          <div className="flex gap-4">
            <SocialIcon
              href="https://www.instagram.com/coodexe/profilecard/?igsh=MW8ybGVvZGg4dnYxZg=="
              icon={<Instagram className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://linkedin.com"
              icon={<Linkedin className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://www.facebook.com/share/1ACH288sba/"
              icon={<Facebook className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-neutral-600 border-t border-neutral-800 pt-6">
        © 2025 Coodexe. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="hover:text-white transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}
