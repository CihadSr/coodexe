"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const hasTriggered = useRef(false);

  // WhatsApp butonunun scroll ile görünmesi
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Asistan mesajı tetikleme (sadece 1 kez)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const dismissed = sessionStorage.getItem("coodexe-assist-dismissed");
    if (dismissed === "true") return;

    const handleScroll = () => {
      if (window.scrollY > 100 && !hasTriggered.current) {
        hasTriggered.current = true;
        setTimeout(() => {
          setShowMessage(true);
        }, 10000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMessage = () => {
    sessionStorage.setItem("coodexe-assist-dismissed", "true");
    setShowMessage(false);
  };

  return (
    <>
      {/* Asistan mesaj kutusu */}
      <AnimatePresence>
        {showButton && showMessage && (
          <motion.div
            key="whatsapp-message"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-[120px] z-50 max-w-[260px] sm:max-w-xs bg-white border border-green-200 shadow-xl px-4 py-3 rounded-xl text-sm text-gray-800 font-medium flex items-start gap-3"
          >
            <div className="flex-1">
              <p className="leading-snug">
                Hızlıca yardımcı olabiliriz.{" "}
                <span className="text-green-600 font-semibold">
                  WhatsApp’tan yazın!
                </span>
              </p>
            </div>
            <button
              onClick={handleCloseMessage}
              className="text-gray-400 hover:text-gray-600 transition mt-0.5"
              aria-label="Asistan mesajını kapat"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp sabit butonu */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
           <Link
  href="https://wa.me/905525794573"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp ile iletişime geç"
  className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300"
>
  {/* İkon kısmı */}
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:scale-110 transition-transform duration-300 blur-sm" />
    <div className="bg-white text-green-600 rounded-full p-2 group-hover:rotate-[12deg] group-hover:scale-110 transition-transform duration-300 shadow-md">
      <MessageCircle className="w-5 h-5" />
    </div>
  </div>

  {/* Yazı kısmı (sadece masaüstü) */}
  <span className="hidden sm:inline font-semibold tracking-tight text-sm group-hover:tracking-wider transition-all duration-300">
    Bize WhatsApp’tan Yazın
  </span>
</Link>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
