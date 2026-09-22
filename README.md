# medical-hero-snap

Classroom webpage: CodePen [KwNawQq](https://codepen.io/dermalhealth/pen/KwNawQq) medical hero replica with full-page snap scrolling.

## Pages

- **Page 1:** Medical Hero with GSAP animations (CodePen KwNawQq)
- **Pages 2-4:** Blank placeholder pages
- **Page 5:** 3D Cube Gallery — faithful source port of CodePen [ZYpyoRV](https://codepen.io/luis-lessrain/pen/ZYpyoRV) with scroll-driven cube rotation, theme toggle, and nested scroll handoff
- **Page 6:** Blank placeholder page

## View online

- GitHub Pages: https://almlm-bot.github.io/medical-hero-snap/
- Vercel (may need VPN in mainland China): https://hero-snap-live.vercel.app

## View offline (recommended in mainland China)

Download this repo as ZIP, unzip, open `index.html` in a browser. Assets are bundled under `assets/` and `vendor/` so no external CDN is required.

## Files

- `index.html` / `style.css` / `script.js` — page structure and interactions
- `assets/` — images (including `assets/cube/` for page 5 cube faces)
- `vendor/` — GSAP

## Features

- **Pages 1-6**: Full-viewport snap scrolling with smooth navigation
- **Page 1**: Medical hero section with GSAP animations
- **Page 5**: Interactive 3D cube gallery
  - Scroll-driven face rotation through 6 faces
  - HUD progress indicator
  - Scene navigation dots
  - Light/dark theme toggle
  - Nested scroll with edge detection (escape to previous/next page)
  - Text card overlays
