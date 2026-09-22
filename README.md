# medical-hero-snap

Classroom webpage: CodePen [KwNawQq](https://codepen.io/dermalhealth/pen/KwNawQq) medical hero replica with full-page snap scrolling.

**Page 5** features a 3D CSS cube gallery inspired by CodePen [ZYpyoRV](https://codepen.io/luis-lessrain/pen/ZYpyoRV) ("Six Faces / Walking The Cow") with scroll-driven rotation, HUD progress indicator, scene navigation dots, theme toggle, and text cards.

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
