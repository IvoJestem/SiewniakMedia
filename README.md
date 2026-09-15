# SIEWNIAK MEDIA — Sports Media & Video Portfolio

Modern, high-contrast, brutalist & editorial web portfolio built for Siewniak Media / Hudy. Designed specifically for sports videography, matchday reporting, and vertical social media formats (IG Reels, TikTok, Shorts).

Live Demo: [https://ivojestem.github.io/Portfolio/](https://ivojestem.github.io/Portfolio/)

---

## Key Features

- Editorial / Dark Aesthetics: Pure #070708 zinc palette, aggressive typography, sharp grids, and zero generic AI templates.
- Vertical Video Showcase (9:16): Native HTML5 video player cards mimicking mobile screens with custom play/pause state handling and clean mute control.
- Modular Tab Architecture: Single-page seamless transitions across 4 dedicated modules (Home, Work, About, Contact).
- Interactive Work Filter: Category-based filtering (Basketball, Hockey, Event, Social Media) with live project counts.
- Automated CI/CD: Continuous Deployment to GitHub Pages via GitHub Actions.

---

## Tech Stack

- Framework: React 18 + TypeScript
- Bundler: Vite
- Styling: Tailwind CSS + PostCSS
- Hosting: GitHub Pages

---

## Project Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages deployment pipeline
├── public/
│   ├── img/                  # High-res stills & photography
│   └── videos/               # Optimized 9:16 vertical reels (.mp4)
├── src/
│   ├── components/
│   │   ├── HomeTab.tsx       # Asymmetrical hero showcase with active reel
│   │   ├── WorkTab.tsx       # Filterable bento portfolio grid
│   │   ├── AboutTab.tsx      # Creator manifesto, gear specs & philosophy
│   │   └── ContactTab.tsx    # Direct booking form & social links
│   ├── data/
│   │   └── projects.ts       # Structured portfolio data source
│   ├── App.tsx               # Root component & navigation state
│   ├── main.tsx              # Entry point
│   └── index.css             # Tailwind base & utilities
├── vite.config.ts            # Base path & build configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   git clone [https://github.com/IvoJestem/Portfolio.git](https://github.com/IvoJestem/Portfolio.git)
   cd Portfolio

2. Install dependencies:
   npm install

3. Run development server:
   npm run dev

4. Build for production:
   npm run build

---

## Contact & Inquiries

- Instagram: @siewniakfilms ([https://www.instagram.com/siewniakfilms/](https://www.instagram.com/siewniakfilms/))
- Email: kontakt@siewniakmedia.pl
- Base of Operations: Silesia & Zaglebie Dabrowskie (Katowice / Sosnowiec), Poland

---

## License

This project is open source and available under the MIT License.
