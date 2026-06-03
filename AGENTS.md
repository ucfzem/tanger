# ucfzem — Project Context

## About
- Name: ucfzem
- Primary project: **Tanger d'Antan** (photo gallery, GitHub Pages)
- Secondary repos: **quran-majeed-v3**, **liens-page**
- Works from phone; **Smart TV** is primary viewing device for quran-majeed-v3

## Repo & Access
- GitHub: https://github.com/ucfzem
- Pages: https://ucfzem.github.io/tanger/ (legacy)
- Custom domain: https://tangerdantan.is-a.dev/ (via Cloudflare Workers CNAME)
- GitHub token must have `repo` scope; token may expire between sessions; always remove token from remote URL after push

## Tanger d'Antan — Session 2026-06-03

### Music
- Replaced old music (Moon Over Fez, Lost in Fez) with 14 new tracks from OptiMised.zip (21 MB total)
- Tracks from: Djovan, Noisy Oyster, Grand Project, Free Melody Studio, Eliza Music
- Removed old i18n song entries (song1-4) so real titles display correctly
- File with spaces renamed: `Noisy Oyster - Arab Appal.mp3` → `noisy-oyster-arab-appal.mp3`

### Photos
- **Puerta del Mar (id:14)**: removed `srcBefore`, now uses `toBW()` for damaged effect. COLOR image kept brightened (+25%).
- **All 40 photos**: now use `toBW()` for the "Avant" damaged effect (grain, sepia, dust, vignette)
- Real `images/avant/*.jpg` files removed from git, backed up in `images/avant/backup/`
- File transfer method confirmed: user uploads zip to TmpDrop, AI downloads and integrates

### Next (deferred)
- Add 20 more photos (total 60) — same structure, same toBW() effects, same transfer method via TmpDrop

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

## How to Start a Session from Phone
1. Open **github.dev/ucfzem/tanger** (or github.dev/ucfzem/quran-majeed-v3 etc.) in phone browser
2. That opens the web VS Code editor directly
3. Tell the AI: *"I'm ucfzem from phone, continue the tanger project"*
4. The AI will clone the repo from GitHub with full AGENTS.md context

## Preferences & Constraints
- All projects on GitHub Pages — ~1-2 min for changes to go live
- Quran Majeed is a SPA with hash-based routing (individual surahs not indexable by Google)
- User only has phone access; no persistent AI memory between sessions until this file
- No emojis in code unless asked
- Keep responses concise
