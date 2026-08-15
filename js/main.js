(() => {
  "use strict";

  const SEGMENTS = [
    {
      iconClass: "fa-bed",
      label: "Alojamento",
      desc: "Beliches, redes, colchões e móveis para canteiro"
    },
    {
      iconClass: "fa-boxes-stacked",
      label: "Utilidades",
      desc: "Caixas, recipientes, baldes e utensílios diversos"
    },
    {
      iconClass: "fa-shirt",
      label: "Uniformes",
      desc: "Camisetas, calças, botinas e vestuário profissional"
    },
    {
      iconClass: "fa-helmet-safety",
      label: "EPI's e Sinalização",
      desc: "Capacetes, luvas, óculos, sinalizadores e placas"
    },
    {
      iconClass: "fa-paint-roller",
      label: "Pintura",
      desc: "Tintas, vernizes, pincéis, rolos e acessórios"
    },
    {
      iconClass: "fa-broom",
      label: "Limpeza",
      desc: "Desinfetantes, detergentes, vassouras e panos"
    },
    {
      iconClass: "fa-droplet",
      label: "Impermeabilizante",
      desc: "Membranas, seladores e produtos impermeabilizantes"
    },
    {
      iconClass: "fa-screwdriver-wrench",
      label: "Fixação",
      desc: "Parafusos, pregos, buchas, rebites e fixadores"
    },
    {
      iconClass: "fa-toolbox",
      label: "Ferramentas",
      desc: "Chaves, martelos, serras, escadas e furadeiras"
    },
    {
      iconClass: "fa-faucet-drip",
      label: "Conexões Hidráulicas",
      desc: "Tubulações, registros, conexões e acessórios hidráulicos"
    },
    {
      iconClass: "fa-bolt",
      label: "Elétrica",
      desc: "Fios, cabos, disjuntores, tomadas e instalações"
    }
  ];

  const WHATSAPP_NUMBER = "5511963756414";
  const REDUCED_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function waLink(segmentLabel = "") {
    const message = segmentLabel
      ? `Olá! Tenho interesse em produtos de ${segmentLabel}.`
      : "Olá! Vim pelo site da Casa do Empreiteiro.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function buildSegmentSkeletons(count) {
    return Array.from({ length: count }, () => `
      <div class="seg-card seg-card-skeleton" aria-hidden="true">
        <div class="seg-top">
          <span class="seg-num skeleton-line skeleton-line-sm"></span>
          <span class="seg-icon-wrap skeleton-icon"></span>
        </div>
        <div class="seg-content">
          <span class="skeleton-line skeleton-line-md"></span>
          <span class="skeleton-line skeleton-line-lg"></span>
          <span class="skeleton-line skeleton-line-xs"></span>
        </div>
        <span class="seg-arrow skeleton-arrow"></span>
      </div>
    `).join("");
  }

  function initLoader() {
    const loader = qs("#pageLoader");
    if (!loader) return;

    const hideLoader = () => {
      document.body.classList.add("page-ready");
      loader.classList.add("is-hidden");
      window.setTimeout(() => loader.remove(), 650);
    };

    window.addEventListener("load", () => {
      window.setTimeout(hideLoader, 550);
    }, { once: true });

    window.setTimeout(hideLoader, 2500);
  }

  function renderSegments() {
    const grid = qs("#segGrid");
    if (!grid) return;

    const renderCards = () => {
      grid.innerHTML = SEGMENTS.map((seg, index) => {
        const num = String(index + 1).padStart(2, "0");
        return `
          <a class="seg-card" href="${waLink(seg.label)}" target="_blank" rel="noopener" aria-label="Falar sobre ${seg.label}">
            <div class="seg-top">
              <span class="seg-num">${num}</span>
              <span class="seg-icon-wrap" aria-hidden="true">
                <i class="fa-solid ${seg.iconClass} seg-icon"></i>
              </span>
            </div>
            <div class="seg-content">
              <h3>${seg.label}</h3>
              <p>${seg.desc}</p>
            </div>
            <span class="seg-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-up-right"></i></span>
          </a>`;
      }).join("");

      grid.classList.remove("is-loading");
      grid.setAttribute("aria-busy", "false");
      initReveal();
    };

    grid.classList.add("is-loading");
    grid.setAttribute("aria-busy", "true");
    grid.innerHTML = buildSegmentSkeletons(SEGMENTS.length);

    if (REDUCED_MOTION || document.readyState === "complete") {
      renderCards();
      return;
    }

    window.requestAnimationFrame(() => {
      window.setTimeout(renderCards, 120);
    });
  }

  function renderTicker() {
    const ticker = qs("#ticker");
    if (!ticker) return;

    const names = SEGMENTS.map((segment) => segment.label);
    ticker.innerHTML = [...names, ...names]
      .map((name) => `<span>${name}</span>`)
      .join("");
  }

  function initHeaderScroll() {
    const header = qs("#header");
    if (!header) return;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      header.classList.toggle("scrolled", window.scrollY > 8);
      document.documentElement.style.setProperty("--scroll-progress", `${progress * 100}%`);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  function initMobileMenu() {
    const toggle = qs("#menuToggle");
    const nav = qs("#mainNav");
    if (!toggle || !nav) return;

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.body.classList.toggle("nav-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(!nav.classList.contains("is-open"));
    });

    qsa("a", nav).forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
  }

  function initActiveNavigation() {
    const links = qsa("[data-nav]");
    const sections = links
      .map((link) => document.getElementById(link.dataset.nav))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.dataset.nav === entry.target.id);
        });
      });
    }, {
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
  }

  function initMobileQuickNav() {
    const links = qsa("[data-mobile-nav]");
    if (!links.length) return;

    window.addEventListener("scroll", () => {
      const nearTop = window.scrollY < 280;
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          nearTop
            ? link.dataset.mobileNav === "topo"
            : link.dataset.mobileNav === "segmentos" && window.scrollY < document.body.scrollHeight * 0.45
        );
      });
    }, { passive: true });
  }

  function initFaq() {
    qsa(".faq-item").forEach((item) => {
      const button = qs(".faq-q", item);
      if (!button) return;

      button.addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");

        qsa(".faq-item").forEach((other) => {
          other.classList.remove("open");
          const otherButton = qs(".faq-q", other);
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        });

        item.classList.toggle("open", !wasOpen);
        button.setAttribute("aria-expanded", String(!wasOpen));
      });

      button.setAttribute("aria-expanded", String(item.classList.contains("open")));
    });
  }

  function initFloatingWa() {
    const button = qs("#floatingWa");
    if (!button) return;

    const update = () => {
      button.classList.toggle("visible", window.scrollY > 420);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function initReveal() {
    const targets = qsa(".about-copy, .diff-row, .seg-card, .loc-copy, .nr-card, .faq-item");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${Math.min(index * 25, 180)}ms`);
      observer.observe(target);
    });
  }

  function initYear() {
    const year = qs("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  function initImageFallbacks() {
    qsa("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.classList.add("img-error");
      }, { once: true });
    });
  }

  function initMediaLoadingStates() {
    qsa(".media-surface").forEach((surface) => {
      const media = qs("img, iframe", surface);
      if (!media) {
        surface.classList.remove("is-loading");
        return;
      }

      const setReady = () => surface.classList.remove("is-loading");
      const setLoading = () => surface.classList.add("is-loading");

      setLoading();

      if (media.tagName === "IMG") {
        if (media.complete && media.naturalWidth > 0) {
          setReady();
          return;
        }

        media.addEventListener("load", setReady, { once: true });
        media.addEventListener("error", setReady, { once: true });
        return;
      }

      if (media.tagName === "IFRAME") {
        media.addEventListener("load", setReady, { once: true });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    renderSegments();
    renderTicker();
    initHeaderScroll();
    initMobileMenu();
    initActiveNavigation();
    initMobileQuickNav();
    initFaq();
    initFloatingWa();
    initYear();
    initImageFallbacks();
    initMediaLoadingStates();
  });
})();
