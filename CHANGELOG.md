# Changelog — Cheshire Spraying Specialists Website

> Full commit history for the `home-aquafix-flow` project, grouped by development
> phase for quick reference. Last updated **2026-06-30**.
>
> This is a human-readable companion to `git log`. For exact diffs, run
> `git show <hash>` or `git log --oneline`.

---

## How to read this

- Commits are listed **newest first** within each section.
- Hashes are abbreviated (7 chars). Full hashes are available via `git log --format=%H`.
- Conventional Commit prefixes (`feat`, `fix`, `refactor`, `style`, `content`,
  `docs`, `chore`, `copy`) are preserved from the original messages.
- The project follows the conventions in [`CLAUDE.md`](./CLAUDE.md).

---

## Phase 6 — Sitewide hero consistency & marquee polish (2026-06-30)

Unified the five page heroes onto a single responsive heading scale, and
fixed the horizontal testimonials marquee (a snap/jump on mobile that was
a different root cause from the earlier vertical hero marquee bug).

| Hash | Message |
| --- | --- |
| `85b1e91` | fix(testimonials): slow mobile marquee to 35s (desktop untouched) |
| `40d0efa` | style(hero): uniform responsive h1 scale across Services & Work pages |
| `2b9c223` | fix(testimonials): seamless marquee loop via w-max on translate basis |
| `48caa0d` | fix(about): mobile hero alignment + heading size parity |

**Notable:** The testimonials marquee snap (`2b9c223`) was a *different*
bug from the Phase 5 hero vertical marquee fix. Here the marquee-left
`translateX(-33.333%)` keyframe resolves against the element's own width;
the container was missing `w-max`, so it shrank to the viewport (~375px
on mobile) and `-33.333%` translated by ~125px instead of one full card
set — producing the visible restart each cycle. Adding `w-max` matches the
proven Hero.tsx marquee pattern. The About hero fixes (`48caa0d`) brought
its h1 onto the shared `text-4xl md:text-5xl lg:text-6xl` scale and
left-aligned the mobile layout.

---

## Phase 5 — Mobile polish & seamless hero marquee (2026-06-29)

Mobile responsiveness pass plus the multi-step fix to the homepage hero's
vertical image marquee (which snapped instead of looping seamlessly).

| Hash | Message |
| --- | --- |
| `e0d9142` | fix(quote): mobile service dropdown overflow + emergency urgency label spill |
| `175aee7` | docs: add CHANGELOG.md documenting full commit history |
| `f9a8889` | fix(hero): seamless vertical marquee via items-start (fix translate box-height) |
| `d7bcf28` | fix(hero): seamless vertical marquee via tripled content + -33.333% translate |
| `12c5d7b` | fix(hero): seamless marquee loop (remove mt-8, negative animationDelay) and tighten mobile gap |
| `2f3cbc8` | fix(mobile): html overflow, hero animation loop, mobile image strip, back-to-top button |
| `d8c365d` | fix(mobile): portfolio overflow, about stats, footer compact, nav overflow links |
| `c9fc19a` | fix(mobile): overflow, services text, solutions image order, testimonials speed, stats layout |

**Notable:** The hero marquee fix (`f9a8889`) resolved a flexbox geometry bug —
the column's box was being stretched by `align-items: stretch`, so the
`translateY(-33.333%)` resolved against the wrong height. Adding `items-start`
to the container fixed it.

---

## Phase 4 — Brand & content accuracy (2026-06-28)

Real business address sweep, currency correction (UK £), and content
redundancy cleanup.

| Hash | Message |
| --- | --- |
| `757a00b` | fix: address redundancy, privacy policy location, orange heading accents |
| `46592bb` | fix: urgency button brand colour, real business address sweep (Neston CH64 3RU) |

---

## Phase 3 — Design system & typography build (2026-06-25)

Logo wordmark cascade, Barlow type system, privacy policy content, and
cross-page polish.

| Hash | Message |
| --- | --- |
| `10dfe2d` | fix: timeline typo, about heading accent, select text colour, quote page dark hero + GBP currency + icon consistency |
| `1782b85` | fix: privacy policy in footer column, input text colour, PoundSterling icon |
| `69f8a86` | content: replace placeholder privacy policy with real UK GDPR content |
| `a4bf571` | copy: rewrite About page mission, vision, and values intro copy |
| `d117db6` | fix: clean heading typography rules, add hero stats breathing room |
| `67ae3c4` | fix: business name typo sweep (Spraying not Spray) |
| `7c76e25` | feat: load Barlow + Barlow Condensed, apply typography system |

---

## Phase 2b — Nav, favicon & overflow menu (2026-06-24, evening)

Favicon iterations, navigation restructure (Pages dropdown → Contact + overflow
menu), and dropdown restyling.

| Hash | Message |
| --- | --- |
| `c3cc152` | style: restyle overflow dropdown as elevated dark surface, remove caret |
| `9dbdd6e` | style: glassmorphism overflow dropdown with caret anchor |
| `69f0e9e` | fix: simplify favicon for legibility at 16px tab size |
| `d1eda9b` | fix: redesign favicon with dark background for browser tab visibility |
| `4f2d396` | feat: remove pricing page entirely |
| `a115daa` | refactor: replace Pages dropdown with Contact in nav + icon overflow menu |
| `8694a0a` | feat: remove arrow from FeaturedWorks, add 4th portfolio card |
| `b606deb` | fix: add SVG favicon and correct business name in meta tags |

---

## Phase 2a — Logo wordmark & brand identity (2026-06-24, evening)

Cascade wordmark implementation, business-name corrections, and logo legibility
fixes across dark/light backgrounds.

| Hash | Message |
| --- | --- |
| `f1606b7` | fix: use dark background on CTA right card for clean logo rendering |
| `c637080` | fix: add outlined prop to Logo for legibility on orange background |
| `f950443` | fix: make SPRAYING colour respond to isDark prop in Logo |
| `b8f504a` | fix: replace remaining dollar signs with £ in UI copy |
| `bcecb6b` | style: implement cascade wordmark in Logo.tsx |
| `2fe0e2e` | fix: correct business name to Cheshire Spraying Specialists in CTA and Footer |
| `a3e71b5` | fix: rebalance logo wordmark so SPECIALISTS reads as part of the business name, not a footnote |
| `8b50f36` | fix: refine logo wordmark hierarchy and fix SPECIALISTS visibility on coloured backgrounds |
| `9322a6c` | content: rewrite about hero with approved brand voice |
| `7b619c0` | refactor: replace stock owner avatar with brand logo on CTA card |
| `14ef208` | refactor: replace lone hero stat with premium two-stat display |
| `d4dab64` | refactor: make work cards non-clickable (detail pages deprecated) |
| `94a857e` | refactor: remove dead /faq entry from footer resources links |
| `1004d4a` | refactor: remove fabricated stock avatars from hero, flag project count as UNVERIFIED |

---

## Phase 1c — De-fabrication & UK localisation (2026-06-23)

Removal of fabricated/stock content, real social link wiring, UK phone/currency
formatting, and verification flags for client-supplied figures.

| Hash | Message |
| --- | --- |
| `9322a6c` | content: rewrite about hero with approved brand voice *(also listed under 2a)* |
| `7b619c0` | refactor: replace stock owner avatar with brand logo on CTA card *(also listed under 2a)* |
| `14ef208` | refactor: replace lone hero stat with premium two-stat display *(also listed under 2a)* |
| `d4dab64` | refactor: make work cards non-clickable (detail pages deprecated) *(also listed under 2a)* |
| `94a857e` | refactor: remove dead /faq entry from footer resources links *(also listed under 2a)* |
| `1004d4a` | refactor: remove fabricated stock avatars from hero, flag project count as UNVERIFIED |
| `6558a59` | fix: use tel input type and UK placeholder for phone field |
| `90637bd` | fix: correct leftover plumbing alt text on contact form image |
| `ccd6ddf` | fix: use £ instead of $ for UK currency display on quote and service rates |
| `4e4fa56` | docs: flag unverified timeline years for client review |
| `d61178d` | fix: point social links to real Facebook/Instagram accounts |
| `e67ac80` | content: replace fabricated testimonials with 9 real customer reviews |

> **Verification flags still open:** timeline years (`4e4fa56`) and the "1,200+
> Projects Sprayed" stat (`1004d4a`) are flagged in-code as UNVERIFIED — confirm
> with client before any live claim.

---

## Phase 1b — Repo hygiene & CLAUDE.md (2026-06-20)

Secret untracking, npm pinning, removal of unused scaffolding systems (auth,
dashboard, blog, careers), and project convention docs.

| Hash | Message |
| --- | --- |
| `1803e06` | docs: add CLAUDE.md project conventions |
| `003cbde` | fix: wire ServiceDetail to real service data and remove placeholder copy |
| `1326301` | refactor: remove auth, dashboard, blog and career systems |
| `cc877ae` | chore: untrack secrets, pin npm, regenerate lockfile |
| `16d3c4d` | Tightened database security |
| `e5fa901` | fix: restore .env tracking - required by Lovable's hosted build for VITE_ client variables |

> **Note:** `.env` was deliberately re-tracked in `e5fa901` because Lovable's
> hosted build needs `VITE_`-prefixed client variables present. Do not untrack
> it again without checking the hosted build pipeline.

---

## Phase 1a — Rebrand from Lovable scaffold (2026-06-18 → 06-19)

Initial Lovable scaffold ("CSS 2") rebranded to Cheshire Spraying Specialists,
plus early database security work.

| Hash | Message |
| --- | --- |
| `fb7b300` | Changes |
| `e63c680` | Reverted to commit e184c9fd0f0287b79332c78137e520987b1db5e4 |
| `355dfe6` | Moved stats up on mobile |
| `edab7fa` | Changes |
| `e184c9f` | Fast Visual Edit |
| `e6f72b5` | Changes |
| `f27aa25` | Rebranded to Cheshire Spray |
| `507584b` … `4b7a36b` | Series of early scaffold "Changes" commits (Lovable editor auto-saves) |

> Early commits titled simply "Changes" are Lovable web-editor auto-saves from
> the initial build phase and carry no descriptive message.

---

## Stats at a glance

- **Total commits:** 76
- **Earliest:** `4b7a36b` — 2026-06-18 (Initial commit from Lovable/Remix)
- **Latest:** `85b1e91` — 2026-06-30 (testimonials mobile marquee speed + uniform hero headings, pushed to origin)
- **Branch:** `main` (synced with `origin/main`)

---

## Reproducing this log

```bash
# Compact one-line history (what this doc was generated from)
git log --oneline --date=short --pretty="%h | %ad | %s"

# Full hashes + authors + timestamps
git log --pretty="%H | %an | %ad | %s" --date=iso

# History for a single file
git log --oneline -- path/to/file.tsx
```
