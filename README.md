# Rogad Chambers website

A standalone React + Vite + Tailwind site for Rogad Chambers. All content lives in `src/data/`; there is no CMS or backend.

## Run it locally

You need Node.js 18 or newer (`.nvmrc` pins 22 for nvm users).

    npm install
    npm run dev

Open the address it prints (usually http://localhost:5173).

## Build for hosting

    npm run build

This creates a `dist/` folder, which is the whole website. Always run `npm run build` after changing anything so `dist/` is up to date.

The build also pre-renders every public page to static HTML (`scripts/prerender.js`, using `src/entry-server.jsx`), so search engines and link previews see each page's real content and title. New practices, partners and articles are picked up automatically from `src/data/`. Addresses that aren't pre-rendered are served `dist/spa.html`, the plain app shell.

- **cPanel / shared hosting:** upload the *contents* of `dist/` to `public_html`. The included `.htaccess` makes page links like /about work on refresh.
- **Netlify:** drag the `dist/` folder onto the Netlify dashboard. `_redirects` handles routing.
- **Vercel (recommended):** import the GitHub repository at vercel.com/new. It detects Vite automatically (build command `npm run build`, output folder `dist`). `vercel.json` handles routing, caching and security headers. Every push to `main` redeploys.

## Where to edit content

| What | File |
|---|---|
| Lawyers (names, titles, photos) | `src/data/lawyers.js` |
| Practice areas (landing summaries, practice-page sections, images) | `src/data/practices.js` |
| Newsletters and blog posts | `src/data/insights.js` |
| About, Our Standard and Become Our Client copy | `src/data/siteContent.js` |
| Office addresses, phone numbers, email (footer and Contact page) | `src/data/contact.js` |
| WhatsApp number for the intake form | `src/components/law/IntakeForm.jsx` |
| Navigation links | `src/components/law/Header.jsx` |
| Footer text | `src/components/law/Footer.jsx` |

### Adding lawyer photos
Put the image in `public/images/people/` and set `profile_image` in `src/data/lawyers.js`, e.g. `profile_image: "/images/people/gbenga.jpg"`. Without a photo, the card shows initials.

### Adding full articles
Add a `body` field to any item in `src/data/insights.js`. Separate paragraphs with a blank line; start a line with `## ` for a section heading or `### ` for a subheading. Set `featured: true` on one item to feature it at the top of the Insights page.

### Original image files
High-resolution originals (`.png`) in `public/images/practices/` are excluded from git by `.gitignore`; the site uses the optimised `.webp` copies. Convert any new photo to WebP before adding it.

## Images
Every image is served from this project; nothing is loaded from an external host. Files live in `public/images/`, and every path is listed once in `src/data/assets.js`, which the components import.

    public/
      favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png   (made from the logo crest)
      images/
        brand/        rogad-chambers-logo.png (used in the header), the full-size original, and a 512px crest
        hero/         lagos-architecture.webp (homepage background)
        practices/    one image per practice area
        backgrounds/  lagos-skyline-dusk.webp (Become Our Client section)
        people/       lawyer portraits
        fallback/     image-placeholder.webp (shown if an image fails to load)

### Swapping an image
The easiest way is to replace the file in `public/images/` with a new one of the same name and format. To use a different name, add the file and update its path in `src/data/assets.js`.

For photos, use WebP, about 2000px wide for full-width backgrounds and 1200px on the longest side for practice cards. Online tools such as squoosh.app can convert and resize them. Keep the logo as a PNG with a transparent background.

### Adding lawyer photos
1. Put a portrait photo (at least 800×1000px, portrait orientation) in `public/images/people/`, named after the person.
2. In `src/data/lawyers.js`, set that lawyer's `profile_image` to the path, starting from `/images`:

        profile_image: "/images/people/gbenga-onabanjo-rogad.webp"

Cards and profile pages show the photo in a 4:5 portrait frame. Lawyers without a `profile_image` show an initials placeholder of the same size. Profile text (`bio`, `practiceAreas`, `qualifications`) is optional; sections without data are hidden.
