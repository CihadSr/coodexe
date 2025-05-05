"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    let rawToken: string | null | undefined = null;

    try {
      rawToken = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error("ReCAPTCHA hatası:", err);
      setStatus("error");
      return;
    }

    const token: string = rawToken ?? "";

    if (!token) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company: "", // honeypot
          token,
        }),
      });

      if (!response.ok) throw new Error("Gönderim başarısız");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="max-w-xl mx-auto px-4 py-10 bg-white shadow-xl rounded-2xl scroll-mt-20">
      {status === "success" ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Mesajınız iletildi!</h3>
          <p className="text-gray-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad Soyad *</label>
            <input
              id="name"
              name="name"
              required
              autoComplete="off"
              placeholder="Adınızı yazın"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Posta *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="off"
              placeholder="E-posta adresiniz"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon (Opsiyonel)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="off"
              placeholder="Telefon numaranız"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Konu</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input"
            >
              <option value="">Konu seçin</option>
              <option value="Teklif">Teklif Talebi</option>
              <option value="Destek">Teknik Destek</option>
              <option value="İş Birliği">İş Birliği</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesaj *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              autoComplete="off"
              placeholder="Mesajınızı yazın"
              value={formData.message}
              onChange={handleChange}
              className="input"
            />
          </div>

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="invisible"
            ref={recaptchaRef}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">❌ Mesaj gönderilemedi. Lütfen tekrar deneyin.</p>
          )}
        </form>
      )}
    </div>
  );
}
