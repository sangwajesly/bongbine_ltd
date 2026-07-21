# Bongbine Ltd — Corporate React Site

A premium corporate website built with React and Vite for Bongbine Ltd, a Cameroon-focused group specializing in real estate, construction, building materials, trade, and logistics.

## Project Overview

This app is a modern single-page application with:

- rich landing page and corporate storytelling
- service, project, gallery, contact, and FAQ pages
- Cameroon-specific branding and local contact information
- responsive layout with dark/orange visual styling
- Lucide iconography and smooth animations via Framer Motion

## Tech Stack

- React 19
- Vite
- React Router DOM
- Framer Motion
- Lucide React
- ESLint for code quality

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — start the app in development mode
- `npm run build` — bundle the app for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint across the project

## Project Structure

- `src/` — application source files
  - `App.jsx` — main app layout and routing
  - `index.css` — base styles
  - `App.css` — site design and page layout
  - `components/` — reusable UI components
  - `pages/` — site pages for home, about, services, projects, gallery, contact, FAQ, and not found
  - `data/` — structured content used across pages
- `public/` — static assets
- `index.html` — root HTML file and font imports

## Styling & Branding

The design uses:

- custom dark/orange color palette
- `Sora` and `Plus Jakarta Sans` fonts
- full-width hero and panel layouts with clean content containers
- high contrast footer and accessible text styles

## Notes

- Contact information and WhatsApp links are configured for Cameroon (`+237`).
- Content is sourced from `src/data/content.js` and rendered dynamically across pages.

## Contribution

To update content or modify branding, edit files in `src/data/` and the corresponding page or component files in `src/pages/` and `src/components/`.

## License

This repository is currently configured as a private project.
