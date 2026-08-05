/* Saray Bridal — prototip etkileşimleri (vanilla JS, bağımlılık yok) */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Görsel yedekleme ----------
     Bir görsel yüklenemezse `data-fallback` içindeki sıradaki Unsplash
     foto ID'siyle yeniden denenir; sorgu parametreleri (w/h/fit/crop/…)
     korunur. Yedekler tükenince görsel gizlenir. Deneme indeksi
     elemanın kendisinde (data-fb-index) tutulur, böylece döngü oluşmaz. */
  function initImageFallback() {
    var PHOTO_BASE = "https://images.unsplash.com/photo-";

    function queryOf(src) {
      var i = src.indexOf("?");
      return i > -1 ? src.slice(i) : "";
    }

    // Görselin özgün sorgu dizesini bir kez saklar (kırık src sonrası da korunur).
    function register(img) {
      if (img.dataset.fbQuery === undefined) {
        img.dataset.fbQuery = queryOf(img.getAttribute("src") || "");
      }
    }

    function fallbacks(img) {
      return (img.getAttribute("data-fallback") || "")
        .split(/\s+/)
        .filter(function (id) { return id !== ""; });
    }

    function handle(img) {
      if (img.dataset.fbDone === "1") return;      // zaten pes edildi
      if (!img.getAttribute("src")) return;        // src yoksa dokunma (ör. boş lightbox)

      register(img);

      var ids = fallbacks(img);
      var index = parseInt(img.dataset.fbIndex || "0", 10);
      if (isNaN(index) || index < 0) index = 0;

      if (index < ids.length) {
        img.dataset.fbIndex = String(index + 1);
        var query = queryOf(img.getAttribute("src") || "") || img.dataset.fbQuery || "";
        img.setAttribute("src", PHOTO_BASE + ids[index] + query);
        return;
      }

      // Yedek kalmadı: eski inline onerror davranışının aynısı.
      img.dataset.fbDone = "1";
      img.style.display = "none";
    }

    // `error` baloncuk yapmaz; yakalama fazında dinlenir. Böylece sonradan
    // eklenen görseller (ör. görsel seçim tahtası) de kapsanır.
    document.addEventListener("error", function (e) {
      var el = e.target;
      if (el && el.tagName === "IMG") handle(el);
    }, true);

    // main.js yüklenmeden önce hata vermiş görselleri de yakala.
    Array.prototype.forEach.call(document.images, function (img) {
      register(img);
      if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) handle(img);
    });
  }

  /* ---------- Mobil menü ---------- */
  function initMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var overlay = document.getElementById("mobil-menu");
    if (!toggle || !overlay) return;

    var closeBtn = overlay.querySelector(".nav-overlay-close");
    var toggleLabel = toggle.querySelector(".sr-only");

    function setOpen(open) {
      overlay.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      if (toggleLabel) toggleLabel.textContent = open ? "Menüyü kapat" : "Menüyü aç";
      document.body.classList.toggle("is-locked", open);
      if (open) {
        var first = overlay.querySelector("a, button");
        if (first) first.focus();
      } else {
        toggle.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });

    overlay.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) setOpen(false);
    });
  }

  /* ---------- Başlık scroll durumu ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header--overlay");
    if (!header) return;

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Scroll ile görünürlük ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Koleksiyon filtresi ---------- */
  function initFilters() {
    var bar = document.querySelector(".filters");
    var gallery = document.querySelector(".gallery");
    if (!bar || !gallery) return;

    var buttons = Array.prototype.slice.call(bar.querySelectorAll(".filter"));
    var items = Array.prototype.slice.call(gallery.querySelectorAll(".item"));
    var empty = document.querySelector(".gallery-empty");

    function apply(cat) {
      var shown = 0;
      items.forEach(function (item) {
        var match = cat === "tumu" || item.dataset.category === cat;
        item.hidden = !match;
        if (match) shown++;
      });
      buttons.forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn.dataset.filter === cat));
      });
      if (empty) empty.hidden = shown > 0;
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.dataset.filter;
        apply(cat);
        // file:// üzerinden açıldığında replaceState güvenlik hatası verir; sessizce geçilir.
        try {
          history.replaceState(null, "", cat === "tumu" ? location.pathname : "#" + cat);
        } catch (err) {
          /* adres çubuğu güncellenemedi, filtre yine de çalışır */
        }
      });
    });

    function fromHash() {
      var hash = location.hash.replace("#", "");
      var known = buttons.some(function (b) { return b.dataset.filter === hash; });
      apply(known ? hash : "tumu");
    }

    fromHash();
    window.addEventListener("hashchange", fromHash);
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var box = document.getElementById("lightbox");
    if (!box) return;

    var img = box.querySelector(".lightbox-img");
    var title = box.querySelector(".lightbox-title");
    var cat = box.querySelector(".lightbox-cat");
    var closeBtn = box.querySelector(".lightbox-close");
    var lastFocus = null;

    function open(trigger) {
      var source = trigger.querySelector("img");
      lastFocus = trigger;

      if (source) {
        img.src = source.currentSrc || source.src;
        img.alt = source.alt;
        img.style.display = "";
      } else {
        img.removeAttribute("src");
        img.style.display = "none";
      }

      title.textContent = trigger.dataset.name || "";
      cat.textContent = trigger.dataset.catLabel || "";

      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      closeBtn.focus();
    }

    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll(".item-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { open(btn); });
    });

    closeBtn.addEventListener("click", close);

    box.addEventListener("click", function (e) {
      if (!e.target.closest(".lightbox-panel")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    });
  }

  /* ---------- Randevu formu (sahte gönderim) ---------- */
  function initForm() {
    var form = document.getElementById("randevu-form");
    if (!form) return;

    var success = document.getElementById("form-success");

    function fail(field, message) {
      var wrap = field.closest(".form-field");
      wrap.classList.add("has-error");
      var slot = wrap.querySelector(".field-error");
      if (slot) slot.textContent = message;
      field.setAttribute("aria-invalid", "true");
    }

    function clear(field) {
      var wrap = field.closest(".form-field");
      wrap.classList.remove("has-error");
      var slot = wrap.querySelector(".field-error");
      if (slot) slot.textContent = "";
      field.removeAttribute("aria-invalid");
    }

    function validate(field) {
      var value = field.value.trim();

      if (field.hasAttribute("required") && !value) {
        fail(field, "Bu alan zorunludur.");
        return false;
      }
      if (field.name === "ad" && value && value.length < 3) {
        fail(field, "Lütfen ad ve soyadınızı yazın.");
        return false;
      }
      if (field.name === "telefon" && value && value.replace(/\D/g, "").length < 10) {
        fail(field, "Geçerli bir telefon numarası girin.");
        return false;
      }
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        fail(field, "Geçerli bir e-posta adresi girin.");
        return false;
      }
      clear(field);
      return true;
    }

    var fields = Array.prototype.slice.call(
      form.querySelectorAll("input, select, textarea")
    );

    fields.forEach(function (field) {
      field.addEventListener("blur", function () { validate(field); });
      field.addEventListener("input", function () {
        if (field.closest(".form-field").classList.contains("has-error")) validate(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstBad = null;
      fields.forEach(function (field) {
        if (!validate(field) && !firstBad) firstBad = field;
      });

      if (firstBad) {
        firstBad.focus();
        return;
      }

      // Gerçek bir sunucu yok — prototipte yalnızca teşekkür mesajı gösterilir.
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });
  }

  /* ---------- Footer yılı ---------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function init() {
    initImageFallback();
    initMenu();
    initHeader();
    initReveal();
    initFilters();
    initLightbox();
    initForm();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
