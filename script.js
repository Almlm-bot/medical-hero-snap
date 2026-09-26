(function () {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  // ─── INITIAL STATES ───
  gsap.set(".header > *", {
    y: -20,
    opacity: 0
  });
  gsap.set(".eyebrow", {
    y: 12,
    opacity: 0
  });
  gsap.set(".title .word", {
    yPercent: 110,
    opacity: 0
  });
  gsap.set(".title-desc", {
    opacity: 0,
    x: -10
  });
  gsap.set(".paren-group .paren", {
    scale: 0,
    opacity: 0
  });
  gsap.set(".avatar-group", {
    scale: 0,
    opacity: 0
  });
  gsap.set(".dna-icon", {
    scale: 0,
    rotation: -45,
    opacity: 0
  });
  gsap.set(".future-tag", {
    opacity: 0,
    x: -10
  });
  gsap.set(".badge", {
    scale: 0,
    rotation: -90,
    opacity: 0
  });
  gsap.set(".res-item", {
    y: 16,
    opacity: 0
  });
  gsap.set(".wave-wrap", {
    x: 120,
    opacity: 0
  });
  gsap.set(".wave-glow", {
    opacity: 0
  });
  gsap.set(".bg-text", {
    opacity: 0,
    scale: 1.1
  });
  // ─── PAGE LOAD TIMELINE ───
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    },
    delay: 0.15
  });
  tl.to(".header > *", {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.07
  })
    .to(
      ".wave-glow",
      {
        opacity: 1,
        duration: 1.2
      },
      "-=.5"
    )
    .to(
      ".wave-wrap",
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out"
      },
      "-=1.2"
    )
    .to(
      ".bg-text",
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out"
      },
      "-=1.2"
    )
    .to(
      ".eyebrow",
      {
        y: 0,
        opacity: 1,
        duration: 0.5
      },
      "-=1"
    )
    .to(
      ".title .word",
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.05,
        ease: "power4.out"
      },
      "-=.8"
    )
    .to(
      ".title-desc",
      {
        x: 0,
        opacity: 1,
        duration: 0.6
      },
      "-=.5"
    )
    .to(
      ".paren-group .paren",
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)"
      },
      "-=.45"
    )
    .to(
      ".avatar-group",
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      },
      "-=.3"
    )
    .to(
      ".dna-icon",
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      },
      "-=.4"
    )
    .to(
      ".future-tag",
      {
        x: 0,
        opacity: 1,
        duration: 0.5
      },
      "-=.3"
    )
    .to(
      ".badge",
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      },
      "-=.5"
    )
    .to(
      ".res-item",
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08
      },
      "-=.4"
    );
  // ─── WAVE FLOAT (gentle continuous) ───
  gsap.to(".wave-wrap", {
    y: -18,
    rotation: -1.2,
    duration: 5.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(".wave-glow", {
    y: 12,
    scale: 1.05,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(".wave-glow.b", {
    y: -16,
    x: -10,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  // Badge slow drift
  gsap.to(".badge", {
    y: "+=8",
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  // DNA icon gentle rotate cycle
  gsap.to(".dna-icon svg", {
    rotation: 12,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    transformOrigin: "50% 50%"
  });
  // People image breathing
  gsap.to(".avatar-group", {
    rotation: 3,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  // ─── SCROLL PARALLAX ───
  gsap.to(".wave-wrap", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=1200",
      scrub: 1.2
    },
    y: -240,
    rotation: 6,
    scale: 1.08
  });
  gsap.to(".bg-text", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=1000",
      scrub: 1.2
    },
    xPercent: -8,
    opacity: 0.5
  });
  gsap.to(".badge", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=800",
      scrub: 1.5
    },
    y: 80,
    rotation: 30
  });
  // ─── SCROLL REVEALS ───
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: 50,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out"
      }
    );
  });
  // ─── INTERACTIVE: WAVE MOUSE PARALLAX ───
  if (!window.matchMedia("(pointer: coarse)").matches) {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      gsap.to(".wave-wrap", {
        x: x * 30,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto"
      });
      gsap.to(".wave-glow", {
        x: x * 60,
        y: y * 40,
        duration: 1.4,
        ease: "power3.out",
        overwrite: "auto"
      });
      gsap.to(".badge", {
        x: x * -16,
        y: y * -10,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto"
      });
      gsap.to(".bg-text", {
        x: x * -20,
        duration: 1.4,
        ease: "power3.out",
        overwrite: "auto"
      });
    });
  }
  // ─── CARD HOVER MICRO ───
  document.querySelectorAll(".clay-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, {
        rotateY: x * 4,
        rotateX: -y * 4,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 900
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "elastic.out(1,.6)"
      });
    });
  });
  // ─── HEADER NAV PILL: animated indicator ───
  const pills = document.querySelectorAll(".nav-pill");
  pills.forEach((p) => {
    p.addEventListener("click", (e) => {
      e.preventDefault();
      if (p.dataset.go === "home" && window.goToPage) {
        window.goToPage(0);
      }
      pills.forEach((x) => x.classList.remove("active"));
      p.classList.add("active");
    });
  });
  // Magnetic effect on header CTA
  const cta = document.querySelector(".header-cta");
  if (cta && !window.matchMedia("(pointer: coarse)").matches) {
    cta.addEventListener("mousemove", (e) => {
      const r = cta.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      gsap.to(cta, {
        x: x * 6,
        y: y * 6,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    cta.addEventListener("mouseleave", () => {
      gsap.to(cta, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1,.5)"
      });
    });
  }
  // Resource list: change active on click
  const resItems = document.querySelectorAll(".res-item");
  resItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      resItems.forEach((r) => r.classList.remove("active"));
      item.classList.add("active");
    });
  });
})();


/* One wheel gesture = one full page (with nested scroll for page 5) */
(function () {
  const root = document.querySelector('.scroll-root');
  if (!root) return;
  const pages = [...root.querySelectorAll('.scroll-page')];
  const page5 = document.getElementById('page5');
  let locked = false, acc = 0, idx = 0;
  const THRESH = 50;
  let page5EntryDirection = 0;
  
  function go(i, fromPage5 = false) {
    const prevIdx = idx;
    i = Math.max(0, Math.min(pages.length - 1, i));
    idx = i;
    locked = true;
    acc = 0;
    const y = pages[i].offsetTop;
    const leavingHome = prevIdx === 0 && i !== 0;
    const goingHome = i === 0 && prevIdx !== 0;

    const startScroll = () => {
      root.scrollTo({ top: y, behavior: 'smooth' });
    };

    // Reparenting the header cancels an in-flight smooth scroll. Leave page 1
    // by docking first, then scrolling; return home by scrolling first, then
    // morphing the docked bar. Never jump with behavior:'auto' — that flashes.
    if (leavingHome) {
      if (window.headerOnPageChange) window.headerOnPageChange(idx, prevIdx);
      requestAnimationFrame(() => {
        requestAnimationFrame(startScroll);
      });
    } else if (goingHome) {
      if (window.resetTourState) window.resetTourState();
      startScroll();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (window.headerOnPageChange) window.headerOnPageChange(idx, prevIdx);
        });
      });
    } else {
      startScroll();
      if (window.headerOnPageChange) window.headerOnPageChange(idx, prevIdx);
    }

    // Track entry direction for page 5 - ALWAYS set when entering page 5
    if (pages[i] === page5) {
      page5EntryDirection = i > prevIdx ? 1 : -1;
      if (window.page5SetEntry) {
        window.page5SetEntry(page5EntryDirection);
      }
      setTimeout(() => {
        locked = false;
        document.body.classList.add('is-page-5');
      }, 950);
    } else {
      document.body.classList.remove('is-page-5');
      setTimeout(() => { locked = false; }, 900);
      if (window.page5ResetVelocity) {
        window.page5ResetVelocity();
      }
      if (pages[i] && pages[i].id === 'page2' && window.page2SetEntry) {
        window.page2SetEntry(i > prevIdx ? 1 : -1);
      }
      if (pages[i] && pages[i].id === 'page3' && window.page3SetEntry) {
        window.page3SetEntry(i > prevIdx ? 1 : -1);
      }
    }
  }
  
  function isInsidePage5(target) {
    return page5 && page5.contains(target);
  }
  
  root.addEventListener('wheel', (e) => {
    if (document.body.classList.contains('p4-detail-open')) {
      e.preventDefault();
      return;
    }
    if (isInsidePage5(e.target)) {
      return;
    }
    e.preventDefault();
    if (locked) return;
    acc += e.deltaY;
    if (Math.abs(acc) < THRESH) return;
    const dir = acc > 0 ? 1 : -1;
    acc = 0;
    if (pages[idx]?.id === 'page2' && window.page2OnWheel && window.page2OnWheel(dir)) return;
    if (pages[idx]?.id === 'page3' && window.page3OnWheel && window.page3OnWheel(dir)) return;
    go(idx + dir);
  }, { passive: false });
  
  addEventListener('keydown', (e) => {
    if (document.body.classList.contains('p4-detail-open')) return;
    if (document.activeElement && isInsidePage5(document.activeElement)) return;
    const page6 = document.getElementById('page6');
    const inPage6Field = page6 && document.activeElement && page6.contains(document.activeElement) &&
      /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if (inPage6Field) return;
    if (locked) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      e.preventDefault();
      if (pages[idx]?.id === 'page2' && window.page2OnWheel && window.page2OnWheel(1)) return;
      if (pages[idx]?.id === 'page3' && window.page3OnWheel && window.page3OnWheel(1)) return;
      go(idx + 1);
    }
    if (['ArrowUp', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      if (pages[idx]?.id === 'page2' && window.page2OnWheel && window.page2OnWheel(-1)) return;
      if (pages[idx]?.id === 'page3' && window.page3OnWheel && window.page3OnWheel(-1)) return;
      go(idx - 1);
    }
    if (e.key === 'Home') { e.preventDefault(); go(0); }
    if (e.key === 'End') { e.preventDefault(); go(pages.length - 1); }
  });
  
  window.goToPage = (i, fromPage5) => go(i, fromPage5);
  window.getCurrentPageIndex = () => idx;
  window.resetTourState = () => {
    if (window.page5ResetHome) window.page5ResetHome();
    if (window.page2SetEntry) window.page2SetEntry(1);
    if (window.page3SetEntry) window.page3SetEntry(1);
    if (window.pageTempleReset) window.pageTempleReset();
    if (window.page4Reset) window.page4Reset();
    if (window.page6Reset) window.page6Reset();
  };
  
  // Initialize page 5 visibility on load
  if (pages[idx] && pages[idx].id === 'page5') {
    document.body.classList.add('is-page-5');
  } else {
    document.body.classList.remove('is-page-5');
  }
})();

/* ════════════════════════════════════════════════
   HEADER: dock to a left ball after page 1
   ════════════════════════════════════════════════ */
(function () {
  const header = document.querySelector('.header');
  const slot = document.querySelector('.header-slot');
  const logo = header && header.querySelector('.logo');
  if (!header || !slot) return;

  const IDLE_MS = 5000;
  const MORPH_MS = 1250;
  let hideTimer = 0;
  let morphTimer = 0;
  let attachRaf = 0;

  const isDocked = () => document.body.classList.contains('header-docked');
  const isExpanded = () => document.body.classList.contains('header-expanded');

  const clearHide = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = 0;
    }
  };

  const clearMorph = () => {
    if (morphTimer) {
      clearTimeout(morphTimer);
      morphTimer = 0;
    }
    if (attachRaf) {
      cancelAnimationFrame(attachRaf);
      attachRaf = 0;
    }
  };

  const armHide = () => {
    clearHide();
    if (!isDocked() || !isExpanded()) return;
    hideTimer = window.setTimeout(() => collapse(), IDLE_MS);
  };

  const collapse = () => {
    if (!isDocked()) return;
    document.body.classList.remove('header-expanded', 'header-page1');
    header.setAttribute('aria-expanded', 'false');
    clearHide();
  };

  const expand = () => {
    if (!isDocked()) return;
    document.body.classList.remove('header-page1');
    document.body.classList.add('header-expanded');
    header.setAttribute('aria-expanded', 'true');
    if (header.matches(':hover')) clearHide();
    else armHide();
  };

  const pagePadLeft = () => {
    const page = document.querySelector('.page');
    return (page && getComputedStyle(page).paddingLeft) || '20px';
  };

  const clearInlineGeom = () => {
    header.style.left = '';
    header.style.width = '';
    header.style.height = '';
    header.style.padding = '';
    header.style.top = '';
    header.style.position = '';
    header.style.margin = '';
    header.style.zIndex = '';
    header.style.boxSizing = '';
    header.style.transition = '';
  };

  const lockFixed = (rect, padding) => {
    header.style.position = 'fixed';
    header.style.top = `${rect.top}px`;
    header.style.left = `${rect.left}px`;
    header.style.width = `${rect.width}px`;
    header.style.height = `${rect.height}px`;
    header.style.padding = padding;
    header.style.margin = '0';
    header.style.zIndex = '60';
    header.style.boxSizing = 'border-box';
  };

  const rememberPage1 = (rect, padding) => {
    const b = document.body.style;
    b.setProperty('--header-top', `${rect.top}px`);
    b.setProperty('--header-left', pagePadLeft());
    b.setProperty('--header-page1-left', `${rect.left}px`);
    b.setProperty('--header-page1-width', `${rect.width}px`);
    b.setProperty('--header-page1-height', `${rect.height}px`);
    b.setProperty('--header-page1-padding', padding);
  };

  const dropIntoSlot = () => {
    clearMorph();
    header.style.transition = 'none';
    document.body.classList.remove('header-docked', 'header-expanded', 'header-page1');
    header.setAttribute('aria-expanded', 'true');
    clearInlineGeom();
    if (header.parentElement !== slot) slot.appendChild(header);
    slot.style.height = '';
    header.offsetWidth;
    header.style.transition = '';
  };

  const watchAttach = () => {
    const start = performance.now();
    const root = document.querySelector('.scroll-root');
    const homeY = document.getElementById('page1')?.offsetTop || 0;
    let nudged = false;
    const tick = (now) => {
      attachRaf = 0;
      if (!isDocked() || !document.body.classList.contains('header-page1')) return;
      const waited = now - start;
      const sr = slot.getBoundingClientRect();
      const hr = header.getBoundingClientRect();
      const aligned =
        Math.abs(sr.top - hr.top) < 12 &&
        Math.abs(sr.left - hr.left) < 16 &&
        Math.abs(sr.width - hr.width) < 64;
      const atHome = !root || Math.abs(root.scrollTop - homeY) < 24;
      // Only reparent once Page 1 is actually on screen. Doing it mid-scroll
      // cancels smooth scrolling; jumping with behavior:'auto' flashes Page 1.
      if (atHome && (aligned || waited > MORPH_MS)) {
        dropIntoSlot();
        return;
      }
      if (!atHome && !nudged && waited > 900 && root) {
        nudged = true;
        root.scrollTo({ top: homeY, behavior: 'smooth' });
      }
      attachRaf = requestAnimationFrame(tick);
    };
    attachRaf = requestAnimationFrame(tick);
  };

  const dock = () => {
    clearMorph();
    if (!isDocked()) {
      const rect = header.getBoundingClientRect();
      const cs = getComputedStyle(header);
      slot.style.height = `${rect.height}px`;
      rememberPage1(rect, cs.padding);
      lockFixed(rect, cs.padding);
      if (header.parentElement !== document.body) document.body.appendChild(header);
      document.body.classList.add('header-docked', 'header-page1');
      document.body.classList.remove('header-expanded');
      header.setAttribute('aria-expanded', 'false');
      header.offsetWidth;
      clearInlineGeom();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.remove('header-page1');
        });
      });
      return;
    }
    collapse();
  };

  const undock = () => {
    clearHide();
    clearMorph();
    if (!isDocked()) {
      if (header.parentElement !== slot) slot.appendChild(header);
      return;
    }
    document.body.classList.remove('header-expanded');
    document.body.classList.add('header-page1');
    header.setAttribute('aria-expanded', 'true');
    watchAttach();
  };

  window.headerOnPageChange = (nextIdx, prevIdx) => {
    const home = document.getElementById("nav-home");
    if (home) {
      document.querySelectorAll(".nav-pill").forEach((p) => {
        p.classList.toggle("active", p === home ? nextIdx === 0 : false);
      });
    }
    if (nextIdx === prevIdx) return;
    if (nextIdx === 0) undock();
    else dock();
  };

  header.addEventListener('click', (e) => {
    if (e.target.closest('#theme_toggle')) return;
    if (e.target.closest('.header-cta')) return;
    if (!isDocked()) return;
    if (!isExpanded()) {
      e.preventDefault();
      expand();
      return;
    }
    if (logo && logo.contains(e.target)) {
      e.preventDefault();
      collapse();
    }
  });

  header.addEventListener('mouseenter', clearHide);
  header.addEventListener('mouseleave', () => {
    if (isDocked() && isExpanded()) armHide();
  });
})();

/* ════════════════════════════════════════════════
   PAGE 5: Cube Gallery Script
   ════════════════════════════════════════════════ */
(function () {
  const page5 = document.getElementById('page5');
  if (!page5) return;

  const IMAGE_SRCS = [
    "./assets/cube/face-01.webp",
    "./assets/cube/face-02.webp",
    "./assets/cube/face-03.webp",
    "./assets/cube/face-04.webp",
    "./assets/cube/face-05.webp",
    "./assets/cube/face-06.webp"
  ];

  const IMAGE_ASPECTS = [1, 1, 1, 1, 1, 1];

  const FACE_NAMES = [
    "罗马浴场馆藏",
    "苏利斯・密涅瓦女神鎏金青铜头像",
    "苏利斯・密涅瓦女神鎏金青铜头像",
    "神庙山墙和戈耳工之头",
    "罗马诅咒牌",
    "罗马诅咒牌"
  ];

  const SWAP_RADIUS = 3;

  const N = IMAGE_SRCS.length;
  const STOPS = buildStops(N);

  const stopIndex = (s) => Math.min(N - 1, Math.floor(s * (N - 1)));

  function faceAtStop(i) {
    if (i < 6) return i;
    return 1 + ((i - 2) % 4);
  }

  function buildStops(n) {
    const base = [
      { rx: 90, ry: 0 },
      { rx: 0, ry: 0 },
      { rx: 0, ry: -90 },
      { rx: 0, ry: -180 },
      { rx: 0, ry: -270 },
      { rx: -90, ry: -360 }
    ];
    const out = base.slice(0, Math.min(n, 6));
    for (let i = 6; i < n; i++) {
      out.push({ rx: 0, ry: -360 - (i - 6) * 90 });
    }
    return out;
  }

  const dom = {
    cube: page5.querySelector("#cube"),
    faces: [...page5.querySelectorAll(".face")],
    scrollEl: page5.querySelector("#scroll_container"),
    sceneName: page5.querySelector("#scene_name"),
    captionNum: page5.querySelector("#face_caption_num"),
    captionName: page5.querySelector("#face_caption_name"),
    themeToggle: document.getElementById("theme_toggle")
  };

  for (let i = dom.scrollEl.querySelectorAll("section").length; i < N; i++) {
    const sec = document.createElement("section");
    sec.id = `s${i}`;
    dom.scrollEl.appendChild(sec);
  }

  const sceneDots = [];
  const sections = [...page5.querySelectorAll("#scroll_container section")];

  const faceImgIdx = new Array(6).fill(-1);
  let currentStop = -1;

  const imagePromises = new Map();

  const isDark = () =>
    (document.documentElement.getAttribute("data-theme") ||
      page5.getAttribute("data-theme")) === "dark";

  const getDarkSrc = (src) => src.replace(/\.webp$/, "-dark.webp");

  const getActiveSrc = (imgIdx) => {
    const src = IMAGE_SRCS[imgIdx];
    return isDark() ? getDarkSrc(src) : src;
  };

  const preloadImage = (src) => {
    if (imagePromises.has(src)) return imagePromises.get(src);
    const p = (async () => {
      const img = new Image();
      img.src = src;
      await img.decode().catch(() => {});
      return img;
    })();
    imagePromises.set(src, p);
    return p;
  };

  IMAGE_SRCS.forEach((src) => {
    preloadImage(src);
    preloadImage(getDarkSrc(src));
  });

  async function setFaceImage(faceIdx, imgIdx, force = false) {
    if (!force && faceIdx === faceAtStop(currentStop)) return;
    if (!force && faceImgIdx[faceIdx] === imgIdx) return;
    faceImgIdx[faceIdx] = imgIdx;

    const src = getActiveSrc(imgIdx);
    const face = dom.faces[faceIdx];

    await preloadImage(src);

    if (faceImgIdx[faceIdx] !== imgIdx) return;

    let img = face.querySelector("img.face-photo:not(.is-leaving)") || face.querySelector("img:not(.is-leaving)");
    const nextFit = (IMAGE_ASPECTS[imgIdx] ?? 1) !== 1 ? "contain" : "";
    if (img && img.getAttribute("src") === src) {
      img.alt = FACE_NAMES[imgIdx] ?? "";
      img.style.objectFit = nextFit;
      return;
    }

    const next = new Image();
    next.className = "face-photo";
    next.alt = FACE_NAMES[imgIdx] ?? "";
    next.src = src;
    next.style.objectFit = nextFit;
    if (img) {
      next.style.opacity = "0";
      face.appendChild(next);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.style.opacity = "1";
          img.classList.add("is-leaving");
          img.style.opacity = "0";
        });
      });
      window.setTimeout(() => img.remove(), 700);
    } else {
      face.appendChild(next);
    }
  }

  const refreshFaceImages = () => {
    const snapshot = [...faceImgIdx];
    faceImgIdx.fill(-1);
    snapshot.forEach((imgIdx, faceIdx) => {
      if (imgIdx !== -1) setFaceImage(faceIdx, imgIdx, true);
    });
  };

  for (let i = 0; i < Math.min(N, 6); i++) {
    if (IMAGE_SRCS[i]) setFaceImage(i, i, true);
  }

  function checkImageSwaps(smooth) {
    const base = stopIndex(smooth);
    for (let offset = -SWAP_RADIUS; offset <= SWAP_RADIUS; offset++) {
      if (offset === 0) continue;
      const si = base + offset;
      if (si < 0 || si >= N) continue;
      setFaceImage(faceAtStop(si), si);
    }
  }

  let lastFaceIdx = -1;

  const applyFaceUI = (si) => {
    currentStop = si;
    if (si === lastFaceIdx) return;
    lastFaceIdx = si;
    const name = FACE_NAMES[si] ?? "";
    if (dom.sceneName) dom.sceneName.textContent = name;
    if (dom.captionNum) dom.captionNum.textContent = String(si + 1).padStart(2, "0");
    if (dom.captionName) dom.captionName.textContent = name;
    sceneDots.forEach((d, i) => d.classList.toggle("active", i === si));
    sections.forEach((sec, i) => {
      const on = i === si;
      sec.classList.toggle("is-active", on);
      if (on) {
        sec.querySelectorAll(
          ".tag, h1, h2, .body-text, .stat-row, .cta, .cta-back, .h-line"
        ).forEach((el) => el.classList.add("visible"));
      }
    });
  };

  const setCubeFromFaceProgress = (p) => {
    if (!STOPS.length) return;
    const maxP = N - 1;
    const t = Math.max(0, Math.min(maxP, p));
    if (t >= maxP || STOPS.length < 2) {
      const stop = STOPS[N - 1] || STOPS[0];
      dom.cube.style.transform = `rotateX(${stop.rx}deg) rotateY(${stop.ry}deg)`;
      return;
    }
    const i = Math.min(Math.floor(t), N - 2);
    const f = t - i;
    const a = STOPS[i];
    const b = STOPS[i + 1];
    const rx = a.rx + (b.rx - a.rx) * f;
    const ry = a.ry + (b.ry - a.ry) * f;
    dom.cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  let sectionTops = [];

  const buildSectionTops = () => {
    const pageTop = page5.getBoundingClientRect().top;
    sectionTops = sections.map(
      (s) => s.getBoundingClientRect().top - pageTop + page5.scrollTop
    );
  };

  const scrollYForFace = (idx) => {
    if (!sectionTops.length) return 0;
    const t = Math.max(0, Math.min(N - 1, idx));
    if (t >= N - 1) {
      return Math.max(0, Math.min(maxScroll, sectionTops[N - 1] ?? maxScroll));
    }
    const i = Math.floor(t);
    const f = t - i;
    const a = sectionTops[i] ?? 0;
    const b = sectionTops[i + 1] ?? a;
    return Math.max(0, Math.min(maxScroll, a + (b - a) * f));
  };

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const getSystemTheme = () => (mq.matches ? "dark" : "light");

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    page5.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("site-theme", theme);
    } catch (err) {}
    refreshFaceImages();
  };

  const storedTheme = (() => {
    try {
      return localStorage.getItem("site-theme");
    } catch (err) {
      return null;
    }
  })();
  applyTheme(storedTheme === "light" || storedTheme === "dark" ? storedTheme : getSystemTheme());
  mq.addEventListener("change", (e) => {
    try {
      if (localStorage.getItem("site-theme") === "light" || localStorage.getItem("site-theme") === "dark") return;
    } catch (err) {}
    applyTheme(e.matches ? "dark" : "light");
  });

  if (dom.themeToggle) {
    dom.themeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const cur =
        document.documentElement.getAttribute("data-theme") ||
        page5.getAttribute("data-theme") ||
        getSystemTheme();
      applyTheme(cur === "dark" ? "light" : "dark");
    });
  }

  let maxScroll = 1;
  let lastScrollHeight = 0;
  let lastInnerHeight = 0;

  const resize = (force = false) => {
    const h = page5.scrollHeight;
    const vh = page5.clientHeight;
    if (!force && h === lastScrollHeight && vh === lastInnerHeight) return;
    lastScrollHeight = h;
    lastInnerHeight = vh;
    maxScroll = Math.max(1, h - vh);
    buildSectionTops();
  };

  resize(true);

  let tgt = 0;
  let smooth = 0;
  let velocity = 0;
  let entryDirection = 0;
  let boundaryAccumulator = 0;
  const BOUNDARY_THRESH = 200;
  let lastBoundaryTime = 0;
  let boundaryDirection = 0;

  let cubeP = 0;
  let targetFaceIndex = 0;
  let isSnapping = false;
  let snapFrom = 0;
  let snapTo = 0;
  let snapStart = 0;
  let snapDuration = 550;
  const SNAP_MS = 550;
  const BEGIN_AGAIN_MS_PER_FACE = 380;

  let anchorAnim = null;
  let isAnchorScrolling = false;

  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  const snapToFace = (faceIdx, opts = {}) => {
    const next = Math.max(0, Math.min(N - 1, faceIdx));
    const reversePath = !!opts.reversePath;
    const dist = reversePath
      ? Math.abs(cubeP - next)
      : Math.abs(next - cubeP);
    targetFaceIndex = next;
    snapFrom = cubeP;
    snapTo = next;
    snapStart = performance.now();
    snapDuration = opts.duration || Math.max(SNAP_MS, dist * (reversePath ? BEGIN_AGAIN_MS_PER_FACE : SNAP_MS));
    isSnapping = true;
    velocity = 0;
    isAnchorScrolling = false;
    if (anchorAnim) {
      cancelAnimationFrame(anchorAnim);
      anchorAnim = null;
    }
  };

  window.page5SetEntry = (dir) => {
    entryDirection = dir;
    resize(true);
    targetFaceIndex = dir > 0 ? 0 : N - 1;
    cubeP = targetFaceIndex;
    const targetScroll = scrollYForFace(targetFaceIndex);
    page5.scrollTo(0, targetScroll);
    tgt = maxScroll > 0 ? targetScroll / maxScroll : 0;
    smooth = tgt;
    velocity = 0;
    isSnapping = false;
    boundaryAccumulator = 0;
    boundaryDirection = 0;
    lastFaceIdx = -1;
    applyFaceUI(targetFaceIndex);
    checkImageSwaps(N > 1 ? cubeP / (N - 1) : 0);
    setCubeFromFaceProgress(cubeP);
  };

  window.page5ResetHome = () => {
    window.page5SetEntry(1);
  };

  window.page5ResetVelocity = () => {
    velocity = 0;
    boundaryAccumulator = 0;
    boundaryDirection = 0;
  };

  window.addEventListener("resize", () => {
    resize();
    tgt = maxScroll > 0 ? page5.scrollTop / maxScroll : 0;
    smooth = tgt;
  });

  let resizePending = false;
  const ro = new ResizeObserver(() => {
    if (resizePending) return;
    resizePending = true;
    requestAnimationFrame(() => {
      resize();
      tgt = maxScroll > 0 ? page5.scrollTop / maxScroll : 0;
      smooth = tgt;
      resizePending = false;
    });
  });
  ro.observe(page5);

  page5.addEventListener(
    "scroll",
    () => {
      if (isSnapping) return;
      tgt = maxScroll > 0 ? page5.scrollTop / maxScroll : 0;
      tgt = Math.max(0, Math.min(1, tgt));
    },
    { passive: true }
  );

  page5.addEventListener(
    "wheel",
    (e) => {
      e.stopPropagation();

      const atTop = targetFaceIndex <= 0 && cubeP <= 0.02;
      const atBottom = targetFaceIndex >= N - 1 && cubeP >= N - 1 - 0.02;
      const now = Date.now();

      const linePx = 16;
      const pagePx = page5.clientHeight * 0.9;
      const delta =
        e.deltaMode === 1
          ? e.deltaY * linePx
          : e.deltaMode === 2
          ? e.deltaY * pagePx
          : e.deltaY;

      if (Math.abs(delta) < 5) return;

      if (atTop && delta < 0) {
        e.preventDefault();

        if (boundaryDirection !== -1) {
          boundaryAccumulator = 0;
          boundaryDirection = -1;
        }

        boundaryAccumulator += Math.abs(delta);

        if (boundaryAccumulator >= BOUNDARY_THRESH && (now - lastBoundaryTime > 250)) {
          boundaryAccumulator = 0;
          boundaryDirection = 0;
          lastBoundaryTime = now;
          velocity = 0;
          if (window.goToPage) {
            window.goToPage(window.getCurrentPageIndex() - 1, true);
          }
        }
        return;
      }

      if (atBottom && delta > 0) {
        e.preventDefault();

        if (boundaryDirection !== 1) {
          boundaryAccumulator = 0;
          boundaryDirection = 1;
        }

        boundaryAccumulator += Math.abs(delta);

        if (boundaryAccumulator >= BOUNDARY_THRESH && (now - lastBoundaryTime > 250)) {
          boundaryAccumulator = 0;
          boundaryDirection = 0;
          lastBoundaryTime = now;
          velocity = 0;
          if (window.goToPage) {
            window.goToPage(window.getCurrentPageIndex() + 1, true);
          }
        }
        return;
      }

      e.preventDefault();
      boundaryAccumulator = 0;
      boundaryDirection = 0;

      const direction = delta > 0 ? 1 : -1;
      const nextFace = Math.max(0, Math.min(N - 1, targetFaceIndex + direction));
      if (nextFace !== targetFaceIndex || Math.abs(cubeP - nextFace) > 0.02) {
        snapToFace(nextFace);
      }
    },
    { passive: false }
  );

  const revealEls = [
    ...page5.querySelectorAll(
      ".tag, h1, h2, .body-text, .stat-row, .cta, .cta-back, .h-line"
    )
  ];

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.1, root: page5 }
  );
  revealEls.forEach((el) => io.observe(el));

  let lastNow = performance.now();

  const frame = (now) => {
    requestAnimationFrame(frame);

    if (document.hidden) {
      lastNow = now;
      return;
    }

    lastNow = now;

    if (isSnapping) {
      const elapsed = now - snapStart;
      const progress = Math.min(1, elapsed / snapDuration);
      const eased = easeOutExpo(progress);
      cubeP = snapFrom + (snapTo - snapFrom) * eased;
      const y = scrollYForFace(cubeP);
      page5.scrollTo(0, y);
      tgt = maxScroll > 0 ? y / maxScroll : 0;
      smooth = tgt;
      if (progress >= 1) {
        isSnapping = false;
        cubeP = snapTo;
        targetFaceIndex = snapTo;
        const endY = scrollYForFace(targetFaceIndex);
        page5.scrollTo(0, endY);
        tgt = maxScroll > 0 ? endY / maxScroll : 0;
        smooth = tgt;
      }
    }

    const shown = Math.round(Math.max(0, Math.min(N - 1, cubeP)));
    applyFaceUI(shown);
    const s = N > 1 ? cubeP / (N - 1) : 0;
    checkImageSwaps(s);
    setCubeFromFaceProgress(cubeP);
  };

  applyFaceUI(0);
  setCubeFromFaceProgress(0);
  requestAnimationFrame(frame);

  page5.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#s"]');
    if (!a) return;
    const href = a.getAttribute("href");
    const target = page5.querySelector(href);
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();

    const idx = sections.indexOf(target);
    if (idx < 0) return;

    const isBack = a.classList.contains("cta-back");
    const isBeginAgain =
      a.classList.contains("cta") && !isBack && idx === 0 && targetFaceIndex > 0;

    if (isBeginAgain) {
      snapToFace(0, { reversePath: true });
      return;
    }

    snapToFace(idx);
  });
})();

/* ════════════════════════════════════════════════
   "Discover more" button navigation to next page
   ════════════════════════════════════════════════ */
(function () {
  const discoverLink = document.querySelector('.discover');
  if (!discoverLink) return;
  
  discoverLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.getCurrentPageIndex && window.goToPage) {
      const currentIdx = window.getCurrentPageIndex();
      window.goToPage(currentIdx + 1);
    }
  });
})();

/* ════════════════════════════════════════════════
   PAGE 2: 12-stop walkthrough timeline
   ════════════════════════════════════════════════ */
(function () {
  const root = document.getElementById('page2');
  if (!root) return;
  const photos = [...root.querySelectorAll('.p2-photo')];
  const ticks = [...root.querySelectorAll('.p2-tick')];
  const idxEl = document.getElementById('p2-idx');
  const titleEl = document.getElementById('p2-stop-title');
  const bodyEl = document.getElementById('p2-stop-body');
  const cta = root.querySelector('.p2-cta');
  const total = ticks.length;
  let i = 0;
  let busy = false;

  const pad = (n) => String(n).padStart(2, '0');

  const show = (next) => {
    i = Math.max(0, Math.min(total - 1, next));
    photos.forEach((el, n) => el.classList.toggle('is-on', n === i));
    ticks.forEach((el, n) => {
      el.classList.toggle('is-on', n === i);
      el.classList.toggle('is-done', n < i);
    });
    const tick = ticks[i];
    const line = document.getElementById('p2-line');
    if (line) line.style.setProperty('--p2-i', String(i));
    if (idxEl) idxEl.textContent = `${pad(i + 1)} / ${pad(total)}`;
    if (titleEl) titleEl.textContent = tick?.dataset.title || '';
    if (bodyEl) bodyEl.textContent = tick?.dataset.body || '';
  };

  const move = (dir) => {
    if (busy) return true;
    const next = i + dir;
    if (next < 0 || next >= total) return false;
    busy = true;
    show(next);
    setTimeout(() => { busy = false; }, 420);
    return true;
  };

  ticks.forEach((btn) => {
    btn.addEventListener('click', () => show(Number(btn.dataset.i || 0)));
  });

  if (cta && window.goToPage) {
    cta.addEventListener('click', () => window.goToPage(2));
  }

  const spread = () => {
    const line = document.getElementById('p2-line');
    if (!line) return;
    line.classList.remove('is-spread');
    void line.offsetWidth;
    line.classList.add('is-spread');
  };

  window.page2OnWheel = (dir) => move(dir);
  window.page2SetEntry = (dir) => {
    busy = false;
    show(dir > 0 ? 0 : total - 1);
    spread();
  };

  show(0);
  requestAnimationFrame(spread);
})();

/* ════════════════════════════════════════════════
   PLACES: photo-strip + overlay (Pages 3, temple, 4)
   ════════════════════════════════════════════════ */
(function () {
  const bindGallery = (root) => {
    const overlay = root.querySelector('.p4-overlay');
    if (!overlay) return;

    const shots = [...root.querySelectorAll('.p4-shot')];
    const details = [...overlay.querySelectorAll('.p4-detail')];
    const places = details.map((el) => el.dataset.place);
    const backBtns = [...overlay.querySelectorAll('.p4-back')];
    const prevBtn = overlay.querySelector('.p4-nav-prev');
    const nextBtn = overlay.querySelector('.p4-nav-next');

    const activeBack = () =>
      overlay.querySelector('.p4-detail.is-active .p4-back') || backBtns[0];

    const showPlace = (id) => {
      overlay.dataset.place = id;
      details.forEach((el) => el.classList.toggle('is-active', el.dataset.place === id));
    };

    const stepPlace = (dir) => {
      const i = Math.max(0, places.indexOf(overlay.dataset.place));
      showPlace(places[(i + dir + places.length) % places.length]);
    };

    const openPlace = (id) => {
      showPlace(id);
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('p4-detail-open');
      activeBack()?.focus({ preventScroll: true });
    };

    const closePlace = () => {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('p4-detail-open');
      const active = root.querySelector(`.p4-shot[data-place="${overlay.dataset.place}"]`);
      if (active) active.focus({ preventScroll: true });
    };

    shots.forEach((btn) => {
      btn.addEventListener('click', () => openPlace(btn.dataset.place));
    });

    window.page4Reset = () => {
      document.querySelectorAll('.p4-overlay.is-open').forEach((ov) => {
        ov.classList.remove('is-open');
        ov.setAttribute('aria-hidden', 'true');
      });
      document.body.classList.remove('p4-detail-open');
    };

    backBtns.forEach((btn) => btn.addEventListener('click', closePlace));
    if (prevBtn) prevBtn.addEventListener('click', () => stepPlace(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => stepPlace(1));

    addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closePlace();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepPlace(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepPlace(1);
      }
    });
  };

  document.querySelectorAll('[data-places]').forEach(bindGallery);
})();

/* ════════════════════════════════════════════════
   PAGE 3: Sacred Spring chapters
   ════════════════════════════════════════════════ */
(function () {
  const root = document.getElementById('page3');
  if (!root) return;
  const photos = [...root.querySelectorAll('.p3-photo')];
  const steps = [...root.querySelectorAll('.p3-step')];
  const articles = [...root.querySelectorAll('.p3-article')];
  const kicker = document.getElementById('p3-kicker');
  const total = photos.length;
  let i = 0;
  let busy = false;

  const pad = (n) => String(n).padStart(2, '0');

  const show = (next) => {
    i = Math.max(0, Math.min(total - 1, next));
    photos.forEach((el, n) => el.classList.toggle('is-on', n === i));
    steps.forEach((el, n) => el.classList.toggle('is-on', n === i));
    articles.forEach((el, n) => el.classList.toggle('is-on', n === i));
    if (kicker) kicker.textContent = `${pad(i + 1)} / ${pad(total)}`;
  };

  const move = (dir) => {
    if (busy) return true;
    const next = i + dir;
    if (next < 0 || next >= total) return false;
    busy = true;
    show(next);
    setTimeout(() => { busy = false; }, 520);
    return true;
  };

  steps.forEach((btn) => {
    btn.addEventListener('click', () => show(Number(btn.dataset.i || 0)));
  });

  window.page3OnWheel = (dir) => move(dir);
  window.page3SetEntry = (dir) => {
    busy = false;
    show(dir > 0 ? 0 : total - 1);
  };

  show(0);
})();

/* ════════════════════════════════════════════════
   TEMPLE: expanding colonnade
   ════════════════════════════════════════════════ */
(function () {
  const root = document.getElementById('page-temple');
  if (!root) return;
  const cols = [...root.querySelectorAll('.pt-col')];
  let current = Math.max(0, cols.findIndex((col) => col.classList.contains('is-on')));

  const open = (n) => {
    if (n === current) return;
    const prev = current;
    cols.forEach((col, i) => {
      col.classList.toggle('is-on', i === n);
      col.classList.toggle('is-opening', i === n);
      col.classList.toggle('is-closing', i === prev);
    });
    root.querySelector('.pt-cols').dataset.open = String(n);
    current = n;
    window.setTimeout(() => {
      cols.forEach((col) => col.classList.remove('is-opening', 'is-closing'));
    }, 1450);
  };

  cols.forEach((col, n) => {
    col.addEventListener('click', () => open(n));
    col.querySelector('.pt-tab')?.addEventListener('click', (e) => {
      e.stopPropagation();
      open(n);
    });
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.classList.add('pt-ready'));
  });

  window.pageTempleReset = () => {
    root.classList.remove('pt-ready');
    cols.forEach((col, i) => {
      col.classList.toggle('is-on', i === 0);
      col.classList.remove('is-opening', 'is-closing');
    });
    const wrap = root.querySelector('.pt-cols');
    if (wrap) wrap.dataset.open = '0';
    current = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.add('pt-ready'));
    });
  };
})();

/* ════════════════════════════════════════════════
   PAGE 6: Tilted carousel (CodePen VYmmdMK)
   ════════════════════════════════════════════════ */
(function () {
  const page6 = document.getElementById('page6');
  if (!page6) return;

  const slides = [...page6.querySelectorAll('.p6-slide')];
  const dotsWrap = page6.querySelector('#p6-dots');
  const prevBtn = page6.querySelector('#p6-prev');
  const nextBtn = page6.querySelector('#p6-next');
  const topBtn = page6.querySelector('#p6-top');
  const form = page6.querySelector('#p6-signup');
  const n = slides.length;
  let active = Math.min(2, n - 1);

  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'p6-dot';
    btn.setAttribute('aria-label', `第 ${i + 1} 张`);
    btn.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(btn);
  });

  const dots = [...dotsWrap.querySelectorAll('.p6-dot')];

  const wrap = (index) => ((index % n) + n) % n;

  const offsetOf = (i) => {
    let d = i - active;
    const half = n / 2;
    if (d > half) d -= n;
    if (d < -half) d += n;
    return d;
  };

  const goTo = (index) => {
    active = wrap(index);
    slides.forEach((slide, i) => {
      const card = slide.querySelector('.p6-card');
      const offset = offsetOf(i);
      const isOn = offset === 0;
      slide.classList.toggle('is-active', isOn);
      slide.style.transform = `translateX(${offset * 100}%)`;
      slide.style.zIndex = String(isOn ? 8 : 6 - Math.abs(offset));
      card.style.transform = `rotateY(${-offset * 60}deg) scale(${isOn ? 1 : 0.85})`;
    });
    dots.forEach((dot, i) => {
      const on = i === active;
      dot.classList.toggle('is-active', on);
      dot.setAttribute('aria-current', on ? 'true' : 'false');
    });
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  };

  prevBtn.addEventListener('click', () => goTo(active - 1));
  nextBtn.addEventListener('click', () => goTo(active + 1));
  slides.forEach((slide, i) => {
    slide.querySelector('.p6-photo').addEventListener('click', () => goTo(i));
  });

  addEventListener('keydown', (e) => {
    if (window.getCurrentPageIndex && document.querySelectorAll('.scroll-page')[window.getCurrentPageIndex()]?.id !== 'page6') return;
    if (document.body.classList.contains('p4-detail-open')) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(active - 1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(active + 1);
    }
  });

  topBtn.addEventListener('click', () => {
    if (window.goToPage) window.goToPage(0);
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  goTo(active);

  window.page6Reset = () => {
    goTo(Math.min(2, n - 1));
  };
})();
