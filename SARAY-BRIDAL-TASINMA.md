# Saray Bridal — Temiz Başlangıç Notu

Bu not, gelinlik sitesini `coodexe` deposundan çıkarıp **kendi başına bir proje**
haline getirmek içindir. Bilgisayarınızda bir kez çalıştırılır, sonra bu depoyla
işiniz kalmaz.

Site dosyaları şu an burada:
`coodexe` deposu → `claude/bridal-shop-website-prototype-510j6l` dalı →
`public/gelinlik-prototip/` klasörü (15 dosya, 784 KB).

---

## Yol 1 — Bilgisayarda Claude Code'a yapıştırılacak komut (en kolay)

Bilgisayarınızda bir terminal açın, `claude` yazıp Claude Code'u başlatın ve
aşağıdaki metni **olduğu gibi** yapıştırın:

```
Masaüstümde "saray-bridal" adında yeni bir klasör aç ve şu işi yap:

1. https://github.com/CihadSr/coodexe deposunun
   claude/bridal-shop-website-prototype-510j6l dalını geçici olarak indir.
2. İçindeki public/gelinlik-prototip/ klasörünün TÜM içeriğini
   saray-bridal klasörünün köküne kopyala (alt klasör oluşturma;
   index.html doğrudan kökte olsun).
3. gorsel-secim.html dosyasını silme listesine al, o iç kullanım içindi.
4. Geçici indirmeyi ve içindeki .git klasörünü tamamen sil.
5. saray-bridal klasöründe sıfırdan yeni bir git deposu başlat,
   her şeyi ekle ve "Saray Bridal Gelinlik - ilk sürüm" mesajıyla commit et.
6. Klasöre bir CLAUDE.md yaz; içine bu projenin ne olduğunu ve aşağıdaki
   "Projeyle ilgili bilinmesi gerekenler" bölümünü kaydet.
7. Bittiğinde bana klasördeki dosyaların listesini göster.

Bu proje Next.js DEĞİL. Sade HTML + CSS + JavaScript. Derleme adımı yok,
node_modules yok, package.json yok. Öyle de kalsın.
```

Sonra ikinci adım olarak şunu yazın:

```
Bu klasörü GitHub'da "saray-bridal" adıyla yeni bir depoya gönder,
sonra Vercel'de yeni bir proje olarak yayına al.
Framework Preset: Other. Root Directory: ./
Vercel Authentication kapalı olsun, linke tıklayan giriş yapmadan siteyi görsün.
```

---

## Yol 2 — Elle komut (Claude Code kullanmadan)

### macOS / Linux — Terminal

```bash
cd ~/Desktop
git clone --depth 1 -b claude/bridal-shop-website-prototype-510j6l \
  https://github.com/CihadSr/coodexe.git gecici-indirme
mkdir -p saray-bridal
cp -R gecici-indirme/public/gelinlik-prototip/. saray-bridal/
rm -rf gecici-indirme
rm -f saray-bridal/gorsel-secim.html
cd saray-bridal
git init
git add -A
git commit -m "Saray Bridal Gelinlik - ilk surum"
open .
```

### Windows — PowerShell

```powershell
cd $HOME\Desktop
git clone --depth 1 -b claude/bridal-shop-website-prototype-510j6l `
  https://github.com/CihadSr/coodexe.git gecici-indirme
New-Item -ItemType Directory -Force -Path saray-bridal | Out-Null
Copy-Item -Recurse -Force gecici-indirme\public\gelinlik-prototip\* saray-bridal\
Remove-Item -Recurse -Force gecici-indirme
Remove-Item -Force saray-bridal\gorsel-secim.html -ErrorAction SilentlyContinue
cd saray-bridal
git init
git add -A
git commit -m "Saray Bridal Gelinlik - ilk surum"
explorer .
```

### Siteyi bilgisayarda açıp kontrol etmek

Dosyalara çift tıklamak yeterli değil (bazı tarayıcılar yerel dosyada
kısıtlama uygular). Klasörün içinde şu komutu çalıştırın:

```bash
python3 -m http.server 8000
```

Sonra tarayıcıda `http://localhost:8000` adresini açın.

### Vercel'e yükleme (en kısa yol, GitHub'a bile gerek yok)

`saray-bridal` klasörünün içindeyken:

```bash
npx vercel --prod
```

Sorulara: yeni proje → adı `saray-bridal` → framework `Other` → kök dizin `./`.
Sonra Vercel panelinde **Settings → Deployment Protection → Vercel
Authentication → Disabled** yapın. Link herkese açık olur.

---

## Projeyle ilgili bilinmesi gerekenler

**İşletme**
- Ad: Saray Bridal Gelinlik
- Adres: Işıklar Caddesi, Muratpaşa / Antalya
- Kurucu: Elif Hanım — sitedeki hikâye bölümü onun üzerine kurulu,
  farklılaşma noktamız bu.

**Teknik**
- Sade HTML5 + tek CSS dosyası + saf JavaScript. Derleme adımı yok.
- Sayfalar: `index.html`, `koleksiyonlar.html`, `hakkimizda.html`,
  `iletisim.html`
- `assets/css/style.css` — tüm stiller, marka renkleri en üstte CSS
  değişkeni olarak tanımlı
- `assets/js/main.js` — menü, filtreler, lightbox, form doğrulama,
  görsel yedekleme zinciri
- `assets/img/` — mağazanın gerçek fotoğrafları:
  `hero.jpg`, `gelin-01..05.jpg`, `detay-01.jpg`
- Mobil öncelikli; kırılma noktaları 600 / 768 / 1024 / 1200 piksel

**Hâlâ sahte olan, müşteriden alınması gereken bilgiler**
- Telefon: şu an `0 (5xx) xxx xx xx` — gerçek numarayla değiştirilecek
  (`index.html`, `iletisim.html`, `hakkimizda.html`, `koleksiyonlar.html`
  dosyalarının hepsinde geçiyor)
- E-posta: şu an `info@saraybridal.com`
- Açık adres ve kapı numarası
- Google yorumları: şu an temsili metinler, gerçekleriyle değişecek
- Fotoğraflar: gelinlik kategorisinde gerçek fotoğraflar var;
  **abiye, nişanlık ve kına** kategorileri hâlâ stok görsel
- İletişim formu şu an hiçbir yere göndermiyor (prototip uyarısı ekli).
  Gerçek gönderim için Formspree veya benzeri bir servis bağlanmalı.

**Neden coodexe'den ayrıldık**
`coodexe` deposu bir Next.js uygulaması ve `coodexe.com` oradan yayınlanıyor.
Gelinlik sitesi onun içinde durunca Vercel'de kök klasör, üretim dalı ve
Next.js sürümü sorunları çıkıyordu. Ayrı klasör = ayrı depo = ayrı Vercel
projesi olunca bu sorunların hiçbiri kalmıyor.
