# Rogad Chambers website

A standalone React + Vite + Tailwind site exported from Base44, with the Base44 SDK, login pages and unused UI kit removed. The design and copy are unchanged.

## Run it locally

You need Node.js 18 or newer (`.nvmrc` pins 22 for nvm users).

    npm install
    npm run dev

Open the address it prints (usually http://localhost:5173).

## Build for hosting

    npm run build

This creates a `dist/` folder, which is the whole website. Always run `npm run build` after changing anything so `dist/` is up to date.

- **cPanel / shared hosting:** upload the *contents* of `dist/` to `public_html`. The included `.htaccess` makes page links like /about work on refresh.
- **Netlify:** drag the `dist/` folder onto the Netlify dashboard. `_redirects` handles routing.
- **Vercel:** import the project; `vercel.json` handles routing.

## Where to edit content

| What | File |
|---|---|
| Lawyers (names, titles, photos) | `src/data/lawyers.js` |
| Practice areas (summaries, full write-ups, images) | `src/data/practices.js` |
| Newsletters and blog posts | `src/data/insights.js` |
| About, Our Standard and Become Our Client copy | `src/data/siteContent.js` |
| Office addresses, phone numbers, email | `src/components/law/ContactSection.jsx` |
| WhatsApp number for the intake form | `src/components/law/IntakeForm.jsx` |
| Navigation links | `src/components/law/Header.jsx` |
| Footer text | `src/components/law/Footer.jsx` |

### Adding lawyer photos
Put the image in `public/images/people/` and set `profile_image` in `src/data/lawyers.js`, e.g. `profile_image: "/images/people/gbenga.jpg"`. Without a photo, the card shows initials.

### Adding full articles
Add a `body` field to any item in `src/data/insights.js`. Separate paragraphs with a blank line.

## Images
Every image is served from this project; nothing is loaded from an external host. Files live in `public/images/`, and every path is listed once in `src/data/assets.js`, which the components import.

    public/
      favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png   (made from the logo crest)
      images/
        brand/        rogad-chambers-logo.png (used in the header), the full-size original, and a 512px crest
        hero/         lagos-architecture.webp (homepage background)
        practices/    one image per practice area
        backgrounds/  lagos-skyline-dusk.webp (Become Our Client section)
        people/       lawyer photos (empty for now)
        fallback/     image-placeholder.webp (shown if an image fails to load)

### Swapping an image
The easiest way is to replace the file in `public/images/` with a new one of the same name and format. To use a different name, add the file and update its path in `src/data/assets.js`.

For photos, use WebP, about 2000px wide for full-width backgrounds and 1200px on the longest side for practice cards. Online tools such as squoosh.app can convert and resize them. Keep the logo as a PNG with a transparent background.

### Adding lawyer photos
1. Put a square photo (at least 400×400px) in `public/images/people/`, named after the person, e.g. `gbenga-onabanjo-rogad.webp`.
2. In `src/data/lawyers.js`, set that lawyer's `profile_image` to the path, starting from `/images`:

        profile_image: "/images/people/gbenga-onabanjo-rogad.webp"

The card shows the photo in a gold circle. Lawyers without a `profile_image` keep showing their initials.
