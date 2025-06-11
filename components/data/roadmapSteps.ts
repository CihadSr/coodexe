import {
  Search,
  LayoutTemplate,
  TerminalSquare,
  ClipboardCheck,
  Globe2,
  Trophy,
} from "lucide-react";

export const steps = [
  {
    title: "İhtiyaç Analizi",
    subtitle: "1-2 Gün",
    description: [
      "Proje ihtiyaçlarınızı birebir görüşmelerle detaylı analiz ediyoruz.",
      "Hedeflerinizi ve iş potansiyelinizi keşfederek doğru yol haritası çıkarıyoruz.",
      "Size özel stratejik çözüm planı hazırlıyoruz.",
    ],
    icon: Search,
  },
  {
    title: "Tasarım ve Prototip",
    subtitle: "2-4 Gün",
    description: [
      "Modern ve kullanıcı dostu tasarımlar oluşturuyoruz.",
      "İlk prototipleri onayınıza sunuyoruz ve revize taleplerinizi uyguluyoruz.",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Geliştirme",
    subtitle: "3-7 Gün",
    description: [
      "Test edilmiş, performanslı ve ölçeklenebilir kod altyapısı geliştiriyoruz.",
      "Web sitenizi cihaz uyumlu ve SEO dostu hale getiriyoruz.",
    ],
    icon: TerminalSquare,
  },
  {
    title: "Test & Yayın",
    subtitle: "1 Gün",
    description: [
      "Tüm cihazlarda testlerimizi tamamlıyoruz.",
      "Yayın öncesi son kontrolleri yapıyoruz ve projenizi canlıya alıyoruz.",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Global Erişim",
    subtitle: "Sürekli",
    description: [
      "Web sitenizi hız, SEO ve erişilebilirlik testlerinden geçiriyoruz.",
      "Google optimizasyonları ile arama sonuçlarınız güçleniyor.",
    ],
    icon: Globe2,
  },
  {
    title: "Başarı Takibi",
    subtitle: "Sürekli",
    description: [
      "Ziyaretçi ve performans analizleri ile size düzenli raporlar sunuyoruz.",
      "Yeni fırsatlar için stratejik önerilerde bulunuyoruz.",
    ],
    icon: Trophy,
  },
];
