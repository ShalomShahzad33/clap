# CLAP Website

Website for Christian Lawyers Association Pakistan (CLAP), built as a React single-page application with Vite, Tailwind CSS, React Router, Framer Motion, and React Helmet Async.

## Features

- Responsive public website layout
- Home, About, Gallery, Our Cabinet, Contact, and Not Found routes
- SEO metadata per page
- Mobile navigation
- Frontend-only contact form validation
- Reusable UI components and content data files

## Tech Stack

- React 18
- Vite 7
- Tailwind CSS 3
- React Router DOM 7
- Framer Motion
- Lucide React
- ESLint 9

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  animations/       Shared animation variants
  components/       Layout, common UI, and page section components
  constants/        Navigation and organization constants
  data/             Page content and SEO data
  pages/            Route-level page components
  routes/           Application route configuration
  utils/            Shared utility helpers
```

## Content Notes

Some organization-specific content is currently represented with placeholders. Update the data files in `src/data` and `src/constants` when official cabinet details, photographs, contact details, and gallery assets are available.
