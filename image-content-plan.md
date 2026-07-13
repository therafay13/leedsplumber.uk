# LeedsPlumber.uk image content plan

Status: implemented locally. The generated image library is ready for review.

Implementation note: the plan has since been carried out locally. The site now uses **10 cohesive GPT-generated WebP images**, reused deliberately across the active routes. The generated assets live under `public/images/plumbing/` and the original source-business imagery is no longer used by the active pages.

## Current implementation count

The pre-migration website used **23 unique non-logo image files** across the active routes. The logo is excluded.

| Area | Current unique files | Notes |
|---|---:|---|
| Homepage hero image marquee | 6 | Repeated in desktop vertical marquees and the mobile strip; the six source images are reused many times by design. |
| Homepage experience section | 1 | A separate team/service image. |
| Homepage About section | 2 | Main team/service image plus a close-up detail image. |
| Homepage Why Choose Us section | 2 | Main plumbing image plus a close-up detail image. |
| Homepage CTA | 1 | Reuses the main plumbing image from Why Choose Us. |
| Services listing and seven service detail pages | 7 | One image per service; each service image is reused on its listing card and detail page. |
| About page | 3 | Hero, mission and vision/supporting images. |
| Contact page | 1 | Contact/form-side image. |
| **Total** | **23** | Unique files, excluding the logo. |

The current seven service images are already an efficient reuse pattern: each one supports both the service index and its corresponding detail page. The homepage hero is also repeated deliberately. The main avoidable duplication is the cluster of similar team/plumbing images used by Experience, About, Why Choose Us, About page, Contact and the CTA.

## Implemented final scope

GPT image generation proved feasible at this scale. The implemented target is **10 unique generated images**, rather than commissioning 23 unrelated images:

1. **Six cohesive hero-marquee images** - reused only in the homepage hero rhythm and selected service placements.
2. **Four supporting/service images** - leak tracing, Saniflo and water systems, a finished bathroom, and a clean handover.
3. **Intentional reuse** - each service image appears on its listing card and detail page; supporting images are reused where the same visual idea supports more than one section.

This is a better balance for the current information architecture: enough variety to distinguish services and trust signals, without loading the site with a large collection of near-duplicate images.

## Proposed image briefs

### Hero marquee: six images

Use a consistent documentary/editorial style: real-looking Leeds residential settings, blue/navy workwear, restrained red detail only where naturally present, no readable brand names, no invented certifications, no exaggerated emergency drama.

1. Plumber isolating a leaking stop tap beneath a kitchen sink; tight horizontal crop.
2. Gloved hands making a careful pipe connection; close detail with clean tools.
3. Plumber inspecting a domestic boiler/radiator connection; calm residential context.
4. Technician checking a bathroom fitting beside a basin; vertical-friendly composition.
5. Drainage technician working at an exterior drain access point; no hazardous spectacle.
6. Plumber speaking with a homeowner at the doorway after assessing a problem; warm trust signal.

### Seven service images

1. Emergency plumbing — contained burst-pipe response in a kitchen or utility room, focused on isolation and repair.
2. General plumbing repairs — technician repairing an under-sink connection with tools visible but tidy.
3. Leaks, burst pipes and overflows — close inspection of a concealed leak or tank/overflow connection.
4. Blocked drains and jetting — professional drain clearance at an exterior access point, realistic protective equipment.
5. Bathrooms, taps and toilets — precise tap or toilet fitting repair in a clean finished bathroom.
6. Radiators, showers and pumps — technician working on a radiator valve or shower/pump connection in a domestic setting.
7. Saniflo and water systems — compact specialist water-system installation in a utility room or adapted space.

### Supporting and conversion images

1. Primary technician portrait/action scene — approachable local plumber working carefully in a lived-in Leeds home.
2. Repair-detail close-up — hands, fitting, adjustable wrench and protected work surface; useful for trust and craftsmanship.
3. Drainage capability scene — clean, realistic jetting or drain inspection setup; useful for drainage emphasis.
4. Finished bathroom/water-system scene — tidy, high-quality result with no luxury-resort feel.
5. Contact/CTA scene — technician and homeowner in a calm post-assessment moment, with clear dark negative space for white copy.

## GPT feasibility and recommendation

This was a manageable GPT image project. The main challenge was not the number of images; it was maintaining continuity across people, workwear, lighting, property style, camera language and the difference between emergency work and planned work.

Recommended workflow:

- Generate one visual anchor image first to establish the photographic direction.
- Use that direction as the reference for the remaining hero and supporting images.
- Generate the seven service images as a consistent series, with one clear subject per image and generous crop-safe space.
- Prefer clean, text-free images. Add all logos, phone numbers, labels and claims in the website UI rather than inside generated images.
- Review every image for plumbing realism, distorted tools/hands, unsafe practice, accidental readable text and unsupported claims before use.
- Generate desktop-first compositions but request crop-safe framing for the mobile cards and hero strip.

GPT is therefore a realistic alternative to Reve for this project, especially if the goal is a coherent commissioned-looking image system rather than literal photographs of the actual engineer or premises. If the website needs factual proof of the real team, address, vehicles, equipment or completed jobs, supplied real photography should take precedence over generated imagery for those specific claims.
