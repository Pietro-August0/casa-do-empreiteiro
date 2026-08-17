(() => {
  "use strict";

  const SEGMENTS = [
    {
      id: "alojamento",
      iconClass: "fa-bed",
      label: "Alojamento",
      desc: "Colchões, redes e móveis para organizar o canteiro.",
      products: [["assets/fotos-produtos/alojamento-colchao.png", "Colchão"], ["assets/fotos-produtos/alojamento-estante.png", "Estante"], ["assets/fotos-produtos/alojamento-rede.png", "Rede"]]
    },
    {
      id: "utilidades",
      iconClass: "fa-boxes-stacked",
      label: "Utilidades",
      desc: "Recipientes e utensílios que facilitam a rotina da obra.",
      products: [["assets/fotos-produtos/utilidades-garrafa.png", "Garrafa térmica"], ["assets/fotos-produtos/utilidades-caixa.png", "Caixa organizadora"], ["assets/fotos-produtos/utilidades-balde.png", "Balde"]]
    },
    {
      id: "uniformes",
      iconClass: "fa-shirt",
      label: "Uniformes",
      desc: "Vestuário profissional para proteção e conforto no trabalho.",
      products: [["assets/fotos-produtos/uniformes-colete.png", "Colete refletivo"], ["assets/fotos-produtos/uniformes-calca.png", "Calça profissional"], ["assets/fotos-produtos/uniformes-botina.png", "Botina de segurança"]]
    },
    {
      id: "epis",
      iconClass: "fa-helmet-safety",
      label: "EPIs e Sinalização",
      desc: "Proteção individual e sinalização para um canteiro mais seguro.",
      products: [["assets/fotos-produtos/epis-capacete.png", "Capacete"], ["assets/fotos-produtos/epis-cone.png", "Cone de sinalização"], ["assets/fotos-produtos/epis-oculos.png", "Óculos de proteção"]]
    },
    {
      id: "pintura",
      iconClass: "fa-paint-roller",
      label: "Pintura",
      desc: "Tintas e acessórios para preparação e acabamento.",
      products: [["assets/fotos-produtos/pintura-tinta.png", "Tinta"], ["assets/fotos-produtos/pintura-rolo.png", "Rolo"], ["assets/fotos-produtos/pintura-pincel.png", "Pincel"]]
    },
    {
      id: "limpeza",
      iconClass: "fa-broom",
      label: "Limpeza",
      desc: "Itens essenciais para limpeza durante e depois da obra.",
      products: [["assets/fotos-produtos/limpeza-vassoura.png", "Vassoura"], ["assets/fotos-produtos/limpeza-rodo.png", "Rodo"], ["assets/fotos-produtos/limpeza-pano.png", "Pano de limpeza"]]
    },
    {
      id: "impermeabilizantes",
      iconClass: "fa-droplet",
      label: "Impermeabilizantes",
      desc: "Soluções para vedar, proteger e evitar infiltrações.",
      products: [["assets/fotos-produtos/impermeabilizante-selante.png", "Selante"], ["assets/fotos-produtos/impermeabilizante-manta.png", "Manta"], ["assets/fotos-produtos/impermeabilizante-balde-liquido.png", "Impermeabilizante líquido"]]
    },
    {
      id: "fixacao",
      iconClass: "fa-screwdriver-wrench",
      label: "Fixação",
      desc: "Fixadores para diferentes materiais e etapas do serviço.",
      products: [["assets/fotos-produtos/fixacao-prego.png", "Pregos"], ["assets/fotos-produtos/fixacao-parafuso.png", "Parafusos"], ["assets/fotos-produtos/fixacao-bucha.png", "Buchas"]]
    },
    {
      id: "ferramentas",
      iconClass: "fa-toolbox",
      label: "Ferramentas",
      desc: "Ferramentas confiáveis para medir, montar e construir.",
      products: [["assets/fotos-produtos/ferramentas-trena.png", "Trena"], ["assets/fotos-produtos/ferramentas-alicate.png", "Alicate"], ["assets/fotos-produtos/ferramenta-martelo.png", "Martelo"]]
    },
    {
      id: "hidraulica",
      iconClass: "fa-faucet-drip",
      label: "Conexões Hidráulicas",
      desc: "Conexões e acessórios para instalações hidráulicas.",
      products: [["assets/fotos-produtos/hidraulica-te.png", "Conexão Tê"], ["assets/fotos-produtos/hidraulica-registro.png", "Registro"], ["assets/fotos-produtos/hidraulica-joelho.png", "Joelho"]]
    },
    {
      id: "eletrica",
      iconClass: "fa-bolt",
      label: "Elétrica",
      desc: "Materiais para instalações elétricas seguras e organizadas.",
      products: [["assets/fotos-produtos/eletrica-tomada.png", "Tomada"], ["assets/fotos-produtos/eletrica-disjuntor.png", "Disjuntor"], ["assets/fotos-produtos/eletrica-cabo.png", "Cabo elétrico"]]
    }
  ];

  const STORE_SHOTS = [
    {
      src: "assets/fotos-loja/WhatsApp Image 2026-08-15 at 08.41.39.jpeg",
      alt: "Fachada da Casa do Empreiteiro",
      caption: "Fachada aberta e entrada da loja",
      className: "store-shot-facade",
      focus: "50% 6%"
    },
    {
      src: "assets/fotos-loja/interior-uniformes-profissionais.jpeg",
      alt: "Área de uniformes com vestuário profissional organizado",
      caption: "Uniformes profissionais",
      className: "store-shot-aisle",
      focus: "50% 38%"
    },
    {
      src: "assets/fotos-loja/interior-conexoes-hidraulicas.jpeg",
      alt: "Área interna com conexões hidráulicas organizadas",
      caption: "Conexões hidráulicas",
      className: "store-shot-wall",
      focus: "50% 42%"
    },
    {
      src: "assets/fotos-loja/interior-limpeza-pos-obra.jpeg",
      alt: "Setor de lâmpadas e iluminação",
      caption: "Lâmpadas",
      className: "store-shot-stock",
      focus: "50% 38%"
    }
  ];

  const NR_SHOTS = [
    {
      src: "assets/fotos-treinamentosNR/nr-equipe-canteiro.jpeg",
      alt: "Grupo de treinamento NR em canteiro de obra",
      caption: "Equipe reunida no canteiro",
      className: "nr-shot-wide",
      focus: "50% 68%"
    },
    {
      src: "assets/fotos-treinamentosNR/nr-treinamento-canteiro-aberto.jpeg",
      alt: "Treinamento NR em obra com estrutura em andamento",
      caption: "Treinamento em obra",
      className: "nr-shot-tall",
      focus: "50% 28%"
    },
    {
      src: "assets/fotos-treinamentosNR/nr-treinamento-interno.jpeg",
      alt: "Grupo reunido em treinamento NR em ambiente interno",
      caption: "Treinamento interno",
      className: "nr-shot-tall",
      focus: "50% 30%"
    }
  ];

  const WHATSAPP_NUMBER = "5511914408209";
  const REDUCED_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let photoLightbox = null;
  let photoLightboxCloseTimer = null;

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
        <span class="skeleton-line skeleton-line-xs"></span>
        <span class="skeleton-media"></span>
        <span class="skeleton-line skeleton-line-md"></span>
        <span class="skeleton-line skeleton-line-lg"></span>
        <span class="skeleton-arrow"></span>
      </div>
    `).join("");
  }

  function initLoader() {
    const loader = qs("#pageLoader");
    const announcePageInteractive = () => {
      document.body.classList.add("products-motion-ready");
      document.dispatchEvent(new CustomEvent("page:interactive"));
    };

    if (!loader) {
      document.body.classList.add("page-ready");
      window.requestAnimationFrame(announcePageInteractive);
      return;
    }

    const hideLoader = () => {
      if (document.body.classList.contains("page-ready")) return;
      document.body.classList.add("page-ready");
      loader.classList.add("is-hidden");
      window.setTimeout(() => {
        loader.remove();
        announcePageInteractive();
      }, 650);
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
        const panelId = `segment-panel-${seg.id}`;
        const productMarkup = seg.products.map(([src, name], productIndex) => `
          <figure class="product-float product-float-${productIndex + 1}">
            <div class="product-image-wrap">
              <img src="${src}" alt="${name}" loading="lazy" decoding="async">
            </div>
          </figure>
        `).join("");

        return `
          <article class="seg-card${index === 3 ? " is-open" : ""}" data-segment="${seg.id}">
            <button class="seg-trigger" type="button" aria-expanded="${index === 3}" aria-controls="${panelId}">
              <span class="seg-index">${String(index + 1).padStart(2, "0")}</span>
              <span class="seg-icon-wrap icon-chip" aria-hidden="true"><i class="fa-solid ${seg.iconClass} seg-icon"></i></span>
              <span class="seg-heading">
                <span class="seg-title">${seg.label}</span>
                <span class="seg-summary">${seg.desc}</span>
              </span>
              <span class="seg-toggle" aria-hidden="true"><i class="fa-solid fa-plus"></i></span>
            </button>
            <div class="seg-panel" id="${panelId}" aria-hidden="${index !== 3}">
              <div class="seg-panel-clip">
                <div class="seg-panel-inner">
                  <div class="seg-panel-copy">
                    <span class="seg-panel-label">Alguns exemplos</span>
                    <p>Consulte modelos, medidas e disponibilidade diretamente com nossa equipe.</p>
                    <a class="btn btn-yellow seg-whatsapp" href="${waLink(seg.label)}" target="_blank" rel="noopener"${index === 3 ? "" : " tabindex=\"-1\""}>
                      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                      <span>Consultar ${seg.label}</span>
                    </a>
                  </div>
                  <div class="product-stage" aria-label="Exemplos de ${seg.label}">
                    ${productMarkup}
                  </div>
                </div>
              </div>
            </div>
          </article>`;
      }).join("");

      grid.classList.remove("is-loading");
      grid.setAttribute("aria-busy", "false");
      initSegmentAccordion();
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

  function initSegmentAccordion() {
    const grid = qs("#segGrid");
    if (!grid) return;
    const cards = qsa(".seg-card:not(.seg-card-skeleton)", grid);

    const replayProductEntrance = (card) => {
      if (!card || !card.classList.contains("is-open")) return;
      card.classList.remove("products-entering");
      void card.offsetWidth;
      card.classList.add("products-entering");
    };

    const setCardState = (card, open) => {
      const trigger = qs(".seg-trigger", card);
      const panel = qs(".seg-panel", card);
      const cta = qs(".seg-whatsapp", card);
      card.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      panel.setAttribute("aria-hidden", String(!open));
      if (open) {
        cta.removeAttribute("tabindex");
        if (document.body.classList.contains("products-motion-ready")) {
          window.requestAnimationFrame(() => replayProductEntrance(card));
        }
      } else {
        card.classList.remove("products-entering");
        cta.setAttribute("tabindex", "-1");
      }
    };

    cards.forEach((card) => {
      const trigger = qs(".seg-trigger", card);
      trigger.addEventListener("click", () => {
        const willOpen = !card.classList.contains("is-open");
        cards.forEach((other) => setCardState(other, other === card && willOpen));
      });
    });

    const startInitialEntranceWhenVisible = () => {
      const playCurrentOpenCard = () => {
        const openCard = cards.find((card) => card.classList.contains("is-open"));
        window.requestAnimationFrame(() => replayProductEntrance(openCard));
      };

      if (!("IntersectionObserver" in window)) {
        playCurrentOpenCard();
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        playCurrentOpenCard();
      }, { threshold: 0.12 });

      observer.observe(grid);
    };

    if (document.body.classList.contains("products-motion-ready")) {
      startInitialEntranceWhenVisible();
    } else {
      document.addEventListener("page:interactive", startInitialEntranceWhenVisible, { once: true });
    }
  }

  function renderTicker() {
    const ticker = qs("#ticker");
    if (!ticker) return;

    const names = SEGMENTS.map((segment) => segment.label);
    ticker.innerHTML = [...names, ...names]
      .map((name) => `<span>${name}</span>`)
      .join("");
  }

  function openPhotoLightbox(shot) {
    if (!photoLightbox) return;
    if (photoLightboxCloseTimer) {
      window.clearTimeout(photoLightboxCloseTimer);
      photoLightboxCloseTimer = null;
    }

    const image = qs("[data-lightbox-image]", photoLightbox);
    const caption = qs("[data-lightbox-caption]", photoLightbox);
    if (image) {
      image.src = shot.src;
      image.alt = shot.alt;
    }
    if (caption) {
      caption.textContent = shot.caption;
    }

    photoLightbox.hidden = false;
    requestAnimationFrame(() => photoLightbox.classList.add("is-open"));
    document.body.classList.add("photo-lightbox-open");
  }

  function closePhotoLightbox() {
    if (!photoLightbox || photoLightbox.hidden) return;

    photoLightbox.classList.remove("is-open");
    document.body.classList.remove("photo-lightbox-open");

    photoLightboxCloseTimer = window.setTimeout(() => {
      const image = qs("[data-lightbox-image]", photoLightbox);
      if (image) {
        image.removeAttribute("src");
        image.removeAttribute("alt");
      }
      photoLightbox.hidden = true;
      photoLightboxCloseTimer = null;
    }, 220);
  }

  function initPhotoLightbox() {
    photoLightbox = qs("#photoLightbox");
    if (!photoLightbox) return;

    qsa("[data-lightbox-close]", photoLightbox).forEach((button) => {
      button.addEventListener("click", closePhotoLightbox);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePhotoLightbox();
    });
  }

  function renderPhotoGallery(gridSelector, shots) {
    const grid = qs(gridSelector);
    if (!grid) return;

    grid.innerHTML = shots.map((shot) => `
      <figure
        class="gallery-shot ${shot.className || ""}"
        tabindex="0"
        role="button"
        aria-label="Abrir foto ${shot.caption}"
        data-lightbox-src="${shot.src}"
        data-lightbox-alt="${shot.alt}"
        data-lightbox-caption="${shot.caption}"
      >
        <div class="gallery-frame">
          <img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async" style="object-position:${shot.focus || "50% 50%"}">
        </div>
        <figcaption>${shot.caption}</figcaption>
      </figure>
    `).join("");

    qsa(".gallery-shot", grid).forEach((shotEl) => {
      const shot = {
        src: shotEl.dataset.lightboxSrc,
        alt: shotEl.dataset.lightboxAlt,
        caption: shotEl.dataset.lightboxCaption
      };

      shotEl.addEventListener("click", () => openPhotoLightbox(shot));
      shotEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openPhotoLightbox(shot);
        }
      });
    });
  }

  function renderMediaSections() {
    renderPhotoGallery("#storeGalleryGrid", STORE_SHOTS);
    renderPhotoGallery("#nrGalleryGrid", NR_SHOTS);
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
    initPhotoLightbox();
    renderSegments();
    renderTicker();
    renderMediaSections();
    initHeaderScroll();
    initMobileMenu();
    initActiveNavigation();
    initFaq();
    initFloatingWa();
    initYear();
    initImageFallbacks();
    initMediaLoadingStates();
  });
})();
