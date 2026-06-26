# CLAP Website Code Plan

## 1. Project Architecture

Build a React JavaScript single-page application for Christian Lawyers Association Pakistan (CLAP) using:

- React
- React Router DOM
- TailwindCSS
- Framer Motion
- React Helmet or Helmet-compatible SEO package

The app will use route-based pages, shared layout components, data-driven content, reusable sections, and Tailwind utility classes only. Static content will live in constants and data modules so page components remain small, readable, and easy to update.

## 2. Folder Structure

```text
src/
|-- assets/
|   |-- images/
|   |-- icons/
|-- components/
|   |-- common/
|   |-- layout/
|   |-- sections/
|-- pages/
|-- constants/
|-- data/
|-- routes/
|-- hooks/
|-- utils/
|-- animations/
|-- App.jsx
|-- main.jsx
|-- index.css
```

### Folder Responsibilities

- `assets/images/`: logo, placeholder portraits, gallery placeholders, hero images.
- `assets/icons/`: any local icon assets if needed.
- `components/common/`: buttons, section headers, cards, SEO component, form inputs, image placeholders.
- `components/layout/`: navbar, mobile menu, footer, page shell.
- `components/sections/`: reusable page sections such as hero, mission, vision, objectives, CTA, president message.
- `pages/`: route-level pages only.
- `constants/`: organization info, navigation links, SEO defaults, theme-independent labels.
- `data/`: mission, vision, objectives, president message, cabinet members, gallery items, contact details.
- `routes/`: route path config and route metadata.
- `hooks/`: reusable UI hooks such as scroll lock or active navigation helpers if needed.
- `utils/`: small helpers such as class name joiners or form validation helpers.
- `animations/`: Framer Motion variants.

## 3. Design System

### Theme Direction

Dark, premium, professional legal NGO aesthetic. The site should feel institutional, serious, trustworthy, and modern while still communicating service, advocacy, and human dignity.

### Color Palette

- Primary Navy: `#0F172A`
- Secondary Slate: `#1E293B`
- Deep Surface: `#111827`
- Elevated Surface: `#162033`
- Accent Gold: `#D4AF37`
- Accent Gold Soft: `#E6C766`
- Text: `#F8FAFC`
- Muted Text: `#94A3B8`
- Border: `rgba(148, 163, 184, 0.18)`
- Overlay: `rgba(15, 23, 42, 0.78)`

### Tailwind Theme Extensions

Extend Tailwind with semantic colors:

- `clap.navy`
- `clap.slate`
- `clap.gold`
- `clap.text`
- `clap.muted`

Use neutral spacing, subtle borders, and restrained shadows. Cards should use 8px border radius or less unless an existing pattern requires otherwise.

### Typography

- Headings: Merriweather
- Body: Inter
- Fallbacks: serif and sans-serif

Google Fonts will be loaded in the app shell or global stylesheet:

- Merriweather weights: 400, 700, 900
- Inter weights: 400, 500, 600, 700

Typography hierarchy:

- Page hero H1: large but responsive, `font-serif`, high contrast.
- Section headings: `font-serif`, strong weight, compact line height.
- Body copy: `font-sans`, readable line height, muted text where appropriate.
- Labels and navigation: `font-sans`, medium weight, clear focus states.

## 4. Component Breakdown

### Layout Components

- `SiteLayout`: wraps navbar, main content, and footer.
- `Navbar`: desktop navigation, logo area, active route highlighting.
- `MobileMenu`: slide-in menu with keyboard-accessible toggle.
- `Footer`: logo, mission summary, quick links, contact details, social links, copyright.

### Common Components

- `Seo`: page title, meta description, Open Graph readiness.
- `Container`: consistent responsive content width.
- `SectionHeader`: eyebrow, title, description.
- `Button`: primary, secondary, and text variants.
- `Card`: reusable dark surface card.
- `ObjectiveCard`: icon-ready card for objectives.
- `LeadershipCard`: data-driven cabinet member card.
- `GalleryCard`: image tile with category metadata and hover state.
- `FormField`: accessible input and textarea wrapper.
- `MapPlaceholder`: future Google Maps integration target.
- `ImagePlaceholder`: consistent placeholder treatment for missing assets.

### Section Components

- `HomeHero`
- `AboutPreview`
- `MissionSection`
- `VisionSection`
- `ObjectivesOverview`
- `PresidentMessageSection`
- `CallToActionSection`
- `AboutObjectivesSection`
- `GalleryGrid`
- `CabinetSection`
- `ContactInfoSection`
- `ContactFormSection`

## 5. Page Structure

### Home Page

Sections:

1. SEO
2. Hero with CLAP name, tagline, CTAs, legal-themed background visual
3. About preview
4. Mission
5. Vision
6. Objectives overview
7. President message highlight
8. Join CLAP CTA

### About Page

Sections:

1. SEO
2. Page hero
3. Organization overview
4. Mission
5. Vision
6. Dedicated objectives sections

### Gallery Page

Sections:

1. SEO
2. Page hero
3. Category filter controls
4. Responsive gallery grid
5. Lightbox-ready data and component structure

Initial gallery content will use placeholder records with meaningful alt text and categories.

### Our Cabinet Page

Sections:

1. SEO
2. Page hero
3. President card
4. Vice Presidents
5. General Secretary
6. Joint Secretary
7. Finance Secretary
8. Executive Members

All cabinet content comes from data files and supports future expansion.

### Contact Page

Sections:

1. SEO
2. Page hero
3. Contact information
4. Contact form
5. Map placeholder

The form is frontend-only and will validate required fields before displaying a non-persistent success state.

## 6. Routing Structure

Use React Router DOM with these routes:

- `/` -> Home
- `/about` -> About
- `/gallery` -> Gallery
- `/our-cabinet` -> Our Cabinet
- `/contact` -> Contact Us
- `*` -> Not Found

Route metadata will be stored in `routes/siteRoutes.js` and reused by navbar, footer, and SEO where appropriate.

## 7. State Management Approach

No global state library is needed.

Use local React state for:

- Mobile menu open/close state
- Gallery category filter
- Contact form values and validation state
- Contact form submitted state

Static content should be plain exported arrays/objects from `constants/` and `data/`.

## 8. Animation Strategy

Use Framer Motion sparingly and consistently.

Animation variants:

- `fadeIn`
- `slideUp`
- `staggerContainer`
- `cardHover`
- `mobileMenuPanel`

Rules:

- Respect professional tone.
- Avoid spinning, flashing, bouncing, or excessive motion.
- Use subtle durations around 0.2s to 0.6s.
- Prefer viewport-triggered reveals for sections and cards.
- Ensure content remains readable if animation does not run.

## 9. Accessibility Strategy

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Maintain a single H1 per page.
- Preserve logical heading hierarchy.
- Add visible keyboard focus states.
- Make mobile menu controls real buttons with `aria-expanded` and `aria-controls`.
- Close mobile menu on route change and Escape key if implemented.
- Use descriptive alt text for all meaningful images.
- Use empty alt text only for decorative images.
- Associate form labels with inputs.
- Show form validation in text, not only color.
- Maintain sufficient contrast between text and dark backgrounds.
- Ensure buttons and links have accessible names.

## 10. Responsive Strategy

Breakpoints follow Tailwind defaults:

- Mobile: base
- Tablet: `sm` and `md`
- Laptop: `lg`
- Desktop: `xl`
- Large desktop: `2xl`

Responsive behavior:

- Navbar collapses to a mobile menu below desktop widths.
- Hero uses full-width background treatment with readable overlay.
- Cards move from single column to two or three columns depending on content.
- Cabinet and gallery grids adapt without layout shift.
- Form and contact information stack on mobile and align side-by-side on larger screens.
- Text sizes use fixed Tailwind responsive steps, not viewport-width scaling.

## 11. SEO Strategy

Each page gets:

- Unique `<title>`
- Unique meta description
- Open Graph title
- Open Graph description
- Open Graph type
- Canonical-ready structure

Implement a reusable `Seo` component and route/page metadata.

Default organization SEO:

- Site name: Christian Lawyers Association Pakistan
- Short name: CLAP
- Theme: justice, human rights, rule of law, legal advocacy, Christian lawyers in Pakistan

## 12. Content Strategy

Static text belongs in data modules:

- `constants/organization.js`
- `constants/navigation.js`
- `data/about.js`
- `data/objectives.js`
- `data/presidentMessage.js`
- `data/cabinet.js`
- `data/gallery.js`
- `data/contact.js`
- `data/seo.js`

The president message should be stored as the official full text once provided. If no full message is available in the current source material, the implementation will use a clearly marked placeholder data entry and keep the structure ready for replacement.

## 13. Development Phases

### Phase 1: Project Setup

- Initialize React app.
- Install allowed dependencies.
- Configure TailwindCSS.
- Add Google Fonts.
- Create base folder structure.

### Phase 2: Data and Configuration

- Add navigation config.
- Add organization constants.
- Add page SEO data.
- Add mission, vision, objectives, cabinet, contact, gallery, and president message data.

### Phase 3: Layout Foundation

- Build `SiteLayout`.
- Build `Navbar` and `MobileMenu`.
- Build `Footer`.
- Add routing.
- Add not found page.

### Phase 4: Design System Components

- Build common components.
- Add motion variants.
- Verify component sizes stay under 200 lines.

### Phase 5: Pages

- Build Home page.
- Build About page.
- Build Gallery page.
- Build Our Cabinet page.
- Build Contact page.

### Phase 6: SEO and Accessibility

- Add page-level SEO.
- Check semantic structure.
- Check keyboard navigation.
- Check alt text and form labels.

### Phase 7: Responsive and Visual QA

- Test mobile, tablet, laptop, desktop, and large desktop layouts.
- Fix text overflow and overlapping.
- Verify dark theme consistency.
- Verify professional visual tone.

### Phase 8: Build and Final Review

- Run lint if configured.
- Run production build.
- Check for console/build errors.
- Update `TODO.md`.
- Update `FEATURES_TRACKER.md`.
- Start dev server and provide local URL if requested/appropriate.

## 14. Potential Risks and Solutions

### Risk: Official president message is missing

Solution: Keep the president message in `data/presidentMessage.js` with a placeholder field and a TODO note. Replace once client supplies the full official message.

### Risk: Real images are not available

Solution: Use polished placeholder assets and data structures with accurate alt text. Keep gallery and portrait architecture ready for future real images.

### Risk: Components exceed 200 lines

Solution: Split large pages into section components and repeated UI into common components.

### Risk: Dark theme becomes visually flat

Solution: Use restrained contrast between navy, slate, gold accents, borders, and typography weights rather than relying on a single hue.

### Risk: Animation feels distracting

Solution: Centralize variants, keep durations short, and use subtle fade/slide/card lift patterns only.

### Risk: SEO package mismatch

Solution: Use the Helmet package compatible with the selected React version and verify it during build.

### Risk: Contact form expectation exceeds frontend scope

Solution: Clearly implement frontend-only validation and success state, with the component structured for later backend integration.

## 15. Definition of Done

- Required pages exist and are routable.
- Navigation works on desktop and mobile.
- Active route highlighting works.
- Footer includes required content.
- Static content is extracted into constants/data modules.
- Framer Motion is implemented tastefully.
- SEO metadata exists on every page.
- Accessibility basics are covered.
- Responsive layouts are tested.
- No component exceeds 200 lines.
- Build completes without errors.
- `TODO.md` and `FEATURES_TRACKER.md` are updated.
