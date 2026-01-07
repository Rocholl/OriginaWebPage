# Origina Landing Page

Modern landing page built with SvelteKit and Svelte 5, featuring Tailwind CSS and i18n support (Spanish and English).

## Features

- ✅ Header with logo and navigation
- ✅ Image carousel with autoplay
- ✅ Featured articles section
- ✅ Footer
- ✅ Pages: Home, About us, Contact
- ✅ Translation system (ES/EN)
- ✅ Responsive design
- ✅ Svelte 5 with runes
- ✅ Tailwind CSS for styling

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   ├── Carousel.svelte
│   │   └── Articles.svelte
│   └── i18n/
│       ├── es.json
│       └── en.json
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── about-us/
│   │   └── +page.svelte
│   └── contact/
│       ├── +page.svelte
│       └── +page.server.js
└── app.css
```

## Translations

Translations are located in `src/lib/i18n/` and can be changed using the language button in the header.

## Customization

- **Logo**: Replace `static/logo.svg` with your own logo
- **Colors**: Modify Tailwind colors in `tailwind.config.js`
- **Content**: Edit translation JSON files and pages in `src/routes/`

## Tech Stack

- SvelteKit 2
- Svelte 5
- Tailwind CSS 3
- svelte-i18n
