
---
## ═══════════════════════════════════════
## BEGIN MASTER PROMPT
## ═══════════════════════════════════════
You are a world-class senior frontend architect and luxury UI/UX engineer. Build a complete, production-grade, multipage React website for **SV IT HUB** — a premium architecture studio based in **Kolhapur, Maharashtra, India**. This is not a template. This is a handcrafted luxury digital experience.

---

### TECHNOLOGY STACK

- **React 18 + Vite**
- **Tailwind CSS**
- **Framer Motion** (page transitions, hover states, layout animations)
- **GSAP + ScrollTrigger** (scroll-driven animations, parallax, pinned sections)
- **React Router v6** (multipage routing)
- **Custom Google Fonts** (Cormorant Garamond + DM Sans + JetBrains Mono)

---

### BRAND IDENTITY

**Studio Name:** SVIT HUB Architecture Studio  
**Tagline:** "Space. Memory. Matter."  
**Location:** Plot No.18, Sangam Colony, Amrut Nagar, Sarnobatwadi, Kolhapur - 416004, Maharashtra, India  
**Phone:** +91 8552872020  
**Email:** svithub25@gmail.copm  
**Founded:** 2012  
**Coordinates:** 16°42'N 74°13'E  

---

### COLOR SYSTEM — Tailwind Config

Extend `tailwind.config.js` with this exact palette:

```javascript
colors: {
  basalt: '#1A1916',
  ivory: '#F5F1EA',
  stone: '#9E9B94',
  ochre: '#C4894A',
  terra: '#8B4A2F',
  slate: '#3D4A52',
  parchment: '#EDE8DC',
  bronze: '#6B5740',
  ghost: '#F9F7F4',
  vault: '#0F0E0C',
  mist: '#C8C4BB',
  smoke: '#2E2D2A',
  gold: '#D4A853',
}
```

---

### TYPOGRAPHY SYSTEM

Load these Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
```

Tailwind fontFamily config:
```javascript
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  sans: ['DM Sans', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

Typography rules:
- Hero headlines: `font-display font-light text-[clamp(72px,10vw,160px)] leading-[0.9] tracking-[-0.04em]`
- Section titles: `font-display font-light text-[clamp(48px,6vw,96px)] leading-[1.0] tracking-[-0.02em]`
- Body: `font-sans text-[16px] leading-[1.75] tracking-[0.01em]`
- Captions: `font-sans text-[12px] tracking-[0.1em] uppercase`
- Coordinates/Numbers: `font-mono text-[12px] tracking-[0.08em]`

---

### MOCK DATA ARCHITECTURE

**CRITICAL:** ALL content must come from centralized data files. No hardcoded content inside components.

Create `src/data/` folder with these files:

#### `src/data/site.js`
```javascript
export const siteData = {
  name: "SVIT HUB",
  fullName: "SVIT HUB Architecture Studio",
  tagline: "Space. Memory. Matter.",
  established: 2012,
  location: {
    address: "Plot 14, Rajarampuri",
    city: "Kolhapur",
    state: "Maharashtra",
    pin: "416008",
    country: "India",
    coordinates: "16°42'N 74°13'E",
  },
  contact: {
    phone: "+91 231 267 4500",
    email: "studio@svithub.in",
    inquiries: "projects@svithub.in",
  },
  social: {
    instagram: "https://instagram.com/svithub",
    linkedin: "https://linkedin.com/company/svithub",
    archinect: "#",
  }
};
```

#### `src/data/projects.js`
Create an array of 12 projects with this schema. Each project must include:
- `id`, `slug`, `title`, `subtitle`, `client`, `typology` (one of: Residential/Commercial/Cultural/Institutional/Public/Urban), `location`, `city`, `year`, `area`, `status` (Completed/Ongoing), `heroImage` (Unsplash URL), `thumbnailImage` (Unsplash URL), `featured` (boolean), `excerpt` (2-3 sentences), `concept` (2-3 paragraph essay about design concept), `philosophy` (1 paragraph), `materials` (array of material names), `gallery` (array of 6+ Unsplash image URLs), `stats` (object with area, height, floors, year), `tags` (array), `awards` (optional array)

**12 Projects to create:**
1. "Mahalakshmi Cultural Centre" — Cultural — Kolhapur — 2023 — 4200sqm
2. "Sahyadri Residence" — Residential — Gaganbawda — 2022 — 680sqm
3. "Panchaganga Riverside Pavilion" — Public — Kolhapur — 2021 — 1200sqm
4. "New Palace Heritage Wing" — Institutional — Kolhapur — 2023 — 2800sqm
5. "Wada House — Karvir" — Residential — Karvir, Kolhapur — 2022 — 480sqm
6. "Datta Industries Corporate Campus" — Commercial — Kolhapur — 2021 — 8500sqm
7. "Deccan Residences — Phase I" — Residential — Kolhapur — 2020 — 3200sqm (16 units)
8. "Rankala Lake Promenade" — Urban — Kolhapur — 2023 — 2.4km
9. "Ambabai Charitable Hospital Extension" — Institutional — Kolhapur — 2020 — 5600sqm
10. "Sahara Arts & Craft Village" — Cultural — Kagal, Kolhapur — 2019 — 6200sqm
11. "The Basalt House" — Residential — Uchgaon, Kolhapur — 2022 — 520sqm
12. "SVIT HUB Design Studio" — Commercial — Rajarampuri, Kolhapur — 2018 — 380sqm

Use high-quality Unsplash architectural images for all projects. Choose images that feel like Deccan plateau architecture — stone, concrete, warm light, dramatic shadow.

#### `src/data/services.js`
```javascript
export const services = [
  { id: "s01", slug: "architectural-design", title: "Architectural Design", tagline: "Form born from philosophy", description: "From intimate residences to civic landmarks — spaces that speak with precision and purpose.", icon: "◼", capabilities: ["Concept Design", "Design Development", "Construction Documentation", "Contract Administration", "Site Supervision"] },
  { id: "s02", slug: "interior-architecture", title: "Interior Architecture", tagline: "The interior is the soul of the building", description: "Interior space as a continuation of the architectural narrative — not decoration, but spatial precision.", icon: "◻", capabilities: ["Spatial Planning", "Material Specification", "Furniture Design", "Lighting Design", "Art Curation"] },
  { id: "s03", slug: "master-planning", title: "Master Planning", tagline: "Architecture at city scale", description: "We design the frameworks within which individual buildings breathe and communities thrive.", icon: "▣", capabilities: ["Urban Frameworks", "Campus Planning", "TOD Studies", "Landscape Integration", "Feasibility"] },
  { id: "s04", slug: "heritage-restoration", title: "Heritage & Restoration", tagline: "Memory preserved through precision", description: "Kolhapur's architectural heritage is our responsibility. Restoration as archaeology and poetry.", icon: "◈", capabilities: ["Heritage Documentation", "Structural Restoration", "Adaptive Reuse", "Conservation Planning"] },
  { id: "s05", slug: "landscape-architecture", title: "Landscape Architecture", tagline: "Where building meets earth", description: "The land is not the background. It is the first material. Every project begins with understanding the ground.", icon: "◯", capabilities: ["Site Analysis", "Landscape Design", "Water Management", "Public Realm", "Ecological Planning"] },
  { id: "s06", slug: "design-research", title: "Design Research", tagline: "Inquiry as foundation", description: "Material research, vernacular documentation, and spatial studies that feed back into built practice.", icon: "◇", capabilities: ["Material Studies", "Vernacular Documentation", "Climate Analysis", "Post-Occupancy Evaluation"] }
];
```

#### `src/data/team.js`
Create 8 team members with: `id`, `name`, `role`, `bio` (3-4 sentences), `education`, `image` (Unsplash portrait URL), `years` (years at studio), `expertise` (array)

Team members:
- Ar. Vikram Shinde — Principal Architect & Founder
- Ar. Priya Deshmukh — Design Director
- Ar. Rahul Kulkarni — Senior Project Architect
- Ar. Sneha Patil — Interior Architecture Lead
- Ar. Amit Kamble — Urban Design & Master Planning
- Ar. Deepa Chougule — Heritage Conservation Specialist
- Ar. Rohan Jadhav — Landscape Architecture
- Pooja Mane — Studio Manager & Business Development

#### `src/data/journal.js`
Create 8 journal articles with: `id`, `slug`, `title`, `subtitle`, `category` (Material Studies/Urban Thinking/Project Stories/Design Philosophy/Studio Notes), `author`, `date`, `readTime`, `heroImage`, `excerpt` (3 sentences), `body` (3-4 paragraphs), `tags`

Article topics (Kolhapur-grounded intellectual content):
1. "Stone Memory: On Kolhapur's Basalt Architecture"
2. "The Wada Typology: Courtyard as Civic Space"
3. "Designing in the Shadow of the Mahalakshmi Temple"
4. "Water, Stone and Light: The Architecture of the Sahyadri Edge"
5. "The Rankala Waterfront: Public Space at the Urban Lake"
6. "Terracotta Returns: On the Revival of Kolhapuri Roof Traditions"
7. "Studio Notes: Process Behind the Sahyadri Residence"
8. "What Does Regenerative Architecture Mean for Kolhapur?"

#### `src/data/awards.js`
Create 10 awards with: `id`, `title`, `year`, `category`, `project`, `organization`, `description`, `featured` (boolean for top 3)

#### `src/data/process.js`
```javascript
export const processStages = [
  { id: 1, number: "01", name: "Discovery", subtitle: "Listening to the land", description: "We begin not with drawings, but with conversations. Every project requires a deep understanding of site, client, program, and the invisible forces that make a place unique.", duration: "2–4 weeks" },
  { id: 2, number: "02", name: "Concept", subtitle: "Finding the first line", description: "The concept is not a style. It is the singular idea that will make this building irreplaceable in this location. We test concepts against light, wind, and memory.", duration: "3–6 weeks" },
  { id: 3, number: "03", name: "Development", subtitle: "From idea to document", description: "Concept is translated into technical precision. Every spatial decision is tested against construction reality, material behavior, and human experience at 1:1 scale.", duration: "8–16 weeks" },
  { id: 4, number: "04", name: "Construction", subtitle: "Where design meets material", description: "We maintain active site presence throughout construction. The building is completed in collaboration with craftsmen who understand that the quality of execution is the final design act.", duration: "Varies" },
  { id: 5, number: "05", name: "Legacy", subtitle: "Architecture that endures", description: "One year after occupation, we conduct a post-occupancy evaluation. We learn from the building in use. This is how SVIT HUB continues to improve with every project.", duration: "Ongoing" }
];
```

#### `src/data/philosophy.js`
```javascript
export const principles = [
  { id: 1, number: "I", name: "Materiality First", description: "Every material chosen carries memory. Kolhapur's black basalt remembers the Deccan Traps. Teak remembers the forest. We choose materials not for aesthetics but for their capacity to hold time.", image: "..." },
  { id: 2, number: "II", name: "Light as the Seventh Material", description: "After stone, concrete, wood, glass, steel, and water — light is the seventh material. We design buildings by studying how light moves through them over the course of a day and across the seasons.", image: "..." },
  { id: 3, number: "III", name: "Space Before Form", description: "The void is designed first. Walls are merely the edges of inhabited space. We begin every project by designing the silence — the space that will be occupied by human experience.", image: "..." },
  { id: 4, number: "IV", name: "Time as a Design Variable", description: "A building is not finished when it is built. It completes itself over decades. We design for how buildings will age — how concrete will silver, how stone will patinate, how vegetation will soften edges.", image: "..." },
  { id: 5, number: "V", name: "Community as Context", description: "Architecture divorced from its social fabric is merely sculpture. Every building we design is an act of civic responsibility. We ask: does this building make the city better?", image: "..." }
];
```

#### `src/data/statistics.js`
```javascript
export const statistics = [
  { id: "st01", number: 48, suffix: "+", label: "Projects Completed" },
  { id: "st02", number: 12, suffix: "", label: "Years of Practice" },
  { id: "st03", number: 6, suffix: "", label: "Design Awards" },
  { id: "st04", number: 200, suffix: "+", label: "Craftspeople Engaged" },
  { id: "st05", number: 28, suffix: "", label: "Cities Across India" },
  { id: "st06", number: 95, suffix: "%", label: "Client Return Rate" },
];
```

#### `src/data/testimonials.js`
Create 5 testimonials with: `id`, `quote`, `client`, `role`, `project`, `year`

#### `src/data/careers.js`
Create 4 open positions with: `id`, `title`, `type` (Full-time/Internship), `department`, `location`, `description`, `requirements` (array), `postedDate`

#### `src/data/navigation.js`
```javascript
export const mainNav = [
  { label: "Work", href: "/projects" },
  { label: "Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];
export const footerNav = {
  work: { label: "Work", links: [
    { label: "All Projects", href: "/projects" },
    { label: "Residential", href: "/projects?type=Residential" },
    { label: "Cultural", href: "/projects?type=Cultural" },
    { label: "Commercial", href: "/projects?type=Commercial" },
    { label: "Public", href: "/projects?type=Public" },
  ]},
  studio: { label: "Studio", links: [
    { label: "About Us", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Awards", href: "/awards" },
    { label: "Careers", href: "/careers" },
  ]},
  connect: { label: "Connect", links: [
    { label: "Contact", href: "/contact" },
    { label: "Press", href: "/press" },
    { label: "Journal", href: "/journal" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ]}
};
```

---

### SIMULATED API HOOKS

Create `src/api/` folder with hooks that simulate async data fetching:

```javascript
// src/api/useProjects.js
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

export function useProjects(filter = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = filter
        ? projects.filter(p => p.typology === filter)
        : projects;
      setData(filtered);
      setLoading(false);
    }, 400); // simulate API latency
    return () => clearTimeout(timer);
  }, [filter]);
  
  return { data, loading };
}

// src/api/useProject.js
export function useProject(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(projects.find(p => p.slug === slug) || null);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);
  return { data, loading };
}
```

Create similar hooks for: `useJournal`, `useArticle`, `useAwards`, `useTeam`

---

### FOLDER STRUCTURE

```
svithub/
├── public/
│   └── favicon.ico
├── src/
│   ├── api/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── animations/
│   │   └── project/
│   ├── data/
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Services.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Journal.jsx
│   │   ├── ArticleDetail.jsx
│   │   ├── Process.jsx
│   │   ├── Awards.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
    |│ a
│   └── index.css
│   ├── utils/
│   │   ├── animations.js
│   │   └── helpers.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

### NAVIGATION COMPONENT

Build `Navigation.jsx` with:
- Transparent over hero, becomes solid (`bg-basalt/95 backdrop-blur`) on scroll
- Left: SVIT HUB logo (text-based, Cormorant Garamond, "SVIT HUB")
- Center: Main nav links (desktop)
- Right: "Begin a Project" button + hamburger (mobile)
- Cinematic fullscreen menu overlay on mobile:
  - Opens with a smooth reveal from top
  - Large Cormorant Garamond menu items
  - Project count shown next to "Work"
  - Kolhapur office address at bottom
  - Social links
  - Dark background with subtle architectural image
- Desktop hover states: underline grows from left with `scaleX` transform
- Active page: thin ochre underline

---

### HOME PAGE (`/`)

Build complete `Home.jsx` composing these sections in order:

**1. HeroSection** — `components/sections/HeroSection.jsx`
- `min-h-screen` fullscreen section, `position: relative`
- Full-cover background image (Unsplash architectural photo)
- Dark overlay (`bg-basalt/60`)
- Very subtle tailwind CSS noise grain overlay (use `background-image: url("data:image/svg+xml...")` with 3% opacity)
- GSAP: On mount, background image slowly zooms from `scale(1.05)` to `scale(1.0)` over 8 seconds
- Center-left content layout:
  - `font-mono text-ochre text-xs tracking-widest uppercase` — "SVIT HUB ARCHITECTURE STUDIO"
  - Line divider (thin horizontal line)
  - Cormorant Garamond display: "Space.\nMemory.\nMatter." — 3 lines, each revealing upward with clip-path animation, staggered 0.15s
  - Body text: "A spatial intelligence practice rooted in Kolhapur, Maharashtra"
  - Two buttons: "Explore Our Work" (ochre background) and "Our Story" (outlined)
- Bottom left: Coordinates "16°42'N 74°13'E" in mono
- Bottom right: Scroll indicator (animated arrow bouncing)
- Bottom center: Small "Est. 2012" with thin horizontal rules on both sides

**2. StudioIntro** — `components/sections/StudioIntro.jsx`
- `bg-ivory` section, generous padding
- Left column (40%): 
  - Rotated vertical text: "ABOUT THE STUDIO" (font-mono, ochre, uppercase, tiny)
  - Large editorial paragraph (28px Cormorant): "SVIT HUB is a spatial intelligence practice founded in 2012 in Kolhapur, Maharashtra. We design buildings that are inseparable from the land they occupy, the community that surrounds them, and the cultural memory they carry."
  - Second paragraph (16px DM Sans): Studio context about Kolhapur, Deccan heritage
  - Link: "Read Our Full Story →" (ochre text, arrow animates on hover)
- Right column (60%):
  - Stacked/overlapping image composition: 
    - Large image (main studio photograph)
    - Smaller floating image (project detail)
    - Small card (project count) positioned over the image corner
- Below, full-width: 3 or 4 statistics in `grid-cols-3` or `grid-cols-4`, each with animated counter

**3. FeaturedProjects (Horizontal Scroll)** — `components/sections/ProjectShowcase.jsx`
- Header row: "Selected Works" (large Cormorant) + year "2012 — 2024" + "View All →" aligned right
- GSAP horizontal scroll container — pinned scrolling
- 5 large project cards (600px wide, 70vh tall) in a horizontal strip
- Each card:
  - Full-cover background image
  - Bottom overlay gradient
  - Project number (font-mono, tiny, top right)
  - Bottom: Project title (white Cormorant 32px) + location + typology tag
  - Hover: Image scale 1.03, reveal additional details
  - Click: Navigate to project page

**4. ProjectGrid (Staggered Masonry)** — `components/sections/ProjectGrid.jsx`
- Section title: "Recent Work"
- Filter pills: All / Residential / Commercial / Cultural / Institutional / Public
  - Filter triggers smooth Framer Motion `layout` animation
- Asymmetric grid using tailwind CSS grid with `grid-template-rows` and `grid-column/row span` combinations:
  - First item: spans 2 columns, tall
  - Items 2-3: single column, medium height
  - Items 4-5: single column side by side
  - Items 6: spans 2 columns
- Each card (`ProjectCard.jsx`): image-first, hover reveals overlay with title/location/year/typology
- Stagger reveal on scroll with GSAP ScrollTrigger

**5. PhilosophyStatement** — `components/sections/PhilosophyStatement.jsx`
- Full-viewport dark section (`bg-basalt`)
- Background: Blurred architectural image at 20% opacity
- Centered content:
  - Tiny label: "DESIGN MANIFESTO" (mono, ochre, uppercase, wide tracking)
  - Giant Cormorant italicized quote: *"We do not build walls. We sculpt the spaces between them."*
  - Attribution: "— SVIT HUB Design Manifesto, Kolhapur 2018"
- GSAP: Text reveals on scroll, pinned for 50% scroll depth
- Side: Year in large rotated mono text ("2012") — barely visible, decorative

**6. ServicesOverview** — `components/sections/ServicesGrid.jsx`
- `bg-ghost` section
- Title: "What We Do" in large Cormorant
- Subtitle: "Architecture, Interior, Planning & Heritage"
- 3-column grid of service cards (from `services.js`)
- Each ServiceCard: 
  - Top: Minimal symbol icon (use the icon character from data)
  - Number: 01, 02, 03... (mono, ochre)
  - Service title: Cormorant 24px
  - Tagline: Italic small Cormorant
  - Description: DM Sans 15px
  - Capabilities list (small mono text)
  - Bottom: "Learn More →" link
  - Hover: Card lifts slightly, left border becomes ochre
  - Thin 1px border, `bg-parchment`, no shadow

**7. ProcessStrip** — `components/sections/ProcessTimeline.jsx`
- Horizontal timeline from `process.js`
- Title: "How We Work"
- 5 stages connected by an animated line
- Each stage: Number + Name + Duration + 1-line description
- GSAP: Progress line animates on scroll from left to right
- On mobile: vertical timeline

**8. JournalPreview** — `components/sections/JournalPreview.jsx`
- Title: "From the Studio" 
- Subtitle: "Thoughts on architecture, materials, and the cities we inhabit"
- Staggered 3-article layout: large article left (tall), two smaller articles stacked right
- Each JournalCard: hero image, category tag (colored pill), title, excerpt, author, date, readTime
- Large card: 60% width
- "View All Insights →" button

**9. AwardsSection** — Simple recognition section
- Dark `bg-smoke` section
- Title: "Recognition"
- Horizontal scrolling marquee of award names
- Below: 3 featured award cards in a row

**10. ContactCTA** — `components/sections/ContactCTA.jsx`
- Two-column, `bg-ivory` section
- Left: 
  - "Let's Build Something Remarkable"
  - Studio address block
  - Phone + email
  - Small Kolhapur city description
- Right:
  - Background image: aerial/contextual Kolhapur image
  - Overlay: Bold CTA button "Begin a Conversation"

---

### PROJECTS PAGE (`/projects`)

- Page hero: 50vh, "Our Work" in large Cormorant, brief subtitle
- Sticky filter bar below hero
- Masonry-inspired responsive grid of all 12 projects
- Loading skeleton while `useProjects` hook resolves
- Filter by typology with animated transitions
- Each card shows: image, typology tag, title, location, year

---

### SINGLE PROJECT PAGE (`/projects/:slug`)

Build `ProjectDetail.jsx` using `useProject(slug)` hook:

**Hero:** Fullscreen image, project title overlaid, meta bar (location, year, typology, area)

**Intro:** Two-column — project brief/client program left, atmospheric image right. Include opening essay paragraph.

**Concept Section:** Full-width — headline "The Concept" + 2-3 paragraph design essay text + blueprint/diagram image on side

**Material Palette:** Horizontal scrollable strip. Each MaterialCard: material texture image, material name, source/origin, application note. Use Kolhapur-specific materials: Kolhapur Black Basalt, Laterite Stone, Exposed Concrete, Teak from Dandeli, Terracotta from Hubli, Weathering Steel, Glass.

**Gallery Grid:** 
- Row 1: Full-width hero image
- Row 2: 3 equal-width images
- Row 3: 2-column (one wider)
- Row 4: Full-width atmospheric
- Row 5: 4-column detail strip
- All images reveal on scroll with clip-path animation

**Spatial Stats:** 4 animated counters: Total Area / Height / Year / Floors

**Process Timeline:** 4-5 stage vertical timeline for this specific project

**Related Projects:** 3 project cards with "You might also like" heading

---

### ABOUT PAGE (`/about`)

- Hero: "We are SVIT HUB" in giant Cormorant, scrolls to reveal background image
- Founding Story: 2-column text + image of Kolhapur landscape
- Five Principles: Card-per-principle, with photography behind each card
- Team Grid: 8 team member cards with hover portrait reveal
- Studio Space Gallery: 6-image gallery of the Kolhapur office
- Kolhapur Context: Brief section on the city, its architecture, its influence on SVIT HUB

---

### SERVICES PAGE (`/services`)

- Hero: "What We Do"
- All 6 services as full-width horizontal sections alternating image left/right
- Each section: Service title, long description, capabilities list, representative project image
- Bottom: Service comparison table (which services for which project types)

---

### PHILOSOPHY PAGE (`/philosophy`)

- Cinematic, text-heavy, magazine-like
- Hero: Full-bleed image with "Our Philosophy" overlay
- Introduction essay: 3-4 paragraphs on the studio's design approach
- Five Principles: Each principle is a full-width section with:
  - Roman numeral (large, decorative)
  - Principle name (large Cormorant)
  - Long-form essay paragraph (not just tagline)
  - Supporting photography (full bleed, alternating sides)
  - GSAP: Content pins, image transitions on scroll
- Quote section: Manifesto excerpt in large type
- Kolhapur inspiration section: Connection to Deccan heritage

---

### JOURNAL PAGE (`/journal`)

- Header: "Insights" with category filters
- 8 articles from journal data
- First article: Hero featured (full-width, large image, editorial layout)
- Remaining 7: Card grid (3 columns desktop, 2 tablet, 1 mobile)
- Categories filter: All / Material Studies / Urban Thinking / Project Stories / Design Philosophy / Studio Notes

---

### SINGLE ARTICLE PAGE (`/journal/:slug`)

- Minimal, editorial, magazine-like
- Hero image full-width
- Article header: Category / Title / Subtitle / Author / Date / Read Time
- Body: Long-form text with pull quotes, inline images, large initial capital letter
- Related articles at bottom

---

### PROCESS PAGE (`/process`)

- Cinematic walk-through of the 5-stage process
- Each stage: Full-width section with stage number, name, description, duration, representative imagery
- GSAP: Progress indicator on left side showing current stage as you scroll
- Interactive timeline at top

---

### AWARDS PAGE (`/awards`)

- "Recognition" hero
- Featured awards (top 3): Large cards with award name, year, project, organization
- All awards: Searchable/filterable table/list
- Categories: By year / By project type / By organization

---

### CAREERS PAGE (`/careers`)

- Hero: "Join Us in Kolhapur"
- Brief studio culture description
- 4 open positions as expandable accordion cards
- Studio benefits: List of what SVIT HUB offers
- Application CTA: Email link

---

### CONTACT PAGE (`/contact`)

- Two-column layout
- Left:
  - "Let's Build Together"
  - Full address
  - Phone / Email
  - Map embed or static map image
  - Studio hours
  - Social links
- Right:
  - Contact form: Name / Email / Project Type (dropdown) / Budget Range (dropdown) / Message / Submit
  - Form validation (client-side)
  - Success state with confirmation message
  - Style: Minimal, architectural form aesthetic — thin borders, no rounded buttons

---

### ANIMATION SYSTEM

#### Global Animation Utilities — `src/utils/animations.js`

```javascript
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export const clipRevealVariants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export const scaleRevealVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
```

#### GSAP Patterns to Use:
- **Hero zoom:** `gsap.to(heroImageRef.current, { scale: 1.0, duration: 8, ease: 'power1.inOut' })`
- **Horizontal scroll:** `gsap.to(stripRef.current, { xPercent: -80, ease: 'none', scrollTrigger: { trigger: containerRef.current, pin: true, scrub: 1, end: "+=2000" } })`
- **Text reveal:** `gsap.fromTo(chars, { yPercent: 100 }, { yPercent: 0, stagger: 0.02, scrollTrigger: { trigger: ... } })`
- **Progress line:** `gsap.to(lineRef.current, { scaleX: 1, transformOrigin: 'left', scrollTrigger: { scrub: true } })`
- **Parallax image:** `gsap.to(imgRef.current, { yPercent: -20, ease: 'none', scrollTrigger: { scrub: true } })`

#### Framer Motion Patterns:
- Use `<AnimatePresence mode="wait">` for page transitions
- Page exit: `{ opacity: 0, y: -20 }`, enter: `{ opacity: 0, y: 20 }` → `{ opacity: 1, y: 0 }`
- Use `useInView` from Framer Motion for scroll-triggered animations
- Use `layout` prop on filter grid for smooth reordering

---

### DESIGN DETAILS — NON-NEGOTIABLE

1. **Custom scrollbar:** Thin (4px), ochre color, on webkit browsers
2. **Custom cursor:** Small circle follows mouse with 100ms delay, grows on hover over links/cards
3. **Page load animation:** Studio name fades in and out (0.8s) before content appears
4. **Scroll progress indicator:** Thin ochre line at very top of viewport growing as you scroll
5. **Image hover:** All project images have a very subtle scale(1.03) on hover with 0.4s transition
6. **Button hover:** Primary button fills from left with ochre color on hover
7. **Navigation link hover:** Underline grows from center outward
8. **Section numbers:** Each homepage section has a small section number in mono top-right (01, 02, 03...)
9. **Grain overlay:** Very subtle tailwind CSS grain on dark sections
10. **Smooth scroll:** `scroll-behavior: smooth` on html, with GSAP Lenis or native smooth scroll

---

### PERFORMANCE GUIDELINES

- All images use `loading="lazy"` attribute
- Images use `object-fit: cover` with explicit aspect ratios to prevent layout shift
- GSAP and heavy animations only initialize after component mount
- Use `React.lazy` and `Suspense` for page-level code splitting
- Tailwind purge configured correctly for production

---

### MOBILE RESPONSIVE RULES

- Breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`, `2xl:1536px`
- Navigation becomes hamburger menu at `< lg`
- Hero typography scales with `clamp()` — never smaller than 40px for display
- Horizontal scroll sections become vertical card stacks on mobile
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Process timeline becomes vertical on mobile
- All touch interactions have 44px minimum hit targets

---

### WHAT TO AVOID (CRITICAL)

- NEVER use `shadow-md` or any Tailwind shadow utilities — use `border` instead
- NEVER use gradient backgrounds except on hero overlays
- NEVER use `rounded-xl` or `rounded-2xl` — architecture is angular. Use `rounded` (4px) maximum
- NEVER use purple, blue, or green accents — only ochre/terracotta/gold from the palette
- NEVER use Tailwind's default Inter font — always Cormorant + DM Sans + JetBrains Mono
- NEVER use `<p className="text-gray-500">` — always use the custom palette classes
- NEVER create equal-height, equal-width boring grids
- NEVER add emoji anywhere in the UI
- NEVER use glassmorphism or frosted glass effects
- NEVER leave sections empty — every section must be visually rich

---

### FINAL QUALITY CHECKLIST

Before considering the build complete, verify:
- [ ] All content renders from `src/data/` files — zero hardcoded strings in components
- [ ] API hooks simulate async fetch with loading states
- [ ] All 12 pages route correctly
- [ ] GSAP ScrollTrigger is killed/cleaned up on component unmount
- [ ] Mobile navigation opens and closes correctly
- [ ] Project filter actually filters the grid
- [ ] All images have `alt` attributes and `loading="lazy"`
- [ ] Contact form has client-side validation
- [ ] Page transitions are smooth
- [ ] Footer appears on every page
- [ ] Typography uses Cormorant for headings, DM Sans for body
- [ ] Color system uses only the defined palette
- [ ] The site feels like a premium architecture studio — not a startup

---

### FINAL NOTE TO AI

This is SVIT HUB — not a generic architecture studio. It is rooted in Kolhapur, Maharashtra. The content must reflect this: the projects are real Kolhapur typologies (Wada houses, riverside pavilions, temple-adjacent civic buildings, Sahyadri-edge residences). The materials are regional (black basalt, laterite, terracotta). The cultural references are specific (Mahalakshmi Temple, New Palace, Panchaganga River, Rankala Lake). The team names are Maharashtrian. The philosophy is informed by Deccan heritage.

Build this as if SVIT HUB is a real studio that will actually launch this as their website. Every detail must be believable, specific, and architecturally intelligent.

## ═══════════════════════════════════════
## END MASTER PROMPT
## ═══════════════════════════════════════

---

# PART SEVEN: IMPLEMENTATION NOTES

---

## 7.1 RECOMMENDED BUILD ORDER

1. Scaffold Vite + React + Tailwind + configure tokens
2. Set up React Router with all page routes
3. Build all `src/data/` files completely
4. Build all `src/api/` hooks
5. Build Layout components (Navigation, Footer)
6. Build Animation utilities
7. Build UI atoms (Button, Tag, Divider, Counter)
8. Build Card components
9. Build Home page sections
10. Build remaining pages (Projects, About, Services, etc.)
11. Add GSAP animations
12. Add Framer Motion page transitions
13. Responsive QA
14. Performance pass

## 7.2 PACKAGE.JSON DEPENDENCIES

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "gsap": "^3.12.0",
    "@gsap/react": "^2.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}
```

---

*Document prepared for SV IT HUB Architecture Studio, Kolhapur, Maharashtra.*  
*All content, names, projects, and data are fictional mock content for design and development purposes.*  
*SVIT HUB — Space. Memory. Matter.*