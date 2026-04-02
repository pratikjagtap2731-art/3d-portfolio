# 3D Portfolio

An interactive personal portfolio featuring immersive 3D visuals, built using React, TypeScript, Three.js, React Three Fiber, and GSAP. The site showcases animated sections, a dynamic character scene, custom cursor effects, and fluid scroll-based transitions.

Live site: [https://pratikjagtap.vercel.app/](https://pratikjagtap.vercel.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [GSAP License Note](#gsap-license-note)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [License](#license)

## Features

- Single-page responsive layout built with modular, reusable components.
- Immersive 3D character scene powered by React Three Fiber and Three.js.
- Smooth animations and transitions driven by GSAP for an engaging user experience.
- Interactive cursor effects, hover states, and scroll-triggered visuals.
- Clean component-based architecture with separated styles and utility modules.

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### Animation and 3D

- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`

### Supporting Libraries

- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Project Structure

```text
.
├── public/                    # Static assets
├── src/
│   ├── assets/                # Local media/assets
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic/utilities
│   │   ├── styles/            # Section/component CSS files
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Main page composition
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/               # Global providers (loading state, etc.)
│   ├── data/                  # Static data/content definitions
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or compatible)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd 3d-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the URL displayed in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`
  Launches the Vite dev server with host access for local network testing.

- `npm run build`
  Runs type checking and produces a production-optimized bundle.

- `npm run preview`
  Serves the production build locally for quick verification.

- `npm run lint`
  Runs ESLint across the project source files.

## GSAP License Note

This project uses the standard `gsap` package, which now includes bonus plugins in the core distribution.

- Run `npm install` to set up all dependencies.
- If upgrading from an older configuration, remove any `gsap-trial` references from your project.

See the official docs for more details: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## Customization

To personalize this portfolio for your own use, update these areas:

- **Page sections**: Modify component files in `src/components/` like `About.tsx`, `Career.tsx`, `WhatIDo.tsx`, and `Work.tsx`.
- **Static content**: Change values in files under `src/data/`.
- **Visual styling**: Edit component styles in `src/components/styles/` and global styles in `src/index.css` / `src/App.css`.
- **3D scene**: Adjust character and scene logic in `src/components/Character/`.
- **Animations**: Fine-tune GSAP configurations in `src/components/utils/`.

## Troubleshooting

- **Blank screen on dev**
  Open the browser console to check for module import errors and confirm all dependencies are installed.

- **Slow 3D rendering on lower-end hardware**
  Consider simplifying the scene and reducing post-processing effects in the character/scene utilities.

- **GSAP plugin errors**
  Verify that the correct plugin package and license setup are in place for your environment.

- **TypeScript build failures**
  Run `npm run build` and resolve any reported type errors before deploying.

## Deployment

1. Build for production:

   ```bash
   npm run build
   ```

2. Preview locally:

   ```bash
   npm run preview
   ```

3. Deploy the `dist/` folder to your preferred hosting service (e.g., Vercel, Netlify, or Cloudflare Pages).

## License

This project is open source under the [MIT License](LICENSE).
