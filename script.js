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
    root.scrollTo({ top: pages[i].offsetTop, behavior: 'smooth' });
    setTimeout(() => { locked = false; }, 900);
    
    // Track entry direction for page 5 - ALWAYS set when entering page 5
    if (i === 4) {
      page5EntryDirection = i > prevIdx ? 1 : -1;
      if (window.page5SetEntry) {
        window.page5SetEntry(page5EntryDirection);
      }
      document.body.classList.add('is-page-5');
    } else {
      document.body.classList.remove('is-page-5');
      if (window.page5ResetVelocity) {
        window.page5ResetVelocity();
      }
    }
  }
  
  function isInsidePage5(target) {
    return page5 && page5.contains(target);
  }
  
  root.addEventListener('wheel', (e) => {
    if (isInsidePage5(e.target)) {
      return;
    }
    e.preventDefault();
    if (locked) return;
    acc += e.deltaY;
    if (Math.abs(acc) < THRESH) return;
    const dir = acc > 0 ? 1 : -1;
    acc = 0;
    go(idx + dir);
  }, { passive: false });
  
  addEventListener('keydown', (e) => {
    if (document.activeElement && isInsidePage5(document.activeElement)) return;
    if (locked) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(idx + 1); }
    if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); go(idx - 1); }
    if (e.key === 'Home') { e.preventDefault(); go(0); }
    if (e.key === 'End') { e.preventDefault(); go(pages.length - 1); }
  });
  
  window.goToPage = (i, fromPage5) => go(i, fromPage5);
  window.getCurrentPageIndex = () => idx;
  
  // Initialize page 5 visibility on load
  if (idx === 4) {
    document.body.classList.add('is-page-5');
  } else {
    document.body.classList.remove('is-page-5');
  }
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
    "DESCENT",
    "REBELLION",
    "MOO WALK",
    "BAD ART",
    "NO RULES",
    "SUPER"
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
    strip: page5.querySelector("#scene_strip"),
    hudPct: page5.querySelector("#hud_pct"),
    progFill: page5.querySelector("#prog_fill"),
    sceneName: page5.querySelector("#scene_name"),
    captionNum: page5.querySelector("#face_caption_num"),
    captionName: page5.querySelector("#face_caption_name"),
    themeToggle: page5.querySelector("#theme_toggle")
  };

  for (let i = dom.scrollEl.querySelectorAll("section").length; i < N; i++) {
    const sec = document.createElement("section");
    sec.id = `s${i}`;
    dom.scrollEl.appendChild(sec);
  }

  dom.strip.innerHTML = "";
  for (let i = 0; i < N; i++) {
    const a = document.createElement("a");
    a.href = `#s${i}`;
    a.className = "scene-dot" + (i === 0 ? " active" : "");
    dom.strip.appendChild(a);
  }

  const sceneDots = [...page5.querySelectorAll(".scene-dot")];
  const sections = [...page5.querySelectorAll("#scroll_container section")];

  const faceImgIdx = new Array(6).fill(-1);
  let currentStop = -1;

  const imagePromises = new Map();

  const isDark = () => page5.getAttribute("data-theme") === "dark";

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

    let img = face.querySelector("img");
    if (!img) {
      img = new Image();
      face.appendChild(img);
    }
    img.alt = FACE_NAMES[imgIdx] ?? "";
    img.src = src;
    img.style.objectFit = (IMAGE_ASPECTS[imgIdx] ?? 1) !== 1 ? "contain" : "";
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

  const updateHUD = (s) => {
    const p = Math.round(s * 100);
    const si = sectionIndexFromScroll(page5.scrollTop);
    currentStop = si;
    dom.hudPct.textContent = String(p).padStart(3, "0") + "%";
    dom.progFill.style.width = `${p}%`;
    if (si !== lastFaceIdx) {
      lastFaceIdx = si;
      const name = FACE_NAMES[si] ?? "";
      dom.sceneName.textContent = name;
      dom.captionNum.textContent = String(si + 1).padStart(2, "0");
      dom.captionName.textContent = name;
      sceneDots.forEach((d, i) => d.classList.toggle("active", i === si));
    }
  };

  const easeIO = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const setCubeTransform = (s) => {
    if (N < 2 || STOPS.length < 2) return;
    const t = s * (N - 1);
    const i = Math.min(Math.floor(t), N - 2);
    const f = easeIO(t - i);
    const a = STOPS[i];
    const b = STOPS[i + 1];
    const rx = a.rx + (b.rx - a.rx) * f;
    const ry = a.ry + (b.ry - a.ry) * f;
    dom.cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  let sectionTops = [];

  const buildSectionTops = () => {
    sectionTops = sections.map(
      (s) => s.getBoundingClientRect().top + page5.scrollTop
    );
  };

  const sectionIndexFromScroll = (y) => {
    const mid = y + page5.clientHeight * 0.5;
    let idx = 0;
    for (let i = 0; i < sectionTops.length; i++) {
      if (mid >= sectionTops[i]) idx = i;
    }
    return Math.min(idx, N - 1);
  };

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const getSystemTheme = () => (mq.matches ? "dark" : "light");

  const applyTheme = (theme) => {
    page5.setAttribute("data-theme", theme);
    refreshFaceImages();
  };

  applyTheme(getSystemTheme());
  mq.addEventListener("change", (e) => applyTheme(e.matches ? "dark" : "light"));

  dom.themeToggle.addEventListener("click", () => {
    const cur = page5.getAttribute("data-theme") || getSystemTheme();
    applyTheme(cur === "dark" ? "light" : "dark");
  });

  const mqSmall = window.matchMedia("(max-width: 56.25em)");

  let maxScroll = 1;
  let lastScrollHeight = 0;
  let lastInnerHeight = 0;

  const resize = () => {
    const h = page5.scrollHeight;
    const vh = page5.clientHeight;
    if (h === lastScrollHeight && vh === lastInnerHeight) return;
    lastScrollHeight = h;
    lastInnerHeight = vh;
    maxScroll = Math.max(1, h - vh);
    buildSectionTops();
  };

  resize();

  let tgt = 0;
  let smooth = 0;
  let velocity = 0;
  let entryDirection = 0;
  let boundaryAccumulator = 0;
  const BOUNDARY_THRESH = 80;
  let lastBoundaryTime = 0;
  let boundaryDirection = 0;

  const ease = 0.1;
  const dynamicFriction = (v) => (Math.abs(v) > 200 ? 0.8 : 0.9);

  window.page5SetEntry = (dir) => {
    entryDirection = dir;
    const targetScroll = dir > 0 ? 0 : maxScroll;
    page5.scrollTo(0, targetScroll);
    tgt = targetScroll / maxScroll;
    smooth = tgt;
    velocity = 0;
    boundaryAccumulator = 0;
    boundaryDirection = 0;
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
      tgt = maxScroll > 0 ? page5.scrollTop / maxScroll : 0;
      tgt = Math.max(0, Math.min(1, tgt));
    },
    { passive: true }
  );

  page5.addEventListener(
    "wheel",
    (e) => {
      const scrollPos = page5.scrollTop;
      const BOUNDARY_BUFFER = 10;
      const nearTop = scrollPos <= BOUNDARY_BUFFER;
      const nearBottom = scrollPos >= maxScroll - BOUNDARY_BUFFER;
      const now = Date.now();
      
      if (nearTop && e.deltaY < 0) {
        e.preventDefault();
        e.stopPropagation();
        
        if (boundaryDirection !== -1) {
          boundaryAccumulator = 0;
          boundaryDirection = -1;
        }
        
        boundaryAccumulator += Math.abs(e.deltaY);
        
        if (boundaryAccumulator >= BOUNDARY_THRESH && (now - lastBoundaryTime > 200)) {
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
      
      if (nearBottom && e.deltaY > 0) {
        e.preventDefault();
        e.stopPropagation();
        
        if (boundaryDirection !== 1) {
          boundaryAccumulator = 0;
          boundaryDirection = 1;
        }
        
        boundaryAccumulator += Math.abs(e.deltaY);
        
        if (boundaryAccumulator >= BOUNDARY_THRESH && (now - lastBoundaryTime > 200)) {
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
      
      boundaryAccumulator = 0;
      boundaryDirection = 0;
      
      e.stopPropagation();
      const linePx = 16;
      const pagePx = page5.clientHeight * 0.9;
      const delta =
        e.deltaMode === 1
          ? e.deltaY * linePx
          : e.deltaMode === 2
          ? e.deltaY * pagePx
          : e.deltaY;
      if (Math.abs(delta) < 5) return;
      stopAnchorAnim();
      velocity += delta;
      velocity = Math.max(-600, Math.min(600, velocity));
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

    const dt = Math.min((now - lastNow) / 1000, 0.05);
    lastNow = now;

    velocity *= Math.pow(dynamicFriction(velocity), dt * 60);
    if (Math.abs(velocity) < 0.01) velocity = 0;

    if (Math.abs(velocity) > 0.2) {
      const next = Math.max(0, Math.min(page5.scrollTop + velocity * ease, maxScroll));
      page5.scrollTo(0, next);
      tgt = next / maxScroll;
    }

    smooth += (tgt - smooth) * (1 - Math.exp(-dt * 8));
    smooth = Math.max(0, Math.min(1, smooth));

    updateHUD(smooth);
    checkImageSwaps(smooth);
    setCubeTransform(smooth);
  };

  requestAnimationFrame(frame);

  let anchorAnim = null;
  let isAnchorScrolling = false;

  const stopAnchorAnim = () => {
    if (anchorAnim) {
      cancelAnimationFrame(anchorAnim);
      anchorAnim = null;
    }
    isAnchorScrolling = false;
  };

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const smoothScrollToY = (targetY, duration = 900) => {
    stopAnchorAnim();
    velocity = 0;
    isAnchorScrolling = true;
    const startY = page5.scrollTop;
    const diff = targetY - startY;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const y = startY + diff * easeInOutCubic(p);
      page5.scrollTo(0, y);
      tgt = y / maxScroll;
      smooth = tgt;
      if (p < 1) {
        anchorAnim = requestAnimationFrame(tick);
      } else {
        anchorAnim = null;
        isAnchorScrolling = false;
      }
    };
    anchorAnim = requestAnimationFrame(tick);
  };

  page5.addEventListener("touchstart", stopAnchorAnim, { passive: true });
  page5.addEventListener("mousedown", stopAnchorAnim, { passive: true });

  page5.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#s"]');
    if (!a) return;
    const target = page5.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const isHero = a.getAttribute("href") === "#s0";
    const idx = sections.indexOf(target);
    const baseY =
      idx >= 0
        ? sectionTops[idx]
        : target.getBoundingClientRect().top + page5.scrollTop;
    const extraOffset =
      mqSmall.matches && !isHero
        ? Math.max(0, target.offsetHeight - page5.clientHeight)
        : 0;
    smoothScrollToY(Math.max(0, baseY + extraOffset));
  });
})();
