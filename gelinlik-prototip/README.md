# Mira Couture — Gelinlik Butiği Web Sitesi Prototipi

Antalya'daki bir gelinlik couture atölyesi için hazırlanmış, **tamamen statik**
(framework'süz, build adımsız) müşteri sunum prototipi.

---

## Nasıl açılır?

Kurulum gerekmez. `index.html` dosyasına **çift tıklamanız yeterli** —
site tarayıcıda doğrudan açılır.

İsterseniz basit bir yerel sunucu ile de çalıştırabilirsiniz:

```bash
cd gelinlik-prototip
python3 -m http.server 8000
# ardından: http://localhost:8000
```

> Not: Google Fonts, Unsplash görselleri ve Google Maps haritası internetten
> yüklendiği için siteyi **çevrimiçi** görüntülemek en doğru sonucu verir.
> İnternet olmadan da sayfa düzeni bozulmaz; yazı tipleri sistem alternatiflerine
> düşer, görsellerin yerinde ise tasarıma uygun bej degrade + "M" monogramı görünür.

---

## Dosya yapısı

```
gelinlik-prototip/
├── index.html            Ana sayfa
├── koleksiyonlar.html    Filtrelenebilir ürün galerisi + lightbox
├── hakkimizda.html       Hikâye, değerler, showroom, kurucu alıntısı
├── iletisim.html         Randevu formu + iletişim bilgileri + harita
├── assets/
│   ├── css/style.css     Tüm stiller (tek dosya, mobile-first)
│   └── js/main.js        Tüm etkileşimler (vanilla JS, bağımlılık yok)
└── README.md
```

Header ve footer her sayfada **statik olarak kopyalanmıştır**. Bir menü
bağlantısı değiştirildiğinde dört HTML dosyasının da güncellenmesi gerekir.

---

## Marka adını değiştirme

"Mira Couture" ve alt başlık "Gelinlik & Couture Atölyesi" placeholder'dır.
Değiştirmek için dört HTML dosyasında şu yerleri düzenleyin:

| Nerede | Ne |
|---|---|
| `<title>` ve `<meta name="description">` | Sayfa başlığı ve açıklaması |
| `.brand-name` / `.brand-tag` (header) | Sol üstteki marka adı |
| `.footer-brand` (footer) | Footer'daki marka adı ve kısa tanıtım |
| Footer alt satırı | `© Mira Couture` |
| `assets/css/style.css` → `.ph::before` ve `.form-success .mono` | Görsel yer tutucudaki **"M" monogramı** — yeni markanın baş harfiyle değiştirin |

Hızlı yöntem (tüm dosyalarda toplu değiştirme):

```bash
cd gelinlik-prototip
grep -rl "Mira Couture" . | xargs sed -i 's/Mira Couture/YENİ MARKA/g'
```

---

## Renkleri değiştirme

Tüm renkler `assets/css/style.css` dosyasının en üstündeki `:root` bloğunda
CSS değişkeni olarak tanımlıdır. **Sadece burayı** düzenlemek yeterlidir:

```css
:root {
  --c-bg:     #FBF9F5;  /* fildişi — sayfa arka planı */
  --c-ink:    #1F1D1A;  /* koyu mürekkep — metin */
  --c-mink:   #8A7A66;  /* vizon — ikincil metin, etiketler */
  --c-gold:   #B08D57;  /* şampanya altını — vurgu, butonlar, çizgiler */
  --c-powder: #EDE0D8;  /* çok hafif pudra — açık bant arka planı */
  --c-dark:   #26221E;  /* koyu bant — footer, yorumlar bölümü */

  /* Aşağıdakiler yukarıdaki iki rengin koyulaştırılmış türevidir.
     Küçük etiket metinleri ve beyaz yazılı dolu butonlarda WCAG AA
     kontrastını sağlamak için kullanılır. Vizon ve altın tonlarını
     değiştirirseniz bunları da orantılı olarak koyultun. */
  --c-mink-deep: #6F6152;
  --c-gold-deep: #8C6B39;
}
```

Yazı tipleri de aynı blokta (`--f-display`, `--f-body`). Font değiştirirseniz
her HTML dosyasının `<head>` bölümündeki Google Fonts `<link>` satırını da
güncelleyin.

---

## Fotoğraflar hakkında — ÖNEMLİ

Prototipteki **tüm fotoğraflar Unsplash üzerinden çekilen geçici stok
görsellerdir** ve yalnızca sunum amaçlıdır. Bunlar mağazaya ait değildir.

Canlıya alınmadan önce tamamı **atölyenin kendi çekimleriyle
değiştirilmelidir.** Değiştirme adımları:

1. Fotoğrafları `assets/img/` klasörüne koyun (klasörü siz oluşturun).
2. İlgili `<img src="https://images.unsplash.com/...">` satırını
   `<img src="assets/img/dosya-adi.jpg">` şeklinde güncelleyin.
3. `alt` metnini fotoğrafı gerçekten tarif edecek şekilde Türkçe yazın
   (erişilebilirlik ve SEO için önemlidir).
4. Önerilen oran: dikey kartlar için **3:4**, hero görseli için geniş yatay
   (en az 1800px genişlik).

Her `<img>` etiketinde `loading="lazy"` ve `onerror` koruması vardır; görsel
yüklenemezse kutunun içindeki degrade + monogram yer tutucu görünür ve
tasarım bozulmaz.

---

## Sahte / placeholder içerikler

Sunum öncesi gerçek bilgilerle değiştirilmesi gereken alanlar:

- **Telefon:** `0 (5xx) xxx xx xx` ve `tel:+905000000000` bağlantıları
- **WhatsApp:** `https://wa.me/905000000000`
- **E-posta:** `merhaba@miracouture.com`
- **Adres:** "Muratpaşa, Antalya" (footer, iletişim kartı, harita `iframe`)
- **Sosyal medya:** Instagram / Facebook / Pinterest bağlantıları ana sayfalara gidiyor
- **Model isim ve kodları:** Serena/MC-2601 vb. örnek verilerdir
- **Gelin yorumları:** örnek metinlerdir, gerçek yorumlarla değiştirilmelidir

### Randevu formu çalışmıyor (bilinçli)

`iletisim.html` içindeki randevu formunun **arkasında gerçek bir sunucu yoktur.**
JavaScript yalnızca alanları doğrular ve başarılı durumda formun yerine
"Talebiniz alındı" mesajını gösterir. Hiçbir veri gönderilmez veya kaydedilmez.

Canlıya alırken şu seçeneklerden biri kurulmalıdır:
- Formspree / Basin gibi bir form servisi (`<form action="...">`)
- Kendi sunucunuzda bir e-posta gönderme uç noktası
- Ya da form tamamen kaldırılıp doğrudan WhatsApp yönlendirmesi kullanılabilir

---

## Teknik notlar

- Semantik HTML5, sayfa başına tek `<h1>`, `lang="tr"`, UTF-8
- Mobile-first CSS; kırılım noktaları **600px / 768px / 1024px / 1200px**
  (360px genişlikte de sorunsuz çalışır)
- Klavye erişilebilirliği: görünür odak halkaları, "İçeriğe geç" bağlantısı,
  `aria-expanded` yönetilen mobil menü, ESC ile kapanan lightbox
- Scroll animasyonları `IntersectionObserver` ile; `prefers-reduced-motion`
  açık kullanıcılarda tüm hareket devre dışı kalır
- Inline stil kullanılmamıştır (tek istisna: görsel hatasında çalışan
  `onerror` koruması)
- Harita `iframe`'i yüklenemezse altındaki adres kutusu bilgiyi zaten gösterir
