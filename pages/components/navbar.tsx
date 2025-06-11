"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import NavLink from "@/components/ui/NavLink";
import { useActiveSection } from "@/components/hooks/useActiveSection";

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
  const activeSection = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#hero" className="text-2xl font-bold text-gray-900">
          coodexe
        </Link>

        <nav className="hidden md:flex space-x-2 items-center">
          {sections.map(({ id, label }) => (
            <NavLink key={id} href={`#${id}`} label={label} active={activeSection === id} />
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label="Menüyü Aç"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-md p-4">
              {sections.map(({ id, label }) => (
                <NavLink
                  key={id}
                  href={`#${id}`}
                  label={label}
                  active={activeSection === id}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
