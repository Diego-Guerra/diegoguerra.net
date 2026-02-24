# diegoguerra.net — Portfolio Site Plan

## Overview

A minimalist, dark-themed, single-page portfolio site for Diego Guerra.
Built with React + Vite, plain CSS, and JavaScript. Deployed to Cloudflare Pages.
All data is static (hardcoded in local JSON/JS files — no database, no API calls).

---

## Tech Stack

| Tool              | Why                                                        |
| ----------------- | ---------------------------------------------------------- |
| React             | Component-based UI, good to learn                          |
| Vite              | Fast dev server, simple config, lightweight                |
| Plain CSS         | No extra libraries, easy to read and learn                 |
| JavaScript (ESM)  | No TypeScript complexity — keep it beginner-friendly       |
| Cloudflare Pages  | Free static hosting, deploys from GitHub                   |

### Dependencies (keep minimal)

- `react` + `react-dom` — core UI
- `vite` + `@vitejs/plugin-react` — build tooling

No other libraries to start. We can add later if needed.

---

## Site Structure (Single Page)

The entire site is one scrolling page. Each project section has an expandable
modal to show project details.

```
┌─────────────────────────────────┐
│           Nav Bar               │  (sticky top — logo/name + section links)
├─────────────────────────────────┤
│           Hero / About          │  (name, photo, short bio, GitHub & LinkedIn)
├─────────────────────────────────┤
│       Design Projects           │  (grid of cards → click opens modal)
├─────────────────────────────────┤
│        Code Projects            │  (grid of cards → click opens modal)
├─────────────────────────────────┤
│       School Projects           │  (grid of cards → click opens modal)
├─────────────────────────────────┤
│        Work Projects            │  (grid of cards → click opens modal)
├─────────────────────────────────┤
│           Footer                │  (small copyright line)
└─────────────────────────────────┘
```

---

## Components

```
src/
├── main.jsx                  # Entry point — renders <App />
├── App.jsx                   # Root component, holds all sections
├── App.css                   # Global styles (dark theme, resets, typography)
├── data/
│   └── projects.js           # Static project data (exported arrays)
├── components/
│   ├── Navbar.jsx            # Sticky top nav with anchor links
│   ├── Navbar.css
│   ├── Hero.jsx              # About me section (photo, bio, links)
│   ├── Hero.css
│   ├── ProjectSection.jsx    # Reusable section (title + grid of cards)
│   ├── ProjectSection.css
│   ├── ProjectCard.jsx       # Single project thumbnail card
│   ├── ProjectCard.css
│   ├── ProjectModal.jsx      # Expanded detail view (overlay)
│   ├── ProjectModal.css
│   ├── Footer.jsx
│   └── Footer.css
└── assets/
    └── images/               # Project screenshots, profile photo
```

---

## Data Model

Each project is a plain JS object. All projects live in `src/data/projects.js`.

```js
{
  id: "unique-slug",
  title: "Project Name",
  description: "A short description of the project.",
  image: "/images/project-screenshot.png",
  link: "https://github.com/diego/project",   // optional external link
  tags: ["React", "CSS", "School"],
  date: "2026-01"                              // YYYY-MM for sorting
}
```

Projects are grouped by category:

```js
export const designProjects = [ ... ];
export const codeProjects = [ ... ];
export const schoolProjects = [ ... ];
export const workProjects = [ ... ];
```

---

## Component Details

### Navbar
- Sticky at top of page
- Shows site name/logo on the left
- Anchor links on the right: About, Design, Code, School, Work
- Smooth scroll to each section via `href="#section-id"`

### Hero (About Me)
- Profile photo (circular crop via CSS)
- Name: "Diego Guerra"
- Short bio paragraph (1–3 sentences)
- Icon links to GitHub and LinkedIn (use simple inline SVGs or unicode — no icon library)

### ProjectSection
- Reusable component — receives a `title` and `projects` array as props
- Renders a responsive CSS grid of `ProjectCard` components
- Each section has an `id` attribute for anchor linking

### ProjectCard
- Displays: thumbnail image, title, and tags
- On click: opens `ProjectModal` with full details
- Hover effect: subtle scale or border highlight

### ProjectModal
- Overlay that covers the screen with a semi-transparent backdrop
- Shows: large image, title, full description, tags, date, and external link
- Close button (top-right "×") + click-outside-to-close + Escape key to close
- Traps focus inside modal for accessibility

### Footer
- Simple centered text: `© 2026 Diego Guerra`

---

## Styling Approach

- **Dark theme**: dark background (`#0a0a0a`–`#1a1a1a`), light text (`#e0e0e0`–`#ffffff`)
- **Accent color**: a single accent for links/hover (can pick later — default to a soft blue `#4a9eff`)
- **CSS reset**: minimal reset at top of `App.css` (box-sizing, margin, font)
- **Responsive**: CSS grid with `auto-fill` / `minmax()` so cards reflow on mobile
- **No media queries to start** — grid auto-fill handles most cases; add breakpoints only if needed
- **Fonts**: system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`) — no external font loading

---

## Deployment (Cloudflare Pages)

1. Push code to GitHub repo (`diegoguerra/diegoguerra.net`)
2. Connect repo to Cloudflare Pages
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Every push to `main` auto-deploys

---

## Build Order (Implementation Phases)

### Phase 1 — Scaffold
- [x] Initialize Vite + React project
- [x] Set up folder structure
- [x] Add global CSS reset and dark theme variables

### Phase 2 — Static Layout
- [x] Build `Navbar` with anchor links
- [x] Build `Hero` section with placeholder content
- [x] Build `Footer`

### Phase 3 — Project Sections
- [x] Create `src/data/projects.js` with sample placeholder data
- [x] Build `ProjectSection` and `ProjectCard` components
- [x] Wire up all four sections on the page

### Phase 4 — Modal
- [x] Build `ProjectModal` component
- [x] Add open/close logic (click card → open, ×/escape/backdrop → close)
- [x] Style the modal overlay

### Phase 5 — Polish
- [x] Add hover effects to cards
- [x] Smooth scroll behavior
- [ ] Test responsive layout on mobile sizes
- [ ] Replace placeholder content with real projects

### Phase 6 — Deploy
- [ ] Push to GitHub
- [ ] Connect Cloudflare Pages
- [ ] Verify live site

---

## Open Questions / Future Ideas

- [ ] Pick a final accent color
- [ ] Add animation/transitions (fade-in on scroll?)
- [ ] Filter/search projects by tag?
- [ ] Add more sections later (the section list is designed to be expandable)
- [ ] Custom domain setup on Cloudflare
