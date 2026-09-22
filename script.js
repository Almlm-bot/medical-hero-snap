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


/* ════════════════════════════════════════════════
     PAGE 5 - 3D CUBE GALLERY
     ════════════════════════════════════════════════ */
(function () {
  const page5 = document.getElementById('page5');
  if (!page5) return;

  const cubeContainer = page5.querySelector('.cube-container');
  const cube = page5.querySelector('.cube');
  const progressBar = page5.querySelector('.progress-bar');
  const currentFaceEl = page5.querySelector('.current-face');
  const dots = page5.querySelectorAll('.dot');
  const themeToggle = page5.querySelector('.theme-toggle');
  const textCard = page5.querySelector('.text-card');

  let currentFace = 0;
  const faces = 6;

  // Rotation configurations for each face
  const rotations = [
    { x: 0, y: 0 },       // Face 1 (front)
    { x: 0, y: -180 },    // Face 2 (back)
    { x: 0, y: -90 },     // Face 3 (right)
    { x: 0, y: 90 },      // Face 4 (left)
    { x: -90, y: 0 },     // Face 5 (top)
    { x: 90, y: 0 }       // Face 6 (bottom)
  ];

  // Update cube rotation based on scroll
  function updateCube() {
    const scrollTop = cubeContainer.scrollTop;
    const scrollHeight = cubeContainer.scrollHeight - cubeContainer.clientHeight;
    const scrollProgress = Math.min(scrollTop / scrollHeight, 1);
    
    // Calculate which face should be shown
    const faceProgress = scrollProgress * (faces - 1);
    const targetFace = Math.round(faceProgress);
    
    // Smooth interpolation between faces
    const faceIndex = Math.floor(faceProgress);
    const nextFaceIndex = Math.min(faceIndex + 1, faces - 1);
    const t = faceProgress - faceIndex;
    
    const currentRot = rotations[faceIndex];
    const nextRot = rotations[nextFaceIndex];
    
    const rotX = currentRot.x + (nextRot.x - currentRot.x) * t;
    const rotY = currentRot.y + (nextRot.y - currentRot.y) * t;
    
    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    
    // Update HUD
    progressBar.style.width = `${scrollProgress * 100}%`;
    
    // Update current face if changed
    if (targetFace !== currentFace) {
      currentFace = targetFace;
      currentFaceEl.textContent = currentFace + 1;
      
      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentFace);
      });
      
      // Show text card briefly on face change
      textCard.classList.add('show');
      setTimeout(() => textCard.classList.remove('show'), 2000);
    }
  }

  // Scroll event listener for cube container
  cubeContainer.addEventListener('scroll', updateCube);

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const scrollHeight = cubeContainer.scrollHeight - cubeContainer.clientHeight;
      const targetScroll = (i / (faces - 1)) * scrollHeight;
      cubeContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    page5.classList.toggle('dark-theme');
  });

  // Initialize
  updateCube();
  
  // Show text card on initial load
  setTimeout(() => {
    textCard.classList.add('show');
    setTimeout(() => textCard.classList.remove('show'), 3000);
  }, 500);
})();

/* One wheel gesture = one full page (both directions) with Page 5 nested scroll */
(function () {
  const root = document.querySelector('.scroll-root');
  if (!root) return;
  const pages = [...root.querySelectorAll('.scroll-page')];
  const page5 = document.getElementById('page5');
  const cubeContainer = page5?.querySelector('.cube-container');
  
  let locked = false, acc = 0, idx = 0;
  const THRESH = 50;
  
  function go(i) {
    i = Math.max(0, Math.min(pages.length - 1, i));
    idx = i;
    locked = true;
    acc = 0;
    root.scrollTo({ top: pages[i].offsetTop, behavior: 'smooth' });
    setTimeout(() => { locked = false; }, 900);
  }
  
  // Get current page index
  function getCurrentPageIndex() {
    const scrollTop = root.scrollTop;
    for (let i = 0; i < pages.length; i++) {
      const pageTop = pages[i].offsetTop;
      const pageBottom = pageTop + pages[i].offsetHeight;
      if (scrollTop >= pageTop - 10 && scrollTop < pageBottom - 10) {
        return i;
      }
    }
    return 0;
  }
  
  root.addEventListener('wheel', (e) => {
    idx = getCurrentPageIndex();
    
    // Special handling for page 5 (cube gallery)
    if (idx === 4 && page5 && cubeContainer) {
      const scrollTop = cubeContainer.scrollTop;
      const scrollHeight = cubeContainer.scrollHeight - cubeContainer.clientHeight;
      const isAtTop = scrollTop <= 1;
      const isAtBottom = scrollTop >= scrollHeight - 1;
      
      // If scrolling up at top of cube, allow going to previous page
      if (e.deltaY < 0 && isAtTop) {
        e.preventDefault();
        if (!locked) {
          go(idx - 1);
        }
        return;
      }
      
      // If scrolling down at bottom of cube, allow going to next page
      if (e.deltaY > 0 && isAtBottom) {
        e.preventDefault();
        if (!locked) {
          go(idx + 1);
        }
        return;
      }
      
      // Otherwise, let the cube container handle the scroll
      return;
    }
    
    // Normal page navigation for other pages
    e.preventDefault();
    if (locked) return;
    acc += e.deltaY;
    if (Math.abs(acc) < THRESH) return;
    const dir = acc > 0 ? 1 : -1;
    acc = 0;
    go(idx + dir);
  }, { passive: false });
  
  addEventListener('keydown', (e) => {
    if (locked) return;
    idx = getCurrentPageIndex();
    
    // Allow arrow keys to work within page 5 cube scroll
    if (idx === 4 && page5 && ['ArrowDown', 'ArrowUp'].includes(e.key)) {
      return; // Let the cube container handle it
    }
    
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { 
      e.preventDefault(); 
      go(idx + 1); 
    }
    if (['ArrowUp', 'PageUp'].includes(e.key)) { 
      e.preventDefault(); 
      go(idx - 1); 
    }
    if (e.key === 'Home') { 
      e.preventDefault(); 
      go(0); 
    }
    if (e.key === 'End') { 
      e.preventDefault(); 
      go(pages.length - 1); 
    }
  });
})();
