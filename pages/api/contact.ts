import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("👉 API endpoint'e istek geldi.");

  if (req.method !== "POST") {
    console.warn("⛔ Geçersiz istek metodu:", req.method);
    return res.status(405).json({ message: "Yalnızca POST istekleri desteklenir." });
  }

  const { name, email, message, company, token } = req.body;
  console.log("📩 Form verisi:", { name, email, message, company, token });

  if (company && company.trim() !== "") {
    console.warn("🛑 Bot şüphesi - honeypot dolu.");
    return res.status(403).json({ message: "Bot etkinliği tespit edildi." });
  }

  const blockedKeywords = ["viagra", "crypto", "btc", "porn", "casino"];
  const isSpam = blockedKeywords.some((kw) => message.toLowerCase().includes(kw));
  if (isSpam) {
    console.warn("🚫 Spam içerik tespit edildi.");
    return res.status(403).json({ message: "Spam içerik algılandı." });
  }

  if (!name || !email || !message || !token) {
    console.warn("⚠️ Eksik alanlar var.");
    return res.status(400).json({ message: "Tüm alanlar zorunludur." });
  }

  try {
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    console.log("🧠 reCAPTCHA doğrulama sonucu:", recaptchaData);

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.warn("⚠️ reCAPTCHA doğrulaması başarısız.");
      return res.status(403).json({ message: "reCAPTCHA doğrulaması başarısız." });
    }
  } catch (err) {
    console.error("💥 reCAPTCHA isteği çöktü:", err);
    return res.status(500).json({ message: "reCAPTCHA doğrulama hatası." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `İletişim Formu <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Yeni Mesaj: ${name}`,
      html: `
        <h3>Yeni İletişim Mesajı</h3>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("✅ Mail başarıyla gönderildi.");
    res.status(200).json({ message: "Mesaj gönderildi" });
  } catch (error) {
    console.error("❌ Mail gönderme hatası:", error);
    res.status(500).json({ message: "Mail gönderilemedi." });
  }
}
