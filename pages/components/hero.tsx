"use client";

import { useRef } from "react";
import { useParticleCanvas } from "@/components/hooks/useParticleCanvas";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useParticleCanvas(canvasRef);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    if (!canvas || !ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createParticles = () => {
      particles = Array.from({ length: 70 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff44";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      requestAnimationFrame(draw);
    };

    createParticles();
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black"
    >
      {/* Arka Plan Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* İçerik */}
      <div className="relative z-10 max-w-5xl w-full px-4 text-center sm:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl tracking-tight leading-tight sm:leading-[1.2]"
        >
          <div className="sm:text-left text-center">
  Dijitalde <span className="text-orange-400">Gücünüzü</span><br />Keşfedin
</div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto sm:mx-0"
        >
          Size özel teknolojiler ve güçlü stratejilerle dijital başarıyı garanti altına alıyoruz.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all text-sm sm:text-base"
        >
          Projeni Başlat
        </motion.a>
      </div>

      {/* Aşağı Kaydır Butonu */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-10 cursor-pointer"
        onClick={() =>
          document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
