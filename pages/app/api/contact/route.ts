import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message, company, token } = await req.json();

  if (company && company.trim() !== "") {
    return NextResponse.json({ message: "Bot etkinliği tespit edildi." }, { status: 403 });
  }

  if (!name || !email || !message || !token) {
    return NextResponse.json({ message: "Zorunlu alanlar eksik." }, { status: 400 });
  }

  // (reCAPTCHA doğrulaması burada olabilir — istersen eklerim)

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

    return NextResponse.json({ message: "Mesaj başarıyla gönderildi." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Mail gönderme hatası." }, { status: 500 });
  }
}
console.log("🚀 API çalıştı!");
