"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Anasayfa" },
  { id: "services", label: "Hizmetler" },
  { id: "whyus", label: "Neden Biz" },
  { id: "projects", label: "Projeler" },
  { id: "about", label: "Hakkımızda" },
  { id: "roadmap", label: "Yol Haritası" },
  { id: "testimonials", label: "Referanslar" },
  { id: "seo", label: "SEO" },
  { id: "contact", label: "İletişim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionElements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sectionElements.forEach((el) => observer.current!.observe(el!));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#hero" className="text-2xl font-bold text-gray-900 dark:text-white">
          Coodexe
        </Link>

        <nav className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`py-1 px-3 rounded-full text-sm font-medium transition-colors ${
                activeSection === id
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-600/20"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 dark:text-white focus:outline-none"
          aria-label="Menü Aç/Kapat"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-black px-4 py-4 shadow-lg"
          >
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  activeSection === id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}