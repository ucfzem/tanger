# ucfzem — Project Context

## About
- Name: ucfzem
- Primary project: **Tanger d'Antan** (photo gallery, GitHub Pages)
- Secondary repos: **quran-majeed-v3**, **liens-page**
- Works from phone; **Smart TV** is primary viewing device for quran-majeed-v3

## Repo & Access
- GitHub: https://github.com/ucfzem
- Pages: https://ucfzem.github.io/tanger/
- GitHub token must have `repo` scope; token may expire between sessions; always remove token from remote URL after push

## Tanger d'Antan — Completed Work

### Slider (before/after)
- Rewrote using `clip-path: inset()` instead of `overflow: hidden` + `width: 200%`
- Both images use same `object-fit: contain` at same position — no more misalignment
- Slider position tracked via JS updating clip-path and divider `left` values

### Images
- All 40 JPEGs compressed with Pillow (quality 80, optimize=True)
- Total: 12.1 MB → 7.8 MB (35% reduction); all under 700 KB
- For images that grew, re-compressed at quality 50

### Arabic language
- Font changed from Playfair Display (no Arabic glyphs) to **Amiri** (Google Fonts) + system fallbacks
- Arabic title: `font-weight: 700; letter-spacing: 0; line-height: 1.1`
- Removed `font-style: italic` for Arabic `<em>`
- Arabic subtitle etc. still use Cormorant Garamond fallback — not ideal but not complained about

### Scroll on refresh
- Browser restores scroll position on refresh, hiding the hero title at top
- Fix: inline `<script>` in `<head>` with `history.scrollRestoration='manual'` + `window.scrollTo(0,0)`
- Wrapped in try-catch for browsers that don't support scrollRestoration
- Temporarily overrides `scroll-behavior: smooth` to ensure instant scroll

### Other fixes
- Hero title gold color: added `!important` for mobile rendering
- SEO/GA4 not yet configured (GA4 placeholder `G-XXXXXXXXXX` in both tanger and liens)

## Quran Majeed v3 — Completed Work
- Custom div-based language dropdown (native `<select>` doesn't work on TV remotes)
- Scroll lock with `position: fixed` + `overflow: hidden` for all overlays
- TV remote keyboard navigation: sidebar, search results, dropdown (Arrow/Enter/Escape)
- GA4 placeholder `G-XXXXXXXXXX` in index.html
- Removed duplicate Escape handler for search modal

## Liens Page — Completed Work
- GA4 gtag snippet (placeholder `G-XXXXXXXXXX`)
- SEO meta tags (description, robots, OpenGraph, Twitter Card, canonical)
- Profile photo uploaded (`images/avatar.png`)

## Blocked / Pending
- **GA4**: user needs to create GA4 property at https://analytics.google.com and provide real Measurement ID
- Replace `G-XXXXXXXXXX` in tanger, quran-majeed-v3, and liens when real ID is available

## Preferences & Constraints
- All projects on GitHub Pages — ~1-2 min for changes to go live
- Quran Majeed is a SPA with hash-based routing (individual surahs not indexable by Google)
- User only has phone access; no persistent AI memory between sessions until this file
- No emojis in code unless asked
- Keep responses concise
