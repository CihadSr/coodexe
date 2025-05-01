"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📨 Form gönderiliyor:", formData);

    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      console.error("🚫 reCAPTCHA token alınamadı.");
      setErrorMsg("Güvenlik doğrulaması başarısız oldu. Sayfayı yenileyin.");
      setStatus("error");
      return;
    }

    recaptchaRef.current?.reset();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const result = await response.json();
      console.log("📬 API yanıtı:", result);

      if (!response.ok) {
        console.error("❌ API hatası:", result.message);
        setErrorMsg(result.message || "Bilinmeyen hata");
        setStatus("error");
        return;
      }

      setStatus("success");
      setErrorMsg("");
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (error: any) {
      console.error("💣 İstek sırasında hata:", error);
      setErrorMsg("İstek gönderilemedi, ağ hatası olabilir.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-neutral-900 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Bizimle İletişime Geç
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-[#1a1a1a] shadow-xl rounded-xl p-8 grid gap-6 text-left"
        >
          <input
            type="text"
            name="company"
            className="hidden"
            value={formData.company}
            onChange={handleChange}
            aria-hidden="true"
            tabIndex={-1}
          />

          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2b2b2b] text-gray-800 dark:text-white"
          />

          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresiniz"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2b2b2b] text-gray-800 dark:text-white"
          />

          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınız"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2b2b2b] text-gray-800 dark:text-white"
          ></textarea>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="invisible"
          />

          <button
            type="submit"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
          >
            Gönder
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 mt-4">✅ Mesaj başarıyla gönderildi!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 mt-4">❌ {errorMsg}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
